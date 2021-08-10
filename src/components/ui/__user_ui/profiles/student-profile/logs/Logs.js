/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import MUIDataTable from "mui-datatables";
import {useEffect, useState} from "react";
import {ClassLogs as columns, ClassInsertLogs as insert } from '../../../../utils/tableColumn'
import style from '../StudentProfileStyle'
import {convertDateTime} from "../../../../utils/dateFormat/DateTimeFormatToDateWord";

export default function Logs({translation,attendances}) {

    const [data,setData] = useState([])

    useEffect(() => {
        const temp = []
        attendances.map(log => {
            const {student_class} = log
            temp.push(insert(convertDateTime(log.createdAt),student_class.subject.subjectName,student_class.roomShift.grade, student_class.roomShift.section,student_class.startTime,student_class.endTime))
        })
        setData(temp)
    }, [])

    const classes = style()
    return (
        <div className={classes.table}>
            <MUIDataTable
                title={translation.language["label.global.logs"]}
                options={{
                    selectableRows: false // <===== will turn off checkboxes in rows
                }}
                data={data}
                columns={columns(translation)}
                className={classes.table}
            />
        </div>
    )
}