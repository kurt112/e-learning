import {useEffect, useState} from "react";
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
import RoomAutoComplete from "../../../utils/autoComplete/ui/RoomAutoComplete";
import TeacherAutoComplete from "../../../utils/autoComplete/ui/TeacherAutoComplete";
import CurriculumAutoComplete from "../../../utils/autoComplete/ui/CurriculumAutoComplete";
import * as roomShiftAction from "../../../../../store/action/admin/RoomShift/RoomShiftDialogAction";
import * as action from "../../../../../store/action/__ActionGlobal/DialogAction";
import {RoomShift} from "../../../../../store/utils/Specify";
import {connect} from "react-redux";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 16/07/2021, Friday
 **/

const UpdateRoomShiftDialog = ({
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
                                   registerDialog,
                                   changeAdviser,
                                   translation,
                                   changeCurriculum
                               }) => {

    // get the current value
    const [roomStartValue] = useState(dialogState.room)
    const [adviserValue] = useState(dialogState.teacher)
    const [curriculumValue] = useState(dialogState.curriculum)

    // setting if the autocomplete is visible

    const [focusRoom, setFocusRoom] = useState(false)
    const [focusAdviser, setFocusAdviser] = useState(false)
    const [focusCurriculum, setFocusCurriculum] = useState(false)


    useEffect(() => {
        if (dialogState.roomShift) changeRoomShift(dialogState.roomShift)
        else changeRoomShift(translation.language["label.global.first"])
    }, [])

    const OutputRoom = (event, value) => {
        value = value === null ? '' : value[1]
        if (value === '') {
            changeRoomName(roomStartValue.id)
            setFocusRoom(false)
        } else changeRoomName(value)
    }

    const OutputTeacher = (event, value) => {

        value = value === null ? '' : value[2]
        if (value === '') {
            changeAdviser(adviserValue.id)
            setFocusAdviser(false)
        } else changeAdviser(value)

    }

    const OutputStrand = (event, value) => {
        value = value === null ? '' : value[1]
        if (value === '') {
            changeCurriculum(curriculumValue.code)
            setFocusCurriculum(false)
        } else changeCurriculum(value)
    }

    const onFocusHandlerRoom = () => {
        setFocusRoom(true)
    }

    const onBlurRoom = () => {
        if (dialogState.room.id === roomStartValue.id) setFocusRoom(false)
        if (dialogState.room === roomStartValue.id) setFocusRoom(false)
    }

    const onBlurAdviser = () => {
        if (adviserValue !== null && dialogState.teacher.id === adviserValue.id) setFocusAdviser(false)
        if (adviserValue !== null && dialogState.teacher === adviserValue.id) setFocusAdviser(false)
    }

    const onFocusHandlerAdviser = () => {
        setFocusAdviser(true)
    }

    const onBlurStrand = () => {
        if (dialogState.curriculum.code === curriculumValue.code) setFocusCurriculum(false)
        if (dialogState.curriculum === curriculumValue.code) setFocusCurriculum(false)
    }

    const onFocusHandlerStrand = () => {
        setFocusCurriculum(true)
    }

    const updateClick = async () => {
        registerDialog()
        await new Promise(r => setTimeout(r, 1000));
        registerDialogMessageClose()
        closeDialog()
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-roomShift"
        maxWidth="lg"
        fullWidth
    >
        <form noValidate>
            <DialogTitle id="add-roomShift">{translation.language["label.room.shift.dialog.update.title"]}</DialogTitle>

            <Divider/>
            <DialogContent>
                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={translation.language["message.room.shift.dialog.create.fail"]}
                          messageSuccess={translation.language["message.room.shift.dialog.create.success"]}/>

                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        {
                            focusRoom === false ? <TextField
                                    onFocus={onFocusHandlerRoom}
                                    margin="dense"
                                    value={roomStartValue.roomName}
                                    label={translation.language["label.global.room"]}
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                /> :
                                <RoomAutoComplete
                                    output={OutputRoom}
                                    translation={translation}
                                    autoFocus={focusRoom}
                                    focusHandler={onBlurRoom}
                                />
                        }
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel
                                htmlFor={translation.language["label.global.room.shift"]}>{translation.language["label.global.room.shift"]}</InputLabel>
                            <Select
                                native
                                label={translation.language["label.global.room.shift"]}
                                inputProps={{
                                    name: 'age',
                                    id: 'RoomShift',
                                }}
                                value={dialogState.roomShift}
                                onChange={(event => changeRoomShift(event.target.value))}
                            >
                                <option
                                    value={translation.language["label.global.first"]}>{translation.language["label.global.first"]}</option>
                                <option
                                    value={translation.language["label.global.second"]}>{translation.language["label.global.second"]}</option>
                                <option
                                    value={translation.language["label.global.third"]}>{translation.language["label.global.third"]}</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            margin="dense"
                            value={dialogState.grade}
                            onChange={(event) => changeGrade(event.target.value)}
                            label={translation.language['label.global.grade']}
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            margin="dense"
                            label={translation.language['label.global.section']}
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
                            InputLabelProps={{shrink: true}}
                            label={translation.language['label.global.time.start']}
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
                            label={translation.language['label.global.time.end']}
                            value={dialogState.timeEnd}
                            onChange={(event) => changeTimeEnd(event.target.value)}
                            type="time"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        {
                            focusAdviser === false && adviserValue !== null ?
                                <TextField
                                    onFocus={onFocusHandlerAdviser}
                                    margin="dense"
                                    value={adviserValue === null ? '' : `${adviserValue.user.firstName} ${adviserValue.user.lastName}`}
                                    label={translation.language["label.global.adviser"]}
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                />
                                :
                                <TeacherAutoComplete
                                    translation={translation}
                                    output={OutputTeacher}
                                    autoFocus={focusAdviser}
                                    focusHandler={onBlurAdviser}
                                />


                        }
                    </Grid>
                    <Grid item md={6} xs={12}>
                        {
                            focusCurriculum === false ? <TextField
                                    onFocus={onFocusHandlerStrand}
                                    margin="dense"
                                    value={`${curriculumValue.name} ${curriculumValue.code}`}
                                    label={translation.language["label.sidebar.curriculum"]}
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                />
                                : <CurriculumAutoComplete
                                    output={OutputStrand}
                                    translation={translation}
                                    autoFocus={focusCurriculum}
                                    focusHandler={onBlurStrand}
                                />

                        }
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} disableElevation onClick={updateClick} color='primary'>
                    {translation.language["label.button.update"]}
                </Button>
                <Button variant={'contained'} disableElevation onClick={closeDialog} color='secondary'>
                    {translation.language["label.button.back"]}
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
        changeSection: (value) => dispatch(roomShiftAction.changeSection(value)),
        changeGrade: (value) => dispatch(roomShiftAction.changeGrade(value)),
        changeRoomName: (value) => dispatch(roomShiftAction.changeRoom(value)),
        changeTimeStart: (value) => dispatch(roomShiftAction.changeTimeStart(value)),
        changeTimeEnd: (value) => dispatch(roomShiftAction.changeTimeEnd(value)),
        changeRoomShift: (value) => dispatch(roomShiftAction.changeRoomShift(value)),
        changeAdviser: (value) => dispatch(roomShiftAction.changeAdviser(value)),
        changeCurriculum: (value) => dispatch(roomShiftAction.changeCurriculum(value)),

        registerDialogMessageClose: () => dispatch(action.registerDialogMessageClose(RoomShift)),
        registerDialog: () => dispatch(action.dialogRegister(RoomShift))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRoomShiftDialog)