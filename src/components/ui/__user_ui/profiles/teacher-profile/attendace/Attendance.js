import MUIDataTable from "mui-datatables";
import { Fragment } from "react";
import { TeacherAttendace as columns } from '../../../../utils/tableColumn'

export default function ({translation}) {
    return (
        <Fragment>
            <MUIDataTable
                title={translation.language["label.global.attendance"]}
                columns={columns(translation)}
                options={{
                    selectableRows: false // <===== will turn off checkboxes in rows
                }}
            />
        </Fragment>
    )
}