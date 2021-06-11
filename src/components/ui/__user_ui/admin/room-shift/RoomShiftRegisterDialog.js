import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Divider, FormControl,
    Grid, InputLabel,
    Select,
    TextField
} from "@material-ui/core"

import {connect} from 'react-redux'
import * as action from '../../../../../store/action/__ActionGlobal/DialogAction'
import * as roomShiftAction from '../../../../../store/action/admin/RoomShift/RoomShiftDialogAction'
import {RoomShift} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import AutoComplete from "../../../utils/autoComplete/AutoComplete";
import {useEffect, useState} from "react";
import {createFilterOptions} from "@material-ui/lab";
import { autoCompleteRoom} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {baseUrl} from "../../../../../store/middleware/axios";

const RoomShiftRegisterDialog = ({
                             closeDialog,
                             dialog,
                                dialogState,
                             changeRoomName,
                             changeSection,
                             changeGrade,
                             changeTimeStart,
                             changeTimeEnd,
                             changeRoomShift,
                             registerDialogMessageClose,
                             registerDialog
                         }) => {


    const [openRoomName, setOpenRoomName] = useState(false);
    const [roomOptions, setRoomOptions] = useState([]); // value ng auto complete
    const [loading, setLoading] = useState(false)
    const [roomText, setRoomText] = useState('')

    const changeRoom = async (value) => {
        setLoading(true)
        const response = await baseUrl.get(autoCompleteRoom, {
            params: {
                search: value,
            }
        })
        setLoading(false)

        setRoomText(value)

        const teacher = response.data.items

        setRoomOptions(teacher)
    }

    useEffect(() => {
        if (!openRoomName) setRoomOptions([])
    }, [openRoomName])

    const OutputRoom = (event, value) => {
        value = value === null ? '': value[1]
        changeRoomName(value)
    }
    const filterOptionsTeacher = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option[0],
    });

    const optionLabel = (option) => option[0]

    const optionSelected = (option, value) => option[1] === value[1]

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-roomShift"
        maxWidth="lg"
        fullWidth
    >
        <form noValidate >
            <DialogTitle id="add-roomShift">Register Room Shift</DialogTitle>

            <Divider/>
            <DialogContent>

                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail="Room Shift Register Not Successful"
                          messageSuccess="Register Room Success"/>

                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        <AutoComplete
                            autoFocus={true}
                            open={openRoomName}
                            setOpen={setOpenRoomName}
                            filterOptions={filterOptionsTeacher}
                            options={roomOptions}
                            loading={loading}
                            InputText={roomText}
                            changeAutoComplete={OutputRoom}
                            changeText={changeRoom}
                            noOptionText={"Search by Room Name"}
                            label={"Room"}
                            optionLabel={optionLabel}
                            optionSelected={optionSelected}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel htmlFor="RoomShift">RoomShift</InputLabel>
                            <Select
                                native
                                // value={subjectID.subjectMajor}
                                // onChange={handleChange}
                                label="RoomShift"
                                inputProps={{
                                    name: 'age',
                                    id: 'RoomShift',
                                }}
                                onChange={(event => changeRoomShift(event.target.value))}
                            >
                                <option value='First'>First</option>
                                <option value='Second'>Second</option>
                                <option value='Third'>Third</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            margin="dense"
                            id="room-grade"
                            value={dialogState.grade}
                            onChange={(event) => changeGrade(event.target.value)}
                            label="Grade"
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            margin="dense"
                            id="room-section"
                            label="Section"
                            value={dialogState.section}
                            onChange={(event) => changeSection(event.target.value)}
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
        dialogState: state.AdminRoomShiftDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSection: (value) => dispatch(roomShiftAction.roomShiftSectionChange(value)),
        changeGrade: (value) => dispatch(roomShiftAction.roomShiftGradeChange(value)),
        changeRoomName: (value) => dispatch(roomShiftAction.roomShiftRoomChange(value)),
        changeTimeStart: (value) => dispatch(roomShiftAction.roomShiftTimeStartChange(value)),
        changeTimeEnd: (value) => dispatch(roomShiftAction.roomShiftTimeEndChange(value)),
        changeRoomShift: (value) => dispatch(roomShiftAction.roomShiftChange(value)),

        registerDialogMessageClose: () => dispatch(action.registerDialogMessageClose(RoomShift)),
        registerDialog: () => dispatch(action.dialogRegister(RoomShift))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomShiftRegisterDialog)