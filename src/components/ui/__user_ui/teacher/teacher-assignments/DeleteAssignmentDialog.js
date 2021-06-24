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
import {Teacher_Assignment_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";

const DeleteAssignmentDialog = ({
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
        aria-labelledby="delete-resource"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-resource">{translation.language["label.teacher.assignment.dialog.delete.assignment.title"]}</DialogTitle>
        <Divider/>
        <DialogContent>

            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.teacher.dialog.delete.fail"]}
                      messageSuccess={translation.language["message.teacher.dialog.delete.success"]}/>
            <TextField
                autoFocus
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label={translation.language["label.teacher.assignment.dialog.input"]}
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
        state: state.DeleteAssignmentDialog
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Teacher_Assignment_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, Teacher_Assignment_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Teacher_Assignment_Delete))
    }
}
export default connect(mapToState, mapDispatchToState)(DeleteAssignmentDialog)