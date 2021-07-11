/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import {TeacherLectureTable as columns} from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import {
    Teacher_Lecture,
    Teacher_Lecture_Create, Teacher_Lecture_Delete
} from "../../../../../store/utils/Specify";
import {connect} from "react-redux";
import {Fragment, lazy, useEffect} from "react";

const CreateLectureDialog = lazy(() => import(`./CreateLectureDialog`))
const DeleteLectureDialog = lazy(() => import(`./DeleteLectureDialog`))

const TeacherLecture = ({
                            state,
                            createLectureDialogOpen,
                            createLectureDialogClose,
                            deleteLectureDialogOpen,
                            deleteLectureDialogClose,
                            pageChange,
                            initData,
                            searchChange,
                            translation
                        }) => {
    const classes = style()

    useEffect(() => {
        if (state.data.length === 0) initData()
    }, [])
    return (
        <Fragment>
            <CreateLectureDialog translation={translation} closeDialog={createLectureDialogClose}
                                 dialog={state.createDialog}/>
            <DeleteLectureDialog translation={translation} closeDialog={deleteLectureDialogClose}
                                 dialog={state.deleteDialog}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title={translation.language["tooltip.teacher.lecture.create"]}>
                                <IconButton aria-label="Add" onClick={createLectureDialogOpen}>
                                    <CloudUploadIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.teacher.lecture.update"]}>
                                <IconButton aria-label="update">
                                    <UpdateIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.teacher.lecture.delete"]}>
                                <IconButton aria-label="delete" onClick={deleteLectureDialogOpen}>
                                    <DeleteForeverIcon color='secondary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Grid>

                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={translation.language["label.teacher.lecture.table.title"]}
                        data={state.data}
                        columns={columns}
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
        state: state.TeacherLectures
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(Teacher_Lecture)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Teacher_Lecture)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Teacher_Lecture)),


        createLectureDialogOpen: () => dispatch(actions.openDialog(Teacher_Lecture_Create)),
        createLectureDialogClose: () => dispatch(actions.closeDialog(Teacher_Lecture_Create)),

        deleteLectureDialogOpen: () => dispatch(actions.openDialog(Teacher_Lecture_Delete)),
        deleteLectureDialogClose: () => dispatch(actions.closeDialog(Teacher_Lecture_Delete))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherLecture)