
const Episod = ({episode}) => {
    const {id, name, episode:character} = episode
    return (
        <div>

            <div>id={id}</div>
            <div>name={name}</div>
            <div>episode={episode}</div>


        </div>
    );
};

export  {Episod};