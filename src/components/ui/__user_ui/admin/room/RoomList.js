import {Box, Button, CircularProgress, Grid, Paper, Toolbar} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect} from "react"
import {AdminRoomTable as columns} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from 'react-redux'
import * as actions from "../../../../../store/action/__ActionGlobal/AdminAction";
import {Room} from "../../../../../store/utils/Specify";
import Typography from "@material-ui/core/Typography";

const RegisterRoom = lazy(() => import(`./RoomDialogRegister`));

const RoomList = ({room, initData, searchChange, pageChange, openDialog, closeDialog}) => {

    const classes = style()
    useEffect(() => {
        if (room.data.length === 0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Fragment>

            <RegisterRoom dialog={room.dialog} closeDialog={closeDialog}/>

            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Button variant="outlined" color="primary" onClick={openDialog}>
                                Add Room
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)