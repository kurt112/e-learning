import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect} from "react"
import {AdminRoomTable as columns} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from 'react-redux'
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import {Room} from "../../../../../store/utils/Specify";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteRoomDialog from "./DeleteRoomDialog";
const RegisterRoom = lazy(() => import(`./RegisterRoomDialog`));
const DeleteRoom = lazy(() => import(`./DeleteRoomDialog`))

const Index = ({room, initData, searchChange, pageChange, openDialog, closeDialog}) => {

    const classes = style()
    useEffect(() => {
        if (room.data.length === 0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Fragment>

            <RegisterRoom dialog={room.dialog} closeDialog={closeDialog}/>
            <DeleteRoomDialog/>

            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title='Add Room'>
                                <IconButton aria-label="add-room" onClick={openDialog} color="primary">
                                    <AddCircleOutlineIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                           <Tooltip title='Delete Room'>
                               <IconButton aria-label="delete-room" onClick={() => alert('gagawin mo pa to')}>
                                   <DeleteIcon fontSize={'large'} color={'secondary'}/>
                               </IconButton>
                           </Tooltip>

                            <Tooltip title='Update Room'>
                                <IconButton aria-label="update-room" onClick={() => alert('gagawin mo pa to')}>
                                    <UpdateIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                        </Box>
                    </Toolbar>
                </Grid>

                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                Room List
                                {room.loading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                            </Typography>
                        }
                        data={room.data}
                        columns={columns}
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
        initData: () => dispatch(actions.InitDataTable(Room)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Room)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Room)),
        openDialog: () => dispatch(actions.openDialog(Room)),
        closeDialog: () => dispatch(actions.closeDialog(Room)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)