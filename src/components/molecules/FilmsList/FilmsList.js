import './FilmsList.scss'

import {apiService} from "@/utils/apiService";
import getRefs from "@/utils/getRefs";

import FilmCards from "./FilmCards";

const FilmsList = async () => {

    await apiService
        .fetchTrending()
        .then(data => {
            getRefs().filmsList.innerHTML = FilmCards(data)
        })
        .catch(console.log)
}

export default FilmsList