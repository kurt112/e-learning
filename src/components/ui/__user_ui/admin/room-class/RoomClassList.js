import {Box, Button, CircularProgress, Grid, Paper, Toolbar} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect} from "react"
import { AdminRoomClassTable as columns } from '../../../utils/tableColumn'
import style, { TableOptions as options } from '../../../_style/TableStyle'

import {connect} from 'react-redux'
import * as actions from "../../../../../store/action/__ActionGlobal/AdminAction";
import {RoomShiftClass} from "../../../../../store/utils/Specify";
import Typography from "@material-ui/core/Typography";


const RegisterRoom = lazy(() => import(`./RoomClassDialogRegister`));

 const  RoomClassList = ({room, initData,searchChange,pageChange,openDialog,closeDialog})=> {

    const classes = style()
     useEffect(() => {
         if(room.data.length ===0) initData()

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
                                Add Class
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
                                Class List
                                {room.loading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}
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
        room: state.AdminClass
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(RoomShiftClass)),
        searchChange: (data) => dispatch(actions.SearchChange(data,RoomShiftClass)),
        pageChange: (page) => dispatch(actions.DataNextPage(page,RoomShiftClass)),
        openDialog: () => dispatch(actions.openDialog(RoomShiftClass)),
        closeDialog: ()=> dispatch(actions.closeDialog(RoomShiftClass)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomClassList)