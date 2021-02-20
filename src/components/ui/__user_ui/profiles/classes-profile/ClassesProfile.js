import { Avatar, Button, Container, Divider, Grid, Hidden, Paper, Typography } from "@material-ui/core";
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/asd.jpg'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import { useState } from "react";
// import Logs from './logs/Logs'
// import Attendance from './attendace/Attendance'
import Data from './data/Data'
const  ClassesProfile= ()=>{

    const style = ProfileStyle()
    const [component, setComponent] = useState(<Data />)

    const attendance = () => {
        // setComponent(<Attendance />)
    }

    const data = () => {
        setComponent(<Data />)
    }

    const logs = () => {
        // setComponent(<Logs />)
    }


    return (
        <Grid container className={style.container}>

            <Grid container className={style.profileHeader} component={Paper} >
                <Grid className={style.avatarContainer} item md={12} sm={12} xs={12} lg={12}>
                    <Avatar className={style.avatar} alt="Remy Sharp" src={Picture} />
                </Grid>
                <Typography className={style.profileName} variant="h3" component="h2">Kurt Orioque</Typography>
                <br />
                <Hidden smDown>
                    <Divider />
                </Hidden>
                <Grid className={style.profileButton} container >
                    <Grid className={style.buttonGroup} item md={12} sm={12} xs={12} lg={12} >
                        <Button color="primary" onClick={data}>Details</Button>
                        <Button color="primary" onClick={attendance}>Attendance</Button>
                        <Button color="primary" onClick={logs}>Class Logs</Button>
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
        </Grid >
    )
}

export default ClassesProfile