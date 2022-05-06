import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography, Theme, createStyles } from "@material-ui/core";
import { Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { FC } from 'react';

const useStyles = makeStyles<Theme>(theme =>
    createStyles({
        searchButton: {
            display: 'none',
            [theme.breakpoints.down("sm")]: {
                display: 'inline-block',
                marginRight: theme.spacing(4),
            }
        },
        logoLg: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            }
        },
        logoSm: {
            display: "block",
            [theme.breakpoints.up("sm")]: {
                display: "none"
            }
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
        },
        search: {
            display: "flex",
            alignItems: "center",
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            borderRadius: theme.shape.borderRadius,
            transition: "0.6s ease",
            [theme.breakpoints.down("sm")]: {
                display: "none",
            }
        },
        searchIcon: {
            marginLeft: theme.spacing(1)
        },
        active: {
            width: "50%",
        },
        disable: {
            width: "25%",
        },
        input: {
            color: "white",
            marginLeft: theme.spacing(2)
        },
        badgeContainer: {
            display: "flex",
            alignItems: "center",
        },
        badge: {
            marginRight: theme.spacing(2),
        },
        navBar: {
            position: "fixed",
            top: 0,
            width: "100%",
        }
    }));

const NavBar: FC = () => {
    const classes = useStyles();
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <AppBar className={classes.navBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.logoLg} style={{ cursor: "pointer" }}>
                        Home Page
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        Home
                    </Typography>
                    <div onClick={() => setToggle(!toggle)} className={toggle ? `${classes.active} ${classes.search}` : `${classes.disable} ${classes.search}`}>
                        <Search className={classes.searchIcon} />
                        <InputBase
                            placeholder="Search..."
                            className={classes.input}
                        />
                    </div>
                    <div className={classes.badgeContainer}>
                        <Search className={classes.searchButton} />
                        <Badge badgeContent={4} overlap={"rectangular"} color="secondary" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge badgeContent={2} overlap={"rectangular"} color="secondary" className={classes.badge}>
                            <Notifications />
                        </Badge>
                        <Avatar alt="Page Logo" src="" />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;
