
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"

/*
*
*
*
*This table is for the Room table in Student area
*
*
*
*
*/

export const StudentRoomTable = [
    {
        name: 'id',
        label: 'Id',
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

export function StudentInsertRoom(id, roomName, roomSubject, students, timeStart, timeEnd, visit) {
    return { id, roomName, roomSubject, students, timeStart, timeEnd, visit }
}


/**
*
*
*  This table is for the Subject table in Student area
*
*
**/


export const StudentSubjectTable = [
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

export function StudentInsertSubject(id, subjectName, subjectCode, SubjectHour, subjectMinute, major) {
    return { id, subjectName, subjectCode, SubjectHour, subjectMinute, major }
}


/**
*
*
*  This table is for the Teacher table in Student area
*
*
**/

export const StudentTeacherTable = [
    {
        name: "id",
        label: "Id",
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
        name: "subject",
        label: "Subject"
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
export function StudentInsertTeacher(id, firstName, lastName,subject,profile) {

    return {id, firstName, lastName,subject,profile}
}

/**
*
*
*  This table is for the Activies table in Student area
*
*
**/


export const StudentActivityTable = [
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
        name: 'date',
        label: 'Date'
    },
    {
        name: 'status',
        label: "Status",
    },
    {
        name: 'link',
        label: "Link",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                return value === undefined ? null :
                    <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                            Approve
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
]

export function StudentInsertActivity(id, activityTitle, subjectName, date, status,link) {
    return { id, activityTitle, subjectName, date, status,link }
} 
