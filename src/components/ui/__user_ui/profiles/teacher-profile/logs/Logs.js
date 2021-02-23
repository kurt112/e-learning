import { makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Fragment } from "react";
import { TeacherInsertLogs as insert, TeacherLogs as columns } from '../../../../utils/tableColumn'


export default function Logs() {
    return (
        <Fragment>
            <MUIDataTable
                title={"Logs"}
                // data={data}
                options={{
                    selectableRows: false // <===== will turn off checkboxes in rows
                }}
                columns={columns}

            />
        </Fragment>
    )
}