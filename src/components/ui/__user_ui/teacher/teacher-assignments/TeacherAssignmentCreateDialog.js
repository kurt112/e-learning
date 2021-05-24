import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControl,
    Grid, InputLabel,
    Select, TextareaAutosize,
    TextField
} from "@material-ui/core"

import {connect} from 'react-redux'
import * as UploadResourceAction
    from '../../../../../store/action/teacher/TeacherResource/TeacherResourceUploadDialogAction'
import * as dialogAction from '../../../../../store/action/__ActionGlobal/AdminDialogAction'
import {useState} from "react";
import Response from "../../../utils/Response";
import {Teacher_Resource_Upload} from "../../../../../store/utils/Specify";
import {AddedResourceFail, AddedResourceSuccess} from "../../../../../__Messages/TeacherResourceMessage";
import AutoComplete from "../../../utils/autoComplete/AutoComplete";
const TeacherAssignmentCreateDialog = ({

                                  dialog,
                                  closeDialog,
                                  upload,
                                  registerDialogMessageClose
                              }) => {

    const [file, setFile] = useState(0)

    const FileChange = (event) => {
        setFile(event.target.files.length)
        // changeFile(event.target.files)
    }

    const clickUpload = () => {
        upload()
        setFile(0)
    }

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="create-resource"
        fullWidth
        maxWidth={"lg"}
    >
        <form noValidate>
            <DialogTitle id="create-resource"
            >Create Assignment</DialogTitle>
            <DialogContent>

                {/*<Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}*/}
                {/*          messageFail={AddedResourceFail}*/}
                {/*          messageSuccess={AddedResourceSuccess}/>*/}

                <Grid container spacing={1}>
                    <Grid item md={4} xs={12}>
                        <AutoComplete
                            // open={openRoomName}
                            // setOpen={setOpenRoomName}
                            // filterOptions={filterOptionsTeacher}
                            // options={roomOptions}
                            // loading={loading}
                            // InputText={roomText}
                            // changeAutoComplete={OutputRoom}
                            // changeText={changeRoom}
                            noOptionText={"Search by Room Name"}
                            label={"Assignment Resource"}
                            // optionLabel={optionLabel}
                            // optionSelected={optionSelected}
                        />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <AutoComplete
                            // open={openRoomName}
                            // setOpen={setOpenRoomName}
                            // filterOptions={filterOptionsTeacher}
                            // options={roomOptions}
                            // loading={loading}
                            // InputText={roomText}
                            // changeAutoComplete={OutputRoom}
                            // changeText={changeRoom}
                            noOptionText={"No Class Found"}
                            label={"Your Class"}
                            // optionLabel={optionLabel}
                            // optionSelected={optionSelected}
                        />
                    </Grid>

                    <Grid item md={4} xs={6}>
                        <TextField
                            margin="dense"
                            label="Deadline"
                            type="datetime-local"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>


                    <Grid item md={3} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel htmlFor="Semester">Semester</InputLabel>
                            <Select
                                // value={dialogState.type}
                                native
                                label="Semester"
                                inputProps={{
                                    name: 'type',
                                    id: 'type',
                                }}
                                // onChange={(event => changeType(event.target.value))}
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
                                // value={dialogState.type}
                                native
                                label="Quarter"
                                inputProps={{
                                    name: 'type',
                                    id: 'type',
                                }}
                                // onChange={(event => changeType(event.target.value))}
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
                            label="Low Grade"
                             type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item md={3} xs={4}>
                        <TextField
                            margin="dense"
                            label="High Grade"
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <InputLabel htmlFor="ActivityDescription">Assignment Description(Optional)</InputLabel>
                        <TextareaAutosize
                            // value={dialogState.description}
                            label="Description"
                            rowsMin={10}
                            aria-label="maximum height"
                            style={{width: '100%', marginBottom: '10px', marginTop: '10px'}}
                            // onChange={(event) => changeDescription(event.target.value)}
                        />
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button onClick={clickUpload} color='primary'>
                    Upload
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
        // dialogState: state.UploadResource
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /*changeFile: (file) => dispatch(UploadResourceAction.changeFile(file)),
        changeName: (data) => dispatch(UploadResourceAction.changeName(data)),
        changeDescription: (data) => dispatch(UploadResourceAction.changeDescription(data)),
        changeType: (data) => dispatch(UploadResourceAction.changeType(data)),

        registerDialogMessageClose: () => dispatch(dialogAction.registerDialogMessageClose(Teacher_Resource_Upload)),
        upload: () => dispatch(dialogAction.dialogRegister(Teacher_Resource_Upload))*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherAssignmentCreateDialog)