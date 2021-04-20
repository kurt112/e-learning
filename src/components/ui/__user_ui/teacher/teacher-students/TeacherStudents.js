import { Box, Button, Grid, Paper, Toolbar } from "@material-ui/core"
import { TeacherStudentTable as columns} from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style, {TableOptions} from '../../../_style/TableStyle'



export default function TeacherStudents({students}) {

    const classes = style()
  
    return (
        <Grid component="main" className={classes.root}>
            <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                <Toolbar>
                    <Box className={classes.tableNavbarBox}>
                        <Button variant="outlined" color="primary">
                            Add Teacher
                    </Button>
                    </Box>
                    <Button variant="outlined" color="primary">
                        Quit
                </Button>
                </Toolbar>
            </Grid>


            <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                <MUIDataTable
                    title={"Student List"}
                    data={students}
                    columns={columns}
                    options={TableOptions()}
                />
            </Grid>
        </Grid>
    )
}