/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { Avatar, Button, Container, Divider, Grid, Hidden, Paper, Typography } from "@material-ui/core"
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/asd.jpg'
import {useEffect, useState} from "react"
import Data from './data/Data'
import { withRouter } from 'react-router-dom'
import * as action from "../../../../../store/action/__ActionGlobal/ProfileAction";
import {Curriculum, Subject} from "../../../../../store/utils/Specify";
import {connect} from "react-redux";
import {getSubject} from "../../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/SubjectProfile";
import ClassesList from "../../roomClasses/ClassList/ClassesList";
import RoomShiftClasses from "../utils/RoomShiftClasses/RoomShiftClasses";
import CurriculumList from "../utils/curriculum/CurriculumList";
const  SubjectProfile= ({translation,match,initData,subject})=>{
    const style = ProfileStyle()
    const [classes,setClasses] = useState([])
    const [curriculums, setCurriculum] = useState([])
    const [data,setData]  = useState(true)
    const [classesTab,setClassesTab] = useState(false)
    const [curriculumTab,setCurriculumTab] = useState(false)

    // click tab
    const dataClick = () => {
        setData(true)
        setClassesTab(false)
        setCurriculumTab(false)
    }

    const classesClick = () => {
        setData(false)
        setCurriculumTab(false)
        setClassesTab(true)
    }

    const curriculumClick = () => {
        setData(false)
        setClassesTab(false)
        setCurriculumTab(true)
    }

    useEffect(() => {
        const id = match.params.id;
        initData(id)
    }, [])

    useEffect(() => {

        if(subject.profile !== null){
            const data = subject.profile
            setCurriculum(data.curriculumList)
            setClasses(data.roomShiftClasses)
        }

    }, [subject.profile])

    console.log(curriculums)


    return subject.profile !== null? <Grid container>

        <Grid container className={style.profileHeader} component={Paper} >
            <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                <Avatar className={style.avatar} alt="Remy Sharp" src={Picture} />
            </Grid>
            <Typography className={style.profileName} variant="h3" component="h2">
                {subject.profile.subjectName}
            </Typography>
            <br />
            <Hidden smDown>
                <Divider />
            </Hidden>
            <Grid className={style.profileButton} container >
                <Grid className={style.buttonGroup} item md={12} sm={12} xs={12} lg={12} >
                    <Button color="primary" onClick={dataClick}>{translation.language["label.global.details"]}</Button>
                    <Button color="primary" onClick={classesClick} >{translation.language["label.global.room.class"]}</Button>
                    <Button color="primary" onClick={curriculumClick} >{translation.language["label.global.curriculum"]}</Button>
                </Grid>
            </Grid>
        </Grid>


        <Grid container component={Container} className={style.profileData}  >
            <Grid container component={Paper} >
                {
                    data?<Data translation={translation} profile={subject.profile}/>:null
                }
                {
                    classesTab? <RoomShiftClasses translation={translation} classes={classes}/>: null
                }
                {
                    curriculumTab? <CurriculumList translation={translation} curriculums={curriculums}/>:null
                }
            </Grid>

        </Grid>
    </Grid >:null
}

const mapStateToProps = (state) => {
    return {
        subject: state.SubjectProfileState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, Subject))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SubjectProfile))