/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import {Divider, FormControl, Hidden, InputLabel, LinearProgress, MenuItem, Select} from '@material-ui/core';
import Copyright from '../copyright/Copyright';
import {connect} from 'react-redux'
import * as action from '../../../store/action/login/LoginAction'
import {StudentRegisterForm, TeacherRegisterForm, UserIDForm} from "../registerForm";
import style from './LoginStyle'
import {changeLanguage} from '../../../store/action/__ActionGlobal/ProfileAction'

const Login = ({
                   loginState,
                   changeEmail,
                   changePassword,
                   login,
                   changeId,
                   registerInit,
                   registerOpen,
                   registerClose,
                   translation,
                   changeLanguage,
                   closeRegisterForm
               }) => {
    const classes = style();


    const ClickEnter = (event) => {
        if (event === "Enter") login()
    }


    const register = async () => {
        await registerInit()
    }


    return (
        <Grid container component="main" className={classes.root}>


            {
                loginState.studentForm === false && loginState.teacherForm === false ?
                    <UserIDForm
                        submit={register}
                        changeId={changeId}
                        dialog={loginState.dialog}
                        state={loginState}
                        registerClose={registerClose}
                        translation={translation}
                    /> : null}

            {
                loginState.studentForm === true ?
                    <StudentRegisterForm translation={translation}
                                         closeDialog={closeRegisterForm}
                                         open={loginState.studentForm}
                    /> : null
            }
            {
                loginState.teacherForm === true ?
                    <TeacherRegisterForm translation={translation}
                                         closeDialog={closeRegisterForm}
                                         open={loginState.teacherForm}
                    /> : null
            }


            <CssBaseline/>

            <Hidden mdDown>
                <Grid item xs={false} sm={false} md={8} className={classes.image}>
                    <p className={classes.textSide}><em><b>{translation.language["label.login.heading.title"]}</b></em>
                    </p>
                    <Divider style={{marginRight: 260, marginLeft: 260, backgroundColor: '#333'}}/>
                    <p style={{cursor: 'default'}}>  {new Date().getFullYear()}</p>
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={4} component={Paper} elevation={6} square>


                <div className={classes.paper}>
                    <AccountCircleIcon style={{fontSize: 70}}/>
                    <Typography component="h1" variant="h5">
                        {translation.language["label.login.heading.login"]}
                    </Typography>

                    {
                        loginState.loading === true ?
                            <Box className={classes.progress}>
                                <LinearProgress color="secondary"/>
                            </Box> :
                            null
                    }

                    <form className={classes.form} noValidate>
                        <TextField
                            value={loginState.username}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label={translation.language["label.login.input.email"]}
                            name="email"
                            autoComplete="email"
                            onChange={(event) => changeEmail(event.target.value)}
                            autoFocus
                            onKeyPress={(event) => ClickEnter(event.key)}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={loginState.password}
                            name="password"
                            label={translation.language["label.login.input.password"]}
                            type="password"
                            onChange={(event) => changePassword(event.target.value)}
                            autoComplete="current-password"
                            onKeyPress={(event) => ClickEnter(event.key)}
                        />
                        <Box className={classes.util}>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label={translation.language["label.login.check.remember"]}
                            />
                            {loginState.error === true ? <p>{translation.language["validation.login.error"]}</p> : null}
                        </Box>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={login}
                        >
                            {translation.language["label.login.button.login"]}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Grid item>
                                    <Button color="primary">{translation.language["label.login.button.forgot"]}</Button>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button color="primary"
                                        onClick={registerOpen}>{translation.language["label.login.button.sign.up"]}</Button>
                            </Grid>
                        </Grid>
                        <br/>
                        <Grid item md={4}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel
                                    id="demo-simple-select-outlined-label">{translation.language["label.global.select.language"]}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={translation.index}
                                    onChange={(event) => changeLanguage(event.target.value)}
                                    label={translation.language["label.global.select.language"]}
                                >
                                    <MenuItem value={0}>English</MenuItem>
                                    <MenuItem value={1}>Cebuano</MenuItem>
                                    <MenuItem value={2}>Ilocano</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        loginState: state.Login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeEmail: (data) => dispatch(action.changeEmail(data)),
        changePassword: (data) => dispatch(action.changePassword(data)),
        login: () => dispatch(action.Login()),

        //  Register action
        registerOpen: () => dispatch(action.registerOpen()),
        registerInit: () => dispatch(action.registerInit()),
        registerClose: () => dispatch(action.registerClose()),
        changeId: (data) => dispatch(action.changeId(data)),
        changeLanguage: (data) => dispatch(changeLanguage(data)),
        closeRegisterForm: () => dispatch(action.closeRegisterForm())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)