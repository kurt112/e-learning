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
                        <p>Subject Code: </p>
                    </Box>
                    <p>Kurt Lupin</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Subject Name: </p>
                    </Box>
                    <p>Orioque</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Major </p>
                    </Box>
                    <p>December 20, 1999</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>Status </p>
                    </Box>
                    <p>May 2, 2020</p>
                </Box>
            </Container>

        </Fragment>
    )
}