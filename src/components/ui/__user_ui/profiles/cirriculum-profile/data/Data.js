import {Container, Grid, TextareaAutosize, TextField} from "@material-ui/core";
import {format24Hour} from "../../../../utils/dateFormat/TimeConverter";
import {Fragment} from "react";
import ProfileStyle from "../../ProfileStyle";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 13/08/2021, Friday
 **/

export default function Data({translation, name, description}) {
    const style = ProfileStyle()
    console.log(name)
    return <Fragment>
        <h1 className={style.profileName}>{translation.language["label.global.curriculum.info"]}</h1>

        <Grid container component={Container}>
            <Grid container>
                <Grid md={9} xs={6} item>
                    <h2>{translation.language["label.global.curriculum.name"]}: </h2>
                </Grid>

                <Grid md={3} xs={6} item>
                    <Grid container justify="flex-end">
                        <p>{name}</p>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item md={9} xs={6} item>
                    <h2>{translation.language["label.global.description"]}: </h2>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item md={12} xs={12}>
                    <TextareaAutosize
                        style={{width: '100%', marginBottom: '10px'}}
                        rows={20} aria-label="empty textarea"
                        placeholder="Curriculum Description"
                        value={description}
                    />
                </Grid>
            </Grid>
        </Grid>

    </Fragment>
}