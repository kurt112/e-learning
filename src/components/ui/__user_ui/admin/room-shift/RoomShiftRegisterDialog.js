/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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
import {RoomShift} from "../../../../../store/utils/Specify"
import Response from "../../../utils/Response"
import {useEffect} from "react"
import RoomAutoComplete from "../../../utils/autoComplete/ui/RoomAutoComplete";
import TeacherAutoComplete from "../../../utils/autoComplete/ui/TeacherAutoComplete";
import CurriculumAutoComplete from "../../../utils/autoComplete/ui/CurriculumAutoComplete";

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
                                     translation,
                                     changeCurriculum
                                 }) => {


    useEffect(() => {
        changeRoomShift(translation.language["label.global.first"])
    }, [])

    const OutputRoom = (event, value) => {
        value = value === null ? '' : value[1]
        changeRoomName(value)
    }

    const OutputTeacher = (event, value) => {
        changeAdviser(value[2] === null ? '' : value[2])
    }

    const OutputStrand = (event, value) => {
        value = value === null ? '' : value[1]
        changeCurriculum(value)
    }

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
                        <RoomAutoComplete
                            output={OutputRoom}
                            translation={translation}
                            autoFocus={true}
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
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
                            label={translation.language['label.global.time.end']}
                            value={dialogState.timeEnd}
                            onChange={(event) => changeTimeEnd(event.target.value)}
                            type="time"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TeacherAutoComplete translation={translation} output={OutputTeacher}/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <CurriculumAutoComplete
                            output={OutputStrand}
                            translation={translation}
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
        changeCurriculum: (value) => dispatch(roomShiftAction.changeCurriculum(value)),

        registerDialogMessageClose: () => dispatch(action.registerDialogMessageClose(RoomShift)),
        registerDialog: () => dispatch(action.dialogRegister(RoomShift))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomShiftRegisterDialog)