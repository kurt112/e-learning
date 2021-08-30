/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import {TeacherStudentTable as columns} from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style, {TableOptions} from '../../../_style/TableStyle'
import IconButton from "@material-ui/core/IconButton";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {baseUrl} from "../../../../../store/middleware/axios";
import {TeacherGradeStudent} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";


export default function TeacherStudents({students, translation,email}) {

    const computeGrade = async () => {
        const params = new URLSearchParams();
        params.append('email',email)
        baseUrl.post(TeacherGradeStudent,params).then(e => {
            console.log(e)
        })

        alert("Calculate Grade Success")
        alert("Please refresh browser in 5 minutes to see the grade")
    }

    const classes = style()

    return (
        <Grid component="main" className={classes.root}>
            <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                <Toolbar>
                    <Box className={classes.tableNavbarBox}>
                        <Tooltip title={'Compute Grade'}>
                            <IconButton aria-label="Add" onClick={computeGrade}>
                                <AutorenewIcon color='primary' fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>

                    </Box>
                </Toolbar>
            </Grid>
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