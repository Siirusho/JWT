import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from '../Components/HomePage/HomePage';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setItemsAction } from "../store/List/action";
import { FC } from 'react';
import { AppDispatch } from '../store/List/utils'

const Router: FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(setItemsAction());
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;