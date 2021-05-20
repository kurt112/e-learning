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
const UploadResourceDialog = ({

                                  dialog,
                                  closeDialog,
                                  changeFile,
                                  changeName,
                                  changeDescription,
                                  changeType,
                                  dialogState,
                                  upload,
                                  registerDialogMessageClose
                              }) => {

    const [file, setFile] = useState(0)

    const FileChange = (event) => {
        setFile(event.target.files.length)
        changeFile(event.target.files)
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
            >Create Resources</DialogTitle>
            <DialogContent>

                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={AddedResourceFail}
                          messageSuccess={AddedResourceSuccess}/>

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
                        <span>{' ' + file + ' File Selected'} </span>
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
                                label="ResourceType"
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
        dialogState: state.UploadResource
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFile: (file) => dispatch(UploadResourceAction.changeFile(file)),
        changeName: (data) => dispatch(UploadResourceAction.changeName(data)),
        changeDescription: (data) => dispatch(UploadResourceAction.changeDescription(data)),
        changeType: (data) => dispatch(UploadResourceAction.changeType(data)),

        registerDialogMessageClose: () => dispatch(dialogAction.registerDialogMessageClose(Teacher_Resource_Upload)),
        upload: () => dispatch(dialogAction.dialogRegister(Teacher_Resource_Upload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadResourceDialog)