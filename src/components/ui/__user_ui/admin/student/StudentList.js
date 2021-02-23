import {Box, Button, CircularProgress, Grid, Paper, Toolbar} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, useEffect} from "react"
import {AdminStudentTable as columns} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import StudentRegisterDialog from './StudentRegisterDialog'
import {connect} from 'react-redux'
import {Student} from '../../../../../store/utils/Specify'
import * as actions from "../../../../../store/action/__ActionGlobal/AdminAction";
import Typography from "@material-ui/core/Typography";
import axios from "../../../../../store/middleware/axios";
import {stringify} from "query-string";


const StudentList = ({student, pageChange, searchChange, openDialog, closeDialog, initData}) => {
    const classes = style()

    useEffect(() => {
        // axios.post('/Elearning',{
        //     query: `
        //             query{
        //                 students(search:"",page: 1){
        //                     student_id,
        //
        //                     }
        //                  }
        //
        //         `
        // }).then(respone => {
        //     console.log(respone)
        // }).catch(error => {
        //     console.log(error)
        // })




        if(student.data.length ===0) initData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Fragment>

            <StudentRegisterDialog dialog={student.dialog} closeDialog={closeDialog}/>

            <Grid component="main" className={classes.root}>

                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Button variant="outlined" color="primary" onClick={openDialog}>
                                Add Student
                            </Button>
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
        openDialog: () => dispatch(actions.openDialog(Student)),
        closeDialog: () => dispatch(actions.closeDialog(Student)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentList)