const baseURL = 'https://rickandmortyapi.com/api'



const characters = '/character'
const episodes = '/episode'






const urls = {
    episode:{
        base:episodes

    },
    character:{
        byID:(ids)=>`${characters}/${ids}`
    }
}

export {
    baseURL,
    urls
}