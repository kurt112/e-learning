import {Avatar, Button, CircularProgress, Container, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/asd.jpg'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import {useEffect, useState} from "react";
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import Data from './data/Data'
import * as action from "../../../../../store/action/__ActionGlobal/ProfileAction";
import {Room} from "../../../../../store/utils/Specify";
import {Fragment} from "react";

const RoomProfile = ({roomState, match, initData}) => {
    const style = ProfileStyle()
    const [component, setComponent] = useState(null)

    useEffect(() => {
        const id = match.params.id;

        initData(id)
    }, [initData, match.params.id])

    useEffect(() => {

        if (roomState.profile !== null) setComponent(<Data room={roomState.profile.room}/>)
    }, [roomState.profile])


    const attendance = () => {
        // setComponent(<Attendance />)
    }

    const data = () => {
        setComponent(<Data />)
    }

    const logs = () => {
        // setComponent(<Logs />)
    }

    console.log("The room ")
    console.log(roomState.profile)

    return (
        <Grid container className={style.container}>
            {
                roomState.loading === true? <CircularProgress style={{margin: 'auto'}} disableShrink/>:

                    <Fragment>
                        <Grid container className={style.profileHeader} component={Paper} >
                            <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                                <Avatar className={style.avatar} alt="Remy Sharp" src={Picture} />
                            </Grid>
                            <Typography className={style.profileName} variant="h3" component="h2">
                                {roomState.profile.room.roomName}
                            </Typography>
                            <br />
                            <Hidden smDown>
                                <Divider />
                            </Hidden>
                            <Grid className={style.profileButton} container >
                                <Grid className={style.buttonGroup} item md={12} sm={12} xs={12} lg={12} >
                                    <Button color="primary" onClick={data}>Room Info</Button>
                                    <Button color="primary" onClick={attendance}>RoomShift</Button>
                                    <Button color="primary" onClick={logs}>Room Classes</Button>
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
        roomState: state.RoomProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, Room))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomProfile))