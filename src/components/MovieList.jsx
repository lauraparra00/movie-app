import { Component } from "react"; //creat component
import "../App.css" // importat
import { CreateForm } from "./CreateForm";
import { MovieCard } from "./MovieCard";
export class MovieList extends Component { //exporta el component
    constructor () {
        super(); 
        this.state= {
            movies: [
                {
                id: 1,
                title:"Blade Runner",
                year: "1982",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVbgdxeae3efp2h5CTrTWaFRuNZs7Kli81A&usqp=CAU"

                },
                
                {
                    id: 2,
                    title:"Spider-man 3",
                    year:2012,
                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiP99HFaqFbmmURmPsvz2VF-hJz-KQCJP0A&usqp=CAU"
                },
                {
                    id: 3,
                    title:"Coco",
                    year:2017,
                    imgUrl:"http://www.elespectadorimaginario.com/wp-content/webpc-passthru.php?src=http://www.elespectadorimaginario.com/wp-content/uploads/poster-pelicula-coco.jpg&nocache=1"
                },
                {
                    id: 4,
                    title:"Fight Club",
                    year:1999,
                    imgUrl:"https://w0.peakpx.com/wallpaper/808/708/HD-wallpaper-fight-club-art-brad-pitt-graffiti-movie-wall.jpg"
                },
                {
                    id: 5,
                    title:"Constantine",
                    year:2005,
                    imgUrl:"https://sextabutaca.com/wp-content/uploads/2020/01/Curiosidades-de-Constantine.jpg"
                },
            ],
        }
    }
    addNewMovie = (data) => {
        console.log(data);
    };
    deleteMovie = (id) => {
        let deleteConfirmed = window.confirm("Really delete")
        if (!deleteConfirmed) return
        let filterMovies = this.state.movies.filter((movie) => movie.id != id);
        this.setState({movies: filterMovies});
    }
    
    render () {    //renderitza el component 
        return (

           <section>
              <CreateForm addNewMovie={this.addNewMovie}/> 

                    {this.state.movies.map((movie, key) => (
                       <MovieCard key={key} movie={movie} deleteMovie= {this.deleteMovie}/> 
                    ))}
                </section>   
    
        
        
    );
}
}