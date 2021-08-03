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
    Grid,
    TextField
} from "@material-ui/core"

import {connect} from 'react-redux'
import * as action from '../../../../../store/action/__ActionGlobal/DialogAction'
import * as dialogAction from '../../../../../store/action/admin/Room/RoomDialogAction'
import {Room} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {useEffect} from "react";

const RegisterRoomDialog = ({
                                closeDialog,
                                dialog,
                                dialogState,
                                changeRoomName,
                                changeTimeStart,
                                changeTimeEnd,
                                registerDialogMessageClose,
                                registerDialog,
                                translation
                            }) => {

    useEffect(() => {
        changeRoomName('')
        changeTimeEnd('')
        changeTimeStart('')
    }, [])

    const clickEnter = (event) => {
        if (event.key === "Enter") registerDialog()
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-room"
        maxWidth="md"
        fullWidth
    >
        <DialogTitle id="add-room">{translation.language["label.room.dialog.add.room.title"]}</DialogTitle>
        <Divider/>
        <DialogContent>

            <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                      messageFail={translation.language["message.room.dialog.create.fail"]}
                      messageSuccess={translation.language["message.room.dialog.create.success"]}/>

            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    <TextField
                        error={dialogState.roomNameError}
                        helperText={dialogState.roomNameErrorMessage}
                        autoFocus
                        margin="dense"
                        label={translation.language["label.global.room.name"]}
                        value={dialogState.roomName}
                        onChange={(event) => changeRoomName(event.target.value)}
                        type="text"
                        fullWidth
                        variant="outlined"
                        onKeyDown={(event) => clickEnter(event)}

                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        margin="dense"
                        InputLabelProps={{shrink: true}}
                        label={translation.language["label.global.time.start"]}
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
                        InputLabelProps={{shrink: true}}
                        label={translation.language["label.global.time.end"]}
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
                {translation.language["label.button.save"]}
            </Button>
            <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                {translation.language["label.button.back"]}
            </Button>
        </DialogActions>
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