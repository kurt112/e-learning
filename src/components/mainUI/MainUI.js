import {Suspense, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import style from './MainUiStyle'
import Sidebar from './sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import {Switch} from 'react-router';
import Skeleton from '../ui/utils/skeleton/TableUISkeleton'
import Route from '../Route'
import {Student} from "../../store/utils/Specify";

export default function MainUi({props}) {
    const classes = style();


    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {

        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);

    };

    return (
        <div className={classes.root}>
            <CssBaseline/>


            <Navbar open={open} handleDrawerOpen={handleDrawerOpen}/>
            <Sidebar
                open={open}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen} role={Student}/>


            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {
                    <Suspense fallback={<Skeleton/>}>
                        <Switch>
                            <Route role={Student}/>
                        </Switch>
                    </Suspense>
                }

            </main>
        </div>
    );
}