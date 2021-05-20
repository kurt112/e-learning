import { Box, Button, Grid, Paper, Toolbar } from "@material-ui/core"
import { TeacherSubjectTable as columns} from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style, {TableOptions} from '../../../_style/TableStyle'


export default function TeacherSubject({subjects}) {

    const classes = style()

    return (
        <Grid component="main" className={classes.root}>

            <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                <MUIDataTable
                    title={"Subject List"}
                    data={subjects}
                    columns={columns}
                    options={TableOptions()}
                />
            </Grid>
        </Grid>

    )
}