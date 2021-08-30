import MUIDataTable from "mui-datatables";
import {StudentGrade as columns,StudentInsertGrade as insert } from "../../../utils/tableColumn/StudentTable";
import style from "../../profiles/student-profile/StudentProfileStyle";
import {useEffect, useState} from "react";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 31/08/2021, Tuesday
 **/

const Grade = ({grades}) => {
    const classes = style()

    const [data,setData] = useState([])

    useEffect(() => {
        const temp = []

        grades.map(grade => {
            const {roomShiftClass} = grade
            const {subject,teacher} = roomShiftClass
            temp.push(insert(`${teacher.user.firstName} ${teacher.user.lastName}`, subject.subjectName,grade.grade))
        })

        setData(temp)
    }, [])

    return   <div className={classes.table}>
        <MUIDataTable
            title={"Grade"}
            options={{
                selectableRows: false // <===== will turn off checkboxes in rows
            }}
            data={data}
            columns={columns}
            className={classes.table}
        />
    </div>
}

export default Grade