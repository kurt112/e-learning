import {Button} from "@material-ui/core"
import {Link} from "react-router-dom"
import {convertDateTime} from "../dateFormat/DateTimeFormatToDateWord";
import {JavaEndpoint} from "../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";


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
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Link to="/admin/dashboard" style={{textDecoration: 'none'}}>
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
    return {id, roomName, roomSubject, students, timeStart, timeEnd, visit}
}


/**
 *
 *
 *  This table is for the Subject table in Teacher area
 *
 *
 **/


export const TeacherSubjectTable = translation => [
    {
        name: 'subjectName',
        label: translation.language["label.global.subject.name"]
    },
    {
        name: 'subjectCode',
        label: translation.language["label.global.subject.code"]
    },
    {
        name: 'major',
        label: translation.language["label.global.major"]
    },
]

export function TeacherInsertSubject(subjectName, subjectCode, major) {
    return {subjectName, subjectCode, major}
}


/**
 *
 *
 *  This table is for the Student table in Teacher area
 *
 *
 **/

export const TeacherStudentTable =(translation) => [

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
        name: "subject",
        label: translation.language["label.global.subject"]
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
                    <Link to={translation.language["route.profile.student"] + value} style={{textDecoration: 'none'}}>
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

export function TeacherInsertStudent(firstName, lastName, grade, section, subject, adviser, profile) {

    return {firstName, lastName, grade, section, subject, adviser, profile}
}

/**
 *
 *
 *  This table is for the Activies table in Teacher area
 *
 *
 **/


export const TeacherLectureTable = [
    {
        name: 'code',
        label: 'Code'
    },
    {
        name: 'gradeSection',
        label: 'Grade Section',
    },
    {
        name: 'sem',
        label: 'Semester'
    },
    {
        name: 'quarter',
        label: 'Quarter'
    },
    {
        name: 'uploadedOn',
        label: 'UploadedOn'
    },
    {
        name: 'description',
        label: 'Description'
    },
    {
        name: 'download',
        label: 'Download',
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return <a href={JavaEndpoint + `/teacher/resource/download?code=` + value} target="_blank"
                          style={{textDecoration: 'none', marginRight: '10px'}} rel="noopener noreferrer">
                    <Button variant="outlined" color="primary">
                        Download
                    </Button>
                </a>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    }

]

export function TeacherInsertLecture(code, documentName, gradeSection, sem, quarter, uploadedOn, description, download) {
    return {code, documentName, gradeSection, sem, quarter, uploadedOn, description, download}
}

/**
 *
 *
 *  This table is for the profiles table in Teacher area for Attendance
 *
 *
 **/


export const TeacherAttendace = (translation) => [

    {
        name: 'month',
        label: translation.language["label.global.month"],
    },
    {
        name: 'day',
        label: translation.language["label.global.day"]
    },
    {
        name: 'year',
        label: translation.language["label.global.year"]
    },
    {
        name: 'time',
        label: translation.language["label.global.time"]
    },

]

export function TeacherInsertAttendace(month, day, year, time) {
    return {month, day, year, time}
}


/**
 *
 *
 *  This table is for the profiles table in Teacher area for Logs
 *
 *
 **/

export const TeacherLogs = (translation) => [
    {
        name: 'date',
        label: translation.language["label.global.date"]
    },
    {
        name: 'subjectName',
        label: translation.language["label.global.subject.name"]
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

]

export function TeacherInsertLogs(date, subjectName, grade, section, timeStart, timeEnd) {
    return {date, subjectName, grade, section, timeStart, timeEnd}
}


/**
 *
 *
 *  This table is for the profiles table in Teacher area for Resources
 *
 *
 **/

export const TeacherResources = (translation) => [
    {
        name: 'documentCode',
        label: translation.language["label.global.document.code"]
    },
    {
        name: 'documentName',
        label: translation.language["label.global.document.name"],
    },
    {
        name: 'description',
        label: translation.language["label.global.description"]
    },
    {
        name: 'dateUploaded',
        label: translation.language["label.global.date.upload"]
    },
    {
        name: 'type',
        label: translation.language["label.global.type"]
    },
    {
        name: 'status',
        label: translation.language["label.global.status"]
    },
    {
        name: "download",
        label: translation.language["label.global.download"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return <a href={JavaEndpoint + translation.language["route.teacher.resource.download"] + value}
                          target="_blank"
                          style={{textDecoration: 'none', marginRight: '10px'}}
                          rel="noopener noreferrer">
                    <Button variant="outlined" color="primary">
                        {translation.language["label.global.download"]}
                    </Button>
                </a>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
]

export function TeacherInsertResources(documentCode, documentName, description, dateUploaded, type, status) {
    return {documentCode, documentName, description, dateUploaded, type, status, download: documentCode}
}

/**
 *
 *
 *  This table is for the profiles table in Teacher area for Assignments
 *
 *
 **/

export const TeacherAssignments = (translation) => [
    {
        name: 'code',
        label: translation.language["label.teacher.assignment.table.column"]
    },
    {
        name: 'lowGrade',
        label: translation.language["label.global.low.grade"]
    },
    {
        name: 'highGrade',
        label: translation.language["label.global.high.grade"]
    },
    {
        name: 'semester',
        label: translation.language["label.global.semester"]
    },
    {
        name: 'quarter',
        label: translation.language["label.global.quarter"]
    },
    {
        name: 'classes',
        label: translation.language["label.global.class"]
    },
    {
        name: 'dateUploaded',
        label: translation.language["label.global.date.upload"]
    },

    {
        name: 'deadline',
        label: translation.language["label.global.date.deadline"]
    },
    {
        name: 'description',
        label: translation.language["label.global.description"]
    },
    {
        name: "download",
        label: translation.language["label.global.download"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return <a href={JavaEndpoint + translation.language["route.teacher.resource.download"] + value}
                          target="_blank"
                          style={{textDecoration: 'none', marginRight: '10px'}}
                          rel="noopener noreferrer">
                    <Button variant="outlined" color="primary">
                        {translation.language["label.global.download"]}
                    </Button>
                </a>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    },
]

export function TeacherInsertAssignment(code, lowGrade, highGrade, semester, quarter, classes, dateUploaded, deadline, description, documentCode) {

    return {
        code,
        lowGrade,
        highGrade,
        semester,
        quarter,
        classes,
        dateUploaded: convertDateTime(dateUploaded),
        deadline: convertDateTime(deadline),
        description,
        download: documentCode
    }
}

export const TeacherExams = (translation) => [
    {
        name: 'code',
        label: translation.language["label.teacher.exam.table.column"]
    },
    {
        name: 'lowGrade',
        label: translation.language["label.global.low.grade"]
    },
    {
        name: 'highGrade',
        label: translation.language["label.global.high.grade"]
    },
    {
        name: 'semester',
        label: translation.language["label.global.semester"]
    },
    {
        name: 'quarter',
        label: translation.language["label.global.quarter"]
    },
    {
        name: 'classes',
        label: translation.language["label.global.class"]
    },
    {
        name: 'dateUploaded',
        label: translation.language["label.global.date.upload"]
    },

    {
        name: 'deadline',
        label: translation.language["label.global.date.deadline"]
    },
    {
        name: 'description',
        label: translation.language["label.global.description"]
    },
    {
        name: "download",
        label: translation.language["label.global.download"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return <a href={JavaEndpoint + translation.language["route.teacher.resource.download"] + value}
                          target="_blank"
                          style={{textDecoration: 'none', marginRight: '10px'}}
                          rel="noopener noreferrer">
                    <Button variant="outlined" color="primary">
                        {translation.language["label.global.download"]}
                    </Button>
                </a>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    }
]


export function TeacherInsertExam(code, lowGrade, highGrade, semester, quarter, classes, dateUploaded, deadline, description, documentCode) {

    return {
        code,
        lowGrade,
        highGrade,
        semester,
        quarter,
        classes,
        dateUploaded: convertDateTime(dateUploaded),
        deadline: convertDateTime(deadline),
        description,
        download: documentCode
    }
}

export const TeacherQuiz = (translation) => [
    {
        name: 'code',
        label: translation.language["label.teacher.quiz.table.column.code"]
    },
    {
        name: 'lowGrade',
        label: translation.language["label.global.low.grade"]
    },
    {
        name: 'highGrade',
        label: translation.language["label.global.high.grade"]
    },
    {
        name: 'semester',
        label: translation.language["label.global.semester"]
    },
    {
        name: 'quarter',
        label: translation.language["label.global.quarter"]
    },
    {
        name: 'classes',
        label: translation.language["label.global.class"]
    },
    {
        name: 'dateUploaded',
        label: translation.language["label.global.date.upload"]
    },

    {
        name: 'deadline',
        label: translation.language["label.global.date.deadline"]
    },
    {
        name: 'description',
        label: translation.language["label.global.description"]
    },
    {
        name: "download",
        label: translation.language["label.global.download"],
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return <a href={JavaEndpoint + translation.language["route.teacher.resource.download"] + value} target="_blank"
                          style={{textDecoration: 'none', marginRight: '10px'}}
                          rel="noopener noreferrer">
                    <Button variant="outlined" color="primary">
                        {translation.language["label.global.download"]}
                    </Button>
                </a>
            },
            filterOptions: {
                fullWidth: false
            }
        }
    }
]


export function TeacherInsertQuiz(code, lowGrade, highGrade, semester, quarter, classes, dateUploaded, deadline, description, documentCode) {

    return {
        code,
        lowGrade,
        highGrade,
        semester,
        quarter,
        classes,
        dateUploaded: convertDateTime(dateUploaded),
        deadline: convertDateTime(deadline),
        description,
        download: documentCode
    }
}