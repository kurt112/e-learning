/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect} from "react"
import {AdminRoomShiftTable as columns} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from 'react-redux'
import {RoomShift, RoomShift_Delete} from "../../../../../store/utils/Specify";
import Typography from "@material-ui/core/Typography";
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

// actions
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import * as roomShiftListAction from "../../../../../store/action/admin/RoomShift/RoomShiftListAction"
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";

const AddStudentDialog = lazy(() => import(`./RoomShiftAddStudentDialog`));
const RegisterRoomShiftDialog = lazy(() => import(`./RoomShiftRegisterDialog`));
const DeleteRooShiftDialog = lazy(() => import(`./DeleteRoomShiftDialog`))
const RoomShiftList = ({
                           roomShift,
                           initData,
                           searchChange,
                           pageChange,
                           openDialog,
                           closeDialog,
                           openAddStudent,
                           closeAddStudent,
                           openDeleteDialog,
                           closeDeleteDialog,
                           translation
                       }) => {
    const classes = style()
    useEffect(() => {
        if (roomShift.data.length === 0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Fragment>

            <RegisterRoomShiftDialog translation={translation} dialog={roomShift.dialog} closeDialog={closeDialog}/>
            <AddStudentDialog translation={translation} dialog={roomShift.addStudentDialog}
                              closeDialog={closeAddStudent}/>
            <DeleteRooShiftDialog translation={translation} dialog={roomShift.deleteDialog}
                                  closeDialog={closeDeleteDialog}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>

                            <Tooltip title={translation.language['tooltip.room.shift.add']}>
                                <IconButton aria-label="add-room-shift" onClick={openDialog}>
                                    <LibraryAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language['tooltip.room.shift.delete']}>
                                <IconButton aria-label="delete-room" onClick={openDeleteDialog}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language['tooltip.room.shift.update']}>
                                <IconButton aria-label="update-room" onClick={() => alert('gagawin mo pa to')}>
                                    <UpdateIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={translation.language['tooltip.room.shift.add.student']}>
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
                                {translation.language["label.room.shift.table.title"]}
                                {roomShift.loading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                            </Typography>
                        }
                        data={roomShift.data}
                        columns={columns(translation)}
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

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(RoomShift)),
        searchChange: (data) => dispatch(actions.SearchChange(data, RoomShift)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, RoomShift)),
        openAddStudent: () => dispatch(roomShiftListAction.openAddStudent()),
        closeAddStudent: () => dispatch(roomShiftListAction.closeAddStudent()),

        // for opening dialog
        openDialog: () => dispatch(actions.openDialog(RoomShift)),
        closeDialog: () => dispatch(actions.closeDialog(RoomShift)),
        openDeleteDialog: () => dispatch(actions.openDialog(RoomShift_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(RoomShift_Delete))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomShiftList)