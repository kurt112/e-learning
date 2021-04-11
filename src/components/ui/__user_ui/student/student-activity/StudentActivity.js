import {
    Box,
    Grid,
} from "@material-ui/core"
import clsx from "clsx";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ClassesStyle from "../../../_style/ClassesStyle";
import {useState} from "react";
import ActivityStyle from './ActivityStyle'
import CurrentActivity from "./CurrentActivity";
import DoneActivity from "./DoneActivity";


export default function StudentActivity({student}) {
    const currentStyle = ClassesStyle()
    const activityStyle = ActivityStyle()
    const [currentActivity, setCurrentActivity] = useState(true)
    const [currentActivities] = useState(student.studentActivities.filter(e=>e.status === "Pending"));
    const [doneActivities] = useState(student.studentActivities.filter(e => e.status !== "Pending"))
    const currentClassClick = () => {
        setCurrentActivity(true)

    }

    const doneClassesClick = () => {
        setCurrentActivity(false)
    }
    return (
        <Grid component="main">

            <Box className={currentStyle.boxNavButtonContainer}>
                <Box onClick={currentClassClick}
                     className={clsx(currentStyle.boxNavButton, currentActivity === true ? currentStyle.active : null)}>
                    <span>Current Activity</span>
                    <br/>
                    <AccessTimeIcon/>

                </Box>

                <Box onClick={doneClassesClick}
                     className={clsx(currentStyle.boxNavButton, currentActivity !== true ? currentStyle.active : null)}>
                    <span>Done Activity</span>
                    <br/>
                    <AccessTimeIcon/>
                </Box>

            </Box>

            {
                currentActivity  === true? <CurrentActivity activities={currentActivities} activityStyle={activityStyle}/>:
                    <DoneActivity CurrentActivity activities={doneActivities} activityStyle={activityStyle}/>
            }




        </Grid>

    )
}