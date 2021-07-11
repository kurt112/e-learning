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
import {Teacher_Resource_Delete} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
const DeleteResource = ({
                            dialog,
                            resource,
                            closeDialog,
                            dialogId,
                            registerDialogMessageClose,
                            dialogRegister,
                            translation
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
        <DialogTitle id="delete-resource">{translation.language["label.teacher.resource.dialog.delete.resource.title"]}</DialogTitle>
        <Divider/>
        <DialogContent>
            <Response dialogState={resource} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.teacher.dialog.delete.fail"]}
                      messageSuccess={translation.language["message.teacher.dialog.delete.success"]}/>
            <TextField
                autoFocus
                value={resource.id}
                margin="dense"
                variant={'outlined'}
                label={translation.language["label.teacher.resource.dialog.input.code"]}
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
        resource: state.DeleteResource
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        dialogRegister: () => dispatch(actions.dialogRegister(Teacher_Resource_Delete)),
        dialogId: (event) => dispatch(actions.dialogId(event, Teacher_Resource_Delete)),
        registerDialogMessageClose: () => dispatch(actions.registerDialogMessageClose(Teacher_Resource_Delete))
    }
}
export default connect(mapToState, mapDispatchToState)(DeleteResource)