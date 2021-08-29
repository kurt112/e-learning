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
    TextareaAutosize,
    TextField
} from "@material-ui/core"
import {connect} from 'react-redux'
import * as dialogAction from '../../../../../store/action/__ActionGlobal/DialogAction'
import * as actions from '../../../../../store/action/teacher/GlobalAction'
import Response from "../../../utils/Response"
import {Teacher_Assignment_Create} from "../../../../../store/utils/Specify"
import GetTeacherClassAutoComplete from "../../../utils/autoComplete/ui/GetTeacherClassAutoComplete";
import GetTeacherAssignmentResourceAutoComplete
    from "../../../utils/autoComplete/ui/GetTeacherAssignmentResourceAutoComplete";
import {geDateTodayDateTime} from "../../../utils/dateFormat/DateTimeMinLow";


const CreateAssignmentDialog = ({

                                    dialog,
                                    closeDialog,
                                    create,
                                    registerDialogMessageClose,
                                    email,
                                    state,
                                    changeResourceCode,
                                    changeClassCode,
                                    changeDeadLine,
                                    changeSem,
                                    changeQuarter,
                                    changeLowGrade,
                                    changeHighGrade,
                                    changeDescription,
                                    translation
                                }) => {


    // for assignment resource autoComplete
    const OutputResources = (event, value) => {
        changeResourceCode(value === null ? '' : value[1].toString())
    }


    // for teacher class autoComplete
    const OutputClass = (event, value) => {
        changeClassCode(value === null ? '' : value[2].toString())
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="create-resource"
        fullWidth
        maxWidth={"lg"}
    >
        <form noValidate>
            <DialogTitle
                id="create-resource">{translation.language["label.teacher.assignment.table.create.title"]}</DialogTitle>
            <Divider/>
            <DialogContent>
                <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={translation.language["message.teacher.dialog.assignment.create.fail"]}
                          messageSuccess={translation.language["message.teacher.dialog.assignment.create.success"]}/>
                <Grid container spacing={1}>
                    <Grid item md={4} xs={12}>
                        <GetTeacherAssignmentResourceAutoComplete
                            email={email}
                            output={OutputResources}
                            translation={translation}
                            autoFocus={true}
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <GetTeacherClassAutoComplete
                            translation={translation}
                            output={OutputClass}
                            email={email}/>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <TextField
                            margin="dense"
                            label={translation.language["label.global.date.deadline"]}
                            InputLabelProps={{shrink: true}}
                            type="datetime-local"
                            fullWidth
                            variant="outlined"
                            value={state.deadLine}
                            onChange={(e) => changeDeadLine(e.target.value)}
                            inputProps={
                                {
                                    min:geDateTodayDateTime()
                                }
                            }

                        />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel
                                htmlFor={translation.language["label.global.semester"]}>{translation.language["label.global.semester"]}</InputLabel>
                            <Select
                                native
                                label={translation.language["label.global.semester"]}
                                inputProps={{
                                    name: translation.language["label.global.semester"],
                                    id: translation.language["label.global.semester"],
                                }}
                                value={state.sem}
                                onChange={(e) => changeSem(e.target.value)}
                            >
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel
                                htmlFor={translation.language["label.global.quarter"]}>{translation.language["label.global.quarter"]}</InputLabel>
                            <Select
                                native
                                label={translation.language["label.global.quarter"]}
                                inputProps={{
                                    name: translation.language["label.global.quarter"],
                                    id: translation.language["label.global.quarter"],
                                }}
                                value={state.quarter}
                                onChange={(e) => changeQuarter(e.target.value)}
                            >
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={3} xs={4}>
                        <TextField
                            margin="dense"
                            label={translation.language["label.global.low.grade"]}
                            type="number"
                            fullWidth
                            variant="outlined"
                            inputProps={{
                                min:0,
                                max: 100
                            }
                            }
                            value={state.lowGrade}
                            onChange={(e) => changeLowGrade(e.target.value)}
                        />
                    </Grid>
                    <Grid item md={3} xs={4}>
                        <TextField
                            margin="dense"
                            label={translation.language["label.global.high.grade"]}
                            type="number"
                            fullWidth
                            variant="outlined"
                            value={state.highGrade}
                            onChange={(e) => changeHighGrade(e.target.value)}
                            inputMode={"numeric"}
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <InputLabel
                            htmlFor="ActivityDescription">{translation.language["label.teacher.assignment.dialog.create.description"]}</InputLabel>
                        <TextareaAutosize
                            label={translation.language["label.global.description"]}
                            rowsMin={10}
                            aria-label="maximum height"
                            style={{width: '100%', marginBottom: '10px', marginTop: '10px'}}
                            value={state.description}
                            onChange={(e) => changeDescription(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} disableElevation onClick={create} color='primary'>
                    {translation.language["label.global.create"]}
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
        state: state.TeacherAssignmentCreateDialog,
        email: state.CurrentUser.user.email
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeResourceCode: (data) => dispatch(actions.changeResourceCode(data, Teacher_Assignment_Create)),
        changeClassCode: (data) => dispatch(actions.changeClassCode(data, Teacher_Assignment_Create)),
        changeDeadLine: (data) => dispatch(actions.changeDeadLine(data, Teacher_Assignment_Create)),
        changeSem: (data) => dispatch(actions.changeSemester(data, Teacher_Assignment_Create)),
        changeQuarter: (data) => dispatch(actions.changeQuarter(data, Teacher_Assignment_Create)),
        changeLowGrade: (data) => dispatch(actions.changeLowGrade(data, Teacher_Assignment_Create)),
        changeHighGrade: (data) => dispatch(actions.changeHighGrade(data, Teacher_Assignment_Create)),
        changeDescription: (data) => dispatch(actions.changeDescription(data, Teacher_Assignment_Create)),
        registerDialogMessageClose: () => dispatch(dialogAction.registerDialogMessageClose(Teacher_Assignment_Create)),
        create: () => dispatch(dialogAction.dialogRegister(Teacher_Assignment_Create))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateAssignmentDialog)