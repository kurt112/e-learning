import {Fragment} from "react";
import TeacherRoute from './TeacherRoute'
import StudentRoute from "./StudentRoute";
import ProfileRoute from "./ProfileRoute";
import AdminRoute from "./AdminRoute";
import {Redirect} from "react-router";
import {Teacher, Student,Admin} from "../../store/utils/Specify";


const Route = ({role,email,translation}) => {
    return (
        <Fragment>
            {
                role === Teacher ? <TeacherRoute translation={translation} email={email}/> :
                    role === Student ? <StudentRoute translation={translation} email={email}/> :
                        role === Admin ? <AdminRoute translation={translation} email={email}/> :
                            <Redirect to={'/'}/>
            }
            <ProfileRoute translation={translation}/>
        </Fragment>
    )
}

export default Route