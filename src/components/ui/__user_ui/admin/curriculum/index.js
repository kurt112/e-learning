import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect} from "react"
import {AdminCurriculumTable as columns} from '../../../utils/tableColumn'

import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from "react-redux"
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction"
import {Curriculum, Curriculum_Create, Curriculum_Delete} from "../../../../../store/utils/Specify"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import CreateCurriculumDialog from "./CreateCurriculumDialog";
const Index = ({
                   state,
                   pageChange,
                   searchChange,
                   initData,
                   openDialog,
                   closeDialog,
                   openDeleteDialog,
                   closeDeleteDialog
               }) => {

    const classes = style()

    useEffect(() => {

        if (state.data.length === 0) initData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <CreateCurriculumDialog dialog={state.dialog} closeDialog={closeDialog}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title='Add Curriculum'>
                                <IconButton aria-label="add-curriculum" onClick={openDialog}>
                                    <LibraryAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Delete Curriculum'>
                                <IconButton aria-label="delete-curriculum" onClick={openDeleteDialog}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Update Curriculum'>
                                <IconButton aria-label="update-curriculum" onClick={() => alert('gagawin mo pa to')}>
                                    <UpdateIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Add Curriculum Subject'>
                                <IconButton aria-label="update-curriculum" onClick={() => alert('gagawin mo pa to')}>
                                    <ImportContactsIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Grid>
                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <div>
                        <MUIDataTable
                            title={
                                <Typography variant="h6">
                                    Curriculum List
                                    {state.loading && <CircularProgress size={24} style={{
                                        marginLeft: 15,
                                        position: 'relative',
                                        top: 4
                                    }}/>}
                                </Typography>
                            }
                            data={state.data}
                            columns={columns}
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
        state: state.AdminCurriculum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // action for tables
        initData: () => dispatch(actions.InitDataTable(Curriculum)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Curriculum)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Curriculum)),

        // action for opening and closing dialogs
        openDialog: () => dispatch(actions.openDialog(Curriculum_Create)),
        closeDialog: () => dispatch(actions.closeDialog(Curriculum_Create)),

        openDeleteDialog: () => dispatch(actions.openDialog(Curriculum_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(Curriculum_Delete))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)