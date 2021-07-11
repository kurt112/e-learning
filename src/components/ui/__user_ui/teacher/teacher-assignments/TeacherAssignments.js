/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Fragment, lazy, useEffect} from "react";
import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MUIDataTable from "mui-datatables";
import Typography from "@material-ui/core/Typography";
import {TeacherAssignments as columns} from "../../../utils/tableColumn";
import style, {TableOptions as options} from "../../../_style/TableStyle";
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import {connect} from "react-redux";
import {
    Teacher_Assignment,
    Teacher_Assignment_Create,
    Teacher_Assignment_Delete
} from "../../../../../store/utils/Specify";

const TeacherAssignmentCreateDialog = lazy(() => import(`./CreateAssignmentDialog`))
const TeacherAssignmentDeleteDialog = lazy(() => import(`./DeleteAssignmentDialog`))

const TeacherAssignments = ({
                                state,
                                initData,
                                searchChange,
                                pageChange,
                                createAssignmentDialogOpen,
                                createAssignmentDialogClose,
                                deleteAssignmentDialogOpen,
                                deleteAssignmentDialogClose,
                                translation
                            }) => {
    useEffect(() => {
        if (state.data.length === 0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const classes = style()
    return (
        <Fragment>
            <TeacherAssignmentCreateDialog translation={translation} dialog={state.createDialog} closeDialog={createAssignmentDialogClose}/>
            <TeacherAssignmentDeleteDialog translation={translation} dialog={state.deleteDialog} closeDialog={deleteAssignmentDialogClose}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title={translation.language["tooltip.teacher.assignment.create.assignment"]}>
                                <IconButton aria-label="Add" onClick={createAssignmentDialogOpen}>
                                    <CloudUploadIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={translation.language["tooltip.teacher.assignment.delete.assignment"]}>
                                <IconButton aria-label="delete" onClick={deleteAssignmentDialogOpen}>
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
                                {translation.language["label.teacher.assignment.table.title"]}
                                {state.loading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                            </Typography>
                        }
                        columns={columns(translation)}
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

        deleteAssignmentDialogOpen: () => dispatch(actions.openDialog(Teacher_Assignment_Delete)),
        deleteAssignmentDialogClose: () => dispatch(actions.closeDialog(Teacher_Assignment_Delete))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherAssignments)