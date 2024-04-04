import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLoyaut} from "./loyaut/MainLoyaut";
import {EpisodesPAges} from "./pages/EpisodesPAges";
import {CharacterPages} from "./pages/CharacterPages";

const router = createBrowserRouter([
    {
        path:'',element:<MainLoyaut/>, children:[
            {
                index:true, element: <Navigate to={'episodes'}/>

            },
            {
                path:'episodes',element:<EpisodesPAges/>
            },
            {
                path:'character/:ids',element:<CharacterPages/>
            }

        ]
    }
])


export {
    router
}