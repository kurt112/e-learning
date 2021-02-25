import {Avatar, Button, CircularProgress, Container, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/asd.jpg'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import {Fragment, useEffect, useState} from "react";
import {connect} from 'react-redux'
// import Logs from './logs/Logs'
// import Attendance from './attendace/Attendance'
import { withRouter } from 'react-router-dom';
import Data from './data/Data'
import {RoomShiftClass} from "../../../../../store/utils/Specify";
import * as action from "../../../../../store/action/__ActionGlobal/ProfileAction";
const  RoomShiftClassProfile= ({roomShiftClass, match, initData})=>{

    const style = ProfileStyle()
    const [component, setComponent] = useState(null)

    useEffect(() => {
        const id = match.params.id;

        initData(id)
    }, [initData, match.params.id])

    useEffect(() => {

        if (roomShiftClass.profile !== null) setComponent(<Data roomShiftClass={roomShiftClass.profile.roomShiftClass}/>)
    }, [roomShiftClass.profile])


    const data = () => {
        setComponent(<Data roomShift={roomShiftClass.profile.roomShiftClass}/>)
    }

    const roomInfo = () => {
        setComponent(<Data />)
    }

    const roomClasses = () => {
        // setComponent(<Logs />)
    }

    console.log("The room roomShiftClass")
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
                                    <Button color="primary" onClick={data}>RoomShift Info</Button>
                                    <Button color="primary" onClick={roomShiftClass}>Room Class</Button>
                                    <Button color="primary" onClick={roomClasses}>Room Classes</Button>
                                </Grid>
                                <Button
                                    color="primary"
                                    startIcon={<CreateRoundedIcon />}
                                >
                                    Edit Profile
                                </Button>
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
        roomShiftClass: state.RoomShiftClassProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, RoomShiftClass))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomShiftClassProfile))