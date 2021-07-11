/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle, Divider,
    Grid,
} from "@material-ui/core"
import {Fragment, useState} from "react"
import RoomShiftAddStudentTransfer from "./RoomShiftAddStudentTransferDialog"
import RoomShiftAutoComplete from "../../../utils/autoComplete/ui/RoomShiftAutoComplete"

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
                            <RoomShiftAutoComplete
                                translation={translation}
                                output={OutputRoomShift}
                                autoFocus={true}
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

export default RoomShiftAddStudentDialog