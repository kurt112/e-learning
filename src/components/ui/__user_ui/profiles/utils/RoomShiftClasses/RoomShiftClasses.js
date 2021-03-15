import {Fragment} from "react";
import {Container} from "@material-ui/core";

import ProfileStyle from '../../ProfileStyle'
import Box from "@material-ui/core/Box";
import ClassesData from "./ClassesData";

const RoomShiftClasses = ({classes}) => {
    const style = ProfileStyle()
    return (
        <Fragment>
            <Container>
                <h1>Classes Schedule</h1>
                <hr className={style.classPeopleDivider}/>
                <Box className={style.peopleListContainer}>
                    {
                        classes.map((lecture, index) => {
                            let border ={border: 'none', marginTop: 0}
                            if(index !== 0) border = null
                            return <ClassesData key={lecture.id} classes={lecture} border={border}/>
                        })
                    }
                </Box>
            </Container>
        </Fragment>
    )
}

export default RoomShiftClasses;