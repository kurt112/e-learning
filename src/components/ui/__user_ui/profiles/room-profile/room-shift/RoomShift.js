/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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
                        roomShifts.length === 0?<p>No RoomShift Available </p>:
                        roomShifts.map((roomShift, index) => {
                            let border ={border: 'none', marginTop: 0}
                            if(index !== 0) border = null
                            return <RoomShiftData index={index} translation={translation} key={roomShift.id} roomShift={roomShift} border={border}/>
                        })
                    }
                </Box>
            </Container>
        </Fragment>
    )
}

export default RoomShift;