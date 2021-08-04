/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Avatar, Button, CircularProgress, Container, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/classIcon.png'
    import {Fragment, useEffect, useState} from "react";
import {connect} from 'react-redux'

import { withRouter } from 'react-router-dom';
import {RoomShiftClass} from "../../../../../store/utils/Specify";
import * as action from "../../../../../store/action/__ActionGlobal/ProfileAction";

// component
import Data from './data/Data'
import PeopleList from "../utils/PeopleData/PeopleList";
import ClassAssignment from './classes-assignments/ClassAssignment'
import ClassQuizzes from './classes-quizzes/ClassQuizzes'
import ClassExams from './classes-exams/ClassExams'
import ClassLectures from "./classes-lecture/ClassLectures";

const  RoomShiftClassProfile= ({roomShiftClass, match, initData,translation})=>{

    const style = ProfileStyle()
    const [component, setComponent] = useState(null)
    const [assignments, setAssignments] = useState([])
    const [exams, setExams] = useState([])
    const [lectures, setLectures] = useState([])
    const [quizzes, setQuizzes] = useState([])
    const profile = roomShiftClass.profile !== null? roomShiftClass.profile.roomShiftClass: null

    useEffect(() => {
        const id = match.params.id;

        initData(id)
    }, [initData, match.params.id])

    useEffect(() => {
        if(profile !== null){
            setAssignments(profile.teacherAssignments)
            setQuizzes(profile.teacherQuizzes)
            setLectures(profile.teacherLectures)
            setExams(profile.teacherExams)
        }

    }, [profile])

    useEffect(() => {

        if (roomShiftClass.profile !== null) {
            setComponent(<Data roomShiftClass={profile} translation={translation}/>)
        }
    }, [roomShiftClass.profile])


    const data = () => {
        setComponent(<Data roomShiftClass={profile} translation={translation}/>)
    }

    const classAssignment = () => {
        setComponent(<ClassAssignment assignments={assignments} translation={translation}/>)
    }

    const classQuizzes = () => {
        setComponent(<ClassQuizzes quizzes={quizzes} translation={translation}/>)
    }

    const classExams = () => {
        setComponent(<ClassExams exams={exams} translation={translation}/>)
    }

    const classLectures = () => {
        setComponent(<ClassLectures lectures={lectures} translation={translation}/>)
    }

    const RoomClassPeople = () => {
        setComponent(<PeopleList teacher={profile.teacher} students={profile.students} translation={translation}/>)
    }
    console.log(roomShiftClass.profile)

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
                                    <Button color="primary" onClick={data}>{translation.language["label.global.info"]}</Button>
                                    <Button color="primary" onClick={classAssignment}>{translation.language["label.global.assignment"]}</Button>
                                    <Button color="primary" onClick={classLectures}>{translation.language["label.global.lecture"]}</Button>
                                    <Button color="primary" onClick={classExams}>{translation.language["label.global.exam"]}</Button>
                                    <Button color="primary" onClick={classQuizzes}>{translation.language["label.global.quiz"]}</Button>
                                    <Button color="primary" onClick={RoomClassPeople}>{translation.language["label.global.people"]}</Button>
                                    <Button color="primary" onClick={RoomClassPeople}>{translation.language["label.global.join.class"]}</Button>
                                </Grid>

                            </Grid>
                        </Grid>


                        <Grid container component={Container} className={style.profileData}>
                            <Grid container component={Paper}>
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