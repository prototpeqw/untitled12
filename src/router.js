import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLoyaut} from "./Loyaut/MainLoyaut";
import {EpisodePages} from "./pages/episodePages";
import {CharactersPages} from "./pages/charactersPages";

const router = createBrowserRouter([
    {
        path:'',element:<MainLoyaut/>,children:[
            {
                index:true, element:<Navigate to={'episodes'}/>

            },
            {
                path:'episodes',element:<EpisodePages/>

            },
            {
                path:'characters',element:<CharactersPages/>
            }
        ]
    }
])







export {
    router
}