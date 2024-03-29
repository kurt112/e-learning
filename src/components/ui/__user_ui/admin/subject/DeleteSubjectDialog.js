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
import {Subject_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {useEffect} from "react";
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
        if (event.key === "Enter") dialogRegister()
    }

    const changeId = (data) => {
        dialogId(data)
    }

    useEffect(() => {
        changeId('')
    }, [dialog])

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="delete-subject"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-subject">{translation.language["label.subject.dialog.delete.title"]}</DialogTitle>
        <Divider/>
        <DialogContent>
            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.subject.dialog.delete.fail"]}
                      messageSuccess={translation.language["message.subject.dialog.delete.success"]}/>
            <TextField
                error={state.errorId || state.error}
                helperText={state.errorMessageId}
                autoFocus
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label={translation.language["label.subject.dialog.input.code"]}
                type="text"
                fullWidth
                onChange={(event) => changeId(event.target.value)}
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
        state: state.DeleteDialogSubject
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Subject_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, Subject_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Subject_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteRoomShiftDialog)