import {Suspense, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import style from './MainUiStyle'
import Sidebar from './sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import {Switch} from 'react-router';
import Skeleton from '../ui/utils/skeleton/TableUISkeleton'
import Route from '../Route'
import {connect} from "react-redux";

const MainUi = ({user,translation}) => {

    const classes = style();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Navbar open={open} handleDrawerOpen={handleDrawerOpen}/>
            <Sidebar
                translation={translation}
                open={open}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen} role={user.userRole}/>
            <main className={classes.content}>
                <div />
                {
                    <Suspense fallback={<Skeleton/>}>
                        <Switch>
                            <Route translation={translation}  role={user.userRole} email={user.email}/>
                        </Switch>
                    </Suspense>
                }
            </main>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        translation: state.languageReducer,
    }
}


export default connect(mapStateToProps, null)(MainUi)

