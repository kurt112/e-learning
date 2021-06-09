
import {
    autoCompleteRoomShift
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
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

const RoomShiftAddStudentDialog = ({closeDialog, dialog}) => {

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
            id.length === 0? null:  <RoomShiftAddStudentTransfer shiftID={id} open={transfer} closeDialog={closeTransfer}/>
        }
        <Dialog
            open={dialog}
            onClose={closeDialog}
            aria-labelledby="add-student"
            maxWidth="lg"
            fullWidth
        >
            <form noValidate>
                <DialogTitle id="add-student">Enter Grade Section</DialogTitle>
                <DialogContent>

                    <Grid container spacing={1}>
                        <Grid item md={12} xs={12}>
                            <AutoComplete
                                open={openRoomShift}
                                setOpen={setOpenRoomShift}
                                filterOptions={TwoFilterOption}
                                options={roomShiftOptions}
                                loading={roomShiftLoading}
                                InputText={roomShiftText}
                                changeAutoComplete={OutputRoomShift}
                                changeText={(value) => changeText(value, setRoomShiftText, setRoomShiftLoading, setRoomShiftOptions, autoCompleteRoomShift)}
                                noOptionText={"Search by grade fallowed by section "}
                                label={"RoomShift"}
                                optionLabel={twoOptionLabel}
                                optionSelected={twoOptionSelected}

                            />
                        </Grid>


                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={id.length === 0 ?null: openTransfer} color='primary'>
                        Continue
                    </Button>
                    <Button onClick={closeDialog} color='secondary'>
                        Cancel
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    </Fragment>
}

export default RoomShiftAddStudentDialog