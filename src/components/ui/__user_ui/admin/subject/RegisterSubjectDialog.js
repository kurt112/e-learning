import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
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
        subject,
        changeSubjectName,
        changeSubjectCode,
        changeSubjectMajor,
        registerDialogMessageClose,
        registerDialog
    }) => {

    return <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="add-subject"
        maxWidth="md"
        fullWidth
    >
        <form noValidate>


            <DialogTitle id="add-subject">Register Subject</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of L
                </DialogContentText>

                <Response dialogState={subject} registerDialogMessageClose={registerDialogMessageClose}
                          messageFail="Subject Register Not Successful"
                          messageSuccess="Subject Register Success"/>

                <Grid container spacing={1}>
                    <Grid item md={4} xs={12}>
                        <TextField autoFocus
                                   margin="dense"
                                   id="subject-name"
                                   label="Subject Name"
                                   type="text"
                                   fullWidth
                                   variant="outlined"
                                   name='subject-name'
                                   value={subject.subjectName}
                                   onChange={(event) => changeSubjectName(event)}
                        />

                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            margin="dense"
                            id="subject-code"
                            label="Subject Code"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={subject.subjectCode}
                            onChange={(event) => changeSubjectCode(event)}
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <FormControl variant="outlined"  margin='dense' fullWidth>
                            <InputLabel htmlFor="Major">Major</InputLabel>
                            <Select
                                native
                                value={subject.subjectMajor}
                                // onChange={handleChange}
                                label="Major"
                                inputProps={{
                                    name: 'age',
                                    id: 'Major',
                                }}
                                onChange={(event => changeSubjectMajor(event))}
                            >
                                <option value='Minor'>Minor</option>
                                <option value='Major'>Major</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button color='primary' onClick={registerDialog}>
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
        subject: state.AdminSubjectDialog
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSubject)