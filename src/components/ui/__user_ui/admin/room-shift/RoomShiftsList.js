import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect} from "react"
import { AdminRoomShiftTable as columns } from '../../../utils/tableColumn'
import style, { TableOptions as options } from '../../../_style/TableStyle'
import {connect} from 'react-redux'
import { RoomShift} from "../../../../../store/utils/Specify";
import Typography from "@material-ui/core/Typography";
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

// actions
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import * as roomShiftListAction from "../../../../../store/action/admin/RoomShift/RoomShiftListAction"
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";

const AddStudentDialog = lazy(() => import(`./RoomShiftDialogAddStudent`));
const RegisterRoomShiftDialog = lazy(() => import(`./RoomShiftDialogRegister`));

const  RoomShiftList = ({roomShift, initData,searchChange,pageChange,openDialog,closeDialog,openAddStudent, closeAddStudent})=> {
    console.log(roomShift.data)
    const classes = style()
    useEffect(() => {
        if(roomShift.data.length ===0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Fragment>

            <RegisterRoomShiftDialog dialog={roomShift.dialog} closeDialog={closeDialog}/>
            <AddStudentDialog dialog={roomShift.addStudentDialog} closeDialog={closeAddStudent}/>

            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>

                            <Tooltip title='Add Room Shift'>
                                <IconButton aria-label="add-room-shift" onClick={openDialog}>
                                    <LibraryAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Delete Room Shift'>
                                <IconButton aria-label="delete-room" onClick={() => alert('gagawin mo pa to')}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Update Room Shift'>
                                <IconButton aria-label="update-room" onClick={() => alert('gagawin mo pa to')}>
                                    <UpdateIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='Add Students'>
                                <IconButton aria-label="update-room" onClick={openAddStudent}>
                                    <GroupAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                        </Box>
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