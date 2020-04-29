import fetch from "isomorphic-fetch";

export function fetchCircuits( ) {
    return fetch( "https://jsonplaceholder.typicode.com/posts" )
        .then( res => res.json( ) )
        
}
