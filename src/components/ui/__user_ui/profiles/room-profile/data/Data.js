/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { Box, Container, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
import {format24Hour} from "../../../../utils/dateFormat/TimeConverter";
export default function Data({room,translation}) {
    const style = ProfileStyle()
    return (

        <Fragment>
            <Typography className={style.profileName} variant="h4" component="h2">{translation.language["label.global.room.info"]}</Typography>
            <Container>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.room.name"]}: </p>
                    </Box>
                    <p>{room.roomName}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.time.start"]}</p>
                    </Box>
                    <p>{format24Hour(room.timeStart)}</p>
                </Box>
                <Box className={style.profileDataContainer}>
                    <Box className={style.profileDataContainerTitle}>
                        <p>{translation.language["label.global.time.end"]}</p>
                    </Box>
                    <p>{format24Hour(room.timeEnd)}</p>
                </Box>

            </Container>

        </Fragment>
    )
}