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
import AttachFileIcon from '@material-ui/icons/AttachFile';

const ActivityCard = ({
                          activityStyle, activityName, teacherName, deadLine, dateCreated,
                          gradeSection
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

                <ListItemText  className={activityStyle.rightText}
                              secondary={
                                  <Fragment>
                                      <Typography
                                          component="span"
                                          variant="body2"
                                          className={activityStyle.inline}
                                          color="textPrimary"
                                      >
                                          <b>Posted:</b> {`${dateCreated}`}
                                          <br/>
                                          <b>Deadline:</b> {`${deadLine}`}
                                      </Typography>
                                  </Fragment>
                              }
                />

                <Tooltip title="Submit Work" aria-label="add">
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AttachFileIcon/>
                    </IconButton>
                </Tooltip>

            </ListItem>
            <Divider variant="inset" component="li"/>
        </Fragment>
    )
}

export default ActivityCard