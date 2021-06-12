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
import {Curriculum_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {
    DeleteAssignmentFail,
    DeleteAssignmentSuccess
} from "../../../../../__Messages/teacher/TeacherAssignmentMessage";
import Divider from "@material-ui/core/Divider";

const DeleteCurriculumDialog = ({
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
        aria-labelledby="delete-room"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-room">Delete Room</DialogTitle>
        <Divider/>
        <DialogContent>

            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={DeleteAssignmentFail}
                      messageSuccess={DeleteAssignmentSuccess}/>
            <TextField
                autoFocus
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label="Enter Curriculum Code"
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
        state: state.DeleteCurriculum
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Curriculum_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, Curriculum_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Curriculum_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteCurriculumDialog)