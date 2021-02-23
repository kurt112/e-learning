import { Box, Container, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
export default function Data({student}) {
    const style = ProfileStyle()
    return (
        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">Personal Information</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>First Name: </p>
                    </Box>
                    <p>{student.user.firstName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Last Name: </p>
                    </Box>
                    <p>{student.user.lastName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Birthdate </p>
                    </Box>
                    <p>{student.user.birthdate}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Account Registered </p>
                    </Box>
                    <p>{student.user.registerDate}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Email </p>
                    </Box>
                    <p>{student.user.email}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Birthdate </p>
                    </Box>
                    <p>{student.user.birthdate}</p>
                </Box>
            </Container>
        </Fragment>
    )
}