import {Avatar, Button, CircularProgress, Container, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/asd.jpg'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import {connect} from 'react-redux'
import {useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';
import Logs from './logs/Logs'
import Attendance from './attendance/Attendance'
import Data from './data/Data'
import {Fragment} from 'react'
import * as action from '../../../../../store/action/__ActionGlobal/ProfileAction'
import {Student} from "../../../../../store/utils/Specify";

const StudentProfile = ({studentState, match, initData}) => {

    const style = ProfileStyle()
    const [component, setComponent] = useState(null)

    useEffect(() => {
        let id;
        id = match.params.id;

        initData(id)


    }, [initData, match.params.id])

    useEffect(() => {
        if (studentState.profile !== null) setComponent(<Data student={studentState.profile.student}/>)
    }, [studentState.profile])

    const attendance = () => {
        setComponent(<Attendance student={studentState.profile.student}/>)
    }

    const data = () => {
        setComponent(<Data student={studentState.profile.student}/>)
    }

    const logs = () => {
        setComponent(<Logs student={studentState.profile.student}/>)
    }

    console.log("asdf")
    console.log(studentState.profile)

    return (
        <Grid container className={style.container}>
            {studentState.loading === true ? <CircularProgress style={{margin: 'auto'}} disableShrink/> :
                <Fragment>
                    <Grid container className={style.profileHeader} component={Paper}>
                        <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                            <Avatar className={style.avatar} alt="Remy Sharp" src={Picture}/>
                        </Grid>
                        <Typography className={style.profileName} variant="h3" component="h2">

                            {
                                studentState.profile.student.user.firstName + ' ' +
                                studentState.profile.student.user.lastName
                            }

                        </Typography>
                        <br/>
                        <Hidden smDown>
                            <Divider/>
                        </Hidden>
                        <Grid className={style.profileButton} container>
                            <Grid className={style.buttonGroup} item md={12} sm={12} xs={12} lg={12}>
                                <Button color="primary" onClick={data}>Details</Button>
                                <Button color="primary" onClick={attendance}>Attendance</Button>
                                <Button color="primary" onClick={logs}>Class Logs</Button>
                            </Grid>
                            <Button
                                color="primary"
                                startIcon={<CreateRoundedIcon/>}
                            >
                                Edit Profile
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container component={Container} className={style.profileData}>
                        <Grid className={style.profileInfo} container component={Paper}>
                            {component}
                        </Grid>
                    </Grid>
                </Fragment>

            }

        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        studentState: state.StudentProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, Student))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentProfile))