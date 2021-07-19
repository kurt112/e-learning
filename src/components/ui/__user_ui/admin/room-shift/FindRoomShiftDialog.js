import {useState} from "react"
import {graphQlRequestAsync} from "../../../../../store/middleware/utils/HttpRequest"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField} from "@material-ui/core"
import {getRoomShiftBasic} from "../../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/RoomShiftProfile"
import UpdateRoomShift from "./UpdateRoomShiftDialog";
import RoomShiftAddStudentTransferDialog from "./RoomShiftAddStudentTransferDialog";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 16/07/2021, Friday
 **/
const FindRoomShiftDialog = ({
                                 translation,
                                 dialog,
                                 closeDialog,
                                 setData,
                                 reInitState,
                                 update,
                                 addStudent
                             }) => {

    const [id, setId] = useState('')
    const [roomShift, setRoomShift] = useState(null)
    const getRoomShift = () => {
        graphQlRequestAsync(getRoomShiftBasic(id)).then(roomShift => {
            if (roomShift.data.data.roomShift !== null) {
                setId('')
                setData(roomShift.data.data.roomShift)
                setRoomShift(roomShift.data.data.roomShift)
            }
        })
    }

    const closeUpdate = () => {
        setRoomShift(null)
        // reInitState()
    }

    const closeAddStudent = () => {
        setRoomShift(null)
    }


    return roomShift === null ? <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-student"
        maxWidth="lg"
        fullWidth
    >
        <form noValidate>
            <DialogTitle
                id="add-student">{translation.language["label.room.dialog.find.room.shift.title"]}</DialogTitle>
            <Divider/>
            <br/>
            <DialogContent>
                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <TextField autoFocus
                                   value={id}
                                   margin={'dense'}
                                   variant={'outlined'} fullWidth
                                   onChange={event => setId(event.target.value)}
                                   placeholder={translation.language["label.room.shift.input.id"]}/>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} disableElevation onClick={getRoomShift}
                        color='primary'>
                    {translation.language["label.global.find"]}
                </Button>
                <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                    {translation.language["label.button.back"]}
                </Button>
            </DialogActions>
        </form>
    </Dialog> : update === true ?
        <UpdateRoomShift
            closeDialog={closeUpdate}
            dialog={update}
            translation={translation}
        /> :
        <RoomShiftAddStudentTransferDialog translation={translation}
                                           closeDialog={closeAddStudent}
                                           open={addStudent}
                                           studentRoomShift={roomShift.students}
                                           shiftID={roomShift.id}
                                           shiftName={`${roomShift.grade} - ${roomShift.section}`}
        />
}

export default FindRoomShiftDialog