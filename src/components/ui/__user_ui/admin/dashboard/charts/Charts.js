/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PieChartStudent from "./PieChartStudent";
import SubjectUsed from "./SubjectUsed";
import PieChartUserRole from "./PieChartUserRole";
import ClassHappeningTodayTable from "./ClassHappeningTodayTable";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        marginTop: 20,
        overflow: 'hidden'
    },

    marginZero: {
        margin: 0,
        width: '100%',
    },

    title: {
        flexGrow: 1,
    },

    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 10
    },
    fixedHeight: {
        height: 240,
    },
}));

const  Charts = () => {

    const classes = useStyles();
    const [total, setTotal] = useState(0)

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [topTenData, setTopTenData] = useState([])
    const [topTenSlowProduct, setTopTenSlowedProduct] = useState([])

    useEffect(() => {

    }, [])


    return (
        <div className={classes.root}>
            <main style={{width: '100%'}}>



                    {/*/!* Today Sales *!/*/}
                    {/*<Grid item xs={12} md={4} lg={3} alignItems={"flex-end"} style={{textAlign: 'right'}}>*/}
                    {/*    <Paper className={fixedHeightPaper}>*/}
                    {/*        <TodaySales total={total}/>*/}
                    {/*    </Paper>*/}
                    {/*</Grid>*/}

                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper} >
                          <ClassHappeningTodayTable/>
                        </Paper>
                    </Grid>
                    {/*<Grid item xs={12}>*/}
                    {/*    <Paper className={classes.paper}>*/}
                    {/*        <RecentTransaction setTotal={setTotal}/>*/}
                    {/*    </Paper>*/}
                    {/*</Grid>*/}

                    {/*<Grid item xs={12}>*/}
                    {/*    <Paper className={classes.paper}>*/}
                    {/*        <RecentAuditTrail/>*/}
                    {/*    </Paper>*/}
                    {/*</Grid>*/}


            </main>
        </div>
    );
}


export default Charts