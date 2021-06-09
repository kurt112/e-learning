import {Box, Button, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect} from "react"
import {AdminStudentTable as columns} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from 'react-redux'
import {Student, Student_Delete} from '../../../../../store/utils/Specify'
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DeleteIcon from "@material-ui/icons/Delete";

const StudentRegisterDialog = lazy(() => import(`./RegisterStudentDialog`));
const StudentDeleteDialog = lazy(() => import(`./DeleteStudentDialog`))

const Index = ({
                   student, pageChange, searchChange, openDialog, closeDialog, initData, openDeleteDialog,
                   closeDeleteDialog
               }) => {
    const classes = style()

    useEffect(() => {
        if (student.data.length === 0) initData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Fragment>

            <StudentRegisterDialog dialog={student.dialog} closeDialog={closeDialog}/>
            <StudentDeleteDialog dialog={student.deleteDialog} closeDialog={closeDeleteDialog} />

            <Grid component="main" className={classes.root}>

                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title='Add student'>
                                <IconButton aria-label="add-student" onClick={openDialog}>
                                    <LibraryAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='Delete Student'>
                                <IconButton aria-label="delete-student" onClick={openDeleteDialog}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>

                        </Box>
                        <Button variant="outlined" color="primary">
                            Quit
                        </Button>
                    </Toolbar>
                </Grid>

                <Grid item md={12} sm={12} xs={false} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                Student List
                                {student.loading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                            </Typography>
                        }
                        data={student.data}
                        columns={columns}
                        options={options(
                            pageChange,
                            searchChange,
                            student.search,
                            student.totalPages,
                            student.totalItems,
                            student.page,
                            student.loading)}
                    />
                </Grid>
            </Grid>
        </Fragment>

    )
}

const mapStateToProps = (state) => {
    return {
        student: state.AdminStudent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(Student)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Student)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Student)),

        // for opening and closing dialog
        openDialog: () => dispatch(actions.openDialog(Student)),
        closeDialog: () => dispatch(actions.closeDialog(Student)),
        openDeleteDialog: () => dispatch(actions.openDialog(Student_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(Student_Delete))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)