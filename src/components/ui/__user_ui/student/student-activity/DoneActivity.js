import {List} from "@material-ui/core";
import ActivityCardDone from "./ActivityCardDone";

const DoneActivity = ({activities, activityStyle}) => {
    console.log(activities)
    return (
        <List>
            {
                activities.map((e) => <ActivityCardDone activityStyle={activityStyle}
                                                        activityName={e.activity.activityTitle}
                                                        teacherName={`${e.roomShiftClass.teacher.user.firstName} ${e.roomShiftClass.teacher.user.lastName}`}
                                                        grade={e.grade}
                                                        status={e.status}
                                                        gradeSection={e.roomShiftClass.roomShift.grade + ' ' + e.roomShiftClass.roomShift.section}
                />)
            }
        </List>

    )
}

export default DoneActivity