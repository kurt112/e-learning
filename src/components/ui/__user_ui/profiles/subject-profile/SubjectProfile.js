/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { Avatar, Button, Container, Divider, Grid, Hidden, Paper, Typography } from "@material-ui/core"
import ProfileStyle from '../ProfileStyle'
import Picture from '../../../../../assets/asd.jpg'
import { useState } from "react"
import Data from './data/Data'
import { withRouter } from 'react-router-dom'
const  SubjectProfile= ({translation})=>{
    const style = ProfileStyle()
    const [component, setComponent] = useState(<Data translation={translation}/>)

    const attendance = () => {
        // setComponent(<Attendance />)
    }

    const data = () => {
        setComponent(<Data />)
    }

    // const logs = () => {
        // setComponent(<Logs />)
    // }


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
                        <Button color="primary" onClick={data}>{translation.language["label.global.details"]}</Button>
                        <Button color="primary" onClick={attendance}>{translation.languages["label.global.room.class"]}</Button>
                    </Grid>
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

export default withRouter(SubjectProfile)