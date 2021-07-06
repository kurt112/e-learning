import {Fragment} from "react";
import style from "./DashBoardStyle";
import Card from "./Card";
import {Grid} from "@material-ui/core";
import Charts from "./charts/Charts";

const Index = () => {
    const classes = style()
    return (
        <Fragment>
            <Grid container  justify={"space-between"} className={classes.header}>
                <Card/>
            </Grid>





            <Grid container>
                <Grid item container md={12}>
                    <Charts/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Index