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
    DialogTitle,
    TextField
} from "@material-ui/core"
import {connect} from 'react-redux'
import * as actions from '../../../../../store/action/__ActionGlobal/DialogAction'
import {Curriculum_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import Divider from "@material-ui/core/Divider";
import {useEffect} from "react";

const DeleteCurriculumDialog = ({
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
        aria-labelledby="delete-room"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-room">{translation.language["label.curriculum.dialog.delete.title"]}</DialogTitle>
        <Divider/>
        <DialogContent>

            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.curriculum.dialog.delete.fail"]}
                      messageSuccess={translation.language["message.curriculum.dialog.delete.success"]}/>
            <TextField
                autoFocus
                error={state.errorId || state.error}
                helperText={state.errorMessageId}
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label={translation.language["label.curriculum.dialog.input.enter.code"]}
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