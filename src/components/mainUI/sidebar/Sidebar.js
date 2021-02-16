
import { TeacherItems, StudentItems, AdminItems } from '../../navigations/SidebarItem';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/Divider';
import {ListItem, ListItemIcon, ListItemText, SwipeableDrawer} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useState} from "react";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 240;

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

export default function Sidebar({open, handleDrawerClose,handleDrawerOpen}) {

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
                <Divider />
                <List>
                    <AdminItems />
                </List>
                <Divider />
                <List>
                    <TeacherItems />
                </List>
                <Divider />
                <List>
                    <StudentItems />
                </List>
            </div>
        </SwipeableDrawer>
        // <Drawer
        //     variant="permanent"
        //
        // >

        // </Drawer>
    )
}

