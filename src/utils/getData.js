const BASE_URL ="https://pixabay.com/api/?"
const KEY = "21769290-e5df4cf4bec88d52ade7ba6e7"

export function getData(searchWord, pageNumber) {
    console.log(`${BASE_URL}q=${searchWord}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return fetch(`${BASE_URL}q=${searchWord}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(resp => resp.json())
}
