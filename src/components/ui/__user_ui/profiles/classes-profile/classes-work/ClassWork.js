import {Fragment} from "react";
import {Container} from "@material-ui/core";

import ProfileStyle from '../../ProfileStyle'
import Box from "@material-ui/core/Box";
import ClassWorkData from "./ClassWorkData";
import ClassPeopleData from "../classes-people/ClassPeopleData";
import {act} from "@testing-library/react";

const ClassWork = ({activities}) => {
    const style = ProfileStyle()
    console.log(activities)
    return (
        <Fragment>
            <Container>
                <h1>ClassWork</h1>
                <hr className={style.classPeopleDivider}/>
                <Box className={style.peopleListContainer}>
                    {
                        activities.map((activity, index) => {
                            let border ={border: 'none', marginTop: 0}
                            if(index !== 0) border = null
                            return <ClassWorkData key={activity.id} activity={activity} border={border}/>
                        })
                    }
                </Box>
            </Container>
        </Fragment>
    )
}

export default ClassWork;