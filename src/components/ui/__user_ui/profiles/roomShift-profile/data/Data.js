/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Container, Typography} from "@material-ui/core";
import {Fragment} from "react";
import ProfileStyle from '../../ProfileStyle'

export default function Data({roomShift, translation}) {
    const style = ProfileStyle()
    console.log(roomShift)
    return (
        <Fragment>
            <Typography className={style.profileName} variant="h4"
                        component="h2">{translation.language["label.global.room.shift.info"]}</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.room.name"]}: </p>
                    </Box>
                    <p>{roomShift.room.roomName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.grade"]}: </p>
                    </Box>
                    <p>{roomShift.grade}</p>
                </Box>

                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.room.name"]}: </p>
                    </Box>
                    <p>{roomShift.section}</p>
                </Box>

                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.time.start"]}</p>
                    </Box>
                    <p>{roomShift.timeStart}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.time.end"]}</p>
                    </Box>
                    <p>{roomShift.timeEnd}</p>
                </Box>

                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.adviser"]}</p>
                    </Box>
                    <p>
                        {roomShift.teacher === null ? translation.language["label.global.tba"] : `${roomShift.teacher.user.firstName} ${roomShift.teacher.user.lastName}`}
                    </p>
                </Box>

            </Container>
        </Fragment>
    )
}