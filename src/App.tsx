import { Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { Link } from "react-router-dom"
import { AboutAsync } from "./pages/About.async"
import { MainAsync } from "./pages/Main.async"
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutAsync />} />
                    <Route path={'/'} element={<MainAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}