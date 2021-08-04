/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Container, Grid} from "@material-ui/core";
import {Fragment} from "react";
import ProfileStyle from '../../ProfileStyle'
import {format24Hour} from "../../../../utils/dateFormat/TimeConverter";

export default function Data({roomShift, translation}) {
    const style = ProfileStyle()
    console.log(roomShift)
    return (
        <Fragment>
            <h1 className={style.profileName}>
                {translation.language["label.global.room.shift.info"]}
            </h1>
            <Grid component={Container} container>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.room.name"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{roomShift.room.roomName}</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.grade"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{roomShift.grade}</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.section"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{roomShift.section}</p>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.time.start"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{format24Hour(roomShift.timeStart)}</p>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.time.end"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{format24Hour(roomShift.timeEnd)}</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.adviser"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>
                                {roomShift.teacher === null ? translation.language["label.global.tba"] : `${roomShift.teacher.user.firstName} ${roomShift.teacher.user.lastName}`}
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}