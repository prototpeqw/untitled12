import {useEffect, useState} from "react";
import {episodeService} from "../../service/episodeService";
import {useSearchParams} from "react-router-dom";
import {Episode} from "./Episode";
import css from './Episodes.module.css'

const Episodes = () => {
    const [episode, setEpisode] = useState({prev:null, next:null, results:[]})
    const {query, setQuery} = useSearchParams({page: '1'})
    const page = query.get(`page`)





    useEffect(() => {
        if (!query) return;
        episodeService.getALl(page).then(({data})=>setEpisode(()=>{
            const {info: {next,prev},results} = data
            return {
                prev,
                next,
                results
            }
        }))
    }, [page]);


    const prevPage = () =>{
        setQuery(prev=>{
            prev.set(`page`,(+prev.get('page' ) -1).toString())
            return prev
        })
    }

    const nextPage = () =>{
        setQuery(prev=>{
            prev.set(`page`,(+prev.get('page' )+1).toString())

            return prev
        })
    }


    return (
        <div>
            <div className={css.Episodes}>            {episode.results.map(episod=><Episode key={episod.id} episod={episod}/>)}</div>

            <div className={css.button}>
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
            </div>

        </div>
    );
};

export  {Episodes};