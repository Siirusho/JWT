import { CircularProgress } from '@material-ui/core';
import { FC } from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles<Theme>(theme =>
    createStyles({
        loaderWrapper: {
            position: "absolute",
            transform: "translate(50%, 50%)",
        },
    }));

const Loading: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.loaderWrapper}>
            <CircularProgress thickness={2} size={400} disableShrink />
        </div>
    );
};

export default Loading;