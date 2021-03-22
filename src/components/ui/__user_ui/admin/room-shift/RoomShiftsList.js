import {Box, Button, CircularProgress, Grid, Paper, Toolbar} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, useEffect} from "react"
import { AdminRoomShiftTable as columns } from '../../../utils/tableColumn'
import style, { TableOptions as options } from '../../../_style/TableStyle'
import RegisterRoomShift from './RoomShiftDialogRegister'
import AddStudent from './RoomShiftDialogAddStudent'
import {connect} from 'react-redux'
import { RoomShift} from "../../../../../store/utils/Specify";
import Typography from "@material-ui/core/Typography";


// actions
import * as actions from "../../../../../store/action/__ActionGlobal/AdminAction";
import * as roomShiftListAction from "../../../../../store/action/admin/RoomShift/RoomShiftListAction"

const  RoomShiftList = ({roomShift, initData,searchChange,pageChange,openDialog,closeDialog,openAddStudent, closeAddStudent})=> {
    console.log(roomShift.data)
    const classes = style()
    useEffect(() => {
        if(roomShift.data.length ===0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Fragment>

            <RegisterRoomShift dialog={roomShift.dialog} closeDialog={closeDialog}/>
            <AddStudent  dialog={roomShift.addStudentDialog} closeDialog={closeAddStudent}/>

            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Button variant="outlined" color="primary" onClick={openDialog}>
                                Add Room Shift
                            </Button>
                            <Button variant="outlined" color="primary" onClick={openAddStudent}>
                                Add Students
                            </Button>
                        </Box>
                        <Button variant="outlined" color="primary">
                            Quit
                        </Button>
                    </Toolbar>
                </Grid>

                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                Room Shift List
                                {roomShift.loading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}
                            </Typography>
                        }
                        data={roomShift.data}
                        columns={columns}
                        options={options(
                            pageChange,
                            searchChange,
                            roomShift.search,
                            roomShift.totalPages,
                            roomShift.totalItems,
                            roomShift.page,
                            roomShift.loading)}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        roomShift: state.AdminRoomShift
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(RoomShift)),
        searchChange: (data) => dispatch(actions.SearchChange(data,RoomShift)),
        pageChange: (page) => dispatch(actions.DataNextPage(page,RoomShift)),
        openDialog: () => dispatch(actions.openDialog(RoomShift)),
        closeDialog: ()=> dispatch(actions.closeDialog(RoomShift)),
        openAddStudent: () => dispatch(roomShiftListAction.openAddStudent()),
        closeAddStudent: () => dispatch(roomShiftListAction.closeAddStudent())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomShiftList)