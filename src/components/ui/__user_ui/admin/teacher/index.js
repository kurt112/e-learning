/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect} from "react"
import {AdminTeacherTable as columns} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from "react-redux";
import * as actions from '../../../../../store/action/__ActionGlobal/TableAction'
import Typography from "@material-ui/core/Typography";
import {Teacher, Teacher_Delete} from '../../../../../store/utils/Specify'
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

const TeacherDialogRegister = lazy(() => import(`./RegisterTeacherDialog`))
const TeacherDeleteDialog = lazy(() => import(`./DeleteDialogTeacher`))
const Index = ({
                   teacher, pageChange, searchChange, openDialog, closeDialog, initData, openDeleteDialog,
                   closeDeleteDialog, translation
               }) => {
    const classes = style()

    useEffect(() => {

        if (teacher.data.length === 0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Fragment>
            <TeacherDialogRegister translation={translation} dialog={teacher.dialog} closeDialog={closeDialog}/>
            <TeacherDeleteDialog translation={translation} dialog={teacher.deleteDialog} closeDialog={closeDeleteDialog}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title={translation.language["tooltip.teacher.add"]}>
                                <IconButton aria-label="add-teacher" onClick={openDialog}>
                                    <LibraryAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={translation.language["tooltip.teacher.delete"]}>
                                <IconButton aria-label="delete-teacher" onClick={openDeleteDialog}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.teacher.update"]}>
                                <IconButton aria-label="update-teacher" onClick={() => alert('gagawin mo pa to')}>
                                    <UpdateIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Grid>
                <Grid item md={12} sm={12} xs={false} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                {translation.language["label.teacher.table.title"]}
                                {teacher.loading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                            </Typography>
                        }
                        data={teacher.data}
                        columns={columns(translation)}
                        options={options(
                            pageChange,
                            searchChange,
                            teacher.search,
                            teacher.totalPages,
                            teacher.totalItems,
                            teacher.page,
                            teacher.loading)}
                    />
                </Grid>
            </Grid>

        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        teacher: state.AdminTeacher
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(Teacher)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Teacher)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Teacher)),

        // for opening and closing dialog
        openDialog: () => dispatch(actions.openDialog(Teacher)),
        closeDialog: () => dispatch(actions.closeDialog(Teacher)),
        openDeleteDialog: () => dispatch(actions.openDialog(Teacher_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(Teacher_Delete))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)