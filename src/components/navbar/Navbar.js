import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import {Badge, CssBaseline, FormControlLabel, Switch, withStyles} from '@material-ui/core';
import { mode } from '../ui/utils/darkMode/DarkMode'
import { useEffect, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import style from '../mainUI/MainUiStyle'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}

        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            // color: 'black',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.black,
            },
        },
        '& .MuiListItemIcon-root, & .MuiListItemText-primary':{
            color: theme.palette.common.black
        }
    },
}))(MenuItem);

export default function Navbar({  handleDrawerOpen }) {
    const [enable, setEnable] = useState(false)
    const classes = style()

    const EnableDarkMode = (event) => {

        setEnable(event.target.checked)

        mode(enable)

    }
    useEffect(() => {
        // mode(false)
    }, [])

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            elevation={0}
            position="fixed"
            className={classes.appBar}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap className={classes.title}>
                    Gardner College
                </Typography>


                <Typography variant="h6" noWrap style={{marginRight: '10px'}}>
                    Kurt Lupin Orioque
                </Typography>
                <Badge color="secondary" badgeContent={1} className={classes.badge} >
                    <NotificationsIcon style={{fontSize:25}}  color="primary"  variant="contained" />
                </Badge>

                <div >
                    <ArrowDropDownIcon
                        className={classes.dropDownLight}
                        color={'primary'}
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        onClick={handleClick}
                    />

                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}

                    >

                        <StyledMenuItem>
                            <ListItemIcon>
                                <DraftsIcon   fontSize="small" />
                            </ListItemIcon>
                            <ListItemText  primary="Drafts" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <InboxIcon   fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Your Profile" />
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <ListItemIcon>
                                <FormControlLabel
                                    className={classes.colorBlack}
                                    control={
                                        <Switch
                                            checked={enable}
                                            onChange={EnableDarkMode}
                                            name="checkedB"
                                        />
                                    }
                                    label="Night Mode"
                                />
                            </ListItemIcon>

                        </StyledMenuItem>

                        <StyledMenuItem >
                            <ListItemIcon>
                                <ExitToAppIcon  fontSize="small" />
                            </ListItemIcon>
                            <ListItemText  primary="Logout" />
                        </StyledMenuItem>

                    </StyledMenu>
                </div>
            </Toolbar>
        </AppBar>
    )
}