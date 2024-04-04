import {useEffect, useState} from "react";
import {episodeService, EpisodeService} from "../service/episodeService";
import {Episod} from "./episod";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const [episodesRes, setEpisodes] = useState({prev:null, next:null, results:[]})
    const [query, setQuery] = useSearchParams({page:'1'})
    const page = query.get('page')
    useEffect(() => {
        episodeService.getAll(page).then(({data})=>setEpisodes(()=>{
            const {info:{next, prev, results}} = data
            return{
                next,
                prev,
                results
            }
        }))
    }, [page]);
    return (


        <div>
            {episodesRes.results.map(episode => <Episod key={episode} episode={episode}/>)}
            <button>prev</button>
            <button>next</button>
        </div>
    );
};

export  {Episodes};