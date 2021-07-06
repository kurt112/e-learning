import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    FormControl,
    Grid,
    InputLabel,
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
import {
    autoCompleteRoom,
    autoCompleteTeacher
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {
    changeText,
    optionLabel,
    optionSelected,
    TwoFilterOption,
    twoOptionLabel, twoOptionSelected
} from "../../../utils/autoComplete/autoCompleteAction";

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
                                     registerDialog,
                                     changeAdviser,
                                     translation
                                 }) => {


    const [openStrand, setOpenStrand] = useState(false)
    const [openTeacher, setOpenTeacher] = useState(false)
    const [openRoomName, setOpenRoomName] = useState(false);

    const [teacherOptions, setTeacherOptions] = useState([])
    const [roomOptions, setRoomOptions] = useState([]);
    const [strandOptions, setStrandOptions] = useState([])

    const [teacherLoading, setTeacherLoading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [strandLoading, setStrandLoading] = useState(false)


    const [teacherText, setTeacherText] = useState('')
    const [roomText, setRoomText] = useState('')
    const [strandText, setStrandText] = useState('')

    useEffect(() => {
        changeRoomShift(translation.language["label.global.first"])
    }, [])

    const OutputRoom = (event,value) => {
        value = value === null ? '' : value[1]
        changeRoomName(value)
    }
    const OutputTeacher = (event,value) => {
        changeAdviser(value[2] === null ? '' : value[2])
    }

    const OutputStrand = (event, value) => {

    }

    const filterOptionsTeacher = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option[0],
    });


    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-roomShift"
        maxWidth="lg"
        fullWidth
    >
        <form noValidate>
            <DialogTitle id="add-roomShift">{translation.language["label.room.shift.dialog.create.title"]}</DialogTitle>

            <Divider/>
            <DialogContent>
                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={translation.language["message.room.shift.dialog.create.fail"]}
                          messageSuccess={translation.language["message.room.shift.dialog.create.success"]}/>

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
                            changeText={(value) => changeText(value, setRoomText, setLoading, setRoomOptions, autoCompleteRoom)}
                            noOptionText={translation.language["label.room.shift.dialog.create.input.room.name"]}
                            label={translation.language["label.global.room"]}
                            optionLabel={optionLabel}
                            optionSelected={optionSelected}
                        />
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
                                onChange={(event => changeRoomShift(event.target.value))}
                            >
                                <option value={translation.language["label.global.first"]}>{translation.language["label.global.first"]}</option>
                                <option value={translation.language["label.global.second"]}>{translation.language["label.global.second"]}</option>
                                <option value={translation.language["label.global.third"]}>{translation.language["label.global.third"]}</option>
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
                            label={translation.language['label.global.time.end']}
                            value={dialogState.timeEnd}
                            onChange={(event) => changeTimeEnd(event.target.value)}
                            type="time"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <AutoComplete
                            open={openStrand}
                            setOpen={setOpenStrand}
                            filterOptions={TwoFilterOption}
                            options={strandOptions}
                            loading={strandLoading}
                            InputText={strandText}
                            changeAutoComplete={OutputStrand}
                            changeText={(value) => changeText(value, setStrandText, setStrandLoading, setStrandOptions, autoCompleteTeacher)}
                            noOptionText={translation.language["label.room.class.dialog.add.input.teacher.search"]}
                            label={translation.language["label.global.adviser"]}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}
                        />
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
                            noOptionText={translation.language["label.room.class.dialog.add.input.teacher.search"]}
                            label={translation.language["label.global.adviser"]}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}
                        />
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} disableElevation onClick={registerDialog} color='primary'>
                    {translation.language["label.button.save"]}
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

        registerDialogMessageClose: () => dispatch(action.registerDialogMessageClose(RoomShift)),
        registerDialog: () => dispatch(action.dialogRegister(RoomShift))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomShiftRegisterDialog)