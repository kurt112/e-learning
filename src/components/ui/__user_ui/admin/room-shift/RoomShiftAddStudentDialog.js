
import {
    autoCompleteRoomShift
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle, Divider,
    Grid,
} from "@material-ui/core";
import AutoComplete from "../../../utils/autoComplete/AutoComplete";
import {
    changeText,
    TwoFilterOption,
    twoOptionLabel,
    twoOptionSelected
} from "../../../utils/autoComplete/autoCompleteAction";
import {Fragment, useState} from "react";
import RoomShiftAddStudentTransfer from "./RoomShiftAddStudentTransferDialog";

const RoomShiftAddStudentDialog = ({closeDialog, dialog,translation}) => {

    const [openRoomShift, setOpenRoomShift] = useState(false)
    const [roomShiftOptions, setRoomShiftOptions] = useState([])
    const [roomShiftLoading, setRoomShiftLoading] = useState(false)
    const [roomShiftText, setRoomShiftText] = useState('')
    const [id,setId] = useState('')

    const OutputRoomShift = (event, value) => {
        setId(value  === null? '': value[2].toString())
    }

    const [transfer, setTransfer] = useState(false);

    const closeTransfer = () => {
        setTransfer( false)
    }

    const openTransfer = () => {
        setTransfer(true)
    }

    return <Fragment>
        {
            id.length === 0? null:  <RoomShiftAddStudentTransfer shiftID={id} translation={translation} open={transfer} closeDialog={closeTransfer}/>
        }
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
                                autoFocus={true }
                                open={openRoomShift}
                                setOpen={setOpenRoomShift}
                                filterOptions={TwoFilterOption}
                                options={roomShiftOptions}
                                loading={roomShiftLoading}
                                InputText={roomShiftText}
                                changeAutoComplete={OutputRoomShift}
                                changeText={(value) => changeText(value, setRoomShiftText, setRoomShiftLoading, setRoomShiftOptions, autoCompleteRoomShift)}
                                noOptionText={translation.language["label.room.shift.dialog.find.input.search"]}
                                label={translation.language["label.global.room.shift"]}
                                optionLabel={twoOptionLabel}
                                optionSelected={twoOptionSelected}

                            />
                        </Grid>


                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button variant={'contained'} disableElevation onClick={id.length === 0 ?null: openTransfer} color='primary'>
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

export default RoomShiftAddStudentDialog