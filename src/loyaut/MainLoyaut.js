import {Outlet} from "react-router-dom";
import {Header} from "../constant/Header";

const MainLoyaut = () => {
    return (
        <div>
            <Header/>
         MainLoyaut
            <Outlet/>
        </div>
    );
};

export  {MainLoyaut};