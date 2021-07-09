import {Fragment} from "react"
import TeacherRoute from './TeacherRoute'
import StudentRoute from "./StudentRoute"
import ProfileRoute from "./ProfileRoute"
import AdminRoute from "./AdminRoute"
import {Teacher, Student,Admin} from "../../store/utils/Specify";
import {Redirect} from "react-router";


const Route = ({role,email,translation}) => {
    return (
        <Fragment>
            {
                role === Teacher ? <TeacherRoute translation={translation} email={email}/> :
                    role === Student ? <StudentRoute translation={translation} email={email}/> :
                        role === Admin ? <AdminRoute translation={translation} email={email}/> :null
            }
            <ProfileRoute translation={translation}/>
            {
                role !== Admin? <Redirect to={'/'}/>: null
            }
        </Fragment>
    )
}

export default Route