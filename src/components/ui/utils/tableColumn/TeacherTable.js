import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"

export const TeacherProfileColumn = [
    { id: 'id', label: 'id', minWidth: 50 },
    { id: 'firstName', label: 'FirstName', minWidth: 170 },
    { id: 'lastName', label: 'LastName', minWidth: 170 },
    { id: 'age', label: 'Age', minWidth: 50 },
    { id: 'birthday', label: 'Birthday', minWidth: 170 },
]
/*
*
*
*
*This table is for the Room table in Teacher area
*
*
*
*
*/

export const TeacherRoomTable = [
    {
        name: 'id',
        lable: 'Id',
    },
    {
        name: 'roomName',
        label: 'RoomName',
    },
    {
        name: 'roomSubject',
        label: 'Room Subject'
    },
    {
        name: 'students',
        label: '# Students'
    },
    {
        name: 'timeStart',
        label: 'Time Start'
    },
    {
        name: 'timeEnd',
        label: 'Time End'
    },
    {
        name: "link",
        label: "Link",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                return value === undefined ? null :
                    <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                            Join Room
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
]

export function TeacherInsertRoom(id, roomName, roomSubject, students, timeStart, timeEnd, visit) {
    return { id, roomName, roomSubject, students, timeStart, timeEnd, visit }
}


/**
*
*
*  This table is for the Subject table in Teacher area
*
*
**/


export const TeacherSubjectTable = [
    {
        name: 'id',
        label: 'id',
    },
    {
        name: 'subjectName',
        label: 'Subject Name'
    },
    {
        name: 'subjectCode',
        label: 'Subject Code'
    },
    {
        name: 'subjectHour',
        label: 'Subject Hour',
    },
    {
        name: 'subjectMinute',
        label: 'Subject Minute'
    },
    {
        name: 'major',
        label: 'Major'
    },
]

export function TeacherInsertSubject(id, subjectName, subjectCode, SubjectHour, subjectMinute, major) {
    return { id, subjectName, subjectCode, SubjectHour, subjectMinute, major }
} 


/**
*
*
*  This table is for the Student table in Teacher area
*
*
**/

export const TeacherStudentTable = [
    {
        name: "id",
        label: "LRN",
    },
    {
        name: "firstName",
        label: "First Name",

    },
    {
        name: "lastName",
        label: "Last Name",
    },
    {
        name: "grade",
        label: "Grade",
    },
    {
        name: "section",
        label: "Section",
    },
    {
        name: "subject",
        label: "Subject"
    },
    {
        name: "adviser",
        label: "Adviser"
    },
    {
        name: "profile",
        label: "Profile",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                // value)
                return value === undefined ? null :
                    <Link to='/student/' style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                            Visit Profile
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
];
export function TeacherInsertStudent(id, firstName, lastName,   grade, section,subject, adviser, profile) {

    return { id, firstName, lastName, grade, section,subject, adviser, profile }
}

/**
*
*
*  This table is for the Activies table in Teacher area
*
*
**/


export const TeacherActivityTable = [
    {
        name: 'id',
        label: 'id'
    },
    {
        name: 'activityTitle',
        label: 'Activity Title'
    },
    {
        name: 'subjectName',
        label: 'Subject Name',
    },
    {
        name: 'grade',
        label: 'Grade'
    },
    {
        name: 'section',
        label: 'Section'
    },
    {
        name: 'Activity Link',
        label: 'Activity Link'
    },
    {
        name: 'date',
        label: 'Date'
    },
    {
        name: 'status',
        label: "Status",
    },
]

export function TeacherInsertActivity(id, activityTitle, subjectName, grade,section, link,date, status){
    return {id, activityTitle, subjectName, grade,section, link,date, status}
} 

/**
*
*
*  This table is for the profile table in Teacher area for Attendance
*
*
**/


export const TeacherAttendace = [
  
    {
        name: 'month',
        label: 'Month',
    },
    {
        name: 'day',
        label: 'Day'
    },
    {
        name: 'year',
        label: 'Year'
    },
    {
        name: 'time',
        label: 'Time'
    },
 
]

export function TeacherInsertAttendace(month, day, year ,time){
    return {month, day, year ,time}
} 


/**
*
*
*  This table is for the profile table in Teacher area for Logs
*
*
**/

export const TeacherLogs = [
    {
        name: 'date',
        label: 'Date'
    },
    {
        name: 'subjectName',
        label: 'Subject Name',
    },
    {
        name: 'grade',
        label: 'Grade'
    },
    {
        name: 'section',
        label: 'Section'
    },
    {
        name: 'timeStart',
        label: 'Time Start'
    },
    {
        name: 'timeEnd',
        label: 'Time End'
    },
   
]

export function TeacherInsertLogs(date, subjectName, grade, section, timeStart, timeEnd){
    return {date, subjectName, grade, section, timeStart, timeEnd}
}
