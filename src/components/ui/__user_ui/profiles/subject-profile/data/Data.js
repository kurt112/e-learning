/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { Box, Container, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
export default function Data({translation}) {
    const style = ProfileStyle()
    return (

        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">Personal Information</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>{translation.language["label.global.subject.code"]}: </p>
                    </Box>
                    <p>Kurt Lupin</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>{translation.language["label.global.subject.name"]}: </p>
                    </Box>
                    <p>Orioque</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>{translation.language["label.global.major"]}</p>
                    </Box>
                    <p>December 20, 1999</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainertitle}>
                        <p>{translation.language["label.global.status"]}</p>
                    </Box>
                    <p>May 2, 2020</p>
                </Box>
            </Container>

        </Fragment>
    )
}