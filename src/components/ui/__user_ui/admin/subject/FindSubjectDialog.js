/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/

import {useState} from "react"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField} from "@material-ui/core"
import {graphQlRequestAsync} from "../../../../../store/middleware/utils/HttpRequest";
import {getSubjectBasic} from "../../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/SubjectProfile";
import UpdateSubjectDialog from "./UpdateSubjectDialog";

const FindSubjectDialog = ({
                               translation,
                               dialog,
                               closeDialog,
                               setData,
                               reInitState
                           }) => {

    const [code, setCode] = useState('')
    const [update, setUpdate] = useState(false)

    const getSubject = () => {
        graphQlRequestAsync(getSubjectBasic(code)).then(subject => {

            if (subject.data.data.getSubject !== null) {
                setCode('')
                setData(subject.data.data.getSubject)
                setUpdate(true)
            } else alert("Subject Not Found")
        })
    }

    const closeUpdate = () => {
        setUpdate(false)
    }

    const closeFindDialog = () => {
        reInitState()
        closeDialog()
    }

    const clickEnter = (event) => {
        if (event.key === "Enter") getSubject()
    }


    return update === false ? <Dialog
        open={dialog}
        onClose={closeFindDialog}
        aria-labelledby="find-subject"
        maxWidth="md"
        fullWidth
    >
        <DialogTitle
            id="find-subject">{translation.language["label.curriculum.dialog.find.curriculum.title"]}</DialogTitle>
        <Divider/>
        <br/>
        <DialogContent>
            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    <TextField autoFocus
                               onKeyDown={(e) => clickEnter(e)}
                               value={code}
                               margin={'dense'}
                               variant={'outlined'} fullWidth
                               onChange={event => setCode(event.target.value)}
                               label={translation.language["label.subject.dialog.input.code"]}/>
                </Grid>
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button variant={'contained'} disableElevation onClick={getSubject}
                    color='primary'>
                {translation.language["label.global.find"]}
            </Button>
            <Button variant={'contained'} disableElevation onClick={closeFindDialog} color='secondary'>
                {translation.language["label.button.back"]}
            </Button>
        </DialogActions>
    </Dialog> : <UpdateSubjectDialog translation={translation} closeDialog={closeUpdate} dialog={update}/>
}

export default FindSubjectDialog