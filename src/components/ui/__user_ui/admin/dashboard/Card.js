/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Grid, Paper} from "@material-ui/core";
import DashBoardStyle from "./DashBoardStyle";
import {Fragment, useEffect, useState} from "react";

// icons
import StoreIcon from '@material-ui/icons/Store';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FaceIcon from '@material-ui/icons/Face';


const Card = () => {
    const style = DashBoardStyle()

    const colors = ['#273c75', '#e84118', '#00a8ff', '#c56cf0', '#3d3d3d']
    const label = ['Teachers','Subjects','Students','Rooms','Classes', "Classes"]
    const [data, setData] = useState({})
    const icons = [
        <StoreIcon className={style.icons}/>,
        <SupervisorAccountIcon className={style.icons}/>,
        <AccountCircleIcon className={style.icons}/>,
        <PhoneAndroidIcon className={style.icons}/>,
        <FaceIcon className={style.icons}/>,
        <FaceIcon className={style.icons}/>,
        <FaceIcon className={style.icons}/>
    ]

    useEffect(() => {

    }, [])

    return (
        <Fragment>
            {
                colors.map((e, i) =>
                    <Grid item  key={i} md={2} xs={12} component={Paper} style={{backgroundColor: colors[i]}}
                          className={style.card}>

                        <h2 style={{padding: 0, margin: 5}}>{label[i]}</h2>
                        {icons[i]}
                        <p style={{fontSize: 35, margin: 0}}><b>{e[1]}</b></p>
                    </Grid>
                )

            }

        </Fragment>
    )
}

export default Card