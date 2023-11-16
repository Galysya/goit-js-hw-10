import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_lmVRRMG9vyyHEmZy09qKDpovetnQd7BU7ngEIYpav3Rvd55cAycDl7jIpn4XGW6t";


export function fetchBreeds() {
    const BASE_URL = `https://api.thecatapi.com`;
    const END_POINT = `/v1/breeds/`;
    const url = `${BASE_URL}${END_POINT}`;

    return axios.get(url)
    .then(response => response.data)
    .catch(error => {console.log(error);})
}


export function fetchCatByBreed(breedId) {
    const BASE_URL = `https://api.thecatapi.com`;
    const END_POINT = `/v1/images/search/`;
    const PARAMS = `?breed_ids=${breedId}`;
    const url = `${BASE_URL}${END_POINT}${PARAMS}`;

    return axios.get(url)
    .then(response => response.data)
    .catch(error => {console.log(error);})
}



