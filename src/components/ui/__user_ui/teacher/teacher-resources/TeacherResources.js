import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from "mui-datatables"
import {TeacherResources as columns} from "../../../utils/tableColumn"
import style, {TableOptions as options} from "../../../_style/TableStyle"
import {Fragment, lazy} from "react";

// icons
import IconButton from "@material-ui/core/IconButton"
import UpdateIcon from '@material-ui/icons/Update'
import FolderSharedIcon from '@material-ui/icons/FolderShared'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import * as actions from "../../../../../store/action/__ActionGlobal/AdminAction";
import {Activity, Teacher_Resource} from "../../../../../store/utils/Specify";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import * as action from "../../../../../store/action/__ActionGlobal/AdminDialogAction";


// dialogs


const DeleteResourceDialog = lazy(() => import(`./DeleteResourceDialog`))
const ShareDialog = lazy(() => import(`./ShareResources`))
const UpdateResourceDialog = lazy(() => import(`./UpdateResourceDialog`))
const UploadResources = lazy(() => import(`./UploadResourceDialog`))

const TeacherResources = ({
                              initData,
                              searchChange,
                              pageChange,
                              UploadOpenDialog,
                              UploadCloseDialog,
                              resourceTableState
                          }) => {

    const classes = style()


    return (
        <Fragment>
            <UploadResources    dialog={resourceTableState.dialog} closeDialog={UploadCloseDialog}   />
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>

                            <Tooltip title="Upload Resource">
                                <IconButton aria-label="Add" onClick={UploadOpenDialog}>
                                    <CloudUploadIcon color='primary' fontSize={"large"} />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Update Resource">
                                <IconButton aria-label="update">
                                    <UpdateIcon color='primary' fontSize={"large"} />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Share Resources">
                                <IconButton aria-label="update">
                                    <FolderSharedIcon color='primary' fontSize={"large"} />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete Resources">
                                <IconButton aria-label="update">
                                    <DeleteForeverIcon color='secondary' fontSize={"large"} />
                                </IconButton>
                            </Tooltip>

                        </Box>

                    </Toolbar>
                </Grid>

                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <MUIDataTable
                        title={
                            <Typography variant="h6">
                                Resource List
                                {/*{resourceTableState.loading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}*/}
                            </Typography>
                        }
                        data={resourceTableState.data}
                        columns={columns}
                        options={options(
                            pageChange,
                            searchChange,
                            resourceTableState.search,
                            resourceTableState.totalPages,
                            resourceTableState.totalItems,
                            resourceTableState.page,
                            resourceTableState.loading)}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        resourceTableState: state.TeacherResource
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(actions.InitDataTable(Teacher_Resource)),
        searchChange: (data) => dispatch(actions.SearchChange(data,Teacher_Resource)),
        pageChange: (page) => dispatch(actions.DataNextPage(page,Teacher_Resource)),
        UploadOpenDialog: () => dispatch(actions.openDialog(Teacher_Resource)),
        UploadCloseDialog: () => dispatch(actions.closeDialog(Teacher_Resource)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherResources)