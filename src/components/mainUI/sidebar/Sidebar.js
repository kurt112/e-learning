/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {TeacherItems, StudentItems, AdminItems} from '../../navigations/SidebarItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {SwipeableDrawer} from "@material-ui/core";

import {makeStyles} from '@material-ui/core/styles';
import {Teacher, Student, Admin} from "../../../store/utils/Specify";
import ListItem from "@material-ui/core/ListItem";
import {NavLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    list: {
        width: 240,

    },
    fullList: {
        width: 'auto',
    },
    toolbar: {
        textAlign: 'center'
    },
});

const Sidebar = ({user, open, handleDrawerClose, handleDrawerOpen, role, translation}) => {

    const classes = useStyles();


    return (
        <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
            className={classes.list}

        >
            <div className={classes.list}>
                <div className={classes.toolbar}>
                    <h3>Virtual Classroom</h3>
                </div>
                <Divider/>
                <List>
                    {
                        role === Teacher ? <TeacherItems translation={translation}/> :
                            role === Student ? <StudentItems translation={translation}/> :
                                role === Admin ? <AdminItems translation={translation}/> : null
                    }
                    <ListItem component={NavLink}
                              to={'/'
                              + (user.userRole === Student ? 'student' : 'teacher') +
                              '/profile/' + user.email} button
                    >
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary={translation.language["label.global.your.profile"]}/>
                    </ListItem>
                </List>
            </div>
        </SwipeableDrawer>
    )
}

export default Sidebar

