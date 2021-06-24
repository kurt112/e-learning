import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from "mui-datatables"
import {TeacherResources as columns} from "../../../utils/tableColumn"
import style, {TableOptions as options} from "../../../_style/TableStyle"
import {Fragment, lazy, useEffect} from "react";
import * as dialogAction from "../../../../../store/action/__ActionGlobal/TableAction"
// icons
import IconButton from "@material-ui/core/IconButton"
import UpdateIcon from '@material-ui/icons/Update'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction";
import {

    Teacher_Resource,
    Teacher_Resource_Delete,
    Teacher_Resource_Upload
} from "../../../../../store/utils/Specify";

// dialogs
const DeleteResourceDialog = lazy(() => import(`./DeleteResourceDialog`))
const UpdateResourceDialog = lazy(() => import(`./UpdateResourceDialog`))
const UploadResources = lazy(() => import(`./UploadResourceDialog`))

const TeacherResources = ({
                              state,
                              UploadOpenDialog,
                              UploadCloseDialog,
                              initData,
                              searchChange,
                              pageChange,
                              DeleteOpenDialog,
                              DeleteCloseDialog,
                              translation
                          }) => {

    const classes = style()
    console.log(state)

    useEffect(() => {
        if (state.data.length === 0) initData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <DeleteResourceDialog translation={translation} dialog={state.deleteResourceDialog} closeDialog={DeleteCloseDialog}/>
            <UploadResources translation={translation} dialog={state.uploadResourceDialog} closeDialog={UploadCloseDialog}/>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title={translation.language["tooltip.teacher.resource.upload.resource"]}>
                                <IconButton aria-label="Add" onClick={UploadOpenDialog}>
                                    <CloudUploadIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={translation.language["tooltip.teacher.resource.update.resource"]}>
                                <IconButton aria-label="update">
                                    <UpdateIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={translation.language["tooltip.teacher.resource.delete.resource"]}>
                                <IconButton aria-label="delete" onClick={DeleteOpenDialog}>
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
                                {translation.language["label.teacher.resource.table.title"]}
                                {state.loading &&
                                <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}}/>}
                            </Typography>
                        }
                        data={state.data}
                        columns={columns(translation)}
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
        state: state.TeacherResource
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // // for opening and closing delete dialog
        DeleteOpenDialog: () => dispatch(dialogAction.openDialog(Teacher_Resource_Delete)),
        DeleteCloseDialog: () => dispatch(dialogAction.closeDialog(Teacher_Resource_Delete)),
        // for opening and closing upload dialog
        UploadOpenDialog: () => dispatch(dialogAction.openDialog(Teacher_Resource_Upload)),
        UploadCloseDialog: () => dispatch(dialogAction.closeDialog(Teacher_Resource_Upload)),


        initData: () => dispatch(actions.InitDataTable(Teacher_Resource)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Teacher_Resource)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Teacher_Resource)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherResources)