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
    DialogTitle, Divider,
    FormControl,
    Grid,
    InputLabel,
    Select,
    TextField
} from "@material-ui/core"

import {connect} from "react-redux";
import * as actions from '../../../../../store/action/admin/Subject'
import {Subject} from "../../../../../store/utils/Specify";
import * as action from "../../../../../store/action/__ActionGlobal/DialogAction";
import Response from "../../../utils/Response";
import {useEffect} from "react";

const UpdateSubject = (
    {
        closeDialog,
        dialog,
        state,
        changeSubjectName,
        changeSubjectCode,
        changeSubjectMajor,
        registerDialogMessageClose,
        registerDialog,
        translation
    }) => {

    const updateClick = async () => {
        await new Promise(r => setTimeout(r, 1000));
        registerDialogMessageClose()
        closeDialog()
    }

    useEffect(() => {

        if (state.done === true && state.subjectCodeError === false && state.subjectNameError === false) {
            updateClick().then(ignored => {
            })
        }

    }, [state.done])


    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-subject"
        maxWidth="md"
        fullWidth
    >
        <form noValidate>
            <DialogTitle id="add-subject">{translation.language["tooltip.subject.update"]}</DialogTitle>
            <Divider/>
            <DialogContent>
                <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={translation.language["message.subject.dialog.register.fail"]}
                          messageSuccess={translation.language["message.subject.dialog.register.success"]}/>

                <Grid container spacing={1}>
                    <Grid item md={4} xs={12}>
                        <TextField
                            error={state.subjectNameError}
                            helperText={state.subjectNameErrorMessage}
                            autoFocus
                            margin="dense"
                            label={translation.language["label.global.subject.name"]}
                            type="text"
                            fullWidth
                            variant="outlined"
                            name='subject-name'
                            value={state.subjectName}
                            onChange={(event) => changeSubjectName(event)}
                        />

                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            error={state.subjectCodeError}
                            helperText={state.subjectCodeErrorMessage}
                            margin="dense"
                            label={translation.language["label.global.subject.code"]}
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={state.subjectCode}
                            onChange={(event) => changeSubjectCode(event)}
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel
                                htmlFor={translation.language["label.global.major"]}>{translation.language["label.global.major"]}</InputLabel>
                            <Select
                                native
                                value={state.subjectMajor}
                                label={translation.language["label.global.major"]}
                                inputProps={{
                                    name: translation.language["label.global.major"],
                                    id: translation.language["label.global.major"],
                                }}
                                onChange={(event => changeSubjectMajor(event))}
                            >
                                <option
                                    value={translation.language["label.global.minor"]}>{translation.language["label.global.minor"]}</option>
                                <option
                                    value={translation.language["label.global.major"]}>{translation.language["label.global.major"]}</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} disableElevation color='primary' onClick={registerDialog}>
                    {translation.language["label.button.update"]}
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
        state: state.AdminSubjectDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSubjectName: (event) => dispatch(actions.changeSubjectName(event.target.value)),
        changeSubjectCode: (event) => dispatch(actions.changeSubjectCode(event.target.value)),
        changeSubjectMajor: (event) => dispatch(actions.changeSubjectMajor(event.target.value)),

        registerDialogMessageClose: () => dispatch(action.registerDialogMessageClose(Subject)),
        registerDialog: () => dispatch(action.dialogRegister(Subject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSubject)