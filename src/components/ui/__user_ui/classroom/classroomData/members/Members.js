import {Avatar, Badge, Grid, withStyles} from "@material-ui/core";
import {Fragment} from 'react'
import Picture from '../../../../../../assets/img_2.png'
import makeStyles from "@material-ui/core/styles/makeStyles";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 05/08/2021, Thursday
 **/

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            content: '""',
        },
        top: 30,
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);


const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'default',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        fontSize: 18,
        alignItems:'center',
        flex:1,
    },

    avatar: {
        boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        borderRadius: '50%',
    }
}));

const Members = () => {
    const classes = useStyles()
    return <Fragment>
        <Grid container>
            <div className={classes.root}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar className={classes.avatar} alt="Remy Sharp" src={Picture}/>
                </StyledBadge>

                <span>Kurt Lupin Orioque</span>
            </div>
        </Grid>
        <Grid container>
            <div className={classes.root}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar className={classes.avatar} alt="Remy Sharp" src={Picture}/>
                </StyledBadge>

                <span>Kurt Lupin Orioque</span>
            </div>
        </Grid>
        <Grid container>
            <div className={classes.root}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar className={classes.avatar} alt="Remy Sharp" src={Picture}/>
                </StyledBadge>

                <span>Kurt Lupin Orioque</span>
            </div>
        </Grid>
        <Grid container>
            <div className={classes.root}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar className={classes.avatar} alt="Remy Sharp" src={Picture}/>
                </StyledBadge>

                <span>Kurt Lupin Orioque</span>
            </div>
        </Grid>
        <Grid container>
            <div className={classes.root}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar className={classes.avatar} alt="Remy Sharp" src={Picture}/>
                </StyledBadge>

                <span>Kurt Lupin Orioque  asdfasdfkas dbfjasdf kjasdfjk hasdjkl</span>
            </div>
        </Grid>
    </Fragment>
}

export default Members