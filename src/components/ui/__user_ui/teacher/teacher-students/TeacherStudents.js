import { Grid, Paper} from "@material-ui/core"
import { TeacherStudentTable as columns} from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style, {TableOptions} from '../../../_style/TableStyle'



export default function TeacherStudents({students, translation}) {

    const classes = style()
  
    return (
        <Grid component="main" className={classes.root}>
            <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                <MUIDataTable
                    title={translation.language["label.global.student.list"]}
                    data={students}
                    columns={columns(translation)}
                    options={TableOptions()}
                />
            </Grid>
        </Grid>
    )
}