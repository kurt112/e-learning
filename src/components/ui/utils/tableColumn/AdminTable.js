import {Button, Chip} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Fragment} from "react";
import {JavaEndpoint} from "../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
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

export function AdminInsertTeacherTable(firstName, lastName, email, birthdate) {
    return {firstName, lastName, email, birthdate, profile:email}
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

export function AdminInsertRoom(roomName, timeStart, timeEnd, profile) {
    return {roomName, timeStart, timeEnd, profile}
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
        name: 'link',
        label: 'Activity File',
        options: {
            filter: false,
            sort: false,
            width: 100,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <Fragment>
                        <a href={JavaEndpoint + '/admin/activity/download?activity-id=' + value} target="_blank"
                           style={{textDecoration: 'none', marginRight: '10px'}}>
                            <Button variant="outlined" color="primary">
                                Download
                            </Button>
                        </a>
                        <a href={JavaEndpoint + '/admin/activity/view?activity-id=' + value} target="_blank"
                           style={{textDecoration: 'none'}}>
                            <Button variant="outlined" color="primary">
                                View
                            </Button>
                        </a>
                    </Fragment>
            }
        }
    },
    {
        name: 'action',
        label: "Action",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                return value === undefined ? null :
                    <a href={JavaEndpoint + '/admin/activity/download?activity-id=' + value} target="_blank"
                       style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="primary">
                            Visit Activity
                        </Button>
                    </a>
            },

        }
    },
    {
        name: 'status',
        label: "Status",
        options: {
            filter: false,
            sort: true,
            customBodyRender: (value) => {
                return value === 'Approved' ?
                    <Chip

                        style={{fontWeight: 'bold',color: 'white', backgroundColor: '#28a745', width: '100%'}}
                        label={value}
                        icon={<CheckIcon style={{color: 'white', fontWeight: 'bold'}}/>}/>
                    :
                    value === 'Declined' ?
                        <Chip

                            style={{fontWeight: 'bold',backgroundColor: '#dc3545',color: 'white',
                            borderColor: '#dc3545', width: '100%'}}
                            label={value}
                            icon={<CloseIcon style={{color: 'white', fontWeight: 'bold'}}/>}/> :
                        <Chip

                            style={{fontWeight: 'bold',color: 'white', backgroundColor: '#007bff',  width: '100%'}}
                            label={value}
                            icon={<PriorityHighIcon style={{color: 'white', fontWeight: 'bold'}}/>}/>
            },

        }
    }
]

export function AdminInsertActivity(activityTitle, subjectName, grade, section, date, link, action, status) {
    return {activityTitle, subjectName, grade, section, date, link, action, status}
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

export function AdminInsertRoomClass(roomName, grade, section, subject, assignedTeacher, day, timeStart, timeEnd, classroom, profile) {
    return {roomName, grade, section, subject, assignedTeacher, day, timeStart, timeEnd, classroom, profile}
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

export function AdminInsertRoomShift(roomName, roomShiftName, grade, section, timeStart, timeEnd, profile, id) {
    return {roomName, roomShiftName, grade, section, timeStart, timeEnd, profile, id}
}
