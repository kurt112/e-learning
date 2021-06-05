import {Avatar, Button, CircularProgress, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/asd.jpg'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import {Fragment, lazy, useEffect, useState} from "react";
import {connect} from 'react-redux'

import { withRouter } from 'react-router-dom';
import {RoomShiftClass} from "../../../../../store/utils/Specify";
import * as action from "../../../../../store/action/__ActionGlobal/ProfileAction";

// component
import Data from './data/Data'
import PeopleList from "../utils/PeopleData/PeopleList";

const ClassAssignment = lazy(() => import(`./classes-assignments/ClassAssignment`))
const ClassQuizzes = lazy(() => import(`./classes-quizzes/ClassQuizzes`))
const ClassExams = lazy(() => import(`./classes-exams/ClassExams`))
const ClassLectures = lazy(() => import(`./classes-lecture/ClassLectures`))


const  RoomShiftClassProfile= ({roomShiftClass, match, initData})=>{

    const style = ProfileStyle()
    const [component, setComponent] = useState(null)
    const profile = roomShiftClass.profile !== null? roomShiftClass.profile.roomShiftClass: null

    useEffect(() => {
        const id = match.params.id;

        initData(id)
    }, [initData, match.params.id])

    useEffect(() => {

        if (roomShiftClass.profile !== null) setComponent(<Data roomShiftClass={profile}/>)
    }, [roomShiftClass.profile])


    const data = () => {
        setComponent(<Data roomShiftClass={profile}/>)
    }

    const classAssignment = () => {
        setComponent(<ClassAssignment activities={profile.activities}/>)
    }

    const classQuizzes = () => {
        setComponent(<ClassQuizzes/>)
    }

    const classExams = () => {
        setComponent(<ClassExams/>)
    }

    const classLectures = () => {
        setComponent(<ClassLectures/>)
    }

    const RoomClassPeople = () => {
        setComponent(<PeopleList teacher={profile.teacher} students={profile.students}/>)
    }

    return (
        <Grid container className={style.container}>
            {
                roomShiftClass.loading === true? <CircularProgress style={{margin: 'auto'}} disableShrink/>:

                    <Fragment>
                        <Grid container className={style.profileHeader} component={Paper} >
                            <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                                <Avatar className={style.avatar} alt="Remy Sharp" src={Picture} />
                            </Grid>
                            <Typography className={style.profileName} variant="h3" component="h2">
                                {
                                    roomShiftClass.profile.roomShiftClass.roomShift.grade
                                    + ' - ' +
                                    roomShiftClass.profile.roomShiftClass.roomShift.section
                                    + ' (' +roomShiftClass.profile.roomShiftClass.subject.subjectName+')'
                                }
                            </Typography>
                            <br />
                            <Hidden smDown>
                                <Divider />
                            </Hidden>
                            <Grid className={style.profileButton} container >
                                <Grid className={style.buttonGroup} item md={12} sm={12} xs={12} lg={12} >
                                    <Button color="primary" onClick={data}>Info</Button>
                                    <Button color="primary" onClick={classAssignment}>Assignment</Button>
                                    <Button color="primary" onClick={classLectures}>Lectures</Button>
                                    <Button color="primary" onClick={classExams}>Exams</Button>
                                    <Button color="primary" onClick={classQuizzes}>Quiz</Button>
                                    <Button color="primary" onClick={RoomClassPeople}>People</Button>
                                    <Button color="primary" onClick={RoomClassPeople}>Join</Button>
                                </Grid>
                                <Button
                                    color="primary"
                                    startIcon={<CreateRoundedIcon />}
                                >
                                    Edit Profile
                                </Button>
                            </Grid>
                        </Grid>


                        <Grid container className={style.profileData}  >
                            <Grid className={style.profileInfo} container  >
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
        roomShiftClass: state.RoomShiftClassProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, RoomShiftClass))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomShiftClassProfile))