import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControl,
    Grid, InputLabel,
    makeStyles, Select,
    TextField
} from "@material-ui/core"
import {useEffect, useState} from "react";
import {connect} from 'react-redux'
import * as action from '../../../../../store/action/__ActionGlobal/AdminDialogAction'
import * as roomClassDialogAction from '../../../../../store/action/admin/RoomClass/RoomClassDialogAction'
import {RoomShiftClass} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {
    autoCompleteTeacher,
    autoCompleteRoomShift,
    autoCompleteSubject
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import AutoComplete from "../../../utils/autoComplete/AutoComplete";
import {TwoFilterOption,twoOptionLabel,twoOptionSelected,changeText} from '../../../utils/autoComplete/autoCompleteAction'

const formStyle = makeStyles(() => ({
    root: {
        "& select": {
            paddingTop: 10,
        }
    },
    control: {
        marginTop: 100,

    }
}))


const RoomClassDialog = ({
                             closeDialog,
                             dialog,
                             dialogState,
                             registerDialogMessageClose,
                             registerDialog,
                             changeTeacherId,
                             changeSubjectId,
                             changeRoomShiftId,
                             changeTimeStart,
                             changeTimeEnd,
                             changeDay
                         }) => {

    const form = formStyle()

    const [openTeacher, setOpenTeacher] = useState(false)
    const [openSubject, setOpenSubject] = useState(false)
    const [openRoomShift, setOpenRoomShift] = useState(false)


    // value of the autoComplete
    const [teacherOptions, setTeacherOptions] = useState([])
    const [subjectOptions, setSubjectOptions] = useState([])
    const [roomShiftOptions, setRoomShiftOptions] = useState([])

    // set the autoComplete when fetching data
    const [teacherLoading, setTeacherLoading] = useState(false)
    const [subjectLoading, setSubjectLoading] = useState(false)
    const [roomShiftLoading, setRoomShiftLoading] = useState(false)

    // init text
    const [teacherText, setTeacherText] = useState('')
    const [subjectText, setSubjectText] = useState('')
    const [roomShiftText, setRoomShiftText] = useState('')


    useEffect(() => {
        if (!openTeacher) setTeacherOptions([])
        if (!openSubject) setTeacherOptions([])
        if (!openRoomShift) setTeacherOptions([])
    }, [openTeacher, openSubject, openRoomShift])

    const OutputTeacher = (event, value) => {
        changeTeacherId(value[2] === null? '': value[2])
    }

    const OutputSubject = (event, value) => {
        changeSubjectId(value === null? '': value[2])
    }

    const OutputRoomShift = (event, value) => {
        changeRoomShiftId(value  === null? '': value[2].toString())
    }



    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-student"
    >
        <form noValidate className={form.root}>
            <DialogTitle id="add-student">Register Class</DialogTitle>

            <DialogContent>
                <DialogContentText>
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of L
                </DialogContentText>

                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail="Room Register Not Successful"
                          messageSuccess="Register Room Success"/>

                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
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
                    <Grid item md={6} xs={12}>
                        <AutoComplete
                            open={openSubject}
                            setOpen={setOpenSubject}
                            filterOptions={TwoFilterOption}
                            options={subjectOptions}
                            loading={subjectLoading}
                            InputText={subjectText}
                            changeText={(value) => changeText(value, setSubjectText, setSubjectLoading, setSubjectOptions, autoCompleteSubject)}
                            changeAutoComplete={OutputSubject}
                            noOptionText={"Search by subjectName name fallowed by Subject Major"}
                            label={"Subject"}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}

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
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined"  margin='dense' fullWidth>
                            <InputLabel htmlFor="room-day-shift">Day</InputLabel>
                            <Select
                                native
                                value={dialogState.day}
                                label="Day"
                                inputProps={{
                                    name: 'Day',
                                    id: 'room-day-shift',
                                }}
                                onChange={(event => changeDay(event.target.value))}
                            >
                                <option value='MWF'>MWF</option>
                                <option value='TTH'>TTH</option>
                                <option value='MTWTHF'>MTWTHF</option>
                                <option value='SAT'>SAT</option>
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <AutoComplete
                            open={openTeacher}
                            setOpen={setOpenTeacher}
                            filterOptions={TwoFilterOption}
                            options={teacherOptions}
                            loading={teacherLoading}
                            InputText={teacherText}
                            changeAutoComplete={OutputTeacher}
                            changeText={(value) => changeText(value, setTeacherText, setTeacherLoading, setTeacherOptions, autoCompleteTeacher)}
                            noOptionText={"Search by last name fallowed by first Name "}
                            label={"Teacher"}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}
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
        dialogState: state.AdminClassDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Global Dialog Action
        registerDialogMessageClose: () => dispatch(action.registerDialogMessageClose(RoomShiftClass)),
        registerDialog: () => dispatch(action.dialogRegister(RoomShiftClass)),

        // Current Dialog Action
        changeTeacherId: (data) => dispatch(roomClassDialogAction.changeTeacherId(data)),
        changeSubjectId: (data) => dispatch(roomClassDialogAction.changeSubjectId(data)),
        changeRoomShiftId: (data) => dispatch(roomClassDialogAction.changeRoomShiftId(data)),
        changeTimeStart: (data) => dispatch(roomClassDialogAction.changeTimeStart(data)),
        changeTimeEnd: (data) => dispatch(roomClassDialogAction.changeTimeEnd(data)),
        changeDay: (data) => dispatch(roomClassDialogAction.changeDay(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomClassDialog)