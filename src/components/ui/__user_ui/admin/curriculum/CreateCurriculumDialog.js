import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid, TextareaAutosize,
    TextField
} from "@material-ui/core"

import {connect} from 'react-redux'
import * as action from '../../../../../store/action/__ActionGlobal/DialogAction'
import * as dialogAction from '../../../../../store/action/admin/Room/RoomDialogAction'
import {Room} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import Divider from "@material-ui/core/Divider";

const CreateCurriculumDialog = ({
                                closeDialog,
                                dialog,
                                dialogState,
                                changeRoomName,
                                changeTimeStart,
                                registerDialogMessageClose,
                                registerDialog
                            }) => {

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-curriculum"
        maxWidth="md"
        fullWidth
    >
        <form noValidate >
            <DialogTitle id="add-curriculum">Create Curriculum</DialogTitle>
            <Divider/>
            <DialogContent>

                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail="Room Register Not Successful"
                          messageSuccess="Register Room Success"/>

                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Curriculum Name"
                            value={dialogState.roomName}
                            onChange={(event) => changeRoomName(event.target.value)}
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <p style={{margin: 0}}>Enter Curriculum Description:</p>
                        <TextareaAutosize
                            rows={12}
                            style={{width: '100%'}}
                            margin="dense"
                            value={dialogState.timeStart}
                            onChange={(event) => changeTimeStart(event.target.value)}

                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} disableElevation onClick={registerDialog} color='primary'>
                    Register
                </Button>
                <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                    Cancel
                </Button>
            </DialogActions>
        </form>
    </Dialog>
}

const mapStateToProps = (state) => {
    return {
        dialogState: state.AdminRoomDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {


        changeRoomName: (data) => dispatch(dialogAction.roomNameChange(data)),
        changeTimeStart: (data) => dispatch(dialogAction.roomTimeStartChange(data)),
        changeTimeEnd: (data) => dispatch(dialogAction.roomTimeEndChange(data)),

        registerDialogMessageClose: () => dispatch(action.registerDialogMessageClose(Room)),
        registerDialog: () => dispatch(action.dialogRegister(Room))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCurriculumDialog)