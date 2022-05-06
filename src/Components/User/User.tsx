import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
    Theme,
    createStyles
} from "@material-ui/core";
import UserInfo from "../UserInfo/UserInfo";
import { useState } from "react";
import { FC } from 'react';

const useStyles = makeStyles<Theme>(theme =>
    createStyles({
        media: {
            height: "250px",
            [theme.breakpoints.down("sm")]: {
                height: "150px",
            }
        },
        card: {
            marginTop: theme.spacing(5),
            width: "300px",
        }
    }));

interface UserProps {
    userId: string;
}

const User: FC<UserProps> = ({ userId }) => {
    const [openModal, setOpenModal] = useState(false);
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png"
                        title="My User"
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            User uuid : {userId}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => {
                        setOpenModal(!openModal);
                    }} size={"small"} color={"primary"}>More Info</Button>

                </CardActions>
            </Card>
            {
                openModal ?
                    <UserInfo open={openModal} setOpen={setOpenModal} userId={userId} />
                    :
                    null
            }
        </>
    )
};

export default User;