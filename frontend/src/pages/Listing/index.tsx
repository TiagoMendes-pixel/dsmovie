import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Navbar/Pagination";
import { useState, useEffect} from "react";
import { MoviePage } from "types/movie";
import { setSourceMapRange } from "typescript";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
    .then(response => {
        const data = response.data as MoviePage;
        console.log(data);
        setPage(data);
    });

}, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
        
    }

    return (
        <>
            <Pagination />

            <div className="container">

                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>




                </div>

            </div>

        </>
    )
}

export default Listing;

function setPage(data: MoviePage) {
    throw new Error("Function not implemented.");
}
