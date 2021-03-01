
import { Fragment,Suspense} from 'react'
import DashBoard from './components/mainUI/MainUI'
import { BrowserRouter } from 'react-router-dom'
import Classroom from './components/ui/__user_ui/classroom/classroom'
import {Route, Switch} from "react-router";
import Login from './components/ui/login/Login'
const App = () => {
  return (
      <Login/>
    // <Fragment>
    //
    //       <BrowserRouter>
    //           <Suspense>
    //               <Switch>
    //               {/*    /!*<Route path='/classroom/:path' exact  render={(props) =>  <Classroom {...props}/>}/>*!/*/}
    //               {/*    /!*<DashBoard />*!/*/}
    //               {/*    /!*<Classroom/>*!/*/}
    //               {/*    /!*<Login/>*!/*/}
    //               {/*</Switch>*/}
    //           </Suspense>
    //
    //       </BrowserRouter>
    // </Fragment>
  )
}

export default App