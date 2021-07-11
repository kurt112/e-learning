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
import {Teacher_Exams_Delete} from "../../../../../store/utils/Specify"
import Response from "../../../utils/Response"

const DeleteExamsDialog = ({
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
        aria-labelledby="delete-exam"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-exam">{translation.language["label.teacher.dialog.input"]}</DialogTitle>
        <Divider/>
        <DialogContent>
            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.teacher.dialog.exam.delete.fail"]}
                      messageSuccess={translation.language["message.teacher.dialog.exam.delete.success"]}/>
            <TextField
                autoFocus
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label={translation.language["label.teacher.exam.dialog.input"]}
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
        state: state.TeacherExamsDeleteDialog
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Teacher_Exams_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, Teacher_Exams_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Teacher_Exams_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteExamsDialog)