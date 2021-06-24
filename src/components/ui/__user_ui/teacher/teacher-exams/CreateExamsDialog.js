import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, Divider, FormControl,
    Grid, InputLabel,
    Select, TextareaAutosize,
    TextField
} from "@material-ui/core"
import {connect} from 'react-redux'
import * as dialogAction from '../../../../../store/action/__ActionGlobal/DialogAction'
import * as actions from '../../../../../store/action/teacher/GlobalAction'
import {useState} from "react"
import Response from "../../../utils/Response"
import {Teacher_Exams_Create} from "../../../../../store/utils/Specify"
import AutoComplete from "../../../utils/autoComplete/AutoComplete"
import {
    autoCompleteGetTeacherClass, autoCompleteGetTeacherExams
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint"
import {
    TwoFilterOption,
    twoOptionLabel,
    twoOptionSelected,
    changeTextWithRole
} from '../../../utils/autoComplete/autoCompleteAction'

const CreateExamsDialog = ({

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
    const [resourceOpen, setResourceOpen] = useState(false);
    const [resourceOptions, setResourceOptions] = useState([])
    const [resourceLoading, setResourceLoading] = useState(false)
    const [resourceText, setResourceText] = useState('')
    const OutputResources = (event, value) => {
        changeResourceCode(value === null ? '' : value[1].toString())
    }


    // for teacher class autoComplete
    const [classOpen, setClassOpen] = useState(false);
    const [classOptions, setClassOptions] = useState([])
    const [classLoading, setClassLoading] = useState(false)
    const [classText, setClassText] = useState('')
    const OutputClass = (event, value) => {
        changeClassCode(value === null ? '' : value[2].toString())
    }


    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="create-exams"
        fullWidth
        maxWidth={"lg"}
    >
        <form noValidate>
            <DialogTitle id="create-exams"
            >{translation.language["label.teacher.exam.dialog.create"]}</DialogTitle>
            <Divider/>
            <DialogContent>
                <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={translation.language["message.teacher.dialog.exam.delete.fail"]}
                          messageSuccess={translation.language["message.teacher.dialog.exam.create.success"]}/>

                <Grid container spacing={1}>
                    <Grid item md={4} xs={12}>
                        <AutoComplete
                            autoFocus={true}
                            open={resourceOpen}
                            setOpen={setResourceOpen}
                            filterOptions={TwoFilterOption}
                            options={resourceOptions}
                            loading={resourceLoading}
                            InputText={resourceText}
                            changeAutoComplete={OutputResources}
                            changeText={(value) => changeTextWithRole(value, setResourceText, setResourceLoading, setResourceOptions, autoCompleteGetTeacherExams, email)}
                            noOptionText={translation.language["label.teacher.exam.dialog.resource.search"]}
                            label={translation.language["label.teacher.exam.dialog.resource"]}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}
                        />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <AutoComplete
                            open={classOpen}
                            setOpen={setClassOpen}
                            filterOptions={TwoFilterOption}
                            options={classOptions}
                            loading={classLoading}
                            InputText={classText}
                            changeAutoComplete={OutputClass}
                            changeText={(value) => changeTextWithRole(value, setClassText, setClassLoading, setClassOptions, autoCompleteGetTeacherClass, email)}
                            noOptionText={translation.language["label.global.search.class"]}
                            label={translation.language["label.global.your.class"]}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}
                        />
                    </Grid>

                    <Grid item md={4} xs={6}>
                        <TextField
                            margin="dense"
                            label={translation.language["label.global.date.deadline"]}
                            type="datetime-local"
                            fullWidth
                            variant="outlined"
                            value={state.deadLine}
                            onChange={(e) => changeDeadLine(e.target.value)}
                        />
                    </Grid>


                    <Grid item md={3} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel htmlFor={translation.language["label.global.semester"]}>{translation.language["label.global.semester"]}</InputLabel>
                            <Select
                                native
                                label={translation.language["label.global.semester"]}
                                inputProps={{
                                    name: 'type',
                                    id: 'type',
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
                            <InputLabel htmlFor={translation.language["label.global.quarter"]}>{translation.language["label.global.quarter"]}</InputLabel>
                            <Select
                                native
                                label={translation.language["label.global.quarter"]}
                                inputProps={{
                                    name: 'type',
                                    id: 'type',
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
                        />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <InputLabel htmlFor="ActivityDescription">Exam Description(Optional)</InputLabel>
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
                    Create
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
        state: state.TeacherExamsCreateDialog,
        email: state.CurrentUser.user.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeResourceCode: (data) => dispatch(actions.changeResourceCode(data, Teacher_Exams_Create)),
        changeClassCode: (data) => dispatch(actions.changeClassCode(data, Teacher_Exams_Create)),
        changeDeadLine: (data) => dispatch(actions.changeDeadLine(data, Teacher_Exams_Create)),
        changeSem: (data) => dispatch(actions.changeSemester(data, Teacher_Exams_Create)),
        changeQuarter: (data) => dispatch(actions.changeQuarter(data, Teacher_Exams_Create)),
        changeLowGrade: (data) => dispatch(actions.changeLowGrade(data, Teacher_Exams_Create)),
        changeHighGrade: (data) => dispatch(actions.changeHighGrade(data, Teacher_Exams_Create)),
        changeDescription: (data) => dispatch(actions.changeDescription(data, Teacher_Exams_Create)),

        registerDialogMessageClose: () => dispatch(dialogAction.registerDialogMessageClose(Teacher_Exams_Create)),
        create: () => dispatch(dialogAction.dialogRegister(Teacher_Exams_Create))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateExamsDialog)