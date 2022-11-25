import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import { useTheme } from './provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';


const App = () => {
const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selectable: true}, [theme, 'sdds', 'sd'])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/about'}>о сайте</Link>
            <Link to={'/'}>Главная страница</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;