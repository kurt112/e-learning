import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink} from 'react-router-dom'

import FindInPageIcon from '@material-ui/icons/FindInPage';
//icons
import ClassIcon from '@material-ui/icons/Class';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CreateIcon from '@material-ui/icons/Create';

// icons admin
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AcUnitIcon from '@material-ui/icons/AcUnit';
export function TeacherItems({ style }) {
    return (
        <div>
            <ListSubheader className={style} inset>TEACHER</ListSubheader>
            <ListItem component={NavLink} to="/teacher/classes" button>
                <ListItemIcon>
                    <ClassIcon />
                </ListItemIcon>
                <ListItemText primary="Classes" />
            </ListItem>
            <ListItem component={NavLink} to="/teacher/subjects" button>
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
            </ListItem>
            <ListItem component={NavLink} to="/teacher/students" button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
            </ListItem>
            <ListItem component={NavLink} to="/teacher/lectures" button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Lectures" />
            </ListItem>
            <ListItem component={NavLink} to="/teacher/assignments" button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Assignments" />
            </ListItem>
            <ListItem component={NavLink} to="/teacher/quizzes" button>
                <ListItemIcon>
                    <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Quizzes" />
            </ListItem>
            <ListItem component={NavLink} to="/teacher/exams" button>
                <ListItemIcon>
                    <FindInPageIcon/>
                </ListItemIcon>
                <ListItemText primary="Exams"/>
            </ListItem>
            <ListItem component={NavLink} to="/teacher/resources" button>
                <ListItemIcon>
                    <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText primary="Resources" />
            </ListItem>
        </div>
    )
}


export function StudentItems({ style }) {
    return (
        <div>
            <ListSubheader className={style} inset>STUDENT</ListSubheader>
            <ListItem component={NavLink} to="/student/classes" button>
                <ListItemIcon>
                    <ClassIcon />
                </ListItemIcon>
                <ListItemText primary="Classes" />
            </ListItem>
            <ListItem component={NavLink} to="/student/subjects" button>
                <ListItemIcon>
                    <MenuBookIcon    />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
            </ListItem>
            <ListItem component={NavLink} to="/student/teachers" button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
            </ListItem>
            <ListItem component={NavLink} to="/student/resources" button>
                <ListItemIcon>
                    <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText primary="Resources" />
            </ListItem>
        
        </div>
    )
}

export function AdminItems({ style }) {
    return (
        <div>
            <ListSubheader className={style} inset>ADMIN</ListSubheader>
            <ListItem component={NavLink} to="/admin/dashboard" button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem component={NavLink} to="/admin/room-list" button>
                <ListItemIcon>
                    <MeetingRoomIcon />
                </ListItemIcon>
                <ListItemText primary="Rooms" />
            </ListItem>
            <ListItem component={NavLink} to="/admin/room-shift" button>
                <ListItemIcon>
                    <SwapHorizIcon />
                </ListItemIcon>
                <ListItemText primary="Room Shifts" />
            </ListItem>
            <ListItem component={NavLink} to="/admin/classes-list" button>
                <ListItemIcon>
                    <ClassIcon />
                </ListItemIcon>
                <ListItemText primary="Classes" />
            </ListItem>
            <ListItem component={NavLink} to="/admin/student-list" button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
            </ListItem>
            <ListItem component={NavLink} to="/admin/teacher-list" button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
            </ListItem>

            <ListItem component={NavLink} to="/admin/subject-list" button>
                <ListItemIcon>
                    <ImportContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
            </ListItem>
            <ListItem component={NavLink} to="/admin/strand-courses" button>
                <ListItemIcon>
                    <AcUnitIcon />
                </ListItemIcon>
                <ListItemText primary="Strand/Courses" />
            </ListItem>
        </div>
    )
}