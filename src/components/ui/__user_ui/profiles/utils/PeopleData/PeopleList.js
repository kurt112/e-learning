/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Fragment} from "react";
import {Container} from "@material-ui/core";

import ProfileStyle from '../../ProfileStyle'
import Box from "@material-ui/core/Box";
import PeopleData from "./PeopleData";

const PeopleList = ({students, teacher, translation}) => {
    const style = ProfileStyle()
    console.log(teacher)
    return (
        <Fragment>
            <Container>
                <h1>{translation.language["label.global.teacher"]}</h1>
                <hr className={style.classPeopleDivider}/>
                <Box className={style.peopleListContainer}>
                    {
                        teacher === null ? <h3>TBA</h3> :
                            <PeopleData border={{border: 'none', marginTop: 0}}
                                        picture={teacher.user.picture}
                                        name={`${teacher.user.firstName}  
                                        ${teacher.user.lastName}`}/>
                    }
                </Box>
                <h1>{translation.language["label.global.student"]}</h1>
                <hr className={style.classPeopleDivider}/>
                {
                    students.map((student, index) => {
                        let border = {border: 'none', marginTop: 0}
                        if (index !== 0) border = null
                        return <PeopleData key={student.student_id}
                                           picture={student.user.picture}
                                           name={`${student.user.firstName} ${student.user.lastName}`}
                                           border={border}
                        />
                    })
                }
                <br/>
            </Container>
        </Fragment>
    )
}

export default PeopleList;