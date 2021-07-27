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


const RegisterSubject = (
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

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-subject"
        maxWidth="md"
        fullWidth
    >
        <form noValidate>
            <DialogTitle id="add-subject">{translation.language["label.subject.dialog.add.title"]}</DialogTitle>
            <Divider/>
            <DialogContent>
                <Response dialogState={state} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail={translation.language["message.subject.dialog.register.fail"]}
                          messageSuccess={translation.language["message.subject.dialog.register.success"]}/>

                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
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
                            onChange={(event) => changeSubjectName(event.target.value)}
                        />

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            error={state.subjectCodeError}
                            helperText={state.subjectCodeErrorMessage}
                            margin="dense"
                            label={translation.language["label.global.subject.code"]}
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={state.subjectCode}
                            onChange={(event) => changeSubjectCode(event.target.value)}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel
                                htmlFor={translation.language["label.global.category"]}>{translation.language["label.global.category"]}</InputLabel>
                            <Select
                                native
                                value={state.subjectMajor}
                                label={translation.language["label.global.category"]}
                                inputProps={{
                                    name: translation.language["label.global.category"],
                                    id: translation.language["label.global.category"],
                                }}
                                onChange={(event => changeSubjectMajor(event.target.value))}
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
                    {translation.language["label.button.save"]}
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
        changeSubjectName: (data) => dispatch(actions.changeSubjectName(data)),
        changeSubjectCode: (data) => dispatch(actions.changeSubjectCode(data)),
        changeSubjectMajor: (data) => dispatch(actions.changeSubjectMajor(data)),

        registerDialogMessageClose: () => dispatch(action.registerDialogMessageClose(Subject)),
        registerDialog: () => dispatch(action.dialogRegister(Subject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSubject)