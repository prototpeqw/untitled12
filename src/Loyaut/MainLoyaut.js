import {Outlet} from "react-router-dom";
import {Headers} from "../Headers/Headers";

const MainLoyaut = () => {
    return (
        <div>
            <Headers/>
         MainLoyaut
            <Outlet/>
        </div>
    );
};

export  {MainLoyaut};