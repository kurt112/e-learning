import MUIDataTable from "mui-datatables";
import { Fragment } from "react";
import { TeacherInsertLogs as insert, TeacherAttendace as columns } from '../../../../utils/tableColumn'
import style from '../TeacherProfileStyle'
export default function () {
    const classes = style()
    return (
        <Fragment>
            <MUIDataTable
                title={"Attendance"}
                // data={data}
                columns={columns}
                options={{
                    selectableRows: false // <===== will turn off checkboxes in rows
                }}
                className={classes.table}
            // options={options(rowClicked, rowDeleted)}
            />
        </Fragment>
    )
}