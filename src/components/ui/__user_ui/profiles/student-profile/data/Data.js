/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { Box, Container, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
import {convertDateTime} from "../../../../utils/dateFormat/DateTimeFormatToDateWord";
export default function Data({student,translation}) {
    const style = ProfileStyle()
    return (
        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">{translation.language["label.global.student.information"]}</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.first.name"]}: </p>
                    </Box>
                    <p>{student.user.firstName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.last.name"]}: </p>
                    </Box>
                    <p>{student.user.lastName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.grade.section"]}</p>
                    </Box>
                    {/*<p>{`${assignedRoom.grade} - ${assignedRoom.section}`}</p>*/}
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.account.registered"]}: </p>
                    </Box>
                    <p>{convertDateTime(student.user.createdAt)}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.email"]}: </p>
                    </Box>
                    <p>{student.user.email}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.birth.date"]}: </p>
                    </Box>
                    <p>{student.user.birthdate}</p>
                </Box>
            </Container>
        </Fragment>
    )
}