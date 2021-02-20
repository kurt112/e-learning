import { Box, Container, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
export default function Data() {
    const style = ProfileStyle()
    return (

        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">Personal Information</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>First Name: </p>
                    </Box>
                    <p>Kurt Lupin</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Last Name: </p>
                    </Box>
                    <p>Orioque</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Birthdate </p>
                    </Box>
                    <p>December 20, 1999</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Account Registered </p>
                    </Box>
                    <p>May 2, 2020</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Email </p>
                    </Box>
                    <p>kurt112@gmai.com</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Birthdate </p>
                    </Box>
                    <p>December 20, 1999</p>
                </Box>
            </Container>

        </Fragment>
    )
}