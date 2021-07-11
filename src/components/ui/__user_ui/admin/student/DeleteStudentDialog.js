/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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
import {Student_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";

const DeleteRoomShiftDialog = ({
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
        aria-labelledby="delete-student"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-student">{translation.language["label.global.student.delete"]}</DialogTitle>
        <Divider/>
        <DialogContent>

            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.student.dialog.delete.fail"]}
                      messageSuccess={translation.language["message.student.dialog.delete.success"]}/>
            <TextField
                autoFocus
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label={translation.language["label.student.dialog.input.lrn"]}
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
        state: state.DeleteDialogStudent
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Student_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, Student_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Student_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteRoomShiftDialog)