/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Avatar} from "@material-ui/core";
import ProfileStyle from '../../ProfileStyle'
import {format24Hour} from "../../../../utils/dateFormat/TimeConverter";

const ClassesData = ({border, classes,translation}) => {
    const style = ProfileStyle()

    return (
        <div style={border} className={style.classDataContainer}>
            <div className={style.classDataContainerLeft}>
                <Avatar>{classes.subject.subjectName.substring(0,1).toUpperCase()}</Avatar>
                <p>{`${classes.subject.subjectName} (${classes.startTime !== null?format24Hour(classes.startTime): 'TBA'} - ${classes.endTime !== null? format24Hour(classes.endTime): 'TBA'}) ${classes.day !==null?classes.day: 'TBA'}`}</p>
            </div>

            <div className={style.classDataContainerRight}>
                <p>
                    {
                        classes.teacher === null?translation.language['label.global.tba']:`${classes.teacher.user.firstName} ${classes.teacher.user.lastName}`
                    }
                </p>
            </div>
        </div>
    )
}

export default ClassesData
