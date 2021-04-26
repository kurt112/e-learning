import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControl,
    Grid, InputLabel,
     Select, TextareaAutosize,
    TextField
} from "@material-ui/core"

import {connect} from 'react-redux'
import * as UploadResourceAction from '../../../../../store/action/teacher/TeacherResource/TeacherResourceUploadDialogAction'
import * as action from '../../../../../store/action/__ActionGlobal/AdminDialogAction'
import {useEffect, useState} from "react";
import Response from "../../../utils/Response";
import {Teacher_Resource} from "../../../../../store/utils/Specify";

const UploadResourceDialog = ({
                                  registerDialog,
                                  dialog,
                                  closeDialog,
                                  changeFile,
                                  changeName,
                                  changeDescription,
                                  changeType,
                                  dialogState,
                              }) => {

    const [file, setFile] = useState(0)

    const FileChange = (event) => {
        setFile(event.target.files.length)
        changeFile(event.target.files)
    }
    useEffect(() => {

        registerDialog()
    }, [])
    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-student"
    >
        <form noValidate >
            <DialogTitle id="add-student">Create Resources</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of L
                </DialogContentText>

                {/*<Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}*/}
                {/*          messageFail="Activity Register Not Successful"*/}
                {/*          messageSuccess="Activity Register Success"/>*/}

                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <Button
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
                        <TextField
                            margin="dense"
                            label="Document Name"
                            value={dialogState.name}
                            onChange={(event) => changeName(event.target.value)}
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel htmlFor="ResourceType">Resource Type</InputLabel>
                            <Select
                                value={dialogState.type}
                                native
                                label="type"
                                inputProps={{
                                    name: 'type',
                                    id: 'type',
                                }}
                                onChange={(event => changeType(event.target.value))}
                            >
                                <option value='Lecture'>Lecture</option>
                                <option value='Activity'>Activity</option>
                            </Select>
                        </FormControl>

                    </Grid>

                    <Grid item md={12} xs={12}>
                        <InputLabel htmlFor="ActivityDescription">Activity Description(Optional)</InputLabel>
                        <TextareaAutosize
                            value={dialogState.description}
                            label="Description"
                            rowsMin={10}
                            aria-label="maximum height"
                            style={{width: '100%', marginBottom: '10px', marginTop: '10px'}}
                            onChange={(event) => changeDescription(event.target.value)}
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
        dialogState: state.UploadResource
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFile: (file) => dispatch(UploadResourceAction.changeFile(file)),
        changeName: (data) => dispatch(UploadResourceAction.changeName(data)),
        changeDescription: (data) => dispatch(UploadResourceAction.changeDescription(data)),
        changeType: (data) => dispatch(UploadResourceAction.changeType(data)),

        registerDialogMessageClose: (event) => dispatch(action.registerDialogMessageClose(event, Teacher_Resource)),
        registerDialog: () => dispatch(action.dialogRegister(Teacher_Resource))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadResourceDialog)