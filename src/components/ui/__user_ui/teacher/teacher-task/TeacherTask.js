import {Box, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import {TeacherActivityTable as columns} from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style, {TableOptions} from '../../../_style/TableStyle'
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";


export default function TeacherTask({activity}) {

    const classes = style()

    return (
        <Grid component="main" className={classes.root}>
            <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                <Toolbar>
                    <Box className={classes.tableNavbarBox}>
                        <Tooltip title="Create Task">
                            <IconButton aria-label="Add" >
                                <CloudUploadIcon color='primary' fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Update Task">
                            <IconButton aria-label="update">
                                <UpdateIcon color='primary' fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete Task">
                            <IconButton aria-label="delete" >
                                <DeleteForeverIcon color='secondary' fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Grid>

            <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                <MUIDataTable
                    title={"Task List"}
                    data={activity}
                    columns={columns}
                    options={TableOptions()}
                />
            </Grid>
        </Grid>
    )
}