import css from './Episode.module.css'
const Episode = ({episod}) => {
    const {id,name, episode} = episod

    return (
        <div className={css.Episode}>
            <div>id={id}</div>
            <div>name={name}</div>
            <div>episode={episode}</div>
        </div>
    );
};

export  {Episode};