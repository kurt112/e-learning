/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 17/08/2021, Tuesday
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
import {Admin_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {useEffect} from "react";

const DeleteAdminDialog = ({
                                   dialog,
                                   state,
                                   closeDialog,
                                   dialogId,
                                   registerDialogMessageClose,
                                   dialogRegister,
                                   translation
                               }) => {

    const changeId = (data) => {
        dialogId(data)
    }

    useEffect(() => {
        changeId('')
    }, [dialog])

    const RegisterEnter = (event) => {
        if (event.key === "Enter") dialogRegister()
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-student"
        maxWidth="md"
        fullWidth
    >
        <DialogTitle id="add-student">{translation.language["label.global.delete.admin"]}</DialogTitle>
        <Divider/>
        <DialogContent>
            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.admin.dialog.delete.fail"]}
                      messageSuccess={translation.language["message.admin.dialog.delete.success"]}/>
            <TextField
                error={state.errorId || state.error}
                helperText={state.errorMessageId}
                autoFocus
                margin="dense"
                label={translation.language["label.global.input.email"]}
                type="text"
                fullWidth
                value={state.id}
                onChange={(event) => changeId(event.target.value)}
                onKeyDown={event => {
                    RegisterEnter(event)
                }}
                variant={"outlined"}
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
        state: state.DeleteAdmin
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Admin_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, Admin_Delete)),
        registerDialogMessageClose: (event) => dispatch(actions.registerDialogMessageClose(event, Admin_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteAdminDialog)