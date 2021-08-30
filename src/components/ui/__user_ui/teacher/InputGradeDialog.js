/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 25/08/2021, Wednesday
 **/

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";
import {baseUrl} from "../../../../store/middleware/axios";
import {useState} from "react";
import {checkStringEmpty} from "../../utils/validation";

const InputGradeDialog = ({dialog,initData,highGrade, lowGrade,handleClose, id, url}) => {
    const [grade, setGrade] = useState('')
    const submitClick = async () => {
        if(parseInt(grade) > parseInt(highGrade)){
            alert('Grade Must Not Be Exceeding in high grade')
            return
        }

        if(parseInt(grade) < parseInt(lowGrade)){
            alert('Grade Must Not Be Lower in Low grade')
            return
        }

        if(checkStringEmpty(grade)) {
            alert("Please Input Grade")
            return
        }
        const params = new URLSearchParams()
        params.append('id', id)
        params.append('grade', grade)
       await baseUrl.post(url, params).then(ignored => {})
        initData()
        alert("Grade Insert Success")
        handleClose()

    }

    return <Dialog
        open={dialog} onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={'md'}
    >
        <DialogTitle id="form-dialog-title">Place Grade</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Please input your grade for this activity activity
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                label="Enter Grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                type={"Number"}
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button variant='contained' onClick={handleClose} color="secondary">
                Cancel
            </Button>
            <Button style={{backgroundColor: '#228B22', color: 'white'}} onClick={submitClick} color="primary">
                Submit
            </Button>
        </DialogActions>
    </Dialog>
}

export default InputGradeDialog