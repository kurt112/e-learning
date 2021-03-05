import {TeacherItems, StudentItems, AdminItems} from '../../navigations/SidebarItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {SwipeableDrawer} from "@material-ui/core";

import {makeStyles} from '@material-ui/core/styles';
import {Teacher, Student, Admin} from "../../../store/utils/Specify";

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

export default function Sidebar({open, handleDrawerClose, handleDrawerOpen, role}) {

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
                        role === Teacher ? <TeacherItems/> :
                            role === Student ? <StudentItems/> :
                                role === Admin ? <AdminItems/> : null
                    }
                </List>
            </div>
        </SwipeableDrawer>
    )
}

