import {Grid, Paper} from "@material-ui/core"
import {StudentTeacherTable as columns} from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style, {TableOptions} from '../../../_style/TableStyle'


export default function StudentTeachers({teachers}) {

    const classes = style()


    return (
        <Grid component="main" className={classes.root}>
            <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                <MUIDataTable
                    title={"Teacher List"}
                    data={teachers}
                    columns={columns}
                    options={TableOptions()}
                />
            </Grid>
        </Grid>

    )
}