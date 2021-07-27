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
import {Student} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {useEffect} from "react";

const RegisterStudentDialog = ({
                                   dialog,
                                   student,
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
        <DialogTitle id="add-student">{translation.language["label.student.dialog.register.title"]}</DialogTitle>
        <Divider/>
        <DialogContent>
            <Response dialogState={student} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.student.dialog.register.fail"]}
                      messageSuccess={translation.language["message.student.dialog.register.success"]}/>
            <TextField
                error={student.errorId || student.error}
                helperText={student.errorMessageId}
                autoFocus
                margin="dense"
                label={translation.language["label.student.dialog.input.lrn"]}
                type="text"
                fullWidth
                value={student.id}
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
        student: state.AdminStudentDialog
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Student)),
        dialogId: (data) => dispatch(actions.dialogId(data, Student)),
        registerDialogMessageClose: (event) => dispatch(actions.registerDialogMessageClose(event, Student))
    }
}


export default connect(mapToState, mapDispatchToState)(RegisterStudentDialog)