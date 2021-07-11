/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect} from "react"
import {AdminRoomClassTable as columns} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'

import {connect} from 'react-redux'
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import {RoomShiftClass, RoomShiftClass_Delete} from "../../../../../store/utils/Specify";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";


const RegisterRoom = lazy(() => import(`./RegisterRoomClassDialog`));
const DeleteRoomClass = lazy(() => import(`./DeleteRoomClassDialog`))

const Index = ({
                   room,
                   initData,
                   searchChange,
                   pageChange,
                   openDialog,
                   closeDialog,
                   openDeleteDialog,
                   closeDeleteDialog,
                   translation
               }) => {

    const classes = style()
    useEffect(() => {
        if (room.data.length === 0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Fragment>

            <RegisterRoom translation={translation} dialog={room.dialog} closeDialog={closeDialog}/>
            <DeleteRoomClass translation={translation} dialog={room.deleteDialog} closeDialog={closeDeleteDialog}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Tooltip title={translation.language["tooltip.class.add"]}>
                            <IconButton aria-label="add-room-shift" onClick={openDialog}>
                                <LibraryAddIcon fontSize={'large'} color={'primary'}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={translation.language["tooltip.class.delete"]}>
                            <IconButton aria-label="delete-room" onClick={openDeleteDialog}>
                                <DeleteIcon fontSize={'large'} color={'secondary'}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={translation.language["tooltip.class.update"]}>
                            <IconButton aria-label="update-room" onClick={() => alert('gagawin mo pa to')}>
                                <UpdateIcon fontSize={'large'} color={'primary'}/>
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </Grid>

                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                {translation.language["label.room.class.table.title"]}
                                {room.loading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                            </Typography>
                        }
                        data={room.data}
                        columns={columns(translation)}
                        options={options(
                            pageChange,
                            searchChange,
                            room.search,
                            room.totalPages,
                            room.totalItems,
                            room.page,
                            room.loading)}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        room: state.AdminClass
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(RoomShiftClass)),
        searchChange: (data) => dispatch(actions.SearchChange(data, RoomShiftClass)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, RoomShiftClass)),

        // for opening and closing dialog
        openDialog: () => dispatch(actions.openDialog(RoomShiftClass)),
        closeDialog: () => dispatch(actions.closeDialog(RoomShiftClass)),

        openDeleteDialog: () => dispatch(actions.openDialog(RoomShiftClass_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(RoomShiftClass_Delete))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)