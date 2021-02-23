import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControl,
    Grid, InputLabel,
    makeStyles, Select, TextareaAutosize,
    TextField
} from "@material-ui/core"

import {connect} from 'react-redux'
import * as action from '../../../../../store/action/__ActionGlobal/AdminDialogAction'
import * as activityAction from '../../../../../store/action/admin/Activity/ActivityDialogAction'
import {Activity} from "../../../../../store/utils/Specify";
import {useEffect,  useState} from "react";
import AutoComplete from "../../../utils/autoComplete/AutoComplete";
import {
    autoCompleteSubjectBasedOnRoomShift,
    autoCompleteRoomShift
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {
    TwoFilterOption,
    twoOptionLabel,
    twoOptionSelected,
    changeText
} from '../../../utils/autoComplete/autoCompleteAction'
import {subjectBasedOnRoomShift} from "../../../utils/autoComplete/SubjectBasedOnRoomShift";
import Response from "../../../utils/Response";


const formStyle = makeStyles(() => ({
    root: {
        "& select": {
            paddingTop: 10,
        },
    },
    control: {
        marginTop: 8,
    },
    file: {
        marginRight: '20px',
        width: '40%'
    }
}))


const ActivityDialogRegister = ({
                                    registerDialog,
                                    changeRoomShiftID,
                                    dialog,
                                    closeDialog,
                                    changeFile,
                                    dialogState,
                                    changeSubjectID,
                                    changeActivityName,
                                    changeActivityType,
                                    changeDeadlineTime,
                                    changeDeadlineDate,
                                    changeActivityDescription,
                                    registerDialogMessageClose

                                }) => {
    const form = formStyle()

    const [classes, setOpenClasses] = useState(false)
    const [classesOptions, setClassesOptions] = useState([])
    const [classesLoading, setClassesLoading] = useState(false)
    const [classesText, setClassesText] = useState('')
    const [subjects, setSubjects] = useState([])
    const [file, setFile] = useState(0)

    useEffect(() => {
        return () => {

            setClassesOptions([])
        }
    }, [])

    const OutputClass = (event, value) => {
        changeRoomShiftID(value === null ? '' : value[2])
        if (value === null) {
            setSubjects([])
            setClassesOptions([])
            changeSubjectID('')
        } else {
            subjectBasedOnRoomShift(autoCompleteSubjectBasedOnRoomShift, value[2]).then(response => {
                setSubjects(response.data.items)
                if (response.data.items[0] !== null) {
                    const data = response.data.items[0]
                    changeSubjectID(data[2])
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }

    const FileChange = (event) => {
        setFile(event.target.files.length)
        changeFile(event.target.files)
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-student"
    >
        <form noValidate className={form.root}>
            <DialogTitle id="add-student">Register Activity</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of L
                </DialogContentText>

                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail="Activity Register Not Successful"
                          messageSuccess="Activity Register Success"/>

                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <Button
                            className={form.file}
                            variant="contained"
                            component="label"
                            disableElevation
                        >
                            Upload File
                            <input

                                type="file"
                                onChange={(event) => FileChange(event)}
                                multiple
                                hidden
                            />


                        </Button>
                      <span>{file + ' File Selected'} </span>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <AutoComplete
                            open={classes}
                            setOpen={setOpenClasses}
                            filterOptions={TwoFilterOption}
                            options={classesOptions}
                            loading={classesLoading}
                            InputText={classesText}
                            changeAutoComplete={OutputClass}
                            changeText={(value) => changeText(value, setClassesText, setClassesLoading, setClassesOptions, autoCompleteRoomShift)}
                            noOptionText={"Search by grade fallowed by section "}
                            label={"Grade Section"}
                            optionLabel={twoOptionLabel}
                            optionSelected={twoOptionSelected}

                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel htmlFor="Subject">Subject</InputLabel>
                            <Select
                                native
                                value={dialogState.subjectID}
                                label="Subject"
                                inputProps={{
                                    name: 'Subject',
                                    id: 'Subject',
                                }}
                                onChange={(event => changeSubjectID(event.target.value))}
                            >
                                {
                                    subjects.map((subject) => <option key={subject[2]} value={subject[2]}>
                                        {subject[0] + ' ' + subject[1]}
                                    </option>)
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <TextField
                            margin="dense"
                            id="activityTitle"
                            label="Activity Name"
                            value={dialogState.activityName}
                            onChange={(event) => changeActivityName(event.target.value)}
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel htmlFor="ActivityType">Activity Type</InputLabel>
                            <Select
                                native
                                value={dialogState.activityType}
                                label="ActivityType"
                                inputProps={{
                                    name: 'ActivityType',
                                    id: 'ActivityType',
                                }}
                                onChange={(event => changeActivityType(event.target.value))}
                            >
                                <option value='Quiz'>quiz</option>
                                <option value='Assignment'>assignment</option>
                                <option value='Project'>Project</option>
                                {/*<option value='SAT'>SAT</option>*/}
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item md={6} xs={6}>
                        <TextField
                            margin="dense"
                            label="Deadline Date"
                            value={dialogState.activityDeadlineDate}
                            onChange={(event) => changeDeadlineDate(event.target.value)}
                            type="date"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item md={6} xs={6}>
                        <TextField
                            margin="dense"
                            label="DeadlineTime(Optional)"
                            value={dialogState.activityDeadlineTime}
                            onChange={(event) => changeDeadlineTime(event.target.value)}
                            type="time"
                            fullWidth
                            variant="outlined"
                        />

                    </Grid>
                    <Grid item md={12} xs={12}>
                        <InputLabel htmlFor="ActivityDescription">Activity Description(Optional)</InputLabel>
                        <TextareaAutosize
                            label="Description"
                            rowsMin={10}
                            aria-label="maximum height"
                            style={{width: '100%', marginBottom: '10px', marginTop: '10px'}}
                            onChange={(event) => changeActivityDescription(event.target.value)}
                        />
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button onClick={registerDialog} color='primary'>
                    Register
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
        dialogState: state.AdminActivityDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFile: (file) => dispatch(activityAction.changeFile(file)),
        changeRoomShiftID: (data) => dispatch(activityAction.changeRoomShiftID(data)),
        changeSubjectID: (data) => dispatch(activityAction.changeSubjectID(data)),
        changeActivityName: (data) => dispatch(activityAction.changeActivityName(data)),
        changeActivityType: (data) => dispatch(activityAction.changeActivityType(data)),
        changeDeadlineTime: (data) => dispatch(activityAction.changeDeadlineTime(data)),
        changeDeadlineDate: (data) => dispatch(activityAction.changeDeadlineDate(data)),
        changeActivityDescription: (data) => dispatch(activityAction.changeActivityDescription(data)),
        registerDialogMessageClose: (event) => dispatch(action.registerDialogMessageClose(event, Activity)),
        registerDialog: () => dispatch(action.dialogRegister(Activity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDialogRegister)