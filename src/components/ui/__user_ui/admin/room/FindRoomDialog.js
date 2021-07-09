import {Fragment, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid} from "@material-ui/core";
import RoomAutoComplete from "../../../utils/autoComplete/ui/RoomAutoComplete";

const FindRoomDialog = ({
                            translation,
                            dialog,
                            closeDialog
                        }) => {
    const OutputRoom = (event, value) => {
        value = value === null ? '' : value[1]
        console.log(value)
        // changeRoomName(value)
    }
    return <Fragment>
        {/*{*/}
        {/*    id.length === 0 ? null : <RoomShiftAddStudentTransfer shiftID={id} translation={translation} open={transfer}*/}
        {/*                                                          closeDialog={closeTransfer}/>*/}
        {/*}*/}
        <Dialog
            open={dialog}
            onClose={closeDialog}
            aria-labelledby="add-student"
            maxWidth="lg"
            fullWidth
        >
            <form noValidate>
                <DialogTitle id="add-student">{translation.language["label.room.shift.dialog.find.title"]}</DialogTitle>
                <Divider/>
                <br/>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item md={12} xs={12}>
                            <RoomAutoComplete
                                autoFocus={true}
                                output={OutputRoom}
                                translation={translation}/>
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button variant={'contained'} disableElevation onClick={id.length === 0 ? null : openTransfer}
                            color='primary'>
                        {translation.language["label.global.find"]}
                    </Button>
                    <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                        {translation.language["label.button.back"]}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    </Fragment>

}

export default FindRoomDialog