import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    Select,
    TextField
} from "@material-ui/core";
import Response from "../../../utils/Response";
import RoomShiftAutoComplete from "../../../utils/autoComplete/ui/RoomShiftAutoComplete";
import SubjectAutoComplete from "../../../utils/autoComplete/ui/SubjectAutoComplete";
import TeacherAutoComplete from "../../../utils/autoComplete/ui/TeacherAutoComplete";
import * as action from "../../../../../store/action/__ActionGlobal/DialogAction";
import {RoomShiftClass} from "../../../../../store/utils/Specify";
import * as roomClassDialogAction from "../../../../../store/action/admin/RoomClass/RoomClassDialogAction";
import {connect} from "react-redux";
import {useState} from "react";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 20/07/2021, Tuesday
 **/

const UpdateClassDialog = ({
                               closeDialog,
                               dialog,
                               dialogState,
                               registerDialogMessageClose,
                               registerDialog,
                               changeTeacher,
                               changeSubject,
                               changeRoomShift,
                               changeTimeStart,
                               changeTimeEnd,
                               changeDay,
                               translation
                           }) => {

    console.log(dialogState)

    // get the current value
    const [roomShiftValue] = useState(dialogState.shift)
    const [teacherValue] = useState(dialogState.teacher)
    const [subjectValue] = useState(dialogState.subject)


    // setting if the autocomplete is visible
    const [focusRoomShift, setFocusRoomShift] = useState(false)
    const [focusTeacher, setFocusTeacher] = useState(false)
    const [focusSubject, setFocusSubject] = useState(false)


    const OutputTeacher = (event, value) => {

        value = value === null ? '' : value[2]
        if (value === '') {
            changeTeacher(teacherValue.id)
            setFocusTeacher(false)
        } else changeTeacher(value)
    }

    const OutputSubject = (event, value) => {
        value = value === null ? '' : value[2]

        if(value === ''){
            changeSubject(subjectValue.id)
            setFocusSubject(false)
        }else changeSubject(value)
    }

    const OutputRoomShift = (event, value) => {
        value = value === null ? '' : value[2]
        if(value===''){
            console.log(roomShiftValue.id)
            changeRoomShift(roomShiftValue.id)
            setFocusRoomShift(false)
        }else changeRoomShift(value)

    }
    // autoComplete Handler

    const onFocusRoomShiftHandler = () => {
        setFocusRoomShift(true)
    }

    const onBlurRoomShiftHandler = () => {
        if (roomShiftValue !== null && dialogState.shift.id === roomShiftValue.id) setFocusRoomShift(false)
        if (roomShiftValue !== null && dialogState.shift === roomShiftValue.id) setFocusRoomShift(false)
    }


    const onBlurTeacher = () => {
        if (teacherValue !== null && dialogState.teacher.id === teacherValue.id) setFocusTeacher(false)
        if (teacherValue !== null && dialogState.teacher === teacherValue.id) setFocusTeacher(false)
    }

    const onFocusHandlerTeacher = () => {
        setFocusTeacher(true)
    }

    const onBlurSubject = () => {
        if (subjectValue !== null && dialogState.subject.id === subjectValue.id) setFocusSubject(false)
        if (subjectValue !== null && dialogState.subject === subjectValue.id) setFocusSubject(false)
    }

    const onFocusSubjectHandler = () => {
        setFocusSubject(true)
    }

    // update

    const updateClick = async () => {
        registerDialog()
        await new Promise(r => setTimeout(r, 1000));
        registerDialogMessageClose()
        closeDialog()
    }


    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-class"
        maxWidth="lg"
        fullWidth
    >
        <form noValidate>
            <DialogTitle id="add-class">{translation.language["label.room.class.dialog.add.title"]}</DialogTitle>
            <Divider/>
            <DialogContent>

                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={translation.language["message.room.class.dialog.update.fail"]}
                          messageSuccess={translation.language["message.room.class.dialog.update.success"]}/>

                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>

                        {
                            focusRoomShift === false && roomShiftValue !== null ?
                                <TextField
                                    onFocus={onFocusRoomShiftHandler}
                                    margin="dense"
                                    value={roomShiftValue === null ? '' : `${roomShiftValue.grade} ${roomShiftValue.section}`}
                                    label={translation.language["label.global.room.shift"]}
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                />
                                :
                                <RoomShiftAutoComplete
                                    output={OutputRoomShift}
                                    translation={translation}
                                    autoFocus={focusRoomShift}
                                    focusHandler={onBlurRoomShiftHandler}
                                />
                        }
                    </Grid>
                    <Grid item md={6} xs={12}>
                        {
                            focusSubject === false && subjectValue !== null ?
                                <TextField
                                    onFocus={onFocusSubjectHandler}
                                    margin="dense"
                                    value={subjectValue === null ? '' : `${subjectValue.subjectName} ${subjectValue.subjectCode}`}
                                    label={translation.language["label.global.subject"]}
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                />
                                :
                                <SubjectAutoComplete
                                    translation={translation}
                                    output={OutputSubject}
                                    autoFocus={focusSubject}
                                    focusHandler={onBlurSubject}

                                />
                        }


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
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel
                                htmlFor={translation.language["label.global.day"]}>{translation.language["label.global.day"]}</InputLabel>
                            <Select
                                native
                                value={dialogState.day}
                                label={translation.language["label.global.day"]}
                                inputProps={{
                                    name: translation.language["label.global.day"],
                                    id: translation.language["label.global.day"],
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


                        {
                            focusTeacher === false && teacherValue !== null ?
                                <TextField
                                    onFocus={onFocusHandlerTeacher}
                                    margin="dense"
                                    value={teacherValue === null ? '' : `${teacherValue.user.firstName} ${teacherValue.user.lastName}`}
                                    label={translation.language["label.global.teacher"]}
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                />
                                :
                                <TeacherAutoComplete
                                    output={OutputTeacher}
                                    translation={translation}
                                    autoFocus={focusTeacher}
                                    focusHandler={onBlurTeacher}
                                />
                        }

                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button disableElevation variant={"contained"} onClick={updateClick} color='primary'>
                    {translation.language["label.button.update"]}
                </Button>
                <Button disableElevation variant={"contained"} onClick={closeDialog} color='secondary'>
                    {translation.language["label.button.back"]}
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
        changeTeacher: (data) => dispatch(roomClassDialogAction.changeTeacherId(data)),
        changeSubject: (data) => dispatch(roomClassDialogAction.changeSubjectId(data)),
        changeRoomShift: (data) => dispatch(roomClassDialogAction.changeRoomShiftId(data)),
        changeTimeStart: (data) => dispatch(roomClassDialogAction.changeTimeStart(data)),
        changeTimeEnd: (data) => dispatch(roomClassDialogAction.changeTimeEnd(data)),
        changeDay: (data) => dispatch(roomClassDialogAction.changeDay(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateClassDialog)