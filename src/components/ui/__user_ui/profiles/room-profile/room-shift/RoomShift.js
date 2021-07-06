import {Fragment} from "react";
import {Container} from "@material-ui/core";

import ProfileStyle from '../../ProfileStyle'
import Box from "@material-ui/core/Box";

import RoomShiftData from "./RoomShiftData";

const RoomShift = ({roomShifts,translation}) => {
    const style = ProfileStyle()
    return (
        <Fragment>
            <Container>
                <h1>{translation.language["label.global.room.shift"]}</h1>
                <hr className={style.classPeopleDivider}/>
                <Box className={style.peopleListContainer}>
                    {
                        roomShifts.map((roomShift, index) => {
                            let border ={border: 'none', marginTop: 0}
                            if(index !== 0) border = null
                            return <RoomShiftData translation={translation} key={roomShift.id} roomShift={roomShift} border={border}/>
                        })
                    }
                </Box>
            </Container>
        </Fragment>
    )
}

export default RoomShift;