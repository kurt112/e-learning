import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect} from "react"
import {AdminSubjectTable as columns} from '../../../utils/tableColumn'

import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from "react-redux"
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction"
import {Subject, Subject_Delete} from "../../../../../store/utils/Specify"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

const RegisterSubject = lazy(() => import(`./RegisterSubjectDialog`))
const DeleteSubjectDialog = lazy(() => import(`./DeleteSubjectDialog`))

const Index = ({
                   subject,
                   pageChange,
                   searchChange,
                   openDialog,
                   closeDialog,
                   initData,
                   openDeleteDialog,
                   closeDeleteDialog
               }) => {

    const classes = style()

    useEffect(() => {

        if (subject.data.length === 0) initData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <RegisterSubject dialog={subject.dialog} closeDialog={closeDialog}/>
            <DeleteSubjectDialog dialog={subject.deleteDialog} closeDialog={closeDeleteDialog}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title='Add Subject'>
                                <IconButton aria-label="add-subject" onClick={openDialog}>
                                    <LibraryAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Delete Subject'>
                                <IconButton aria-label="delete-subject" onClick={openDeleteDialog}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Update Subject'>
                                <IconButton aria-label="update-room" onClick={() => alert('gagawin mo pa to')}>
                                    <UpdateIcon fontSize={'large'} color={'primary'}/>
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
                                    Subject List
                                    {subject.loading && <CircularProgress size={24} style={{
                                        marginLeft: 15,
                                        position: 'relative',
                                        top: 4
                                    }}/>}
                                </Typography>
                            }
                            data={subject.data}
                            columns={columns}
                            options={options(
                                pageChange,
                                searchChange,
                                subject.search,
                                subject.totalPages,
                                subject.totalItems,
                                subject.page,
                                subject.loading)}
                        />
                    </div>
                </Grid>
            </Grid>
        </Fragment>

    )
}

const mapStateToProps = (state) => {
    return {
        subject: state.AdminSubject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(Subject)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Subject)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Subject)),

        // for opening and closing dialog
        openDialog: () => dispatch(actions.openDialog(Subject)),
        closeDialog: () => dispatch(actions.closeDialog(Subject)),
        openDeleteDialog: () => dispatch(actions.openDialog(Subject_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(Subject_Delete))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)