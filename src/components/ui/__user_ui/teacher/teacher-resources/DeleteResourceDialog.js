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
import {Teacher_Resource_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {DeleteResourceFail, DeleteResourceSuccess} from "../../../../../__Messages/teacher/TeacherResourceMessage";
const DeleteResource = ({
                            dialog,
                            resource,
                            closeDialog,
                            dialogId,
                            registerDialogMessageClose,
                            dialogRegister
                        }) => {

    const RegisterEnter = (event) => {
        if (event.key === "Enter" && resource.id.length > 0) dialogRegister()
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="delete-resource"
        fullWidth
        maxWidth={"md"}
    >
        <DialogTitle id="delete-resource">Delete Resource</DialogTitle>
        <DialogContent>

            <Response dialogState={resource} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={DeleteResourceFail}
                      messageSuccess={DeleteResourceSuccess}/>
            <TextField
                autoFocus
                value={resource.id}
                margin="dense"
                variant={'outlined'}
                label="Enter Document Code"
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
        resource: state.DeleteResource
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Teacher_Resource_Delete)),
        dialogId: (event) => dispatch(actions.dialogId(event.target.value, Teacher_Resource_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Teacher_Resource_Delete))
    }
}


export default connect(mapToState, mapDispatchToState)(DeleteResource)