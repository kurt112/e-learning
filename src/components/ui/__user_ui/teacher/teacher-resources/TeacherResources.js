import {Box, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from "mui-datatables"
import {TeacherResources as columns} from "../../../utils/tableColumn"
import style, {TableOptions} from "../../../_style/TableStyle"
import {useState, Fragment} from "react";


// icons
import IconButton from "@material-ui/core/IconButton"
import UpdateIcon from '@material-ui/icons/Update'
import FolderSharedIcon from '@material-ui/icons/FolderShared'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'



// dialogs
import DeleteResourcesDialog from './DeleteResourcedialog'
import ShareDialog from './ShareResources'
import UpdateResourceDialog from "./UpdateResourceDialog";
import UploadResources from "./UploadResourceDialog";

const TeacherResources = () => {

    const classes = style()

    const [DeleteDialog, setDeleteDialog] = useState(false)
    const [ShareDialog, setShareDialog] = useState(false)
    const [UpdateDialog,setUpdateDialog] = useState(false)
    const [UploadDialog,setUploadDialog] = useState(false)


    return (
        <Fragment>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>

                            <Tooltip title="Upload Resource">
                                <IconButton aria-label="Add">
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
                        title={"Resources List"}
                        columns={columns}
                        options={TableOptions()}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default TeacherResources