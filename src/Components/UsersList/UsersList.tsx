import { makeStyles, Container, Theme, createStyles } from "@material-ui/core";
import User from "../User/User";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { FC } from 'react';

const useStyles = makeStyles<Theme>(theme =>
    createStyles({
        container: {
            paddingTop: theme.spacing(10),
            flexWrap: "wrap",
            display: 'flex',
            justifyContent: "space-evenly",
        }
    }));

const UsersList: FC = () => {
    const classes = useStyles();
    const list = useSelector((state: any) => {
        if (state.listReducer) {
            return state.listReducer.list
        }
    });

    const [listOfUser, setListOfUsers] = useState([]);

    useEffect(() => {
        setListOfUsers(list);
    }, [list]);

    return (
        listOfUser ?
            (
                <Container className={classes.container}>
                    {listOfUser?.map((user: string, userIndex: number) => {
                        return (
                            <User key={userIndex} userId={user} />
                        )
                    })}
                </Container>
            )
            :
            (
                <Loading />
            )
    )
};

export default UsersList;