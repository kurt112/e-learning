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
import AcUnitIcon from '@material-ui/icons/AcUnit';
export function TeacherItems({ style,translation }) {
    return (
        <div>
            <ListSubheader className={style} inset>TEACHER</ListSubheader>
            <ListItem component={NavLink} to={translation.language["route.teacher.classes"]} button>
                <ListItemIcon>
                    <ClassIcon />
                </ListItemIcon>
                <ListItemText primary="Classes" />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.subjects"]} button>
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.students"]} button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.lectures"]} button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Lectures" />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.assignments"]} button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Assignments" />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.quizzes"]} button>
                <ListItemIcon>
                    <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Quizzes" />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.exams"]} button>
                <ListItemIcon>
                    <FindInPageIcon/>
                </ListItemIcon>
                <ListItemText primary="Exams"/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.resources"]} button>
                <ListItemIcon>
                    <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText primary="Resources" />
            </ListItem>
        </div>
    )
}


export function StudentItems({ style,translation}) {
    return (
        <div>
            <ListSubheader className={style} inset>STUDENT</ListSubheader>
            <ListItem component={NavLink} to={translation.language["route.student.classes"]} button>
                <ListItemIcon>
                    <ClassIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.classes"]} />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.student.subjects"]} button>
                <ListItemIcon>
                    <MenuBookIcon    />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.subjects"]} />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.student.teachers"]} button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.teachers"]} />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.student.resources"]} button>
                <ListItemIcon>
                    <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.resources"]} />
            </ListItem>
        
        </div>
    )
}

export function AdminItems({ style,translation}) {
    return (
        <div>
            <ListSubheader className={style} inset>ADMIN</ListSubheader>
            <ListItem component={NavLink} to={translation.language["route.admin.dashboard"]} button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.dashboard"]} />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.room.list"]} button>
                <ListItemIcon>
                    <MeetingRoomIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.rooms"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.room.shift"]} button>
                <ListItemIcon>
                    <SwapHorizIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.room.shifts"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.classes.list"]} button>
                <ListItemIcon>
                    <ClassIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.classes"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.student.list"]} button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.students"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.teacher.list"]} button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.teacher"]}/>
            </ListItem>

            <ListItem component={NavLink} to={translation.language["route.admin.subject.list"]} button>
                <ListItemIcon>
                    <ImportContactsIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.subjects"]} />
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.curriculum"]} button>
                <ListItemIcon>
                    <AcUnitIcon />
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin.curriculum"]} />
            </ListItem>
        </div>
    )
}