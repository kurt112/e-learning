import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, Divider, FormControl,
    Grid, InputLabel,
    Select,
    TextField
} from "@material-ui/core"
import {connect} from 'react-redux'
import * as action from '../../../../../store/action/__ActionGlobal/DialogAction'
import * as roomClassDialogAction from '../../../../../store/action/admin/RoomClass/RoomClassDialogAction'
import {RoomShiftClass} from "../../../../../store/utils/Specify";
import Response from "../../../utils/Response";
import {
    autoCompleteTeacher,
    autoCompleteRoomShift,
    autoCompleteSubject
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {
    TwoFilterOption,
    twoOptionLabel,
    twoOptionSelected
} from '../../../utils/autoComplete/autoCompleteAction'
import AutoCompleteImplementation from "../../../utils/autoComplete/ui/AutoCompleteImplementation";

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
                        <AutoCompleteImplementation
                            filterOption={TwoFilterOption}
                            url={autoCompleteRoomShift}
                            autoFocus={true}
                            label={translation.language["label.global.room.shift"]}
                            output={OutputRoomShift}
                            optionSelected={twoOptionSelected}
                            optionLabel={twoOptionLabel}
                            noOptionText={translation.language["label.room.class.dialog.add.input.room.shift.search"]}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <AutoCompleteImplementation
                            filterOption={TwoFilterOption}
                            noOptionText={translation.language["label.room.class.dialog.add.input.subject.search"]}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}
                            output={OutputSubject}
                            label={translation.language["label.global.subject"]}
                            autoFocus={false}
                            url={autoCompleteSubject}
                        />
                    </Grid>


                    <Grid item md={6} xs={12}>
                        <TextField
                            margin="dense"
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
                        <AutoCompleteImplementation
                        filterOption={TwoFilterOption}
                        url={autoCompleteTeacher}
                        autoFocus={false}
                        label={translation.language["label.global.teacher"]}
                        optionSelected={twoOptionSelected}
                        output={OutputTeacher}
                        optionLabel={twoOptionLabel}
                        noOptionText={translation.language["label.room.class.dialog.add.input.teacher.search"]}
                        />
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