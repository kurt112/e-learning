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
import {Fragment, lazy, useEffect, useState} from "react"
import {AdminRoomClassTable as columns} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'

import {connect} from 'react-redux'
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import {
    RoomShiftClass,
    RoomShiftClass_Delete,
    RoomShiftClass_Find,
} from "../../../../../store/utils/Specify";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import {reInitState} from "../../../../../store/action/__ActionGlobal/DialogAction";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import {baseUrl} from "../../../../../store/middleware/axios";
import {
    OffClass,
    OffRoomShift,
    OnClass,
    OnRoomShift
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";


const RegisterRoom = lazy(() => import(`./RegisterRoomClassDialog`));
const DeleteRoomClass = lazy(() => import(`./DeleteRoomClassDialog`))
const FindClassDialog = lazy(() => import(`./FindClassDialog`))

const Index = ({
                   state,
                   initData,
                   searchChange,
                   pageChange,
                   openDialog,
                   closeDialog,
                   openDeleteDialog,
                   closeDeleteDialog,
                   translation,
                   openFindDialog,
                   closeFindDialog,
                   setData,
                   reInitState,
                   statusChange
               }) => {

    const classes = style()
    useEffect(() => {
        initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [update, setUpdate] = useState(false)
    const [addStudent, setAddStudent] = useState(false)


    const updateClick = () => {
        setUpdate(true)
        openFindDialog()
    }

    const addStudentClick = () => {

        setAddStudent(true)
        openFindDialog()
    }

    const closeDialogClick = () => {
        setUpdate(false)
        setAddStudent(false)
        closeFindDialog()
    }

    const setStatus = async (status,id) => {
        const params = new URLSearchParams()
        params.append('id', id)

        if(status === true) await baseUrl.post(OffClass, params).then(ignored =>{})
        else await baseUrl.post(OnClass, params).then(ignored => {})

        initData()

        alert("Status Change Success")


    }

    return (
        <Fragment>

            <RegisterRoom
                translation={translation}
                dialog={state.dialog}
                closeDialog={closeDialog}
            />
            <DeleteRoomClass
                translation={translation}
                dialog={state.deleteDialog}
                closeDialog={closeDeleteDialog}
            />
            <FindClassDialog
                reInitState={reInitState}
                setData={setData}
                translation={translation}
                dialog={state.findDialog}
                closeDialog={closeDialogClick}
                update={update}
                addStudent={addStudent}
            />

            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
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
                                <IconButton aria-label="update-room" onClick={updateClick}>
                                    <UpdateIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={translation.language['tooltip.room.shift.add.student']}>
                                <IconButton aria-label="update-room" onClick={addStudentClick}>
                                    <GroupAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state.status}
                                onChange={(e) => statusChange(e.target.value)}
                            >
                                {
                                    state.statusData.map((e, i) => <MenuItem key={i} value={i}>{e}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </Toolbar>

                </Grid>

                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                {translation.language["label.room.class.table.title"]}
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
        state: state.AdminClass
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(RoomShiftClass)),
        searchChange: (data) => dispatch(actions.SearchChange(data, RoomShiftClass)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, RoomShiftClass)),
        statusChange: (data) => dispatch(actions.statusChange(data, RoomShiftClass)),

        // for opening and closing dialog
        openDialog: () => dispatch(actions.openDialog(RoomShiftClass)),
        closeDialog: () => dispatch(actions.closeDialog(RoomShiftClass)),

        openDeleteDialog: () => dispatch(actions.openDialog(RoomShiftClass_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(RoomShiftClass_Delete)),

        openFindDialog: () => dispatch(actions.openDialog(RoomShiftClass_Find)),
        closeFindDialog: () => dispatch(actions.closeDialog(RoomShiftClass_Find)),

        setData: (data) => dispatch(actions.setData(data, RoomShiftClass)),
        reInitState: () => dispatch(reInitState(RoomShiftClass))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)