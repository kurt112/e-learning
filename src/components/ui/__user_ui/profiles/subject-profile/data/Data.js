/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Container, Grid, Typography} from "@material-ui/core";
import { Fragment } from "react";
import ProfileStyle from '../../ProfileStyle'
import {format24Hour} from "../../../../utils/dateFormat/TimeConverter";
export default function Data({translation,profile}) {
    const style = ProfileStyle()
    return (
        <Fragment>
            <h1 className={style.profileName}>{translation.language["label.global.room.info"]}</h1>

            <Grid component={Container} container>
                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.subject.code"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{profile.subjectCode}</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.subject.name"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{profile.subjectName}</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid md={9} xs={6} item>
                        <h2>{translation.language["label.global.category"]}: </h2>
                    </Grid>

                    <Grid md={3} xs={6} item>
                        <Grid container justify="flex-end">
                            <p>{profile.subjectMajor}</p>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Fragment>

    )
}