import {Fragment, Suspense} from 'react'
import DashBoard from './components/mainUI/MainUI'
import {BrowserRouter} from 'react-router-dom'
import Classroom from './components/ui/__user_ui/classroom/classroom'
import {Redirect, Route, Switch} from "react-router";
import Login from './components/ui/login/Login'

const App = ({user}) => {
    return (
        <Fragment>
            <BrowserRouter>
                <Suspense fallback={'Loading'}>
                    <Switch>
                        {
                            user === undefined ?
                                <Route path={'/'} exact render={() => <Login/>}/> :
                                <Fragment>
                                    <DashBoard/>
                                    <Route path='/classroom/:path' exact render={(props) => <Classroom {...props}/>}/>
                                </Fragment>
                        }
                        <Redirect to={'/'}/>
                    </Switch>
                </Suspense>

            </BrowserRouter>
        </Fragment>
    )
}

export default App