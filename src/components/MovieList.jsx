import { Component } from "react"; //creat component
import "../App.css"; // importat
import { movieServices } from "../services/movieServices";
import { createUuid } from "../utils/createUuid";
import { CreateFormBinde } from "./CreateFormBinde";
import { MovieCardF } from "./MovieCardF";


export class MovieList extends Component {
  //exporta el component
  constructor() {
    super();
    this.state = {
      movies: [],
      formIsActive: false,
      movieToPreview: {},
      isEditMode: false,
    };
  }
  getAllMovies = () => {
    movieServices.getAllMovies().then((res) => {
      this.setState({ movies: res });
    });
  };
  //preparat x treure array movies,funcionament movies.json
  componentDidMount() {
    this.getAllMovies();
  }

  //addNewMovie és una funció per afegir una pelicula
//   addNewMovie = (data) => {
    // data.id = createUuid(); //per crear un identificador aleatori
    // console.log(data);
    // this.setState({ movies: [...this.state.movies, data] }); //this.setState estableixes un nou estat de la llista pelicules, sense modificar llista afegim Data que es un nou parametre x agegir nova pelicula
//   };

  deleteMovie = (id) => {
    let deleteConfirmed = window.confirm("Really delete");
    if (!deleteConfirmed) return;

    movieServices.deleteMovie(parseInt(id)).then((res) => {
      if (res) this.getAllMovies();
      alert("Movie deleted");
    });
  };

  // creem editedMovie, que busqui l'identif pelic que volem editar, li donem el id
  editMovie = (id) => {
    let editedMovie = this.state.movies.find((movie) => movie.id == id);
    this.setState({ editedMovie });
  };
  // per actualitzar les pelis
  postMovie = (newMovie) => {
    movieServices.postMovie(newMovie).then((res) => {
      if (res.title) this.getAllMovies();
      alert(`${res.name} added! Movie id: ${res.id}`);
      this.exitEditMode();
      this.setState({ formIsActive: false });
    });

    // let newMovieState = this.state.movies;
    // let movieToEditIndex = newMovieState.findIndex(
    //   (movie) => movie.id == newMovie.id
    // );
    // newMovieState[movieToEditIndex] = newMovie;
    // this.setState({ movies: newMovieState });
  };

  toggleForm = () => {
    this.setState({
      formIsActive: !this.state.formIsActive,
    });
  };

  exitEditMode = () => {
    this.setState({
      isEditMode: false,
      movieToPreview: {},
    });
  };

  nextMovieToPreview = (movie) => {
    this.setState({
      isEditMode: true,
      nextMovieToPreview: movie,
    });
  };

  render() {
      console.log(this.state)
    //renderitza el component
    return (
      <section>
        {!this.state.formIsActive ? (
          <button
            className="form-button"
            onClick={() => {
              this.toggleForm();
              this.exitEditMode();
            }}
          >
            Add
          </button>
        ) : null}
        {this.state.formIsActive ? (
          <CreateFormBinde
            postMovie={this.postMovie}
            toggleForm={this.toggleForm}
            formIsActive={this.state.formIsActive}
            isEditMode={this.state.isEditMode}
            movieToPreview={this.state.movieToPreview}
          />
        ) : null}

        <section className="movielist">
          {this.state.movies.map((movie, key) => (
            <MovieCardF

            key={key}
            movie={movie}
            deleteMovie={this.deleteMovie}
            toggleForm={this.toggleForm}
            nextMovieToPreview={this.nextMovieToPreview}
          />
          
              
          ))}
        </section>
      </section>
    );
  }
}
