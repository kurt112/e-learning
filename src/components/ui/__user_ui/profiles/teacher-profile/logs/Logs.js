import { makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Fragment } from "react";
import { TeacherInsertLogs as insert, TeacherLogs as columns } from '../../../../utils/tableColumn'
import style from '../TeacherProfileStyle'

export default function Logs() {
    const classes = style()
    return (
        <Fragment>
            <MUIDataTable
                title={"Logs"}
                // data={data}
                options={{
                    selectableRows: false // <===== will turn off checkboxes in rows
                }}
                columns={columns}
                className={classes.table}
            />
        </Fragment>
    )
}