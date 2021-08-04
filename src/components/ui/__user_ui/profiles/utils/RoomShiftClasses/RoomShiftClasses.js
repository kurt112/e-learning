/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Fragment} from "react";
import {Container} from "@material-ui/core";

import ProfileStyle from '../../ProfileStyle'
import Box from "@material-ui/core/Box";
import ClassesData from "./ClassesData";

const RoomShiftClasses = ({classes,translation}) => {
    const style = ProfileStyle()
    return (
        <Fragment>
            <Container>
                <h1>{translation.language["label.global.class.schedule"]}</h1>
                <hr className={style.classPeopleDivider}/>
                <Box className={style.peopleListContainer}>
                    {
                        classes.length ===0?<p>No Class Available</p>:
                        classes.map((lecture, index) => {
                            let border ={border: 'none', marginTop: 0}
                            if(index !== 0) border = null
                            return <ClassesData index={index} translation={translation} key={lecture.id} classes={lecture} border={border}/>
                        })
                    }
                </Box>
            </Container>
        </Fragment>
    )
}

export default RoomShiftClasses;