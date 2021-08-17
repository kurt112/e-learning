/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {NavLink} from 'react-router-dom'

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

// icons student
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import {Divider, ListSubheader} from "@material-ui/core";

export function TeacherItems({translation}) {
    return (
        <div>
            <ListItem component={NavLink} to={translation.language["route.teacher.classes"]} button>
                <ListItemIcon>
                    <ClassIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.classes"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.subjects"]} button>
                <ListItemIcon>
                    <MenuBookIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.subjects"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.students"]} button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.students"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.lectures"]} button>
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.lectures"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.assignments"]} button>
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.assignments"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.quizzes"]} button>
                <ListItemIcon>
                    <CreateIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.quizzes"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.exams"]} button>
                <ListItemIcon>
                    <FindInPageIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.exams"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.teacher.resources"]} button>
                <ListItemIcon>
                    <CloudUploadIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.resources"]}/>
            </ListItem>
        </div>
    )
}


export function StudentItems({translation}) {
    return (
        <div>
            <ListItem component={NavLink} to={translation.language["route.student.classes"]} button>
                <ListItemIcon>
                    <ClassIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.classes"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.student.lectures"]} button>
                <ListItemIcon>
                    <MenuBookIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.lecture"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.student.todos"]} button>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.todos"]}/>
            </ListItem>
        </div>
    )
}

export function AdminItems({translation}) {
    return (
        <div>
            <ListSubheader inset style={{cursor:'default'}}>Utility</ListSubheader>
            <ListItem component={NavLink} to={translation.language["route.admin.dashboard"]} button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.dashboard"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.room.list"]} button>
                <ListItemIcon>
                    <MeetingRoomIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.rooms"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.curriculum"]} button>
                <ListItemIcon>
                    <AcUnitIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.curriculum"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.room.shift"]} button>
                <ListItemIcon>
                    <SwapHorizIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.room.shifts"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.classes.list"]} button>
                <ListItemIcon>
                    <ClassIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.classes"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.subject.list"]} button>
                <ListItemIcon>
                    <ImportContactsIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.subjects"]}/>
            </ListItem>


            <Divider/>
            <ListSubheader inset style={{cursor:'default'}}>Accounts</ListSubheader>
            <ListItem component={NavLink} to={translation.language["route.admin.student.list"]} button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.students"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.teacher.list"]} button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.teachers"]}/>
            </ListItem>
            <ListItem component={NavLink} to={translation.language["route.admin.list"]} button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary={translation.language["label.sidebar.admin"]}/>
            </ListItem>
            <Divider/>
            <ListSubheader inset style={{cursor:'default'}}>Profile</ListSubheader>
        </div>
    )
}