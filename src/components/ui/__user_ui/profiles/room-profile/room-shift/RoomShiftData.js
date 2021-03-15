import ProfileStyle from "../../ProfileStyle";
import {Avatar} from "@material-ui/core";

const RoomShiftData = ({border, roomShift}) => {
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
                        `${roomShift.teacher.user.firstName} ${roomShift.teacher.user.lastName}`
                    }
                </p>
            </div>
        </div>
    )
}

export default RoomShiftData