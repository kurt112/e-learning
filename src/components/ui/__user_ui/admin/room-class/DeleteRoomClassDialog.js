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
import {RoomShiftClass_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";

const DeleteRoomDialog = ({
                              dialog,
                              state,
                              closeDialog,
                              dialogId,
                              registerDialogMessageClose,
                              dialogRegister,
    translation
                          }) => {

    const RegisterEnter = (event) => {
        if (event.key === "Enter" && state.id.length > 0) dialogRegister()
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="delete-room-class"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-room-class">{translation.language["label.room.class.dialog.delete.title"]}</DialogTitle>
        <Divider/>
        <DialogContent>

            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.room.class.dialog.delete.fail"]}
                      messageSuccess={translation.language["message.room.class.dialog.delete.success"]}/>
            <TextField
                autoFocus
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label={translation.language["label.room.class.dialog.delete.input"]}
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
                {translation.language["label.button.delete"]}
            </Button>
            <Button variant={'contained'} disableElevation onClick={closeDialog} color='primary'>
                {translation.language["label.button.back"]}
            </Button>
        </DialogActions>
    </Dialog>
}

const mapToState = (state) => {
    return {
        state: state.DeleteDialogClass
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(RoomShiftClass_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, RoomShiftClass_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(RoomShiftClass_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteRoomDialog)