import { Container, makeStyles, Typography, Theme, createStyles } from "@material-ui/core";
import {
    Home,
    Person,
    PhotoCamera,
    PlayCircleOutline,
    List,
    Devices,
    Collections,
    Settings,
    ExitToApp
} from "@material-ui/icons";
import { FC } from 'react';

const useStyles = makeStyles<Theme>(theme =>
    createStyles({
        item: {
            display: "flex",
            alignItems: "center",
            marginBottom: theme.spacing(4),
            [theme.breakpoints.up("sm")]: {
                marginBottom: theme.spacing(3),
                cursor: "pointer",
            }
        },
        icon: {
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
                fontSize: "18px",
            }
        },
        text: {
            [theme.breakpoints.down("sm")]: {
                display: "none"
            }
        },
        container: {
            height: "100vh",
            paddingTop: theme.spacing(10),
            backgroundColor: theme.palette.primary.main,
            color: "white",
            position: "sticky",
            top: 0, left: 0,
            [theme.breakpoints.up("sm")]: {
                backgroundColor: "white",
                color: "#555",
            }
        }
    })
);


const LeftBar: FC = () => {
    const classes = useStyles();
    const navBar = [
        { id: 1, component: <Home className={classes.icon} />, label: 'HomePage' },
        { id: 2, component: <Person className={classes.icon} />, label: "Friends" },
        { id: 3, component: <List className={classes.icon} />, label: "List" },
        { id: 4, component: <PlayCircleOutline className={classes.icon} />, label: "Music" },
        { id: 5, component: <PhotoCamera className={classes.icon} />, label: "Videos" },
        { id: 6, component: <Devices className={classes.icon} />, label: "Apps" },
        { id: 7, component: <Collections className={classes.icon} />, label: "Collections" },
        { id: 8, component: <Settings className={classes.icon} />, label: "Settings" },
        { id: 9, component: <ExitToApp className={classes.icon} />, label: "Log Out" },
    ]
    return (
        <Container className={classes.container}>
            {
                navBar.map((item) => {
                    return (
                        <div className={classes.item} key={item.id}>
                            {item.component}
                            <Typography className={classes.text}>{item.label}</Typography>
                        </div>
                    )
                })
            }
        </Container>
    );
}

export default LeftBar;