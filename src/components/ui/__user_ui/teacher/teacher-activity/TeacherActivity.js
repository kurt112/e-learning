import {Box, Button, Grid, Paper, Toolbar} from "@material-ui/core"
import {TeacherActivityTable as columns} from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style, {TableOptions} from '../../../_style/TableStyle'


export default function TeacherActivity({activity}) {

    const classes = style()

    return (
        <Grid component="main" className={classes.root}>
            <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                <Toolbar>
                    <Box className={classes.tableNavbarBox}>
                        <Button variant="outlined" style={{marginRight: 20}} color="primary">
                            Add Activity
                        </Button>
                    </Box>
                </Toolbar>
            </Grid>

            <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                <MUIDataTable
                    title={"Activity List"}
                    data={activity}
                    columns={columns}
                    options={TableOptions()}
                />
            </Grid>
        </Grid>
    )
}