import {useState} from "react";
import {graphQlRequestAsync} from "../../../../../store/middleware/utils/HttpRequest";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField} from "@material-ui/core";
import {getRoomShiftClassBasic} from "../../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/RoomShiftClassProfile";
import UpdateClassDialog from "./UpdateClassDialog";
import RoomClassStudentTransferDialog from "./RoomClassStudentTransferDialog";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 20/07/2021, Tuesday
 **/

const FindClassDialog = ({
                             translation,
                             dialog,
                             closeDialog,
                             setData,
                             reInitState,
                             update,
                             addStudent
                         }) => {

    const [id, setId] = useState('')
    const [Class, setClass] = useState(null)

    const getClass = () => {
        graphQlRequestAsync(getRoomShiftClassBasic(id)).then(roomClass => {

            if (roomClass.data.data.roomShiftClass !== null) {
                setId('')
                setData(roomClass.data.data.roomShiftClass)
                setClass(roomClass.data.data.roomShiftClass)
            } else alert("Class Not Found")
        })
    }

    const closeUpdate = () => {
        setClass(null)
        reInitState()
    }

    const closeFindDialog = () => {
        reInitState()
        closeDialog()
    }

    const closeAddStudent = () => {
        setClass(null)
    }

    const clickEnter = (event) => {
        if (event.key === "Enter") getClass()
    }


    return Class === null ? <Dialog
        open={dialog}
        onClose={closeFindDialog}
        aria-labelledby="find-subject"
        maxWidth="md"
        fullWidth
    >
        <DialogTitle
            id="find-subject">{translation.language["label.room.dialog.find.room.class.title"]}</DialogTitle>
        <Divider/>
        <br/>
        <DialogContent>
            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    <TextField autoFocus
                               onKeyDown={e => clickEnter(e)}
                               value={id}
                               margin={'dense'}
                               variant={'outlined'} fullWidth
                               onChange={event => setId(event.target.value)}
                               label={translation.language["label.room.class.dialog.input"]}/>
                </Grid>
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button variant={'contained'} disableElevation onClick={getClass}
                    color='primary'>
                {translation.language["label.global.find"]}
            </Button>
            <Button variant={'contained'} disableElevation onClick={closeFindDialog} color='secondary'>
                {translation.language["label.button.back"]}
            </Button>
        </DialogActions>
    </Dialog> : update === true ?
        <UpdateClassDialog translation={translation} closeDialog={closeUpdate} dialog={update}/> :
        <RoomClassStudentTransferDialog
            subjectName={Class.subject.subjectName}
            closeDialog={closeAddStudent}
            open={addStudent}
            translation={translation}
            studentClass={Class.students}
            classID={Class.id}
        />
}
export default FindClassDialog