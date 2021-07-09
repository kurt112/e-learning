import {Fragment, useState} from "react";
import RoomShiftAddStudentTransfer from "../room-shift/RoomShiftAddStudentTransferDialog";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid} from "@material-ui/core";
import AutoComplete from "../../../utils/autoComplete/AutoComplete";
import {
    changeText, filterOption, optionLabel, optionSelected,
    TwoFilterOption,
    twoOptionLabel,
    twoOptionSelected
} from "../../../utils/autoComplete/autoCompleteAction";
import {
    autoCompleteRoom,
    autoCompleteRoomShift
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

const FindRoomDialog = ({
                            translation,
                            dialog,
                            closeDialog
                        }) => {
    const [openRoomName, setOpenRoomName] = useState(false);
    const [roomOptions, setRoomOptions] = useState([]);
    const [loading, setLoading] = useState(false)
    const [roomText, setRoomText] = useState('')
    const OutputRoom = (event,value) => {
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
                            <AutoComplete
                                autoFocus={true}
                                open={openRoomName}
                                setOpen={setOpenRoomName}
                                filterOptions={filterOption}
                                options={roomOptions}
                                loading={loading}
                                InputText={roomText}
                                changeAutoComplete={OutputRoom}
                                changeText={(value) => changeText(value, setRoomText, setLoading, setRoomOptions, autoCompleteRoom)}
                                noOptionText={translation.language["label.room.shift.dialog.create.input.room.name"]}
                                label={translation.language["label.global.room"]}
                                optionLabel={optionLabel}
                                optionSelected={optionSelected}
                            />
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