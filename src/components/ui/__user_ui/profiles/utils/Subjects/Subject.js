import ProfileStyle from "../../ProfileStyle";
import {Fragment} from "react";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SubjectData from "./SubjectData";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 14/08/2021, Saturday
 **/

const Subject = ({subjects,translation}) => {
    const style = ProfileStyle()
    return (
        <Fragment>
            <Container>
                <h1>{translation.language["label.global.subject"]}</h1>
                <hr className={style.classPeopleDivider}/>
                <Box className={style.peopleListContainer}>
                    {
                        subjects.length === 0?<p>No Subjects Available </p>:
                            subjects.map((subject, index) => {
                                let border ={border: 'none', marginTop: 0}
                                if(index !== 0) border = null
                                return <SubjectData index={index} translation={translation} key={subject.id} subject={subject} border={border}/>
                            })
                    }
                </Box>
            </Container>
        </Fragment>
    )
}

export default Subject;