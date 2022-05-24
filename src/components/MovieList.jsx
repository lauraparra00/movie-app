import { Component } from "react"; //creat component
import "../App.css" // importat
import { movieServices } from "../services/movieServices";
import { createUuid } from "../utils/createUuid";
import { CreateFormBinde } from "./CreateFormBinde";
import { MovieCard } from "./MovieCard";


export class MovieList extends Component { //exporta el component
    constructor () {
        super(); 
        this.state= {
            editedMovie: {title:"",id:"",imgUrl:"",year:""},
            movies: [],
        }
    }

    //preparat x treure array movies,funcionament movies.json
   componentDidMount () {
      movieServices.getAllMovies().then((res)=> {
        this.setState ({movies:res});
       
       });
   }

  //addNewMovie és una funció per afegir una pelicula
    addNewMovie = (data) => {
       data.id= createUuid (); //per crear un identificador aleatori
        console.log(data);
        this.setState({movies: [...this.state.movies,data] }); //this.setState estableixes un nou estat de la llista pelicules, sense modificar llista afegim Data que es un nou parametre x agegir nova pelicula
    };

    deleteMovie = (id) => {
        let deleteConfirmed = window.confirm("Really delete")
        if (!deleteConfirmed) return
        let filterMovies = this.state.movies.filter((movie) => movie.id !== id);
        this.setState({movies: filterMovies});
    }
    // creem editedMovie, que busqui l'identif pelic que volem editar, li donem el id
    editMovie = (id) => {
        let editedMovie = this.state.movies.find (movie =>movie.id==id); 
        this.setState ({editedMovie});
    }
    // per actualitzar les pelis
    updateMovie = (newMovie) => {
        let newMovieState = this.state.movies;
        let movieToEditIndex = newMovieState.findIndex (movie =>movie.id==newMovie.id);
        newMovieState[movieToEditIndex]=newMovie
        this.setState({movies:newMovieState})
    }



    render () {    //renderitza el component 
        return (

           <section>
              <CreateFormBinde addNewMovie= {this.addNewMovie} editMovie={this.editMovie} updateMovie={this.updateMovie} editedMovie={this.state.editedMovie}/>
                <section className="movielist">

                    {this.state.movies.map((movie, key) => (
                       <MovieCard key={key} movie={movie} deleteMovie= {this.deleteMovie}/> 
                    ))}
                </section>
            </section>   
    
        
        
    );
}
}