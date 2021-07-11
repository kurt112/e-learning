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
    DialogTitle, FormControl, Grid, InputLabel, Select,
    TextField
} from "@material-ui/core";
import * as actions from '../../../store/action/__ActionGlobal/UserRegisterAction'
import {connect} from "react-redux";
import {Student} from "../../../store/utils/Specify";

const StudentRegisterForm = ({
                                 student,
                                 open,
                                 setStudent,
                                 changeFirstName,
                                 changeLastName,
                                 changeMiddleName,
                                 changeSuffix,
                                 changeBirthdate,
                                 changeGender,
                                 changeEmail,
                                 changePassword,
                                 changeReTypePassword,
     register
                             }) => {

    return <Dialog
        open={open}
        onClose={() => setStudent(false)}
        aria-labelledby="add-teacher"
        fullWidth={true}
        maxWidth={"lg"}
    >

        <form noValidate>
            <DialogTitle id="add-student">Register Student Form</DialogTitle>

            <DialogContent>


                {/*<Response dialogState={dialogState} registerDialogMessageClose={registerDialogMessageClose}*/}
                {/*          messageFail="Room Register Not Successful"*/}
                {/*          messageSuccess="Register Room Success"/>*/}

                <Grid container spacing={1}>
                    <Grid item md={4} xs={12}>
                        <TextField
                            // helperText='Wwe'
                            margin="dense"
                            id="firstName"
                            label="First Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={student.firstName}
                            onChange={(event) => changeFirstName(event.target.value)}
                        />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <TextField
                            margin="dense"
                            id="middleName"
                            label="Middle Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={student.middleName}
                            onChange={(event) => changeMiddleName(event.target.value)}
                        />
                    </Grid>


                    <Grid item md={4} xs={12}>
                        <TextField
                            margin="dense"
                            id="lastName"
                            label="Last Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={student.lastName}
                            onChange={(event) => changeLastName(event.target.value)}
                        />
                    </Grid>
                    <Grid item md={1} xs={12}>
                        <TextField
                            margin="dense"
                            id="lastName"
                            label="Suffix "
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={student.suffix}
                            onChange={(event) => changeSuffix(event.target.value)}
                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <TextField
                            margin="dense"
                            id="birthdate"
                            label="BirthDate"
                            type="date"
                            fullWidth
                            variant="outlined"
                            value={student.birthdate}
                            onChange={(event) => changeBirthdate(event.target.value)}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel htmlFor="gender">Gender</InputLabel>
                            <Select
                                native
                                label="gender"
                                inputProps={{
                                    name: 'gender',
                                    id: 'gender',
                                }}
                                value={student.gender}
                                onChange={(event) => changeGender(event.target.value)}
                            >
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>

                            </Select>
                        </FormControl>

                    </Grid>


                    <Grid item md={4} xs={12}>
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={student.email}
                            onChange={(event) => changeEmail(event.target.value)}
                        />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <TextField
                            // helperText={'asdf'}
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            value={student.password}
                            onChange={(event) => changePassword(event.target.value)}
                        />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <TextField
                            // helperText={'asdf'}
                            margin="dense"
                            id="ReTypePassword"
                            label="Re type Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            value={student.reTypePassword}
                            onChange={(event) => changeReTypePassword(event.target.value)}
                        />
                    </Grid>


                </Grid>
            </DialogContent>

            <DialogActions>
                <Button color='primary' onClick={(register)}>
                    Register
                </Button>
                <Button onClick={() => setStudent(false)} color='secondary'>
                    Cancel
                </Button>
            </DialogActions>
        </form>
    </Dialog>
}

const mapStateToProps = (state) => {
    return {
        student: state.StudentRegisterForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFirstName: (data) => dispatch(actions.changeFirstName(data, Student)),
        changeLastName: (data) => dispatch(actions.changeLastName(data, Student)),
        changeMiddleName: (data) => dispatch(actions.changeMiddleName(data, Student)),
        changeSuffix: (data) => dispatch(actions.changeSuffix(data, Student)),
        changeBirthdate: (data) => dispatch(actions.changeBirthdate(data, Student)),
        changeGender: (data) => dispatch(actions.changeGender(data, Student)),
        changeEmail: (data) => dispatch(actions.changeEmail(data, Student)),
        changePassword: (data) => dispatch(actions.changePassword(data, Student)),
        changeReTypePassword: (data) => dispatch(actions.changeReTypePassword(data,Student)),

        register: () => dispatch(actions.initRegister(Student))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentRegisterForm)