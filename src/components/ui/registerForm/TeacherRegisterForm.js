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
import {Teacher} from "../../../store/utils/Specify";

const TeacherRegisterForm = ({
                                 teacher,
                                 open,
                                 setTeacher,
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
        onClose={() => setTeacher(false)}
        aria-labelledby="add-teacher"
        fullWidth={true}
        maxWidth={"lg"}
    >

        <form noValidate>
            <DialogTitle id="add-student">Register Teacher Form</DialogTitle>

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
                            value={teacher.firstName}
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
                            value={teacher.middleName}
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
                            value={teacher.lastName}
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
                            value={teacher.suffix}
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
                            value={teacher.birthdate}
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
                                value={teacher.gender}
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
                            value={teacher.email}
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
                            value={teacher.password}
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
                            value={teacher.reTypePassword}
                            onChange={(event) => changeReTypePassword(event.target.value)}
                        />
                    </Grid>


                </Grid>
            </DialogContent>

            <DialogActions>
                <Button color='primary' onClick={(register)}>
                    Register
                </Button>
                <Button onClick={() => setTeacher(false)} color='secondary'>
                    Cancel
                </Button>
            </DialogActions>
        </form>
    </Dialog>
}

const mapStateToProps = (state) => {
    return {
        teacher: state.TeacherRegisterForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFirstName: (data) => dispatch(actions.changeFirstName(data, Teacher)),
        changeLastName: (data) => dispatch(actions.changeLastName(data, Teacher)),
        changeMiddleName: (data) => dispatch(actions.changeMiddleName(data, Teacher)),
        changeSuffix: (data) => dispatch(actions.changeSuffix(data, Teacher)),
        changeBirthdate: (data) => dispatch(actions.changeBirthdate(data, Teacher)),
        changeGender: (data) => dispatch(actions.changeGender(data, Teacher)),
        changeEmail: (data) => dispatch(actions.changeEmail(data, Teacher)),
        changePassword: (data) => dispatch(actions.changePassword(data, Teacher)),
        changeReTypePassword: (data) => dispatch(actions.changeReTypePassword(data,Teacher)),

        register: () => dispatch(actions.initRegister(Teacher))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TeacherRegisterForm)