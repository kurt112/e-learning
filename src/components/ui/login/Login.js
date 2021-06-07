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
import {Divider, Hidden, LinearProgress} from '@material-ui/core';
import Copyright from '../copyright/Copyright';
import {connect} from 'react-redux'
import * as action from '../../../store/action/login/LoginAction'
import {StudentRegisterForm, TeacherRegisterForm,UserIDForm} from "../registerForm";
import style from './LoginStyle'
import {useEffect, useState} from "react";
import {Student, Teacher} from "../../../store/utils/Specify";

const Login = ({loginState, changeEmail, changePassword, login, changeId,
                   registerInit, registerOpen,registerClose}) => {

    const classes = style();

    const [studentForm, setStudentForm] = useState(false)
    const [teacherForm, setTeacherForm] = useState(false)

    useEffect(() => {
        // login()
    }, [])

    useEffect(() => {


        if(loginState.form === Student) {
            setStudentForm(true)
            setTeacherForm(false)
        }else if(loginState.form === Teacher){
            setStudentForm(false)
            setTeacherForm(true)
        }else {
            setTeacherForm(false)
            setStudentForm(false)
        }


    }, [loginState.form])

    const ClickEnter = (event) =>{
        if(event  === "Enter") login()
    }



    return (
        <Grid container component="main"  className={classes.root}>


            {studentForm === false && teacherForm === false?
                <UserIDForm openStudent={setStudentForm}
                            submit={registerInit}
                            changeId={changeId}
                            dialog={loginState.dialog}
                            registerClose={registerClose}/>:null}
            {studentForm === true? <StudentRegisterForm setStudent={setStudentForm} open={studentForm}/>: null}
            {teacherForm === true? <TeacherRegisterForm setTeacher={setTeacherForm} open={teacherForm}/>: null}


            <CssBaseline/>

           <Hidden mdDown>
               <Grid item xs={false} sm={false} md={8} className={classes.image}>
                   <p className={classes.textSide}><em><b>Virtual  School</b></em></p>
                   <Divider style={{marginRight: 260, marginLeft: 260, backgroundColor: '#333'}}/>
                   <p style={{cursor: 'default'}}>2020</p>
               </Grid>
           </Hidden>
            <Grid item xs={12} sm={12} md={4} component={Paper} elevation={6} square>


                <div className={classes.paper}>
                    <AccountCircleIcon style={{fontSize: 70}}/>
                    <Typography component="h1" variant="h5">
                        Sign in
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
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={(event) => changeEmail(event.target.value)}
                            autoFocus
                            onKeyPress={(event) => ClickEnter(event.key)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={loginState.password}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={(event) => changePassword(event.target.value)}
                            autoComplete="current-password"
                            onKeyPress={(event) => ClickEnter(event.key)}
                        />
                        <Box className={classes.util}>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            {/*<p>No Account Found</p>*/}
                        </Box>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={login}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Grid item>
                                    <Button color="primary">Forgot Password</Button>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button color="primary" onClick={registerOpen}>Sign Up</Button>
                            </Grid>
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
        changeId: (data) => dispatch(action.changeId(data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)