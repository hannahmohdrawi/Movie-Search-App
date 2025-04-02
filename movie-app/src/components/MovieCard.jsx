

export default function MovieCard({movie}){

    function onFavouriteClick(){

    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src ={movie.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={onFavouriteClick}></button>
                </div>

            </div>
        </div>
    )
}