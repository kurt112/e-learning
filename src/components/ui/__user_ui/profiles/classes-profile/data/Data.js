/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Container, Grid, Paper, TextField, Typography} from "@material-ui/core";
import ProfileStyle from '../../ProfileStyle'
import {format24Hour} from "../../../../utils/dateFormat/TimeConverter";
import {Fragment} from 'react'

export default function Data({roomShiftClass, translation}) {

    const {roomShift} = roomShiftClass
    const {subject} = roomShiftClass

    const style = ProfileStyle()
    return (
        <Fragment>
            <Grid component={Paper} alignItems={"center"} justify={"center"}>
                <h1 className={style.alignCenter}>{translation.language["label.global.class.information"]}</h1>
                <Grid component={Container} container>
                    <Grid container>
                        <Grid md={9} xs={6} item>
                            <h2 >{translation.language["label.global.room.name"]}: </h2>
                        </Grid>

                        <Grid md={3} xs={6} item>
                            <Grid container justify="flex-end">
                                <p className={style.alignRight}>{roomShift.room.roomName}</p>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid md={9} xs={6} item>
                            <h2 >{translation.language["label.global.room.shift.name"]}: </h2>
                        </Grid>

                        <Grid md={3} xs={6} item>
                            <Grid container justify="flex-end">
                                <p className={style.alignRight}>{roomShift.roomShiftName}</p>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid md={9} xs={6} item>
                            <h2 >{translation.language["label.global.grade"]}: </h2>
                        </Grid>

                        <Grid md={3} xs={6} item>
                            <Grid container justify="flex-end">
                                <p className={style.alignRight}>{roomShift.grade}</p>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid md={9} xs={6} item>
                            <h2 >{translation.language["label.global.section"]}: </h2>
                        </Grid>

                        <Grid md={3} xs={6} item>
                            <Grid container justify="flex-end">
                                <p className={style.alignRight}>{roomShift.section}</p>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid md={9} xs={6} item>
                            <h2 >{translation.language["label.global.subject.name"]}: </h2>
                        </Grid>

                        <Grid md={3} xs={6} item>
                            <Grid container justify="flex-end">
                                <p className={style.alignRight}>{subject.subjectName}</p>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid md={9} xs={6} item>
                            <h2 >{translation.language["label.global.day"]}: </h2>
                        </Grid>

                        <Grid md={3} xs={6} item>
                            <Grid container justify="flex-end">
                                <p className={style.alignRight}>{roomShiftClass.day}</p>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid md={9} xs={6} item>
                            <h2 >{translation.language["label.global.time.start"]}: </h2>
                        </Grid>

                        <Grid md={3} xs={6} item>
                            <Grid container justify="flex-end">
                                <p className={style.alignRight}>{format24Hour(roomShiftClass.startTime)}</p>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid md={9} xs={6} item>
                            <h2>{translation.language["label.global.time.end"]}: </h2>
                        </Grid>

                        <Grid md={3} xs={6} item>
                            <Grid container justify="flex-end">
                                <p className={style.alignRight} >{format24Hour(roomShiftClass.endTime)}</p>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Fragment>
    )
}