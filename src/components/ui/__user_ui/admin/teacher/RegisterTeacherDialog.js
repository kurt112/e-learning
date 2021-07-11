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

const TeacherRegister = ({
                             dialog,
                             closeDialog,
                             dialogState,
                             dialogId,
                             dialogRegister,
                             registerDialogMessageClose,
                             translation
                         }) => {

    const   RegisterEnter = (event) => {

        if (event.key === "Enter" && dialogState.id.length > 0) dialogRegister()
    }
    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-teacher"
        maxWidth="md"
        fullWidth
    >
        <DialogTitle id="add-teacher"><strong>{translation.language["label.teacher.dialog.add.title"]}</strong>
        </DialogTitle>
        <Divider/>
        <DialogContent>
            <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.teacher.dialog.delete.fail"]}
                      messageSuccess={translation.language["message.teacher.dialog.delete.fail"]}/>

            <TextField
                autoFocus
                variant={'outlined'}
                margin="dense"
                label={translation.language["label.teacher.dialog.add.input.id"]}
                type="text"
                value={dialogState.id}
                fullWidth
                onChange={(event) => dialogId(event)}
                onKeyDown={event => {
                    RegisterEnter(event)
                }}
            />
        </DialogContent>
        <DialogActions>
            <Button variant={'contained'} disableElevation
                    onClick={dialogState.id.length > 0 ? () => dialogRegister() : null} color='primary'>
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
        dialogState: state.AdminDialogTeacher
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Teacher)),
        dialogId: (event) => dispatch(actions.dialogId(event.target.value, Teacher)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Teacher))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherRegister)
