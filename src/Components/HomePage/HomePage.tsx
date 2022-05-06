import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import LeftBar from "../LeftBar/LeftBar";
import UsersList from "../UsersList/UsersList";
import RightBar from "../RightBar/RightBar";
import { FC } from 'react';

const useStyles = makeStyles<Theme>(theme =>
    createStyles({
        right: {
            [theme.breakpoints.down("sm")]: {
                display: "none",
            }
        }
    }));

const HomePage: FC = () => {
    const classes = useStyles();
    return (
        <div className="App">
            <NavBar />
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <LeftBar />
                </Grid>
                <Grid item sm={7} xs={10}>
                    <UsersList />
                </Grid>
                <Grid item sm={3} className={classes.right}>
                    <RightBar />
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage;