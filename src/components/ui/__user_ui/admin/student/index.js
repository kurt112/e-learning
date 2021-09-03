/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {
    Box,
    CircularProgress,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Toolbar,
    Tooltip
} from "@material-ui/core"
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
import {baseUrl} from "../../../../../store/middleware/axios";
import {
    offStudent,
    onStudent
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {StudentRegisterForm} from "../../../registerForm";

const StudentRegisterDialog = lazy(() => import(`./RegisterStudentDialog`));
const StudentDeleteDialog = lazy(() => import(`./DeleteStudentDialog`))

const Index = ({
                   state,
                   pageChange,
                   searchChange,
                   openDialog,
                   closeDialog,
                   initData,
                   openDeleteDialog,
                   closeDeleteDialog,
                   translation,
                   statusChange
               }) => {
    const classes = style()

    useEffect(() => {
        initData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setStatus = async (status, id) => {
        const params = new URLSearchParams()
        params.append('id', id)

        if (status === true) await baseUrl.post(offStudent, params).then(ignored => {})
        else await baseUrl.post(onStudent, params).then(ignored => {})

        alert("Status Change Success")

        await searchChange(state.search)
    }


    return (
        <Fragment>
            <StudentRegisterForm translation={translation}
                                 closeDialog={closeDialog}
                                 open={state.dialog}
            />
            {/*<StudentRegisterDialog translation={translation} dialog={state.dialog} closeDialog={closeDialog}/>*/}
            <StudentDeleteDialog translation={translation} dialog={state.deleteDialog} closeDialog={closeDeleteDialog}/>

            <Grid component="main" className={classes.root}>

                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title={translation.language["label.global.student.add"]}>
                                <IconButton aria-label="add-student" onClick={openDialog}>
                                    <LibraryAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={translation.language["label.global.student.delete"]}>
                                <IconButton aria-label="delete-student" onClick={openDeleteDialog}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state.status}
                                onChange={(e) => statusChange(e.target.value)}
                            >
                                {
                                    state.statusData.map((e, i) => <MenuItem key={i} value={i}>{e}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </Toolbar>
                </Grid>

                <Grid item md={12} sm={12} xs={false} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                {translation.language["label.global.student.list"]}
                                {state.loading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                            </Typography>
                        }
                        data={state.data}
                        columns={columns(translation, setStatus)}
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
        state: state.AdminStudent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(Student)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Student)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Student)),
        statusChange: (data) => dispatch(actions.statusChange(data, Student)),

        // for opening and closing dialog
        openDialog: () => dispatch(actions.openDialog(Student)),
        closeDialog: () => dispatch(actions.closeDialog(Student)),
        openDeleteDialog: () => dispatch(actions.openDialog(Student_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(Student_Delete))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)