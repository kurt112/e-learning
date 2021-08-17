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
import {Admin_Create, Student} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {useEffect} from "react";

const CreateAdminDialog = ({
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
        <DialogTitle id="add-student">{translation.language["label.global.create.admin"]}</DialogTitle>
        <Divider/>
        <DialogContent>
            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.admin.dialog.create.fail"]}
                      messageSuccess={translation.language["message.admin.dialog.create.success"]}/>
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
            <Button variant={'contained'} disableElevation onClick={dialogRegister} color='primary'>
                {translation.language["label.button.save"]}
            </Button>
            <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                {translation.language["label.button.back"]}
            </Button>
        </DialogActions>
    </Dialog>
}

const mapToState = (state) => {
    return {
        state: state.CreateAdmin
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Admin_Create)),
        dialogId: (data) => dispatch(actions.dialogId(data, Admin_Create)),
        registerDialogMessageClose: (event) => dispatch(actions.registerDialogMessageClose(event, Admin_Create))
    }
}


export default connect(mapToState, mapDispatchToState)(CreateAdminDialog)