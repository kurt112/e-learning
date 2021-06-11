import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Divider,
    TextField
} from "@material-ui/core"
import {connect} from "react-redux";
import * as actions from '../../../../../store/action/__ActionGlobal/DialogAction'

import {Teacher} from '../../../../../store/utils/Specify'
import Response from "../../../utils/Response";
const TeacherRegister = ({
                             dialog,
                             closeDialog,
                             dialogState,
                             dialogId,
                             dialogRegister,
                             registerDialogMessageClose
                         }) => {

    const RegisterEnter = (event) => {

        if(event.key === "Enter" && dialogState.id.length >0) dialogRegister()
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-teacher"
        maxWidth="md"
        fullWidth
    >
        <DialogTitle id="add-teacher"><strong>Register Teacher</strong>
        </DialogTitle>
        <Divider/>
        <DialogContent>
            <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail="Teacher Register Not Successful"
                      messageSuccess="Teacher Register Success"/>

            <TextField
                autoFocus
                variant={'outlined'}
                margin="dense"
                id="teacher-id"
                label="Enter Teacher Id"
                type="text"
                value={dialogState.id}
                fullWidth
                onChange={(event) => dialogId(event)}
                onKeyDown={event => {RegisterEnter(event)}}
            />
        </DialogContent>
        <DialogActions>
            <Button variant={'contained'} disableElevation onClick={dialogState.id.length >0?   () => dialogRegister(): null} color='primary'>
                Register
            </Button>
            <Button variant={'contained'} disableElevation onClick={() => closeDialog(Teacher)} color='secondary'>
                Cancel
            </Button>
        </DialogActions>

    </Dialog>
}
const mapStateToProps = (state) => {
    return {
      dialogState: state.AdminDialogTeacher
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Teacher)),
        dialogId: (event) => dispatch(actions.dialogId(event.target.value,Teacher)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Teacher))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherRegister)
