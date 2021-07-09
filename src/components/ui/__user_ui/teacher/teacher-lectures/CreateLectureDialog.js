import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, Divider, FormControl,
    Grid, InputLabel,
    Select, TextareaAutosize
} from "@material-ui/core"
import {connect} from 'react-redux'
import * as dialogAction from '../../../../../store/action/__ActionGlobal/DialogAction'
import * as actions from '../../../../../store/action/teacher/GlobalAction'
import {useState} from "react"
import Response from "../../../utils/Response"
import {Teacher_Lecture_Create} from "../../../../../store/utils/Specify"
import {
    autoCompleteGetTeacherClass, autoCompleteGetTeacherLecture
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint"
import {
    TwoFilterOption,
    twoOptionLabel,
    twoOptionSelected
} from '../../../utils/autoComplete/autoCompleteAction'
import AutoCompleteImplementation from "../../../utils/autoComplete/ui/AutoCompleteImplementation";

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
        aria-labelledby="create-lecture"
        fullWidth
        maxWidth={"lg"}
    >
        <form noValidate>
            <DialogTitle id="create-lecture"
            >{translation.language["label.teacher.lecture.dialog.create.title"]}</DialogTitle>
            <Divider/>
            <DialogContent>

                <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={translation.language["message.teacher.dialog.lecture.create.fail"]}
                          messageSuccess={translation.language["message.teacher.dialog.lecture.create.success"]}/>

                <Grid container spacing={1}>
                    <Grid item md={3} xs={12}>
                        <AutoCompleteImplementation
                            autoFocus={true}
                            label={translation.language["label.teacher.lecture.dialog.create.resource"]}
                            output={OutputResources}
                            optionSelected={twoOptionSelected}
                            optionLabel={twoOptionLabel}
                            noOptionText={translation.language["label.teacher.lecture.dialog.create.resource.search"]}
                            email={email}
                            filterOption={TwoFilterOption}
                            url={autoCompleteGetTeacherLecture}
                        />
                    </Grid>

                    <Grid item md={3} xs={12}>
                        <AutoCompleteImplementation
                            url={autoCompleteGetTeacherClass}
                            email={email}
                            filterOption={TwoFilterOption}
                            noOptionText={translation.language["label.global.search.class"]}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}
                            output={OutputClass}
                            label={translation.language["label.global.your.class"]}
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
                            <InputLabel
                                htmlFor={translation.language["label.global.quarter"]}>{translation.language["label.global.quarter"]}</InputLabel>
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
                    <Grid item md={12} xs={12}>
                        <InputLabel
                            htmlFor={translation.language["label.teacher.lecture.dialog.description"]}>{translation.language["label.teacher.lecture.dialog.description"]}</InputLabel>
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
        state: state.TeacherLectureCreateDialog,
        email: state.CurrentUser.user.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeResourceCode: (data) => dispatch(actions.changeResourceCode(data, Teacher_Lecture_Create)),
        changeClassCode: (data) => dispatch(actions.changeClassCode(data, Teacher_Lecture_Create)),
        changeSem: (data) => dispatch(actions.changeSemester(data, Teacher_Lecture_Create)),
        changeQuarter: (data) => dispatch(actions.changeQuarter(data, Teacher_Lecture_Create)),
        changeDescription: (data) => dispatch(actions.changeDescription(data, Teacher_Lecture_Create)),

        registerDialogMessageClose: () => dispatch(dialogAction.registerDialogMessageClose(Teacher_Lecture_Create)),
        create: () => dispatch(dialogAction.dialogRegister(Teacher_Lecture_Create))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLectureDialog)