import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, Divider,
    TextField
} from "@material-ui/core"
import {connect} from 'react-redux'
import * as actions from '../../../../../store/action/__ActionGlobal/DialogAction'
import {Teacher_Exams_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
// import {DeleteAssignmentFail, DeleteAssignmentSuccess} from "../../../../../__Messages/teacher/TeacherAssignmentMessage";

const DeleteExamsDialog = ({
                                           dialog,
                                           state,
                                           closeDialog,
                                           dialogId,
                                           registerDialogMessageClose,
                                           dialogRegister
                                       }) => {

    const RegisterEnter = (event) => {
        if (event.key === "Enter" && state.id.length > 0) dialogRegister()
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="delete-exam"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-exam">Delete Exam</DialogTitle>
        <Divider/>
        <DialogContent>
            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={'Exam Delete Not Success'}
                      messageSuccess={'Exam Delete Success'}/>
            <TextField
                autoFocus
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label="Enter Exam Code"
                type="text"
                fullWidth
                onChange={(event) => dialogId(event.target.value)}
                onKeyDown={event => {
                    RegisterEnter(event)
                }}
            />
        </DialogContent>
        <DialogActions>
            <Button variant={'contained'} disableElevation onClick={dialogRegister} color='secondary'>
                Delete
            </Button>
            <Button variant={'contained'} disableElevation onClick={closeDialog} color='primary'>
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
}

const mapToState = (state) => {
    return {
        state: state.TeacherExamsDeleteDialog
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Teacher_Exams_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, Teacher_Exams_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Teacher_Exams_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteExamsDialog)