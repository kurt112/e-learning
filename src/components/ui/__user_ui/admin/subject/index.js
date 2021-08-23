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
import {AdminSubjectTable as columns} from '../../../utils/tableColumn'

import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from "react-redux"
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction"
import {Subject, Subject_Delete, Subject_Find} from "../../../../../store/utils/Specify"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import FindSubjectDialog from "./FindSubjectDialog";
import {reInitState} from "../../../../../store/action/__ActionGlobal/DialogAction";
import {baseUrl} from "../../../../../store/middleware/axios";
import {
    OffSubject,
    OnSubject
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

const RegisterSubject = lazy(() => import(`./RegisterSubjectDialog`))
const DeleteSubjectDialog = lazy(() => import(`./DeleteSubjectDialog`))

const Index = ({
                   state,
                   pageChange,
                   searchChange,
                   openDialog,
                   closeDialog,
                   initData,
                   openDeleteDialog,
                   closeDeleteDialog,
                   translation,
                   closeFindDialog,
                   openFindDialog,
                   setData,
                   reInitState,
                   statusChange
               }) => {

    const classes = style()

    useEffect(() => {

        if (state.data.length === 0) initData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setStatus = async (status,id) => {
        const params = new URLSearchParams()
        params.append('id', id)
        //

        if(status === true) await baseUrl.post(OffSubject, params).then(ignored =>{})
        else await baseUrl.post(OnSubject, params).then(ignored => {})

        alert("Status Change Success")

        await searchChange(state.search)
    }

    return (
        <Fragment>
            <RegisterSubject translation={translation} dialog={state.dialog} closeDialog={closeDialog}/>
            <DeleteSubjectDialog translation={translation} dialog={state.deleteDialog}
                                 closeDialog={closeDeleteDialog}/>
            <FindSubjectDialog reInitState={reInitState}
                               setData={setData}
                               translation={translation}
                               dialog={state.findDialog}
                               closeDialog={closeFindDialog}
            />
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title={translation.language["tooltip.subject.add"]}>
                                <IconButton aria-label="add-subject" onClick={openDialog}>
                                    <LibraryAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.subject.delete"]}>
                                <IconButton aria-label="delete-subject" onClick={openDeleteDialog}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.subject.update"]}>
                                <IconButton aria-label="update-room" onClick={openFindDialog}>
                                    <UpdateIcon fontSize={'large'} color={'primary'}/>
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
                    <div>
                        <MUIDataTable
                            title={
                                <Typography variant="h6">
                                    {translation.language["label.subject.table.title"]}
                                    {state.loading && <CircularProgress size={24} style={{
                                        marginLeft: 15,
                                        position: 'relative',
                                        top: 4
                                    }}/>}
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
                    </div>
                </Grid>
            </Grid>
        </Fragment>

    )
}

const mapStateToProps = (state) => {
    return {
        state: state.AdminSubject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(Subject)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Subject)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Subject)),
        statusChange: (data) => dispatch(actions.statusChange(data,Subject)),

        // for opening and closing dialog
        openDialog: () => dispatch(actions.openDialog(Subject)),
        closeDialog: () => dispatch(actions.closeDialog(Subject)),

        openDeleteDialog: () => dispatch(actions.openDialog(Subject_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(Subject_Delete)),

        openFindDialog: () => dispatch(actions.openDialog(Subject_Find)),
        closeFindDialog: () => dispatch(actions.closeDialog(Subject_Find)),

        setData: (data) => dispatch(actions.setData(data,Subject)),
        reInitState: () => dispatch(reInitState(Subject))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)