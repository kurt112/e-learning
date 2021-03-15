import {Avatar} from "@material-ui/core";
import ProfileStyle from '../../ProfileStyle'

const ClassWorkData = ({border, activity}) =>{
    const style = ProfileStyle()
    return (
        <div style={border} className={style.classDataContainer}>
            <div className={style.classDataContainerLeft}>
                <Avatar>A</Avatar>
                <p>{activity.activityTitle}</p>
            </div>

            <div className={style.classDataContainerRight}>
                {
                    activity.date_end.length === 0?
                        <p>{`Posted ${activity.date_created}`}</p>
                        :
                        <p>
                            {`Due ${activity.date_end}`}
                        </p>
                }
            </div>
        </div>
    )
}

export default ClassWorkData
