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
import * as roomClassDialogAction from '../../../../../store/action/admin/RoomClass/RoomClassDialogAction'
import {RoomShiftClass} from "../../../../../store/utils/Specify"
import Response from "../../../utils/Response"
import RoomShiftAutoComplete from "../../../utils/autoComplete/ui/RoomShiftAutoComplete"
import SubjectAutoComplete from "../../../utils/autoComplete/ui/SubjectAutoComplete"
import TeacherAutoComplete from "../../../utils/autoComplete/ui/TeacherAutoComplete"
import {useEffect} from "react";

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
                             changeDay,
                             translation
                         }) => {

    const OutputTeacher = (event, value) => {
        changeTeacherId(value[2] === null ? '' : value[2])
    }

    const OutputSubject = (event, value) => {
        changeSubjectId(value === null ? '' : value[2])
    }

    const OutputRoomShift = (event, value) => {
        changeRoomShiftId(value === null ? '' : value[2].toString())
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
                          messageFail={translation.language["message.room.class.dialog.add.fail"]}
                          messageSuccess={translation.language["message.room.class.dialog.add.success"]}/>

                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        <RoomShiftAutoComplete
                            error={dialogState.shiftError}
                            errorMessage={dialogState.shiftErrorMessage}
                            output={OutputRoomShift}
                            translation={translation}
                            autoFocus={true}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <SubjectAutoComplete
                            error={dialogState.subjectError}
                            errorMessage={dialogState.subjectErrorMessage}
                            translation={translation}
                            output={OutputSubject}
                        />
                    </Grid>


                    <Grid item md={6} xs={12}>
                        <TextField
                            margin="dense"
                            InputLabelProps={{ shrink: true }}
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
                            InputLabelProps={{ shrink: true }}
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
                        <TeacherAutoComplete
                            output={OutputTeacher}
                            translation={translation}/>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button disableElevation variant={"contained"} onClick={registerDialog} color='primary'>
                    {translation.language["label.button.save"]}
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
        changeTeacherId: (data) => dispatch(roomClassDialogAction.changeTeacherId(data)),
        changeSubjectId: (data) => dispatch(roomClassDialogAction.changeSubjectId(data)),
        changeRoomShiftId: (data) => dispatch(roomClassDialogAction.changeRoomShiftId(data)),
        changeTimeStart: (data) => dispatch(roomClassDialogAction.changeTimeStart(data)),
        changeTimeEnd: (data) => dispatch(roomClassDialogAction.changeTimeEnd(data)),
        changeDay: (data) => dispatch(roomClassDialogAction.changeDay(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomClassDialog)