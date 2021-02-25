import { Box, Container, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
export default function Data({roomShift}) {
    const style = ProfileStyle()
    return (
        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">Personal Information</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Room Name: </p>
                    </Box>
                    <p>{roomShift.room.roomName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Grade: </p>
                    </Box>
                    <p>{roomShift.grade}</p>
                </Box>

                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Room Name: </p>
                    </Box>
                    <p>{roomShift.section}</p>
                </Box>

                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Time Start</p>
                    </Box>
                    <p>{roomShift.timeStart}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Time End</p>
                    </Box>
                    <p>{roomShift.timeEnd}</p>
                </Box>

            </Container>
        </Fragment>
    )
}