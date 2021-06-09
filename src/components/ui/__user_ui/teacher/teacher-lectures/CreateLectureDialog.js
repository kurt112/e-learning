import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControl,
    Grid, InputLabel,
    Select, TextareaAutosize
} from "@material-ui/core"
import {connect} from 'react-redux'
import * as dialogAction from '../../../../../store/action/__ActionGlobal/DialogAction'
import * as actions from '../../../../../store/action/teacher/GlobalAction'
import {useState} from "react"
import Response from "../../../utils/Response"
import {Teacher_Lecture_Create} from "../../../../../store/utils/Specify"
import AutoComplete from "../../../utils/autoComplete/AutoComplete"
import {
    autoCompleteGetTeacherClass, autoCompleteGetTeacherLecture
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint"
import {
    TwoFilterOption,
    twoOptionLabel,
    twoOptionSelected,
    changeTextWithRole
} from '../../../utils/autoComplete/autoCompleteAction'
import {AddedLectureFail, AddedLectureSuccess} from "../../../../../__Messages/teacher/TeacherLectureMessages";

const CreateLectureDialog = ({

                                           dialog,
                                           closeDialog,
                                           create,
                                           registerDialogMessageClose,
                                           email,
                                           state,
                                           changeResourceCode,
                                           changeClassCode,
                                           changeSem,
                                           changeQuarter,
                                           changeDescription
                                       }) => {

    // for assignment resource autoComplete
    const [resourceOpen, setResourceOpen] = useState(false);
    const [resourceOptions, setResourceOptions] = useState([])
    const [resourceLoading, setResourceLoading] = useState(false)
    const [resourceText, setResourceText] = useState('')
    const OutputResources = (event, value) => {
        changeResourceCode(value  === null? '': value[1].toString())
    }


    // for teacher class autoComplete
    const [classOpen, setClassOpen] = useState(false);
    const [classOptions, setClassOptions] = useState([])
    const [classLoading, setClassLoading] = useState(false)
    const [classText, setClassText] = useState('')
    const OutputClass = (event, value) => {
        changeClassCode(value  === null? '': value[2].toString())
    }


    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="create-lecture"
        fullWidth
        maxWidth={"lg"}
    >
        <form noValidate>
            <DialogTitle id="create-lecture"
            >Create Lecture</DialogTitle>
            <DialogContent>

                <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={AddedLectureFail}
                          messageSuccess={AddedLectureSuccess}/>

                <Grid container spacing={1}>
                    <Grid item md={3} xs={12}>
                        <AutoComplete
                            open={resourceOpen}
                            setOpen={setResourceOpen}
                            filterOptions={TwoFilterOption}
                            options={resourceOptions}
                            loading={resourceLoading}
                            InputText={resourceText}
                            changeAutoComplete={OutputResources}
                            changeText={(value) => changeTextWithRole(value, setResourceText, setResourceLoading, setResourceOptions, autoCompleteGetTeacherLecture, email)}
                            noOptionText={"Search By Resource Name"}
                            label={"Lecture Resource"}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}
                        />
                    </Grid>

                    <Grid item md={3} xs={12}>
                        <AutoComplete
                            open={classOpen}
                            setOpen={setClassOpen}
                            filterOptions={TwoFilterOption}
                            options={classOptions}
                            loading={classLoading}
                            InputText={classText}
                            changeAutoComplete={OutputClass}
                            changeText={(value) => changeTextWithRole(value, setClassText, setClassLoading, setClassOptions, autoCompleteGetTeacherClass, email)}
                            noOptionText={"No Class Found"}
                            label={"Your Class"}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}
                        />
                    </Grid>


                    <Grid item md={3} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel htmlFor="Semester">Semester</InputLabel>
                            <Select
                                native
                                label="Semester"
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
                            <InputLabel htmlFor="Quarter">Quarter</InputLabel>
                            <Select
                                native
                                label="Quarter"
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
                    <Grid item md={12} xs={12}>
                        <InputLabel htmlFor="ActivityDescription">Lecture Description(Optional)</InputLabel>
                        <TextareaAutosize
                            label="Description"
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
                <Button onClick={create} color='primary'>
                    Create
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
        state: state.TeacherLectureCreateDialog,
        email: state.CurrentUser.user.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeResourceCode: (data) => dispatch(actions.changeResourceCode(data,Teacher_Lecture_Create)),
        changeClassCode: (data) => dispatch(actions.changeClassCode(data,Teacher_Lecture_Create)),
        changeSem: (data) => dispatch(actions.changeSemester(data,Teacher_Lecture_Create)),
        changeQuarter: (data) => dispatch(actions.changeQuarter(data,Teacher_Lecture_Create)),
        changeDescription: (data) => dispatch(actions.changeDescription(data,Teacher_Lecture_Create)),

        registerDialogMessageClose: () => dispatch(dialogAction.registerDialogMessageClose(Teacher_Lecture_Create)),
        create: () => dispatch(dialogAction.dialogRegister(Teacher_Lecture_Create))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLectureDialog)