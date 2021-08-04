/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {Fragment} from "react";
import ProfileStyle from '../../ProfileStyle'
import {format24Hour} from "../../../../utils/dateFormat/TimeConverter";

export default function Data({room, translation}) {
    const style = ProfileStyle()
    return (

        <Fragment>
            <h1 className={style.profileName}>{translation.language["label.global.room.info"]}</h1>

            <Grid component={Container} container>
                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.room.name"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{room.roomName}</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.time.start"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{format24Hour(room.timeStart)}</p>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.time.end"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{format24Hour(room.timeEnd)}</p>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>

        </Fragment>
    )
}