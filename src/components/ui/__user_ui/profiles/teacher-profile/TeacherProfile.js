/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Avatar, Button, CircularProgress, Container, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/asd.jpg'
import {connect} from 'react-redux'
import {useEffect, useState} from "react";
import Logs from './logs/Logs'
import Attendance from './attendace/Attendance'
import Data from './data/Data'
import {withRouter} from 'react-router-dom';
import * as action from "../../../../../store/action/__ActionGlobal/ProfileAction";
import {Teacher} from "../../../../../store/utils/Specify";
import {Fragment} from "react";

const  TeacherProfile= ({teacherState,initData, match,translation})=>{
    const style = ProfileStyle()
    const [name, setName] = useState('')

    useEffect(() => {
        const id = match.params.id;

        initData(id)
    }, [initData, match.params.id])

    useEffect(() => {

        if (teacherState.profile !== null) {
            setName(`${teacherState.profile.user.firstName} ${teacherState.profile.user.lastName}`)
            setComponent(<Data translation={translation} teacher={teacherState.profile}/>)
        }

    }, [teacherState])

    const [component, setComponent] = useState(null)

    const attendance = () => {
        setComponent(<Attendance translation={translation} teacher={teacherState.profile.teacher}/>)
    }

    const data = () => {
        setComponent(<Data translation={translation} teacher={teacherState.profile}/>)
    }

    const logs = () => {
        setComponent(<Logs translation={translation} teacher={teacherState.profile.teacher}/>)
    }

    return (
        <Grid container className={style.container}>
            {
                teacherState.loading === true && teacherState.error === null && teacherState.profile ===null ? <CircularProgress style={{margin: 'auto'}} disableShrink/> :
                    <Fragment>
                        <Grid container className={style.profileHeader} component={Paper} >
                            <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                                <Avatar className={style.avatar} alt="Remy Sharp" src={Picture} />
                            </Grid>
                            <Typography className={style.profileName} variant="h3" component="h2">
                                {
                                    name
                                }
                            </Typography>
                            <br />
                            <Hidden smDown>
                                <Divider />
                            </Hidden>
                            <Grid className={style.profileButton} container >
                                <Grid className={style.buttonGroup} item md={12} sm={12} xs={12} lg={12} >
                                    <Button color="primary" onClick={data}>{translation.language["label.global.details"]}</Button>
                                    <Button color="primary" onClick={attendance}>{translation.language["label.global.attendance"]}</Button>
                                    <Button color="primary" onClick={logs}>{translation.language["label.global.class.logs"]}</Button>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid container component={Container} className={style.profileData}  >
                            <Grid className={style.profileInfo} container component={Paper} >
                                {component}
                            </Grid>

                        </Grid>
                    </Fragment>
            }

        </Grid >
    )
}

const mapStateToProps = (state) => {
    return {
        teacherState: state.TeacherProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, Teacher))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeacherProfile))