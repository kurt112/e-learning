import {Avatar} from "@material-ui/core";
import ProfileStyle from '../../ProfileStyle'

const ClassesData = ({border, classes}) => {
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
                        `${classes.teacher.user.firstName} ${classes.teacher.user.lastName}`
                    }
                </p>
            </div>
        </div>
    )
}

export default ClassesData
