import { Box, Container, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
export default function Data({}) {

    // const {roomShift} = roomShiftClass
    // const {subject} = roomShiftClass

    const style = ProfileStyle()
    return (

        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">Activity Information</Typography>
            <Container>
                {/*<Box className={style.profileDataContainer}>*/}
                {/*    <Box className={style.profileDataContainerTitle}>*/}
                {/*        <p>Room Name: </p>*/}
                {/*    </Box>*/}
                {/*    <p>{roomShift.room.roomName}</p>*/}
                {/*</Box>*/}
                {/*<Box className={style.profileDataContainer}>*/}
                {/*    <Box className={style.profileDataContainerTitle}>*/}
                {/*        <p>Room Shift Name: </p>*/}
                {/*    </Box>*/}
                {/*    <p>{roomShift.roomShiftName}</p>*/}
                {/*</Box>*/}
                {/*<Box className={style.profileDataContainer}>*/}
                {/*    <Box className={style.profileDataContainerTitle}>*/}
                {/*        <p>Grade </p>*/}
                {/*    </Box>*/}
                {/*    <p>{roomShift.grade}</p>*/}
                {/*</Box>*/}
                {/*<Box className={style.profileDataContainer}>*/}
                {/*    <Box className={style.profileDataContainerTitle}>*/}
                {/*        <p>Section </p>*/}
                {/*    </Box>*/}
                {/*    <p>{roomShift.section}</p>*/}
                {/*</Box>*/}
                {/*<Box className={style.profileDataContainer}>*/}
                {/*    <Box className={style.profileDataContainerTitle}>*/}
                {/*        <p>Subject Name </p>*/}
                {/*    </Box>*/}
                {/*    <p>{subject.subjectName}</p>*/}
                {/*</Box>*/}
                {/*<Box className={style.profileDataContainer}>*/}
                {/*    <Box className={style.profileDataContainerTitle}>*/}
                {/*        <p>Day </p>*/}
                {/*    </Box>*/}
                {/*    <p>{roomShiftClass.day}</p>*/}
                {/*</Box>*/}

                {/*<Box className={style.profileDataContainer}>*/}
                {/*    <Box className={style.profileDataContainerTitle}>*/}
                {/*        <p>Time Start </p>*/}
                {/*    </Box>*/}
                {/*    <p>{roomShiftClass.startTime}</p>*/}
                {/*</Box>*/}

                {/*<Box className={style.profileDataContainer}>*/}
                {/*    <Box className={style.profileDataContainerTitle}>*/}
                {/*        <p>Time End </p>*/}
                {/*    </Box>*/}
                {/*    <p>{roomShiftClass.endTime}</p>*/}
                {/*</Box>*/}
            </Container>

        </Fragment>
    )
}