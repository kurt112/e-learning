import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@material-ui/core"
import {connect} from 'react-redux'
import * as actions from '../../../../../store/action/__ActionGlobal/DialogAction'
import {Teacher_Quiz_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {DeleteAssignmentFail, DeleteAssignmentSuccess} from "../../../../../__Messages/teacher/TeacherAssignmentMessage";
import {TeacherQuizDeleteDialog} from "../../../../../store/reducers/Teacher";

const DeleteQuizDialog = ({
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
        aria-labelledby="delete-quiz"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-quiz">Delete Quiz</DialogTitle>
        <DialogContent>

            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={DeleteAssignmentFail}
                      messageSuccess={DeleteAssignmentSuccess}/>
            <TextField
                autoFocus
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label="Enter Quiz Code"
                type="text"
                fullWidth
                onChange={(event) => dialogId(event.target.value)}
                onKeyDown={event => {
                    RegisterEnter(event)
                }}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={dialogRegister} color='secondary'>
                Delete
            </Button>
            <Button onClick={closeDialog} color='primary'>
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
}

const mapToState = (state) => {
    return {
        state: state.TeacherQuizDeleteDialog
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Teacher_Quiz_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, Teacher_Quiz_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Teacher_Quiz_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteQuizDialog)