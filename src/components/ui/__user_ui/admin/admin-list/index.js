/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 17/08/2021, Tuesday
 **/
import style, {TableOptions as options} from "../../../_style/TableStyle";
import {Fragment, useEffect} from "react";
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
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import MUIDataTable from "mui-datatables";
import Typography from "@material-ui/core/Typography";
import {AdminTable as columns} from "../../../utils/tableColumn";
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import {
    Admin,
    Admin_Create,
    Admin_Delete
} from "../../../../../store/utils/Specify";
import {connect} from 'react-redux'
import CreateAdminDialog from "./CreateAdminDialog";
import DeleteAdminDialog from "./DeleteAdminDialog";
import {baseUrl} from "../../../../../store/middleware/axios";
import {
    adminOff, adminOn
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

const Index = ({
                   state,
                   initData,
                   searchChange,
                   pageChange,
                   openCreateDialog,
                   closeCreateDialog,
                   openDeleteDialog,
                   closeDeleteDialog,
                   translation,
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

        if(status === true) await baseUrl.post(adminOff, params).then(ignored =>{})
        else await baseUrl.post(adminOn, params).then(ignored => {})

        alert("Status Change Success")

        await searchChange(state.search)
    }

    return (
        <Fragment>
            <CreateAdminDialog
                translation={translation}
                dialog={state.createDialog}
                closeDialog={closeCreateDialog}
            />
            <DeleteAdminDialog
                translation={translation}
                dialog={state.deleteDialog}
                closeDialog={closeDeleteDialog}
            />

            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title={translation.language["tooltip.room.add"]}>
                                <IconButton aria-label="add-room" onClick={openCreateDialog} color="primary">
                                    <AddCircleOutlineIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.room.delete"]}>
                                <IconButton aria-label="delete-room" onClick={openDeleteDialog}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <FormControl >
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state.status}
                                onChange={(e) => statusChange(e.target.value)}
                            >
                                {
                                    state.statusData.map((e,i) => <MenuItem key={i} value={i}>{e}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </Toolbar>
                </Grid>

                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                {translation.language["label.admin.table.title"]}
                                {state.loading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                            </Typography>
                        }
                        data={state.data}
                        columns={columns(translation,setStatus)}
                        options={options(
                            pageChange,
                            searchChange,
                            state.search,
                            state.totalPages,
                            state.totalItems,
                            state.page,
                            state.loading)}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.AdminList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // action for tables
        initData: () => dispatch(actions.InitDataTable(Admin)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Admin)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Admin)),
        statusChange: (data) => dispatch(actions.statusChange(data,Admin)),

        // action for opening and closing dialogs
        openCreateDialog: () => dispatch(actions.openDialog(Admin_Create)),
        closeCreateDialog: () => dispatch(actions.closeDialog(Admin_Create)),
        //
        openDeleteDialog: () => dispatch(actions.openDialog(Admin_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(Admin_Delete)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)