/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import ProfileStyle from "../../ProfileStyle";
import {Avatar} from "@material-ui/core";
import {format24Hour} from "../../../../utils/dateFormat/TimeConverter";

const RoomShiftData = ({index,border, roomShift,translation}) => {
    const style = ProfileStyle()

    return (
        <div style={border} className={style.classDataContainer}>
            <div className={style.classDataContainerLeft}>
                <Avatar className={index % 2 === 0? style.blue: style.orange}>{roomShift.section.substring(0,1).toUpperCase()}</Avatar>
                <p>{`${roomShift.grade} ${roomShift.section} 
                ( ${roomShift.timeStart!==null?format24Hour(roomShift.timeStart):'TBA'} - ${roomShift.timeEnd!==null?format24Hour(roomShift.timeEnd):'TBA'})`}</p>
            </div>

            <div className={style.classDataContainerRight}>
                <p>
                    {
                        roomShift.teacher === null? translation.language['label.global.tba']:`${roomShift.teacher.user.firstName} ${roomShift.teacher.user.lastName}`
                    }
                </p>
            </div>
        </div>
    )
}

export default RoomShiftData