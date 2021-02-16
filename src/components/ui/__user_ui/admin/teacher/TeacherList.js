import {Box, Button, CircularProgress, Grid, Paper, Toolbar} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, useEffect} from "react"
import {AdminTeacherTable as columns } from '../../../utils/tableColumn'
import style, { TableOptions as options } from '../../../_style/TableStyle'
import TeacherDialogRegister from './TeacherDialogRegister'
import {connect} from "react-redux";
import * as actions from '../../../../../store/action/admin/__ActionGlobal/AdminAction'
import Typography from "@material-ui/core/Typography";
import {Teacher} from '../../../../../store/utils/Specify'
 const TeacherList = ({teacher,pageChange,searchChange, openDialog, closeDialog,initData}) =>{
    const classes = style()

     useEffect(() => {

         if(teacher.data.length ===0) initData()

         // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
    return (
        <Fragment>
            <TeacherDialogRegister dialog={teacher.dialog} closeDialog={closeDialog} />

            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Button variant="outlined" color="primary" onClick={openDialog}>
                                Add Teacher
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
                                Teacher List
                                {teacher.loading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}
                            </Typography>
                        }
                        data={teacher.data}
                        columns={columns}
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
     return{
         initData: () => dispatch(actions.InitDataTable(Teacher)),
         searchChange: (data) => dispatch(actions.SearchChange(data,Teacher)),
         pageChange: (page) => dispatch(actions.DataNextPage(page,Teacher)),
         openDialog: () => dispatch(actions.openDialog(Teacher)),
         closeDialog: ()=> dispatch(actions.closeDialog(Teacher)),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherList)