import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
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
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`/student/profile/`+value} style={{textDecoration: 'none'}}>
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

export function AdminInsertStudentTable(id, firstName, lastName, email, birthdate, grade, section, adviser) {
    return {LRN: id, firstName, lastName, email, birthdate, grade, section, adviser, profile:email}
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
      label: 'Id'
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
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`/teacher/profile/`+value} style={{textDecoration: 'none'}}>
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

export function AdminInsertTeacherTable(id,firstName, lastName, email, birthdate) {
    return {id,firstName, lastName, email, birthdate, profile:email}
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
        name: 'id',
        label: 'Id'
    },
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
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`/room/profile/`+value} style={{textDecoration: 'none'}}>
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

export function AdminInsertRoom(id,roomName, timeStart, timeEnd, profile) {
    return {id,roomName, timeStart, timeEnd, profile}
}

/*
*
*
*
*          This table is for the Subject table in admin area
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
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to="/admin/dashboard" style={{textDecoration: 'none'}}>
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
    return {subjectCode, subjectName, major, active, profile}
}





/*
*
*
*
*                             This table is for the RoomShiftClass List table in admin area
*
*
*
*
*/

export const AdminRoomClassTable = [
    {
        name: 'id',
        label: 'Id'
    },
    {
        name: 'roomName',
        label: 'RoomName'
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
        name: "classroom",
        label: "Class Room",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={"/classroom/" + value} style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">
                            Join Class
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },

    {
        name: "profile",
        label: "Profile",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={"/roomShiftClass/profile/" + value} style={{textDecoration: 'none'}}>
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

export function AdminInsertRoomClass(id,roomName, grade, section, subject, assignedTeacher, day, timeStart, timeEnd, classroom, profile) {
    return {id,roomName, grade, section, subject, assignedTeacher, day, timeStart, timeEnd, classroom, profile}
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
        name: 'id',
        label: 'Id'
    },
    {
        name: 'roomName',
        label: 'RoomName'
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
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`/roomshift/profile/`+value} style={{textDecoration: 'none'}}>
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

export function AdminInsertRoomShift(id,roomName, roomShiftName, grade, section, timeStart, timeEnd, profile) {
    return {id,roomName, roomShiftName, grade, section, timeStart, timeEnd, profile}
}

/*
*
*
*
*                             This table is for the Admin Curriculum List table in admin area
*
*
*
*
*/

export const AdminCurriculumTable = [

    {
        name: 'code',
        label: 'Code',
    },
    {
        name: 'name',
        label: 'Name'
    },
    {
        name: 'description',
        label: 'Description'
    },
    {
        name: "profile",
        label: "Profile",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`/room/profile/`+value} style={{textDecoration: 'none'}}>
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

export function AdminInsertCurriculum(roomName, timeStart, timeEnd, profile) {
    return {roomName, timeStart, timeEnd, profile}
}