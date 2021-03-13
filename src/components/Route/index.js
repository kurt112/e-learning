import {Fragment} from "react";
import TeacherRoute from './TeacherRoute'
import StudentRoute from "./StudentRoute";
import ProfileRoute from "./ProfileRoute";
import AdminRoute from "./AdminRoute";
import {Redirect} from "react-router";
import {Teacher, Student,Admin} from "../../store/utils/Specify";


const Route = ({role,email}) => {
    return (
        <Fragment>
            {
                role === Teacher ? <TeacherRoute email={email}/> :
                    role === Student ? <StudentRoute email={email}/> :
                        role === Admin ? <AdminRoute email={email}/> :
                            <Redirect to={'/'}/>
            }
            <ProfileRoute/>
        </Fragment>
    )
}

export default Route