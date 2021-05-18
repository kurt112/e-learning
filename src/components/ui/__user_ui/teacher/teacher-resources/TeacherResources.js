import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from "mui-datatables"
import {TeacherResources as columns} from "../../../utils/tableColumn"
import style, {TableOptions as options, TableOptionsNoPaging} from "../../../_style/TableStyle"
import {Fragment, lazy, useEffect} from "react";

// icons
import IconButton from "@material-ui/core/IconButton"
import UpdateIcon from '@material-ui/icons/Update'
import FolderSharedIcon from '@material-ui/icons/FolderShared'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import * as actions from "../../../../../store/action/teacher/TeacherResource/TeacherResource";
import {Activity, Teacher_Resource} from "../../../../../store/utils/Specify";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";


// dialogs


const DeleteResourceDialog = lazy(() => import(`./DeleteResourceDialog`))
const ShareDialog = lazy(() => import(`./ShareResources`))
const UpdateResourceDialog = lazy(() => import(`./UpdateResourceDialog`))
const UploadResources = lazy(() => import(`./UploadResourceDialog`))

const TeacherResources = ({
                              resources,
                              state,
                              UploadOpenDialog,
                              UploadCloseDialog,
                              InitResources,
                          }) => {

    const classes = style()


    useEffect(() => {
        InitResources(resources)
    },[])


    return (
        <Fragment>
            <UploadResources dialog={state.uploadResourceDialog} closeDialog={UploadCloseDialog}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>

                            <Tooltip title="Upload Resource">
                                <IconButton aria-label="Add" onClick={UploadOpenDialog}>
                                    <CloudUploadIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Update Resource">
                                <IconButton aria-label="update">
                                    <UpdateIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Share Resources">
                                <IconButton aria-label="update">
                                    <FolderSharedIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete Resources">
                                <IconButton aria-label="update">
                                    <DeleteForeverIcon color='secondary' fontSize={"large"}/>
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
                        data={state.data}
                        columns={columns}
                        options={TableOptionsNoPaging()}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        state: state.TeacherResource
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UploadOpenDialog: () => dispatch(actions.open_uploadDialog()),
        UploadCloseDialog: () => dispatch(actions.close_uploadDialog()),
        InitResources: (data) => dispatch(actions.initData(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherResources)