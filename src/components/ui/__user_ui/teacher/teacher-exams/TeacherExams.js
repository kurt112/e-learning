import {Fragment, lazy, useEffect} from "react";
import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MUIDataTable from "mui-datatables";
import Typography from "@material-ui/core/Typography";
import {TeacherExams as columns} from "../../../utils/tableColumn";
import style, {TableOptions as options} from "../../../_style/TableStyle";
import * as actions from "../../../../../store/action/__ActionGlobal/AdminAction";
import {connect} from "react-redux";
import {
    Teacher_Exams, Teacher_Exams_Create, Teacher_Exams_Delete
} from "../../../../../store/utils/Specify";

const CreateExamsDialog = lazy(() => import(`./CreateExamsDialog`))
const DeleteExamsDialog = lazy(() => import(`./DeleteExamsDialog`))

const TeacherExams = ({
                          state,
                          initData,
                          searchChange,
                          pageChange,
                          createExamDialogOpen,
                          createExamDialogClose,
                          deleteExamDialogOpen,
                          deleteExamDialogClose
                      }) => {
    useEffect(() => {
        if (state.data.length === 0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const classes = style()
    return (
        <Fragment>
            <CreateExamsDialog dialog={state.createDialog} closeDialog={createExamDialogClose}/>
            <DeleteExamsDialog dialog={state.deleteDialog} closeDialog={deleteExamDialogClose}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>

                            <Tooltip title="Create Exams">
                                <IconButton aria-label="Add" onClick={createExamDialogOpen}>
                                    <CloudUploadIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete Exams">
                                <IconButton aria-label="delete" onClick={deleteExamDialogOpen}>
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
                                Exam List
                                {state.loading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}
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
        state: state.TeacherExams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(Teacher_Exams)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Teacher_Exams)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Teacher_Exams)),


        createExamDialogOpen: () => dispatch(actions.openDialog(Teacher_Exams_Create)),
        createExamDialogClose: () => dispatch(actions.closeDialog(Teacher_Exams_Create)),

        deleteExamDialogOpen: () => dispatch(actions.openDialog(Teacher_Exams_Delete)),
        deleteExamDialogClose: () => dispatch(actions.closeDialog(Teacher_Exams_Delete))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherExams)