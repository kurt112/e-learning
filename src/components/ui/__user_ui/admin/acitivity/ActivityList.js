import {Box, Button, CircularProgress, Grid, Paper, Toolbar} from "@material-ui/core"
import {AdminActivityTable as columns} from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import {useEffect} from "react"
import {Fragment} from 'react'
import ActivityDialogRegister from "./ActivityDialogRegister";
import * as actions from "../../../../../store/action/admin/__ActionGlobal/AdminAction";
import {Activity} from "../../../../../store/utils/Specify";
import {connect} from 'react-redux'
import Typography from "@material-ui/core/Typography";

const ActivityList = ({
                          openDialog,
                          closeDialog,
                          initData,
                          searchChange,
                          pageChange,
                          activity
                      }) => {
    const classes = style()

    useEffect(() => {
        // if(activity.data.length ===0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            {
                activity.dialog === true?
                <ActivityDialogRegister dialog={activity.dialog} closeDialog={closeDialog}/>: null
            }
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Button variant="outlined" color="primary" onClick={openDialog}>
                                Add Activity
                            </Button>
                        </Box>
                        <Button variant="outlined" color="primary">
                            Quit
                        </Button>
                    </Toolbar>
                </Grid>

                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    {/*<MUIDataTable*/}
                    {/*    title={*/}
                    {/*        <Typography variant="h6">*/}
                    {/*            Activity List*/}
                    {/*            {activity.loading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}*/}
                    {/*        </Typography>*/}
                    {/*    }*/}
                    {/*    data={activity.data}*/}
                    {/*    columns={columns}*/}
                    {/*    options={options(*/}
                    {/*        pageChange,*/}
                    {/*        searchChange,*/}
                    {/*        activity.search,*/}
                    {/*        activity.totalPages,*/}
                    {/*        activity.totalItems,*/}
                    {/*        activity.page,*/}
                    {/*        activity.loading)}*/}
                    {/*/>*/}
                </Grid>
            </Grid>
        </Fragment>

    )
}

const mapStateToProps = (state) => {
    return {
        activity: state.AdminActivity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(Activity)),
        searchChange: (data) => dispatch(actions.SearchChange(data,Activity)),
        pageChange: (page) => dispatch(actions.DataNextPage(page,Activity)),
        openDialog: () => dispatch(actions.openDialog(Activity)),
        closeDialog: () => dispatch(actions.closeDialog(Activity)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList)