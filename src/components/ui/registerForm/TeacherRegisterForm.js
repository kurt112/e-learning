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
                                 closeDialog,
                                 changeFirstName,
                                 changeLastName,
                                 changeMiddleName,
                                 changeSuffix,
                                 changeBirthdate,
                                 changeGender,
                                 changeEmail,
                                 changePassword,
                                 changeReTypePassword,
                                 register,
                                 translation
                             }) => {

    return <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="add-teacher"
        fullWidth={true}
        maxWidth={"lg"}
    >

        <form noValidate>
            <DialogTitle id="add-student">Register Teacher Form</DialogTitle>
            <DialogContent>
                <Grid container spacing={1}>
                    <Grid item md={4} xs={12}>
                        <TextField
                            error={teacher.firstNameError}
                            helperText={teacher.firstNameErrorMessage}
                            margin="dense"
                            type="text"
                            fullWidth
                            label={translation.language['label.global.first.name']}
                            variant="outlined"
                            value={teacher.firstName}
                            onChange={(event) => changeFirstName(event.target.value)}
                        />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <TextField
                            error={teacher.middleNameError}
                            helperText={teacher.middleNameErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.middle.name']}
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={teacher.middleName}
                            onChange={(event) => changeMiddleName(event.target.value)}
                        />
                    </Grid>


                    <Grid item md={4} xs={12}>
                        <TextField
                            error={teacher.lastNameError}
                            helperText={teacher.lastNameErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.last.name']}
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
                            label={translation.language['label.global.suffix']}
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={teacher.suffix}
                            onChange={(event) => changeSuffix(event.target.value)}
                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <TextField
                            error={teacher.birthdateError}
                            helperText={teacher.birthdateErrorMessage}
                            InputLabelProps={{shrink: true}}
                            margin="dense"
                            label={translation.language['label.global.birth.date']}
                            type="date"
                            fullWidth
                            variant="outlined"
                            value={teacher.birthdate}
                            onChange={(event) => changeBirthdate(event.target.value)}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel htmlFor={translation.language['label.global.gender']}>{translation.language['label.global.gender']}</InputLabel>
                            <Select
                                native
                                label={translation.language['label.global.gender']}
                                inputProps={{
                                    name: translation.language['label.global.gender'],
                                    id: translation.language['label.global.gender'],
                                }}
                                value={teacher.gender}
                                onChange={(event) => changeGender(event.target.value)}
                            >
                                <option value={translation.language['label.global.male']}>{translation.language['label.global.male']}</option>
                                <option value={translation.language['label.global.female']}>{translation.language['label.global.female']}</option>
                            </Select>
                        </FormControl>

                    </Grid>


                    <Grid item md={4} xs={12}>
                        <TextField
                            error={teacher.emailError}
                            helperText={teacher.emailErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.email']}
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={teacher.email}
                            onChange={(event) => changeEmail(event.target.value)}
                        />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <TextField
                            error={teacher.passwordError}
                            helperText={teacher.passwordErrorMessage}
                            margin="dense"
                            label={translation.language['label.login.input.password']}
                            type="password"
                            fullWidth
                            variant="outlined"
                            value={teacher.password}
                            onChange={(event) => changePassword(event.target.value)}
                        />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <TextField
                            error={teacher.reTypePasswordError}
                            helperText={teacher.reTypePasswordErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.retypePassword']}
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
                <Button color='primary' onClick={register}>
                    {
                        translation.language["label.global.register"]
                    }
                </Button>
                <Button onClick={closeDialog} color='secondary'>
                    {
                        translation.language["label.button.cancel"]
                    }
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
        changeReTypePassword: (data) => dispatch(actions.changeReTypePassword(data, Teacher)),

        register: () => dispatch(actions.initRegister(Teacher))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TeacherRegisterForm)