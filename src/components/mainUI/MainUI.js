/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Suspense, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import style from './MainUiStyle'
import Sidebar from './sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import {Switch} from 'react-router';
import Skeleton from '../ui/utils/skeleton/TableUISkeleton'
import Routes from '../Route'

const MainUi = ({user, translation}) => {

    const classes = style();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Navbar user={user} open={open} handleDrawerOpen={handleDrawerOpen}/>
            <Sidebar
                user={user}
                translation={translation}
                open={open}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen} role={user.userRole}/>
            <main className={classes.content}>
                <div/>
                {
                    <Suspense fallback={<Skeleton/>}>
                        <Switch>
                            <Routes translation={translation} role={user.userRole} email={user.email}/>
                        </Switch>
                    </Suspense>
                }
            </main>
        </div>
    );
}

export default MainUi
