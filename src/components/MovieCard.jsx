import { Component } from "react";

export class MovieCard extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    edit = (movie)=> {
        this.props.toggleform();
        this.props.nextMovietoPreview(movie);
    }

    render () {
        let movie = this.props.movie;
        return (
            <div className="card">
                <div className="contenimag">
                    <img src={this.props.movie.imgUrl} 
                      className="card-img-top" alt="" />
                    </div>
                        <div className="card-body">
                            <div className="content">
                                <h5>{movie.title}</h5>
                                <h6>{movie.year}</h6>
                                <button>⭐</button>
                                <button onClick={() => this.props.deleteMovie(movie.id)} className="btn btn-danger">borrar</button>
                            </div>
                        </div>
            </div>
        )

    }
}