import MUIDataTable from "mui-datatables";
import { Fragment } from "react";
import {TeacherLogs as columns } from '../../../../utils/tableColumn'
import style from '../StudentProfileStyle'

export default function Logs({translation}) {
    const classes = style()
    return (
        <Fragment>
            <MUIDataTable
                title={translation.language["label.global.logs"]}
                options={{
                    selectableRows: false // <===== will turn off checkboxes in rows
                }}
                columns={columns(translation)}
                className={classes.table}
            />
        </Fragment>
    )
}