import {
    Button,
    Container,
    Fab,
    makeStyles,
    Modal,
    Tooltip,
    Card,
    CardContent,
    InputLabel,
    Typography,
    Theme,
    createStyles
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/User/action";
import { FC } from 'react';
import { AppDispatch } from "../../store/User/utils";

const useStyles = makeStyles<Theme>(theme =>
    createStyles({
        fab: {
            position: "fixed",
            bottom: 20,
            right: 20,
        },
        container: {
            width: "500px",
            height: "400px",
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            backgroundColor: theme.palette.background.paper,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
            [theme.breakpoints.down("sm")]: {
                width: "100vw",
                height: "600vh",
            }
        },
        form: {
            padding: theme.spacing(2),
            display: "flex",
            flexDirection: "column",
            width: '100%',
            gap: "20px",
        },
        item: {
            display: "flex",
            justifyContent: "center",
        },
        cardContent: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
        }
    })
)


interface UserInfoProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    userId: string;
}

const UserInfo: FC<UserInfoProps> = ({ open, setOpen, userId }) => {
    const currentUser  = useSelector((state: any) => {
        if(state.userReducer){
            return state.userReducer.currentUser;
        }
    });
    const dispatch = useDispatch<AppDispatch>()

    interface userInfo {
        firstName?: string,
        lastName?: string,
        age?: number,
        country?: string,
        gender?: string
    }
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState<userInfo>();

    useEffect(() => {
        dispatch(getCurrentUser(userId));
    }, []);

    useEffect(() => {
        setUserInfo(currentUser);
    }, [currentUser]);

    const userData = [
        { id: 1, label: 'FirstName', value: userInfo?.firstName },
        { id: 2, label: 'Lastname', value: userInfo?.lastName },
        { id: 3, label: 'Age', value: userInfo?.age },
        { id: 4, label: 'Country', value: userInfo?.country },
        { id: 5, label: 'Gender', value: userInfo?.gender }
    ];

    return (
        <>
            <Tooltip title={"Add"} aria-label={"add"} onClick={() => setOpen(!open)}>
                <Fab color={"primary"} className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open} onClose={() => setOpen(!open)}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete={"off"}>
                        <Card
                        // sx={{ maxWidth: 345 }}
                        >
                            <CardContent className={classes.cardContent}>
                                {
                                    userData.map((data) => {
                                        return (
                                            <div key={data.id}>
                                                <Typography>{data.label}</Typography>
                                                <InputLabel >{data?.value}</InputLabel>
                                            </div>
                                        )
                                    })
                                }
                            </CardContent>
                        </Card>
                        <div className={classes.item}>
                            <Button variant={"outlined"} color={"secondary"} onClick={() => setOpen(!open)}>
                                Back
                            </Button>
                        </div>
                    </form>
                </Container>
            </Modal>
        </>
    )
};

export default UserInfo;