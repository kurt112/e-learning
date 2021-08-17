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
import {connect} from "react-redux";
import * as actions from '../../../../../store/action/__ActionGlobal/DialogAction'

import {Teacher} from '../../../../../store/utils/Specify'
import Response from "../../../utils/Response";
import {useEffect} from "react";

const TeacherRegister = ({
                             dialog,
                             closeDialog,
                             state,
                             dialogId,
                             dialogRegister,
                             registerDialogMessageClose,
                             translation
                         }) => {

    const changeId = (data) => {
        dialogId(data)
    }

    useEffect(() => {
        changeId('')
    }, [dialog])

    const   RegisterEnter = (event) => {
        if (event.key === "Enter") dialogRegister()
    }
    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-teacher"
        maxWidth="md"
        fullWidth
    >
        <DialogTitle id="add-teacher">
            {translation.language["label.teacher.dialog.add.title"]}
        </DialogTitle>
        <Divider/>
        <DialogContent>
            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.teacher.dialog.register.fail"]}
                      messageSuccess={translation.language["message.teacher.dialog.register.success"]}/>

            <TextField
                error={state.errorId || state.error}
                helperText={state.errorMessageId}
                autoFocus
                variant={'outlined'}
                margin="dense"
                label={translation.language["label.teacher.dialog.add.input.id"]}
                type="text"
                value={state.id}
                fullWidth
                onChange={(event) => changeId(event.target.value)}
                onKeyDown={event => {
                    RegisterEnter(event)
                }}
            />
        </DialogContent>
        <DialogActions>
            <Button variant={'contained'} disableElevation
                    onClick={dialogRegister} color='primary'>
                {translation.language["label.button.save"]}
            </Button>
            <Button variant={'contained'} disableElevation onClick={() => closeDialog(Teacher)} color='secondary'>
                {translation.language["label.button.back"]}
            </Button>
        </DialogActions>

    </Dialog>
}
const mapStateToProps = (state) => {
    return {
        state: state.AdminDialogTeacher
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Teacher)),
        dialogId: (data) => dispatch(actions.dialogId(data, Teacher)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Teacher))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherRegister)
