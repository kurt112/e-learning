import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    makeStyles,
    TextField
} from "@material-ui/core"

import {connect} from 'react-redux'
import * as action from '../../../../../store/action/__ActionGlobal/AdminDialogAction'
import * as dialogAction from '../../../../../store/action/admin/Room/RoomDialogAction'
import {Room} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";

const formStyle = makeStyles(() => ({
    root: {
        "& select": {
            paddingTop: 10,
        }
    },
    control: {
        marginTop: 8,

    }
}))


const RoomDialogRegister = ({
                                closeDialog,
                                dialog,
                                dialogState,
                                changeRoomName,
                                changeTimeStart,
                                changeTimeEnd,
                                registerDialogMessageClose,
                                registerDialog
                            }) => {

    const form = formStyle()


    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-student"
    >
        <form noValidate className={form.root}>
            <DialogTitle id="add-student">Register Room Shift</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of L
                </DialogContentText>

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
                <Button onClick={registerDialog} color='primary'>
                    Register
                </Button>
                <Button onClick={closeDialog} color='secondary'>
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


        changeRoomName: (event) => dispatch(dialogAction.roomNameChange(event)),
        changeTimeStart: (event) => dispatch(dialogAction.roomTimeStartChange(event)),
        changeTimeEnd: (event) => dispatch(dialogAction.roomTimeEndChange(event)),

        registerDialogMessageClose: (event) => dispatch(action.registerDialogMessageClose(event, Room)),
        registerDialog: () => dispatch(action.dialogRegister(Room))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomDialogRegister)