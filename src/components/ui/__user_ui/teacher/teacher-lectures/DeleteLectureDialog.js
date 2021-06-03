import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@material-ui/core"
import {connect} from 'react-redux'
import * as actions from '../../../../../store/action/__ActionGlobal/AdminDialogAction'
import {Teacher_Lecture_Delete} from "../../../../../store/utils/Specify"
import Response from "../../../utils/Response"
import {DeleteLectureFail, DeleteLectureSuccess} from "../../../../../__Messages/teacher/TeacherLectureMessages";

const DeleteLectureDialog = ({
                                 state,
                                 closeDialog,
                                 dialog,
                                 dialogId,
                                 registerDialogMessageClose,
                                 dialogRegister
                             }) => {


    const RegisterEnter = (event) => {
        if (event.key === "Enter" && state.id.length > 0) dialogRegister()
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="delete-lecture"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-lecture">Delete Lecture</DialogTitle>
        <DialogContent>

            <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={DeleteLectureFail}
                      messageSuccess={DeleteLectureSuccess}/>
            <TextField
                autoFocus
                value={state.id}
                margin="dense"
                variant={'outlined'}
                label="Enter Lecture Code"
                type="text"
                fullWidth
                onChange={(event) => dialogId(event.target.value)}
                onKeyDown={event => {
                    RegisterEnter(event)
                }}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={dialogRegister} color='secondary'>
                Delete
            </Button>
            <Button onClick={closeDialog} color='primary'>
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
}

const mapToState = (state) => {
    return {
        state: state.TeacherLectureDeleteDialog
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Teacher_Lecture_Delete)),
        dialogId: (data) => dispatch(actions.dialogId(data, Teacher_Lecture_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Teacher_Lecture_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteLectureDialog)