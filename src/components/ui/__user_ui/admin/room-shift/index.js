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
import {AdminRoomShiftTable as columns} from '../../../utils/tableColumn'
import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from 'react-redux'
import {RoomShift, RoomShift_Delete, RoomShift_Find} from "../../../../../store/utils/Specify";
import Typography from "@material-ui/core/Typography";

import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

// actions
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import {reInitState} from "../../../../../store/action/__ActionGlobal/DialogAction";
import {baseUrl} from "../../../../../store/middleware/axios";
import {
    OffRoomShift,
    OnRoomShift
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

const RegisterRoomShiftDialog = lazy(() => import(`./RoomShiftRegisterDialog`));
const DeleteRooShiftDialog = lazy(() => import(`./DeleteRoomShiftDialog`))
const FindRoomShiftDialog = lazy(() => import(`./FindRoomShiftDialog`))

const RoomShiftList = ({
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

    // dialog State
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

    useEffect(() => {
        if (state.data.length === 0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setStatus = async (status,id) => {
        const params = new URLSearchParams()
        params.append('id', id)
        //

        if(status === true) await baseUrl.post(OffRoomShift, params).then(ignored =>{})
        else await baseUrl.post(OnRoomShift, params).then(ignored => {})

        alert("Status Change Success")

        await searchChange(state.search)
    }

    return (
        <Fragment>

            <RegisterRoomShiftDialog translation={translation}
                                     dialog={state.dialog}
                                     closeDialog={closeDialog}
                                     reInitState={reInitState}
            />
            <DeleteRooShiftDialog
                translation={translation} dialog={state.deleteDialog}
                closeDialog={closeDeleteDialog}/>
            <FindRoomShiftDialog
                translation={translation}
                dialog={state.findDialog}
                update={update}
                addStudent={addStudent}
                closeDialog={closeDialogClick}
                setData={setData}
                reInitState={reInitState}
            />
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
                                {translation.language["label.room.shift.table.title"]}
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
        state: state.AdminRoomShift
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(RoomShift)),
        searchChange: (data) => dispatch(actions.SearchChange(data, RoomShift)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, RoomShift)),
        statusChange: (data) => dispatch(actions.statusChange(data,RoomShift)),

        // for opening dialog
        openDialog: () => dispatch(actions.openDialog(RoomShift)),
        closeDialog: () => dispatch(actions.closeDialog(RoomShift)),
        openDeleteDialog: () => dispatch(actions.openDialog(RoomShift_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(RoomShift_Delete)),
        openFindDialog: () => dispatch(actions.openDialog(RoomShift_Find)),
        closeFindDialog: () => dispatch(actions.closeDialog(RoomShift_Find)),

        setData: (data) => dispatch(actions.setData(data, RoomShift)),
        reInitState: () => dispatch(reInitState(RoomShift))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomShiftList)