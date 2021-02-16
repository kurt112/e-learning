import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core"
import {connect} from 'react-redux'
import * as actions from '../../../../../store/action/admin/__ActionGlobal/AdminActionDialog'
import {Student} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";

const StudentRegisterDialog = ({
                                   dialog,
                                   student,
                                   closeDialog,
                                   dialogId,
                                   registerDialogMessageClose,
                                   dialogRegister
                               }) => {

    const RegisterEnter = (event) => {
        if (event.key === "Enter" && student.id.length > 0) dialogRegister()
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-student"
    >
        <DialogTitle id="add-student">Register Student</DialogTitle>
        <DialogContent>
            <DialogContentText>
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of L
            </DialogContentText>
           <Response dialogState={student} registerDialogMessageClose={registerDialogMessageClose}
                     messageFail="Student Register Not Successful"
                     messageSuccess="Student Register Success"/>
            <TextField
                autoFocus
                margin="dense"
                id="lrn"
                label="Enter Lrn"
                type="text"
                fullWidth
                onChange={(event) => dialogId(event)}
                onKeyDown={event => {
                    RegisterEnter(event)
                }}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={dialogRegister} color='primary'>
                Register
            </Button>
            <Button onClick={closeDialog} color='secondary'>
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
}

const mapToState = (state) => {
    return {
        student: state.AdminStudentDialog
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Student)),
        dialogId: (event) => dispatch(actions.dialogId(event.target.value, Student)),
        registerDialogMessageClose: (event) => dispatch(actions.registerDialogMessageClose(event, Student))
    }
}


export default connect(mapToState, mapDispatchToState)(StudentRegisterDialog)