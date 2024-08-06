import { useState, useEffect } from "react";
import "../styles/song.css";
import Card from "./Card";
import useTheme from "../hooks/useTheme";

export default function Songs({ onSelectSong }) {
    const { theme } = useTheme();
    const [page, setPage] = useState(1);
    const [songs, setSongs] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [searchTitle, setSearchTitle] = useState({});
   
    const fetchSongs = async (page) => {
        setIsLoading(true);
        setIsError(false);
        let query = new URLSearchParams({
            page: page,
            page_size: 4,
            ...searchTitle,
        }).toString();
        try {
            const response = await fetch(
                `http://sandbox.academiadevelopers.com/harmonyhub/songs/?${query}`
            );
            if (!response.ok) {
                throw new Error("No se pudieron cargar las canciones");
            }
            const data = await response.json();
            setSongs(data.results || []);
            setHasNextPage(!!data.next);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSongs(page);
    }, [page, searchTitle]);

    const handleNextPage = () => {
        if (hasNextPage) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };
    function handleSearch(event) {
        event.preventDefault();
        const searchForm = new FormData(event.target);

        const newSearchTitle = {};

        searchForm.forEach((value, key) => {
            // key === "title"
            if (value) {
                newSearchTitle[key] = value;
            }
        });

        setSearchTitle(newSearchTitle);
        setSongs([]);
        setPage(1);
       
    }

    return (
        <div className={`box2 ${
            theme === 'pink'
            ? 'pinkBackground'
            : 'blueBackground'
        }`}>
            <div className={` ${
                theme === 'pink'
                ? 'pinkBackground'
                : 'blueBackground'
            }`}>
            <form className={`box ${
                theme === 'pink'
                ? 'pinkBackground'
                : 'blueBackground'
            }`} onSubmit={handleSearch}>
                    <div className="field ">
                        <label className="label">Buscar Por Título:</label>
                        <div className="control">
                            <input className="input cardinput has-background-grey-dark has-text-white" type="text" name="title" />
                        </div>
                    </div>
                    
                    <div className="field">
                        
                        <button className="button is-primary" type="submit">
                            Buscar
                        </button>
                    </div>
                </form>
                              <div className={`box ${
                                theme === 'pink'
                                ? 'pinkBackground'
                                : 'blueBackground'
                              }`}>
                              <div className="box2">
                <h2 className="title">Canciones</h2>
                <div className="columns">
                    {songs.map((song) => (
                        <div key={song.id} className=" box2 column is-one-quarter" onClick={() => onSelectSong(song.id)}>
                            <Card song={song} />
                        </div>
                    ))}
                </div>
                                
                              </div>
                            </div>
            
                {isLoading && <p>Cargando más canciones...</p>}
                <div className="buttons ">
                <button
                    className="button is-link "
                    onClick={handlePrevPage}
                    disabled={page === 1}
                >
                    Prev
                </button>
                <button
                    className="button is-link"
                    onClick={handleNextPage}
                    disabled={!hasNextPage}
                >
                    Next
                </button>
                </div>
            </div>
        </div>
    );
}

