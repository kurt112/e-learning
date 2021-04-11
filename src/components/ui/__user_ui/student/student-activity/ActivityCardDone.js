import {
    Avatar,
    Divider,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Tooltip,
    Typography
} from "@material-ui/core";
import {Fragment} from "react";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const ActivityCardDone = ({
                              activityStyle, activityName, teacherName,
                              gradeSection,
                              grade,
                              status
                          }) => {
    return (
        <Fragment>
            <ListItem alignItems="center">
                <ListItemAvatar>
                    <Avatar>H</Avatar>
                </ListItemAvatar>
                <ListItemText className={activityStyle.leftText}
                              primary={`${activityName}`}
                              secondary={
                                  <Fragment>
                                      <Typography
                                          component="span"
                                          variant="body2"
                                          className={activityStyle.inline}
                                          color="textPrimary">
                                          {gradeSection}
                                      </Typography>
                                      {` - ${teacherName}`}
                                  </Fragment>
                              }>
                </ListItemText>

                <ListItemText className={activityStyle.rightText}
                              style={status === 'Late'? {paddingRight: 20}: null}
                              secondary={
                                  <Fragment>
                                      <Typography
                                          component="span"
                                          variant="body2"
                                          className={activityStyle.inline}
                                          color="textPrimary"
                                      >
                                          <b>Status:</b> {status}
                                          <br/>
                                          <b>Grade:</b> {grade}
                                      </Typography>

                                  </Fragment>
                              }
                />

                <Tooltip title="Re-Submit File" aria-label="add">
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AttachFileIcon/>
                    </IconButton>
                </Tooltip>

            </ListItem>
            <Divider variant="inset" component="li"/>
        </Fragment>
    )
}

export default ActivityCardDone