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
import {RoomShift_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {
    DeleteAssignmentFail,
    DeleteAssignmentSuccess
} from "../../../../../__Messages/teacher/TeacherAssignmentMessage";

const DeleteRoomShiftDialog = ({
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
        aria-labelledby="delete-room-shift"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-room-shift">Delete Room Shift</DialogTitle>
        <DialogContent>

            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={DeleteAssignmentFail}
                      messageSuccess={DeleteAssignmentSuccess}/>
            <TextField
                autoFocus
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label="Enter Assignment Code"
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
        state: state.DeleteDialogRoomShift
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(RoomShift_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, RoomShift_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(RoomShift_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteRoomShiftDialog)