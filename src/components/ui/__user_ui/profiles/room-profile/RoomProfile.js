import {Avatar, Button, CircularProgress, Container, Divider, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/asd.jpg'
import {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import Data from './data/Data'
import * as action from "../../../../../store/action/__ActionGlobal/ProfileAction";
import {Room} from "../../../../../store/utils/Specify";
import {Fragment} from "react";
import RoomShiftClasses from "../utils/RoomShiftClasses/RoomShiftClasses";
import RoomShift from "./room-shift/RoomShift";

const RoomProfile = ({room, match, initData,translation}) => {
    const style = ProfileStyle()
    const [component, setComponent] = useState(null)
    const profile = room.profile !== null ? room.profile.room : null

    useEffect(() => {
        const id = match.params.id;

        initData(id)
    }, [initData, match.params.id])

    useEffect(() => {

        if (room.profile !== null) setComponent(<Data translation={translation} room={profile}/>)
    }, [room.profile])


    const roomShift = () => {
        setComponent(<RoomShift translation={translation} roomShifts={profile.roomShifts}/>)
    }

    const roomInfo = () => {
        setComponent(<Data translation={translation} room={profile}/>)
    }

    const roomClasses = () => {

        const classes = []

        profile.roomShifts.map((roomShift) =>
            roomShift.roomShiftClasses.map((lecture) => classes.push(lecture))
        )

        setComponent(<RoomShiftClasses translation={translation} classes={classes} />)
    }


    return (
        <Grid container className={style.container}>
            {
                room.loading === true ? <CircularProgress style={{margin: 'auto'}} disableShrink/> :

                    <Fragment>
                        <Grid container className={style.profileHeader} component={Paper}>
                            <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                                <Avatar className={style.avatar} alt="Remy Sharp" src={Picture}/>
                            </Grid>
                            <Typography className={style.profileName} variant="h3" component="h2">
                                {room.profile.room.roomName}
                            </Typography>
                            <br/>
                            <Hidden smDown>
                                <Divider/>
                            </Hidden>
                            <Grid className={style.profileButton} container>
                                <Grid className={style.buttonGroup} item md={12} sm={12} xs={12} lg={12}>
                                    <Button color="primary" onClick={roomInfo}>{translation.language["label.global.room.info"]}</Button>
                                    <Button color="primary" onClick={roomShift}>{translation.language["label.global.room.shift"]}</Button>
                                    <Button color="primary" onClick={roomClasses}>{translation.language["label.global.room.classes"]}</Button>
                                </Grid>
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
        room: state.RoomProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (id) => dispatch(action.initData(id, Room))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomProfile))