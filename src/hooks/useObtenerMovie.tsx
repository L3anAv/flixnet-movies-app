import { QueriesObserver, useQuery } from '@tanstack/react-query';

const useObtenerMovie = (Route: string) => {

    const query = useQuery(['movies'], async () => {
        const response = await fetch(Route)
        const res = await response.json()
        return res.results
    })

    return query
    
}

export default useObtenerMovie;