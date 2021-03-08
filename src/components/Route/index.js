import {Fragment} from "react";
import TeacherRoute from './TeacherRoute'
import StudentRoute from "./StudentRoute";
import ProfileRoute from "./ProfileRoute";
import AdminRoute from "./AdminRoute";
import {Redirect} from "react-router";
import {Teacher, Student,Admin} from "../../store/utils/Specify";


const Route = ({role}) => {
    return (
        <Fragment>
            {
                role === Teacher ? <TeacherRoute/> :
                    role === Student ? <StudentRoute/> :
                        role === Admin ? <AdminRoute/> :
                            <Redirect to={'/'}/>
            }
            <ProfileRoute/>
        </Fragment>
    )
}

export default Route