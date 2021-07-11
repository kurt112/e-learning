/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { Box, Container, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
import {convertDateTime} from "../../../../utils/dateFormat/DateTimeFormatToDateWord";
export default function Data({teacher,translation}) {
    const style = ProfileStyle()
    return (
        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">Personal Information</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.first.name"]}: </p>
                    </Box>
                    <p>{teacher.user.firstName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.last.name"]}: </p>
                    </Box>
                    <p>{teacher.user.lastName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.birth.date"]}:</p>
                    </Box>
                    <p>{teacher.user.birthdate}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.birth.date"]}:</p>
                    </Box>
                    <p>{convertDateTime(teacher.user.createdAt)}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.email"]}: </p>
                    </Box>
                    <p>{teacher.user.email}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.birth.date"]}:</p>
                    </Box>
                    <p>{teacher.user.birthdate}</p>
                </Box>
            </Container>
        </Fragment>
    )
}