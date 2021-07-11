/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Avatar} from "@material-ui/core";
import ProfileStyle from '../../ProfileStyle'

const ClassesData = ({border, classes,translation}) => {
    const style = ProfileStyle()

    return (
        <div style={border} className={style.classDataContainer}>
            <div className={style.classDataContainerLeft}>
                <Avatar>{classes.subject.subjectName.substring(0,1).toUpperCase()}</Avatar>
                <p>{`${classes.subject.subjectName} (${classes.startTime} -  ${classes.endTime}) ${classes.day}`}</p>
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
