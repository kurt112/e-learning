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
import {AdminRoomTable as columns} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from 'react-redux'
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction"
import {reInitState} from '../../../../../store/action/__ActionGlobal/DialogAction'
import {Room, Room_Delete, Room_Update} from "../../../../../store/utils/Specify"
import Typography from "@material-ui/core/Typography"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from '@material-ui/icons/Delete'
import UpdateIcon from '@material-ui/icons/Update'
import {baseUrl} from "../../../../../store/middleware/axios";
import {OffRoom, OnRoom} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

const RegisterRoom = lazy(() => import(`./RegisterRoomDialog`))
const DeleteRoomDialog = lazy(() => import(`./DeleteRoomDialog`))
const FindRoomDialog = lazy(() => import(`./FindRoomDialog`))

const Index = ({
                   room,
                   initData,
                   searchChange,
                   pageChange,
                   openDialog,
                   closeDialog,
                   openDeleteDialog,
                   closeDeleteDialog,
                   openUpdateDialog,
                   closeUpdateDialog,
                   translation,
                   setData,
                   reInitState,
                   statusChange
               }) => {

    const classes = style()
    useEffect(() => {
         initData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setStatus = async (status,id) => {

        const params = new URLSearchParams()
        params.append('id', id)

        if(status === true) await baseUrl.post(OffRoom, params).then(ignored =>{})
        else await baseUrl.post(OnRoom, params).then(ignored => {})

        alert("Status Change Success")

        await searchChange(room.search)
    }

    return (
        <Fragment>

            <RegisterRoom
                translation={translation}
                dialog={room.dialog}
                closeDialog={closeDialog}
            />
            <DeleteRoomDialog
                translation={translation}
                dialog={room.deleteDialog}
                closeDialog={closeDeleteDialog}
            />
            <FindRoomDialog
                reInitState={reInitState}
                setData={setData}
                translation={translation}
                dialog={room.updateDialog}
                closeDialog={closeUpdateDialog}
            />

            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title={translation.language["tooltip.room.add"]}>
                                <IconButton aria-label="add-room" onClick={openDialog} color="primary">
                                    <AddCircleOutlineIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.room.delete"]}>
                                <IconButton aria-label="delete-room" onClick={openDeleteDialog}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.room.update"]}>
                                <IconButton aria-label="update-room" onClick={openUpdateDialog}>
                                    <UpdateIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                        </Box>

                        <FormControl >
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={room.status}
                                onChange={(e) => statusChange(e.target.value)}
                            >
                                {
                                    room.statusData.map((e,i) => <MenuItem key={i} value={i}>{e}</MenuItem>)
                                }
                            </Select>
                        </FormControl>

                    </Toolbar>
                </Grid>

                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                {translation.language["label.room.table.title"]}
                                {room.loading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                            </Typography>
                        }
                        data={room.data}
                        columns={columns(translation,setStatus)}
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
        room: state.AdminRoom
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // action for tables
        initData: () => dispatch(actions.InitDataTable(Room)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Room)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Room)),
        statusChange: (data) => dispatch(actions.statusChange(data,Room)),

        // action for opening and closing dialogs
        openDialog: () => dispatch(actions.openDialog(Room)),
        closeDialog: () => dispatch(actions.closeDialog(Room)),

        openDeleteDialog: () => dispatch(actions.openDialog(Room_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(Room_Delete)),

        openUpdateDialog: () => dispatch(actions.openDialog(Room_Update)),
        closeUpdateDialog: () => dispatch(actions.closeDialog(Room_Update)),

        setData: (data) => dispatch(actions.setData(data, Room)),
        reInitState: () => dispatch(reInitState(Room)),



    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)