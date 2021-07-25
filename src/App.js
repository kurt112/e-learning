/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Fragment, Suspense, useEffect} from 'react'
import DashBoard from './components/mainUI/MainUI'
import {BrowserRouter} from 'react-router-dom'
import Classroom from './components/ui/__user_ui/classroom/classroom'
import {Redirect, Route, Switch} from "react-router";
import Login from './components/ui/login/Login'
import {connect} from 'react-redux'
import * as action from './store/action/login/LoginAction'

const App = ({currentUser, reLogin,translation}) => {

    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token !== null && currentUser.user === null) reLogin(localStorage.getItem('token'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <BrowserRouter>
                <Suspense fallback={'Loading'}>
                    <Switch>
                        {currentUser.user === null ? null : <Route path='/classroom/:path' exact
                                                                   render={(props) =>
                                                                       <Classroom
                                                                           translation={translation}
                                                                           user={currentUser.user} {...props}/>}/>}
                        {
                            currentUser.user === null ?

                                token !== null ? null : <Route path={'/'} exact render={() => <Login translation={translation} />}/> :

                                <Fragment>
                                    <DashBoard user={currentUser.user} translation={translation}/>
                                </Fragment>
                        }

                        {currentUser.user === null && token === null ? <Redirect to={'/'}/> : null}

                    </Switch>

                </Suspense>

            </BrowserRouter>

        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.CurrentUser,
        translation: state.languageReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reLogin: (data) => dispatch(action.reLogin(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)