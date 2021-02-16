import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink, Link } from 'react-router-dom'
export function TeacherItems({ style }) {

    return (
        <div>
            <ListSubheader className={style} inset>TEACHER</ListSubheader>
            <ListItem component={Link} to="/teacher/profile" button>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
            <ListItem component={NavLink} to="/teacher/rooms" button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Room" />
            </ListItem>
            <ListItem component={NavLink} to="/teacher/subjects" button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
            </ListItem>
            <ListItem component={NavLink} to="/teacher/students" button>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
            </ListItem>
            <ListItem component={NavLink} to="/teacher/activities" button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Activities" />
            </ListItem>
        </div>
    )
}


export function StudentItems({ style }) {
    return (
        <div>
            <ListSubheader className={style} inset>STUDENT</ListSubheader>
            <ListItem component={NavLink} to="/student/profile" button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
            <ListItem component={NavLink} to="/student/rooms" button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Room" />
            </ListItem>
            <ListItem component={NavLink} to="/student/subjects" button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
            </ListItem>
            <ListItem component={NavLink} to="/student/teachers" button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
            </ListItem>
            <ListItem component={NavLink} to="/student/activities" button>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Activities" />
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
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Rooms" />
            </ListItem>
            <ListItem component={NavLink} to="/admin/room-shift" button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Room Shifts" />
            </ListItem>
            <ListItem component={NavLink} to="/admin/classes-list" button>
                <ListItemIcon>
                    <PeopleIcon />
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
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
            </ListItem>
            <ListItem component={NavLink} to="/admin/activity-list" button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Activities" />
            </ListItem>
            <ListItem component={NavLink} to="/admin/strand-courses" button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Strand/Courses" />
            </ListItem>
        </div>
    )
}