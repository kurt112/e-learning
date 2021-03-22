import {Fragment} from "react";
import {Container} from "@material-ui/core";

import ProfileStyle from '../../ProfileStyle'
import Box from "@material-ui/core/Box";
import PeopleData from "./PeopleData";

const PeopleList = ({students, teacher}) => {
    const style = ProfileStyle()
    return (
        <Fragment>
            <Container>
                <h1>Teachers</h1>
                <hr className={style.classPeopleDivider}/>
                <Box className={style.peopleListContainer}>
                    {
                        teacher === null?  <h3>TBA</h3>:
                            <PeopleData border={{border: 'none', marginTop: 0}}
                                        name={`${teacher.user.firstName}  ${teacher.user.lastName}`}/>
                    }
                </Box>
                <h1>Students</h1>
                <hr className={style.classPeopleDivider}/>
                {
                    students.map((student, index) => {
                        let border ={border: 'none', marginTop: 0}
                        if(index !== 0) border = null
                        return <PeopleData key={student.student_id} name={`${student.user.firstName} ${student.user.lastName}`} border={border}/>
                    })
                }
                <br/>
            </Container>
        </Fragment>
    )
}

export default PeopleList;