import { Box, Container, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
import {convertDateTime} from "../../../../utils/dateFormat/DateTimeFormatToDateWord";
export default function Data({student,assignedRoom}) {
    const style = ProfileStyle()
    console.log(assignedRoom)
    console.log(student)

    return (
        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">Personal Information</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>First Name: </p>
                    </Box>
                    <p>{student.user.firstName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Last Name: </p>
                    </Box>
                    <p>{student.user.lastName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Grade And Section: </p>
                    </Box>
                    {/*<p>{`${assignedRoom.grade} - ${assignedRoom.section}`}</p>*/}
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Account Registered: </p>
                    </Box>
                    <p>{convertDateTime(student.user.createdAt)}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Email: </p>
                    </Box>
                    <p>{student.user.email}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Birthdate: </p>
                    </Box>
                    <p>{student.user.birthdate}</p>
                </Box>
            </Container>
        </Fragment>
    )
}