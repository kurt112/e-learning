/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Button, Switch, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import {green} from "@material-ui/core/colors";

/*
*
*
*
*                 This table is for the student table in admin area
*
*
*
*
*/

const GreenSwitch = withStyles({
    switchBase: {
        color: green[300],
        '&$checked': {
            color: green[500],
        },
        '&$checked + $track': {
            backgroundColor: green[500],
        },
    },
    checked: {},
    track: {},
})(Switch);

export const AdminStudentTable = (translation,setStatus) => [
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
    {
        name: "status",
        label: translation.language["label.global.status"],
        options: {
            filter: false,
            sort: false,
            display: false,
            customBodyRender: (value) => {
                const status = value.status === 1
                return <GreenSwitch checked={status} onClick={() =>setStatus(status,value.id)}/>

            },
            filterOptions: {
                fullWidth: false
            }
        }
    }
];

export function AdminInsertStudentTable(id, firstName, lastName, email, birthdate, grade, section, adviser,status) {
    return {LRN: id, firstName, lastName, email, birthdate, grade, section, adviser, profile: email,status:{status,id}}
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


export const AdminTeacherTable=(translation,setStatus) => [
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
    {
        name: "status",
        label: translation.language["label.global.status"],
        options: {
            filter: false,
            sort: false,
            display: false,
            customBodyRender: (value) => {
                const status = value.status === 1
                return <GreenSwitch checked={status} onClick={() =>setStatus(status,value.email)}/>

            },
            filterOptions: {
                fullWidth: false
            }
        }
    }
]

export function AdminInsertTeacherTable(id, firstName, lastName, email, birthdate,status) {
    return {id, firstName, lastName, email, birthdate, profile: email,status: {status,email}}
}

export const AdminTable=(translation,setStatus) => [
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
    {
        name: "status",
        label: translation.language["label.global.status"],
        options: {
            filter: false,
            sort: false,
            display: false,
            customBodyRender: (value) => {
                const {status} = value
                return <GreenSwitch checked={status} onClick={() =>setStatus(status,value.id)}/>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    }
]

export function AdminInsertTable(firstName, lastName, email, birthdate,status,id) {
    return {firstName, lastName, email, birthdate, profile: email, status: {id,status}}
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


export const AdminRoomTable = (translation,setStatus) => [
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
    {
        name: "status",
        label: translation.language["label.global.status"],
        options: {
            filter: false,
            sort: false,
            display: false,
            customBodyRender: (value) => {
                const status = value.status === 1
                return <GreenSwitch checked={status} onClick={() =>setStatus(status,value.id)}/>

            },
            filterOptions: {
                fullWidth: false
            }
        }
    }
]

export function AdminInsertRoom(id, roomName, timeStart, timeEnd, profile,status) {
    return {id, roomName, timeStart, timeEnd, profile, status:{status,id}}
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


export const AdminSubjectTable = (translation,setStatus) => [
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
        label: translation.language["label.global.category"]
    },
    {
        name: "profile",
        label: translation.language["label.global.profile"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to={`${translation.language["route.profile.subject"]}${value}`} style={{textDecoration: 'none'}}>
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
    {
        name: "status",
        label: translation.language["label.global.status"],
        options: {
            filter: false,
            sort: false,
            display: false,
            customBodyRender: (value) => {
                const status = value.status === 1
                return <GreenSwitch checked={status} onClick={() =>setStatus(status,value.subjectCode)}/>

            },
            filterOptions: {
                fullWidth: false
            }
        }
    }


]



export function AdminInsertSubject(subjectCode, subjectName, major, profile,status) {
    return {subjectCode, subjectName, major, profile, status:{subjectCode,status}}
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

export const AdminRoomClassTable = (translation,setStatus) => [
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
    {
        name: "status",
        label: translation.language["label.global.status"],
        options: {
            filter: false,
            sort: false,
            display: false,
            customBodyRender: (value) => {
                const status = value.status === 1
                return <GreenSwitch checked={status} onClick={() =>setStatus(status,value.id)}/>

            },
            filterOptions: {
                fullWidth: false
            }
        }
    }

]

export function AdminInsertRoomClass(id, roomName, grade, section, subject, assignedTeacher, day, timeStart, timeEnd, classroom, profile,status) {
    return {id, roomName, grade, section, subject, assignedTeacher, day, timeStart, timeEnd, classroom, profile, status:{id,status}}
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
export const AdminRoomShiftTable = (translation,setStatus) => [
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
        name: "adviser",
        label: translation.language["label.global.adviser"]
    },
    {
        name: "curriculum",
        label: translation.language["label.global.curriculum"]
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
    {
        name: "status",
        label: translation.language["label.global.status"],
        options: {
            filter: false,
            sort: false,
            display: false,
            customBodyRender: (value) => {
                const status = value.status === 1
                return <GreenSwitch checked={status} onClick={() =>setStatus(status,value.id)}/>

            },
            filterOptions: {
                fullWidth: false
            }
        }
    }
]

export function AdminInsertRoomShift(id, roomName, roomShiftName, grade, section, curriculum, adviser,timeStart, timeEnd, profile,status) {
    return {id, roomName, roomShiftName, grade, section,curriculum,adviser, timeStart, timeEnd, profile, status: {id,status}}
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

export const AdminCurriculumTable = (translation,setStatus) => [

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
                    <Link to={`${translation.language['route.profile.curriculum']}${value}`}
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
    {
        name: "status",
        label: translation.language["label.global.status"],
        options: {
            filter: false,
            sort: false,
            display: false,
            customBodyRender: (value) => {
                console.log(value)
                const status = value.status === 1
                return <GreenSwitch checked={status} onClick={() =>setStatus(status,value.code)}/>

            },
            filterOptions: {
                fullWidth: false
            }
        }
    }
]

export function AdminInsertCurriculum(code, name, description, profile,status) {
    return {code, name, description, profile, status:{code,status}}
}