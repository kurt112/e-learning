import MUIDataTable from "mui-datatables";
import { Fragment } from "react";
import {TeacherLogs as columns } from '../../../../utils/tableColumn'


export default function Logs({translation}) {
    return (
        <Fragment>
            <MUIDataTable
                title={"Logs"}
                options={{
                    selectableRows: false // <===== will turn off checkboxes in rows
                }}
                columns={columns(translation)}

            />
        </Fragment>
    )
}