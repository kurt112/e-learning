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
import {
    TwoFilterOption,
    twoOptionLabel,
    twoOptionSelected
} from "../../../utils/autoComplete/autoCompleteAction";
import {Fragment, useState} from "react";
import RoomShiftAddStudentTransfer from "./RoomShiftAddStudentTransferDialog";
import AutoCompleteImplementation from "../../../utils/autoComplete/ui/AutoCompleteImplementation";

const RoomShiftAddStudentDialog = ({closeDialog, dialog, translation}) => {

    const [id, setId] = useState('')
    const [transfer, setTransfer] = useState(false);


    const OutputRoomShift = (event, value) => {
        setId(value === null ? '' : value[2].toString())
    }


    const closeTransfer = () => {
        setTransfer(false)
    }

    const openTransfer = () => {
        setTransfer(true)
    }

    return <Fragment>
        {
            id.length === 0 ? null : <RoomShiftAddStudentTransfer shiftID={id} translation={translation} open={transfer}
                                                                  closeDialog={closeTransfer}/>
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
                            <AutoCompleteImplementation
                                noOptionText={translation.language["label.room.shift.dialog.find.input.search"]}
                                optionLabel={twoOptionLabel}
                                optionSelected={twoOptionSelected}
                                output={OutputRoomShift}
                                label={translation.language["label.global.room.shift"]}
                                autoFocus={true}
                                url={autoCompleteRoomShift}
                                filterOption={TwoFilterOption}/>
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

export default RoomShiftAddStudentDialog