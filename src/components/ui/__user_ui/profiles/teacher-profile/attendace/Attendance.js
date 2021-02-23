import MUIDataTable from "mui-datatables";
import { Fragment } from "react";
import { TeacherAttendace as columns } from '../../../../utils/tableColumn'

export default function () {
    return (
        <Fragment>
            <MUIDataTable
                title={"Attendance"}
                // data={data}
                columns={columns}
                options={{
                    selectableRows: false // <===== will turn off checkboxes in rows
                }}

            // options={options(rowClicked, rowDeleted)}
            />
        </Fragment>
    )
}