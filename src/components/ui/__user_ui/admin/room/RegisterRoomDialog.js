import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Divider,
    Grid,
    TextField
} from "@material-ui/core"

import {connect} from 'react-redux'
import * as action from '../../../../../store/action/__ActionGlobal/DialogAction'
import * as dialogAction from '../../../../../store/action/admin/Room/RoomDialogAction'
import {Room} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";

const RegisterRoomDialog = ({
                                closeDialog,
                                dialog,
                                dialogState,
                                changeRoomName,
                                changeTimeStart,
                                changeTimeEnd,
                                registerDialogMessageClose,
                                registerDialog
                            }) => {

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-room"
        maxWidth="md"
        fullWidth
    >
        <form noValidate >
            <DialogTitle id="add-room">Register Room </DialogTitle>
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
                            id="room-name"
                            label="Room Name"
                            value={dialogState.roomName}
                            onChange={(event) => changeRoomName(event.target.value)}
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            margin="dense"
                            id="time-start"
                            label="Time Start"
                            value={dialogState.timeStart}
                            onChange={(event) => changeTimeStart(event.target.value)}
                            type="time"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            margin="dense"
                            id="time-end"
                            label="Time End"
                            value={dialogState.timeEnd}
                            onChange={(event) => changeTimeEnd(event.target.value)}
                            type="time"
                            fullWidth
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRoomDialog)