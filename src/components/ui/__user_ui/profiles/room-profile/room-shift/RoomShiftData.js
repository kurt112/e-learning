/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import ProfileStyle from "../../ProfileStyle";
import {Avatar} from "@material-ui/core";

const RoomShiftData = ({border, roomShift,translation}) => {
    const style = ProfileStyle()

    return (
        <div style={border} className={style.classDataContainer}>
            <div className={style.classDataContainerLeft}>
                <Avatar>{roomShift.section.substring(0,1).toUpperCase()}</Avatar>
                <p>{`${roomShift.grade} ${roomShift.section} ( ${roomShift.timeStart} - ${roomShift.timeEnd} )`}</p>
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