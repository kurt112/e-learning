import { Box, Container, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
import {convertDateTime} from "../../../../utils/dateFormat/DateTimeFormatToDateWord";
export default function Data({teacher}) {
    const style = ProfileStyle()
    return (
        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">Personal Information</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>First Name: </p>
                    </Box>
                    <p>{teacher.user.firstName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Last Name: </p>
                    </Box>
                    <p>{teacher.user.lastName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Birthdate </p>
                    </Box>
                    <p>{teacher.user.birthdate}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Account Registered </p>
                    </Box>
                    <p>{convertDateTime(teacher.user.createdAt)}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Email </p>
                    </Box>
                    <p>{teacher.user.email}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>Birthdate </p>
                    </Box>
                    <p>{teacher.user.birthdate}</p>
                </Box>
            </Container>
        </Fragment>
    )
}