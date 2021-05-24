import {Fragment, lazy, useEffect} from "react";
import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import UpdateIcon from "@material-ui/icons/Update";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MUIDataTable from "mui-datatables";
import Typography from "@material-ui/core/Typography";
import {TeacherAssignments as columns} from "../../../utils/tableColumn";
import style, {TableOptions as options} from "../../../_style/TableStyle";
import * as actions from "../../../../../store/action/__ActionGlobal/AdminAction";
import {connect} from "react-redux";
import {Teacher_Assignment, Teacher_Assignment_Create} from "../../../../../store/utils/Specify";

const TeacherAssignmentCreateDialog = lazy(() => import(`./TeacherAssignmentCreateDialog`))

const TeacherAssignments = ({
                                state,
                                initData,
                                searchChange,
                                pageChange,
                                createAssignmentDialogOpen,
                                createAssignmentDialogClose
                            }) => {
    useEffect(() => {
        if (state.data.length === 0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const classes = style()
    return (
        <Fragment>
            <TeacherAssignmentCreateDialog dialog={state.createDialog} closeDialog={createAssignmentDialogClose}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>

                            <Tooltip title="Create Assignment">
                                <IconButton aria-label="Add" onClick={createAssignmentDialogOpen}>
                                    <CloudUploadIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete Assignment">
                                <IconButton aria-label="update">
                                    <DeleteForeverIcon color='secondary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>


                        </Box>

                    </Toolbar>
                </Grid>

                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                Assignment List
                                {/*{state.loading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}*/}
                            </Typography>
                        }
                        columns={columns}
                        data={state.data}
                        options={options(
                            pageChange,
                            searchChange,
                            state.search,
                            state.totalPages,
                            state.totalItems,
                            state.page,
                            state.loading)}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.TeacherAssignment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(Teacher_Assignment)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Teacher_Assignment)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Teacher_Assignment)),


        createAssignmentDialogOpen: () => dispatch(actions.openDialog(Teacher_Assignment_Create)),
        createAssignmentDialogClose: () => dispatch(actions.closeDialog(Teacher_Assignment_Create)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherAssignments)