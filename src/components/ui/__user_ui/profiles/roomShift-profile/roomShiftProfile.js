import {Avatar, Button, CircularProgress, Container, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/asd.jpg'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import {useEffect, useState} from "react";
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import Data from './data/Data'
import * as action from "../../../../../store/action/__ActionGlobal/ProfileAction";
import {RoomShift} from "../../../../../store/utils/Specify";
import {Fragment} from "react";

const RoomShiftProfile = ({roomShift, match, initData}) => {
    const style = ProfileStyle()
    const [component, setComponent] = useState(null)

    useEffect(() => {
        const id = match.params.id;

        initData(id)
    }, [initData, match.params.id])

    useEffect(() => {

        if (roomShift.profile !== null) setComponent(<Data roomShift={roomShift.profile.roomShift}/>)
    }, [roomShift.profile])


    const data = () => {
        setComponent(<Data roomShift={roomShift.profile.roomShift}/>)
    }

    const roomInfo = () => {
        setComponent(<Data />)
    }

    const roomClasses = () => {
        // setComponent(<Logs />)
    }

    console.log("The room ")
    console.log(roomShift.profile)

    return (
        <Grid container className={style.container}>
            {
                roomShift.loading === true? <CircularProgress style={{margin: 'auto'}} disableShrink/>:

                    <Fragment>
                        <Grid container className={style.profileHeader} component={Paper} >
                            <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                                <Avatar className={style.avatar} alt="Remy Sharp" src={Picture} />
                            </Grid>
                            <Typography className={style.profileName} variant="h3" component="h2">
                                {roomShift.profile.roomShift.roomShiftName}
                            </Typography>
                            <br />
                            <Hidden smDown>
                                <Divider />
                            </Hidden>
                            <Grid className={style.profileButton} container >
                                <Grid className={style.buttonGroup} item md={12} sm={12} xs={12} lg={12} >
                                    <Button color="primary" onClick={data}>RoomShift Info</Button>
                                    <Button color="primary" onClick={roomShift}>Room Class</Button>
                                    <Button color="primary" onClick={roomClasses}>Students</Button>
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
        roomShift: state.RoomShiftProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, RoomShift))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomShiftProfile))