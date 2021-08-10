/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import MUIDataTable from "mui-datatables";
import {Fragment, useEffect, useState} from "react";
import {ClassInsertLogs as insert, ClassLogs as columns} from '../../../../utils/tableColumn'
import {convertDateTime} from "../../../../utils/dateFormat/DateTimeFormatToDateWord";
import style from "../../student-profile/StudentProfileStyle";


export default function Logs({translation, attendances}) {
    const [data, setData] = useState([])

    useEffect(() => {
        const temp = []
        attendances.map(log => {
            const {teacher_class} = log
            temp.push(insert(convertDateTime(log.createdAt),teacher_class.subject.subjectName,teacher_class.roomShift.grade, teacher_class.roomShift.section,teacher_class.startTime,teacher_class.endTime))
        })
        setData(temp)
    }, [])

    const classes = style()
    return <div className={classes.table}>
        <MUIDataTable
            title={"Logs"}
            options={{
                selectableRows: false // <===== will turn off checkboxes in rows
            }}
            data={data}
            columns={columns(translation)}

        />
    </div>
}