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
import * as UploadResourceAction from '../../../../../store/action/teacher/TeacherResource/TeacherResourceUploadDialogAction'
import * as dialogAction from '../../../../../store/action/__ActionGlobal/DialogAction'
import {useState} from "react";
import Response from "../../../utils/Response";
import {Teacher_Resource_Upload} from "../../../../../store/utils/Specify";

const UploadResourceDialog = ({
                                  dialog,
                                  closeDialog,
                                  changeFile,
                                  changeName,
                                  changeDescription,
                                  changeType,
                                  dialogState,
                                  upload,
                                  registerDialogMessageClose,
                                  translation
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
            >{translation.language["label.teacher.resource.dialog.create.title"]}</DialogTitle>
            <Divider/>
            <DialogContent>

                <Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={translation.language["message.teacher.dialog.register.fail"]}
                          messageSuccess={translation.language["message.teacher.dialog.register.success"]}/>

                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <Button
                            variant="contained"
                            component="label"
                            disableElevation
                        >
                            {translation.language["label.teacher.resource.dialog.create.upload.file"]}
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
                            label={translation.language["label.global.document.name"]}
                            value={dialogState.name}
                            onChange={(event) => changeName(event.target.value)}
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel
                                htmlFor={translation.language["label.teacher.resource.dialog.create.resource.type"]}>{translation.language["label.teacher.resource.dialog.create.resource.type"]}</InputLabel>
                            <Select
                                value={dialogState.type}
                                native
                                label={translation.language["label.teacher.resource.dialog.create.resource.type"]}
                                inputProps={{
                                    name: 'type',
                                    id: 'type',
                                }}
                                onChange={(event => changeType(event.target.value))}
                            >
                                <option
                                    value={translation.language["label.global.lecture"]}>{translation.language["label.global.lecture"]}</option>
                                <option
                                    value={translation.language["label.global.quiz"]}>{translation.language["label.global.quiz"]}</option>
                                <option
                                    value={translation.language["label.global.exam"]}>{translation.language["label.global.exam"]}</option>
                                <option
                                    value={translation.language["label.global.assignment"]}>{translation.language["label.global.assignment"]}</option>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <InputLabel
                            htmlFor="ActivityDescription">{translation.language["label.teacher.resource.dialog.create.description"]}</InputLabel>
                        <TextareaAutosize
                            value={dialogState.description}
                            label={translation.language["label.global.description"]}
                            rowsMin={10}
                            aria-label="maximum height"
                            style={{width: '100%', marginBottom: '10px', marginTop: '10px'}}
                            onChange={(event) => changeDescription(event.target.value)}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant={'contained'} disableElevation onClick={clickUpload} color='primary'>
                    {translation.language["label.global.upload"]}
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