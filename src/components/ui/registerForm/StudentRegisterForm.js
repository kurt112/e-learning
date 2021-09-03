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
    DialogTitle, FormControl, Grid, InputAdornment, InputLabel, Select,
    TextField
} from "@material-ui/core";
import * as actions from '../../../store/action/__ActionGlobal/UserRegisterAction'
import {connect} from "react-redux";
import {Student} from "../../../store/utils/Specify";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {useState} from "react";
import {getLessThanTenYears} from "../utils/dateFormat/DateTimeMinLow";

const StudentRegisterForm = ({
                                 student,
                                 open,
                                 changeFirstName,
                                 changeLastName,
                                 changeMiddleName,
                                 changeSuffix,
                                 changeBirthdate,
                                 changeGender,
                                 changeEmail,
                                 changePassword,
                                 changeReTypePassword,
                                 changeId,
                                 register,
                                 translation,
                                 closeDialog
                             }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [showRePassword, setShowRePassword] = useState(false)


    const handleClickShowRePassword = () => {
        setShowRePassword(!showRePassword)
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="add-teacher"
        fullWidth={true}
        maxWidth={"lg"}
    >

        <form noValidate>
            <DialogTitle id="add-student">{translation.language["label.global.student.register.form"]}</DialogTitle>

            <DialogContent>

                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <TextField
                            error={student.idError}
                            helperText={student.idErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.lrn']}
                            autoFocus={true}
                            type="number"
                            fullWidth
                            variant="outlined"
                            value={student.id}
                            onChange={(event) =>changeId(event.target.value)}
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            error={student.firstNameError}
                            helperText={student.firstNameErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.first.name']}
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={student.firstName}
                            onChange={(event) => changeFirstName(event.target.value)}
                        />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <TextField
                            error={student.middleNameError}
                            helperText={student.middleNameErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.middle.name']}
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={student.middleName}
                            onChange={(event) => changeMiddleName(event.target.value)}
                        />
                    </Grid>


                    <Grid item md={4} xs={12}>
                        <TextField
                            error={student.lastNameError}
                            helperText={student.lastNameErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.last.name']}
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
                            label={translation.language['label.global.suffix']}
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={student.suffix}
                            onChange={(event) => changeSuffix(event.target.value)}
                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <TextField
                            error={student.birthdateError}
                            helperText={student.birthdateErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.birth.date']}
                            type="date"
                            fullWidth
                            variant="outlined"
                            value={student.birthdate}
                            onChange={(event) => changeBirthdate(event.target.value)}
                            getLessThanTenYears
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                max: getLessThanTenYears()
                            }}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined" margin='dense' fullWidth>
                            <InputLabel
                                htmlFor={translation.language['label.global.gender']}>{translation.language['label.global.gender']}</InputLabel>
                            <Select
                                native
                                label={translation.language['label.global.gender']}
                                inputProps={{
                                    name: translation.language['label.global.gender'],
                                    id: translation.language['label.global.gender'],
                                }}
                                value={student.gender}
                                onChange={(event) => changeGender(event.target.value)}
                            >
                                <option
                                    value={translation.language['label.global.male']}>{translation.language['label.global.male']}</option>
                                <option
                                    value={translation.language['label.global.female']}>{translation.language['label.global.female']}</option>

                            </Select>
                        </FormControl>

                    </Grid>


                    <Grid item md={4} xs={12}>
                        <TextField
                            error={student.emailError}
                            helperText={student.emailErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.email']}
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={student.email}
                            onChange={(event) => changeEmail(event.target.value)}
                        />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <TextField
                            error={student.passwordError}
                            helperText={student.passwordErrorMessage}
                            margin="dense"
                            label={translation.language['label.login.input.password']}
                            type={showPassword===false? "password":"text"}
                            fullWidth
                            variant="outlined"
                            value={student.password}
                            onChange={(event) => changePassword(event.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="end">
                                        {
                                            showPassword === false ?
                                                <VisibilityOff onClick={handleClickShowPassword}
                                                               style={{cursor: 'pointer'}}/> :
                                                <Visibility onClick={handleClickShowPassword}
                                                            style={{cursor: 'pointer'}}/>
                                        }
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <TextField
                            error={student.reTypePasswordError}
                            helperText={student.reTypePasswordErrorMessage}
                            margin="dense"
                            label={translation.language['label.global.retypePassword']}
                            type={showRePassword===false? "password":"text"}
                            fullWidth
                            variant="outlined"
                            value={student.reTypePassword}
                            onChange={(event) => changeReTypePassword(event.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="end">
                                        {
                                            showRePassword === false ?
                                                <VisibilityOff onClick={handleClickShowRePassword}
                                                               style={{cursor: 'pointer'}}/> :
                                                <Visibility onClick={handleClickShowRePassword}
                                                            style={{cursor: 'pointer'}}/>
                                        }
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>


                </Grid>
            </DialogContent>

            <DialogActions>
                <Button color='primary' variant={'contained'} disableElevation onClick={register}>
                    {
                        translation.language["label.global.register"]
                    }
                </Button>
                <Button onClick={closeDialog} variant={'contained'} disableElevation color='secondary'>
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
        changeReTypePassword: (data) => dispatch(actions.changeReTypePassword(data, Student)),
        changeId: (data) => dispatch(actions.changeId(data,Student)),

        register: () => dispatch(actions.initRegister(Student))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentRegisterForm)