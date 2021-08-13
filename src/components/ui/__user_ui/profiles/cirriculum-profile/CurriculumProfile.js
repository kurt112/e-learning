import ProfileStyle from "../ProfileStyle";
import {Avatar, Button, Container, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import Picture from "../../../../../assets/asd.jpg";
import Data from "./data/Data";
import {useEffect, useState} from "react";
import * as action from "../../../../../store/action/__ActionGlobal/ProfileAction";
import {Curriculum} from "../../../../../store/utils/Specify";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import RoomShift from "../utils/room-shift/RoomShift";
import Subject from "../utils/Subjects/Subject";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 13/08/2021, Friday
 **/

const CurriculumProfile = ({translation, match, curriculum, initData}) => {
    const style = ProfileStyle()
    const [subjects, setSubject] = useState([])
    const [roomShifts, setRoomShifts] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    // data visibility
    const [data, setData] = useState(true)
    const [roomShiftsTab, setRoomShiftsTab] = useState(false)
    const [subjectTab, setSubjectTab] = useState(false)


    // click tab
    const dataClick = () => {
        setData(true)
        setRoomShiftsTab(false)
        setSubjectTab(false)
    }

    const subjectTabClick = () => {
        setData(false)
        setRoomShiftsTab(false)
        setSubjectTab(true)
    }

    const roomShiftTabClick = () => {
        setData(false)
        setSubjectTab(false)
        setRoomShiftsTab(true)
    }


    useEffect(() => {
        const id = match.params.id;

        initData(id)
    }, [])

    useEffect(() => {

        if (curriculum.profile !==  null) {
            const profile = curriculum.profile

            setName(profile.name)
            setDescription(profile.description)

            setRoomShifts(profile.roomShifts)
            setSubject(profile.subjects)

        }

    }, [curriculum.profile])


    return curriculum.profile === null ? null : <Grid container>

        <Grid container className={style.profileHeader} component={Paper}>
            <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                <Avatar className={style.avatar} alt="Remy Sharp" src={Picture}/>
            </Grid>
            <Typography className={style.profileName} variant="h3" component="h2">Kurt Orioque</Typography>
            <br/>
            <Hidden smDown>
                <Divider/>
            </Hidden>
            <Grid className={style.profileButton} container>
                <Grid className={style.buttonGroup} item md={12} sm={12} xs={12} lg={12}>
                    <Button color="primary"
                            onClick={dataClick}>{translation.language["label.global.details"]}</Button>
                    <Button color="primary"
                            onClick={roomShiftTabClick}>{translation.language["label.global.room.shift"]}</Button>
                    <Button color="primary"
                            onClick={subjectTabClick}>{translation.language["label.global.subject"]}</Button>
                </Grid>
            </Grid>
        </Grid>


        <Grid container component={Container} className={style.profileData}>
            <Grid container component={Paper}>
                {
                    data ? <Data name={name} description={description} translation={translation}/> : null
                }

                {
                    roomShiftsTab ? <RoomShift roomShifts={roomShifts} translation={translation}/> : null
                }

                {
                    subjectTab ? <Subject subjects={subjects} translation={translation}/> : null
                }
            </Grid>
        </Grid>
    </Grid>
}

const mapStateToProps = (state) => {
    return {
        curriculum: state.CurriculumProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, Curriculum))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurriculumProfile))