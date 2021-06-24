import {Box, Container, Grid, Paper, Typography} from "@material-ui/core";
import ProfileStyle from '../../ProfileStyle'
export default function Data({roomShiftClass,translation}) {

    const {roomShift} = roomShiftClass
    const {subject} = roomShiftClass

    const style = ProfileStyle()
    return (
        <Grid container component={Container} className={style.profileData}  >
            <Grid className={style.profileInfo} component={Paper} container >
                <Typography className={style.profileName} variant="h4" component="h2">{translation.language["label.global.class.information"]}</Typography>
                <Container>
                    <Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.room.name"]}: </p>
                        </Box>
                        <p>{roomShift.room.roomName}</p>
                    </Box>
                    <Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.room.shift.name"]}: </p>
                        </Box>
                        <p>{roomShift.roomShiftName}</p>
                    </Box>
                    <Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.grade"]}:</p>
                        </Box>
                        <p>{roomShift.grade}</p>
                    </Box>
                    <Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.section"]}: </p>
                        </Box>
                        <p>{roomShift.section}</p>
                    </Box>
                    <Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.subject.name"]}: </p>
                        </Box>
                        <p>{subject.subjectName}</p>
                    </Box>
                    <Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.day"]}</p>
                        </Box>
                        <p>{roomShiftClass.day}</p>
                    </Box>

                    <Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.time.start"]}:</p>
                        </Box>
                        <p>{roomShiftClass.startTime}</p>
                    </Box>

                    <Box className={style.profileDataContainer}>
                        <Box className={style.profileDataContainerTitle}>
                            <p>{translation.language["label.global.time.end"]}: </p>
                        </Box>
                        <p>{roomShiftClass.endTime}</p>
                    </Box>
                </Container>
            </Grid>

        </Grid>
    )
}