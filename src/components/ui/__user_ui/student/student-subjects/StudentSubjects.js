import { Grid, Paper } from "@material-ui/core"
import { StudentSubjectTable as columns} from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style from '../../../_style/TableStyle'



export default function StudentSubjects({subjects}) {

    const classes = style()

    return (
        <Grid component="main" className={classes.root}>
            <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                <MUIDataTable
                    title={"Activity List"}
                    data={subjects}
                    columns={columns}
                    options={{
                        selectableRows: false
                    }}
                />
            </Grid>
        </Grid>

    )
}