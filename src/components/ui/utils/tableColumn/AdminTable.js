import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

/*
*
*
*
*                 \This table is for the student table in admin area
*
*
*
*
*/

export const AdminStudentTable = [
    {
        name: "LRN",
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
        name: "email",
        label: "Email",
    },

    {
        name: "birthdate",
        label: "BirthDate",
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
export function AdminInsertStudentTable(id, firstName, lastName, email, birthdate, grade, section, adviser, profile) {
    return { LRN:id, firstName, lastName, email, birthdate, grade, section, adviser, profile }
}


/*
*
*
*
*                             This table is for the student table in admin area
*
*
*
*
*/


export const AdminTeacherTable = [
    {
        name: 'id',
        label: "Id",
    },
    {
        name: "firstName",
        label: "First Name",
    },
    {
        name: 'lastName',
        label: 'Last Name',
    },
    {
        name: 'email',
        label: 'Email',
    },
    {
        name: 'birthdate',
        label: 'BirthDate'
    },
    {
        name: "profile",
        label: "Profile",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                return value === undefined ? null :
                    <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
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
]

export function AdminInsertTeacherTable(id, firstName, lastName, email, birthdate, profile) {
    return { id, firstName, lastName, email, birthdate, profile }
}


/*
*
*
*
*                             This table is for the Rooom table in admin area
*
*
*
*
*/


export const AdminRoomTable = [

    {
        name: 'roomName',
        label: 'RoomName',
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
        name: "profile",
        label: "Profile",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                return value === undefined ? null :
                    <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
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
]

export function AdminInsertRoom(roomName,timeStart, timeEnd, profile) {
    return { roomName, timeStart, timeEnd, profile }
}

/*
*
*
*
*                             This table is for the Subject table in admin area
*
*
*
*
*/


export const AdminSubjectTable = [
    {
        name: 'subjectCode',
        label: 'Subject Code'
    },
    {
        name: 'subjectName',
        label: 'Subject Name'
    },

    {
        name: 'major',
        label: 'Major'
    },
    {
        name: 'active',
        label: 'Active'
    },
    {
        name: "profile",
        label: "Profile",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                return value === undefined ? null :
                    <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                            View Subject
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },

]
export function AdminInsertSubject(subjectCode, subjectName, major, active, profile) {
    return {subjectCode, subjectName, major, active, profile }
}

/*
*
*
*
*                             This table is for the Activity table in admin area
*
*
*
*
*/



export const AdminActivityTable = [

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
        name: 'date',
        label: 'Date'
    },
    {
        name: 'Activity Link',
        label: 'Activity Link'
    },
    {
        name: 'action',
        label: "Action",
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

export function AdminInsertActivity(activityTitle, subjectName, grade, section, link, action) {
    return {  activityTitle, subjectName, grade, section, link, action }
}


/*
*
*
*
*                             This table is for the Class List table in admin area
*
*
*
*
*/

export const AdminRoomClassTable = [

    {
        name: 'roomName',
        label: 'RoomName',
    },
    {
        name: 'grade',
        label: 'Grade'
    },
    {
        name: 'section',
        label: 'section'
    },
    {
        name: 'subject',
        label: 'Subject'
    },
    {
        name: 'assignedTeacher',
        label: 'assignedTeacher'
    },
    {
        name: 'day',
        label: 'Day'
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
        name: "profile",
        label: "Profile",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                return value === undefined ? null :
                    <Link to={"/classroom/"+value} style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                            Visit Class
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
]

export function AdminInsertRoomClass(roomName, grade, section, subject,assignedTeacher, day, timeStart, timeEnd, profile) {
    return { roomName, grade, section,subject,assignedTeacher,day, timeStart, timeEnd, profile }
}

/*
*
*
*
*                             This table is for the Admin RoomShift List table in admin area
*
*
*
*
*/
export const AdminRoomShiftTable = [

    {
        name: 'roomName',
        label: 'RoomName',
    },
    {
        name: 'roomShiftName',
        label: 'Room Shift Name'
    },
    {
        name: 'grade',
        label: 'Grade'
    },
    {
        name: 'section',
        label: 'section'
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
        name: "profile",
        label: "Profile",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                return value === undefined ? null :
                    <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>
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
]

export function AdminInsertRoomShift(roomName,roomShiftName, grade, section  ,timeStart, timeEnd, profile,id) {
    return { roomName, roomShiftName, grade, section ,timeStart, timeEnd, profile,id}
}
