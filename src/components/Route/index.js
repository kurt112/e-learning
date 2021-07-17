/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Fragment, lazy} from "react"
import {Teacher, Student,Admin} from "../../store/utils/Specify";


const TeacherRoute = lazy(() => import(`./TeacherRoute`))
const StudentRoute = lazy(() => import(`./StudentRoute`))
const AdminRoute = lazy(() => import(`./AdminRoute`))


const Route = ({role,email,translation}) => {
    return (
        <Fragment>
            {
                role === Teacher ? <TeacherRoute translation={translation} email={email}/> :
                    role === Student ? <StudentRoute translation={translation} email={email}/> :
                        role === Admin ? <AdminRoute translation={translation} email={email}/> :null
            }
        </Fragment>
    )
}

export default Route