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

export const AdminStudentTable = (translation) => [
    {
        name: "LRN",
        label: translation.language["label.student.table.column.lrn"],
    },
    {
        name: "firstName",
        label: translation.language["label.global.first.name"],

    },
    {
        name: "lastName",
        label: translation.language["label.global.last.name"],
    },
    {
        name: "grade",
        label: translation.language["label.global.grade"],
    },
    {
        name: "section",
        label: translation.language["label.global.section"],
    },
    {
        name: "email",
        label: translation.language["label.global.email"],
    },

    {
        name: "birthdate",
        label: translation.language["label.global.birth.date"],
    },

    {
        name: "adviser",
        label: translation.language["label.global.adviser"]
    },
    {
        name: "profile",
        label: translation.language["label.global.profile"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`${translation.language["route.profile.student"]}${value}`}
                          style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">
                            {translation.language["label.global.visit.profile"]}
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
    return {LRN: id, firstName, lastName, email, birthdate, grade, section, adviser, profile: email}
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


export const AdminTeacherTable=(translation) => [
    {
        name: 'id',
        label: translation.language["label.global.id"]
    },
    {
        name: "firstName",
        label:translation.language["label.global.first.name"]
    },
    {
        name: 'lastName',
        label: translation.language["label.global.last.name"]
    },
    {
        name: 'email',
        label: translation.language["label.global.email"]
    },
    {
        name: 'birthdate',
        label: translation.language["label.global.birth.date"]
    },
    {
        name: "profile",
        label: translation.language["label.global.profile"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`${translation.language["route.profile.teacher"]}${value}`}  style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">
                            {translation.language["label.global.visit.profile"]}
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
]

export function AdminInsertTeacherTable(id, firstName, lastName, email, birthdate) {
    return {id, firstName, lastName, email, birthdate, profile: email}
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


export const AdminRoomTable = (translation) => [
    {
        name: 'id',
        label: translation.language["label.global.id"]
    },
    {
        name: 'roomName',
        label: translation.language["label.global.room.name"],
    },
    {
        name: 'timeStart',
        label: translation.language["label.global.time.start"]
    },
    {
        name: 'timeEnd',
        label: translation.language["label.global.time.end"]
    },
    {
        name: "profile",
        label: translation.language["label.global.profile"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`${translation.language["route.profile.room"]}${value}`} style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">
                            {translation.language["label.global.visit.profile"]}
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
]

export function AdminInsertRoom(id, roomName, timeStart, timeEnd, profile) {
    return {id, roomName, timeStart, timeEnd, profile}
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


export const AdminSubjectTable = (translation) => [
    {
        name: 'subjectCode',
        label: translation.language["label.global.subject.code"]
    },
    {
        name: 'subjectName',
        label: translation.language["label.global.subject.name"]
    },

    {
        name: 'major',
        label: translation.language["label.global.major"]
    },
    {
        name: 'active',
        label: translation.language["label.global.active"]
    },
    {
        name: "profile",
        label: translation.language["label.global.profile"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to="/admin/dashboard" style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">
                            {translation.language["label.global.visit.profile"]}
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

export const AdminRoomClassTable = (translation) => [
    {
        name: 'id',
        label: translation.language["label.global.id"]
    },
    {
        name: 'roomName',
        label: translation.language["label.global.room.name"]
    },
    {
        name: 'grade',
        label: translation.language["label.global.grade"]
    },
    {
        name: 'section',
        label: translation.language["label.global.section"]
    },
    {
        name: 'subject',
        label: translation.language["label.global.subject"]
    },
    {
        name: 'assignedTeacher',
        label: translation.language["label.global.assign.teacher"]
    },
    {
        name: 'day',
        label: translation.language["label.global.day"]
    },
    {
        name: 'timeStart',
        label: translation.language["label.global.time.start"]
    },
    {
        name: 'timeEnd',
        label: translation.language["label.global.time.end"]
    },
    {
        name: "classroom",
        label: translation.language["label.global.classroom"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`${translation.language["route.classroom"]}${value}`} style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">
                            {translation.language["label.global.join.class"]}
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
        label: translation.language["label.global.profile"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`${translation.language["route.profile.room.shift.class"]}${value}`}
                          style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">
                            {translation.language["label.global.visit.profile"]}
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
]

export function AdminInsertRoomClass(id, roomName, grade, section, subject, assignedTeacher, day, timeStart, timeEnd, classroom, profile) {
    return {id, roomName, grade, section, subject, assignedTeacher, day, timeStart, timeEnd, classroom, profile}
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
export const AdminRoomShiftTable = (translation) => [
    {
        name: 'id',
        label: translation.language["label.global.id"]
    },
    {
        name: 'roomName',
        label: translation.language["label.global.room.name"]
    },
    {
        name: 'roomShiftName',
        label: translation.language["label.room.shift.table.column.shift"]
    },
    {
        name: 'grade',
        label: translation.language["label.global.grade"]
    },
    {
        name: 'section',
        label: translation.language["label.global.section"]
    },

    {
        name: 'timeStart',
        label: translation.language["label.global.time.start"]
    },
    {
        name: 'timeEnd',
        label: translation.language["label.global.time.end"]
    },
    {
        name: "profile",
        label: translation.language["label.global.profile"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`${translation.language["route.profile.room.shift"]}${value}`}
                          style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">
                            {translation.language["label.global.visit.profile"]}
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
]

export function AdminInsertRoomShift(id, roomName, roomShiftName, grade, section, timeStart, timeEnd, profile) {
    return {id, roomName, roomShiftName, grade, section, timeStart, timeEnd, profile}
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

export const AdminCurriculumTable = (translation) => [

    {
        name: 'code',
        label: translation.language["label.global.code"],
    },
    {
        name: 'name',
        label: translation.language["label.curriculum.table.column.name"],
    },
    {
        name: 'description',
        label: translation.language["label.curriculum.table.column.description"],
    },
    {
        name: "profile",
        label: translation.language["label.global.profile"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`${translation.language["route.profile.room"]}:${value}`}
                          style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">
                            {translation.language["label.global.visit.profile"]}
                        </Button>
                    </Link>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
]

export function AdminInsertCurriculum(code, name, description, profile) {
    return {code, name, description, profile}
}