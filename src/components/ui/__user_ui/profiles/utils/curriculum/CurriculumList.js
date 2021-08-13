import {Fragment} from "react";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CurriculumData from "./CurriculumData";
import ProfileStyle from "../../ProfileStyle";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 14/08/2021, Saturday
 **/

const CurriculumList = ({curriculums,translation}) => {
    const style = ProfileStyle()
    return  <Fragment>
        <Container>
            <h1>{translation.language["label.global.subject"]}</h1>
            <hr className={style.classPeopleDivider}/>
            <Box className={style.peopleListContainer}>
                {
                    curriculums.length === 0?<p>No Subjects Available </p>:
                        curriculums.map((curriculum, index) => {
                            let border ={border: 'none', marginTop: 0}
                            if(index !== 0) border = null
                            return <CurriculumData index={index} translation={translation} key={curriculum.code} curriculum={curriculum} border={border}/>
                        })
                }
            </Box>
        </Container>
    </Fragment>
}

export default CurriculumList