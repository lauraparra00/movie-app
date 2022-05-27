import { useState, useEffect } from "react";

export const MovieCardF = (props) => {
    const [movie, setMovie] = useState(props.movie)

    useEffect(() => {
        setMovie(props.movie)
    }, [props.movie])


    console.log(movie)
    const deleteMovie = (id) => {
        props.deleteMovie(id);
    }
    const editMovie = (movieToEdit) => {
        props.toggleForm();
        props.nextMovieToPreview(movieToEdit);
    }
    

 
  return(<div className="card">
      <div className="contenimag">
        <img src={movie.imgUrl} className="card-img-top" alt="" />
      </div>
      <div className="card-body">
        <div className="content">
          <h5>{movie.title}</h5>
          <h6>{movie.year}</h6>
          <button>⭐</button>
          <button
            onClick={() =>deleteMovie(movie.id)}
            className="btn btn-danger"
          >
            delete
          </button>
          <button onClick={() => editMovie(movie)} className="btn btn-danger">
            edit
          </button>
        </div>
      </div>
    </div>);
};
