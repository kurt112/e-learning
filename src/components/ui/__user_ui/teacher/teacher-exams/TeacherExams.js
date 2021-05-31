import {Fragment} from "react";
import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import UpdateIcon from "@material-ui/icons/Update";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MUIDataTable from "mui-datatables";
import Typography from "@material-ui/core/Typography";
import {TeacherResources as columns} from "../../../utils/tableColumn";
import style, {TableOptionsNoPaging} from "../../../_style/TableStyle";
import {connect} from "react-redux";

const TeacherExams = () => {
    const classes = style()
    return (
        <Fragment>
            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>

                            <Tooltip title="Create Assignment">
                                <IconButton aria-label="Add">
                                    <CloudUploadIcon color='primary' fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete Exam">
                                <IconButton aria-label="delete">
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
                                Exams List
                                {/*{state.loading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}*/}
                            </Typography>
                        }
                        // data={state.data}
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

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherExams)