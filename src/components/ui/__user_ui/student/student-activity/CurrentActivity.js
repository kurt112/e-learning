import {List} from "@material-ui/core";
import ActivityCard from "./ActivityCard";

const CurrentActivity = ({activities, activityStyle}) => {
    console.log(activities)
    return (
        <List>
            {
                activities.map((e, index) => <ActivityCard key={index} activityStyle={activityStyle}
                                                    activityName={e.activity.activityTitle}
                                                    deadLine={e.activity.date_end}
                                                    teacherName={`${e.roomShiftClass.teacher.user.firstName} ${e.roomShiftClass.teacher.user.lastName}`}
                                                    dateCreated={e.activity.date_created}
                                                    gradeSection={e.roomShiftClass.roomShift.grade + ' ' + e.roomShiftClass.roomShift.section}
                />)
            }
        </List>

    )
}

export default CurrentActivity