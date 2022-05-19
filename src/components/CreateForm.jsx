import { Component } from "react"; //creat component

export class CreateForm extends Component {
    onSubmitHandler = (e) => {
        e.preventDefault ();
        console.log (e.target.title.value)
        const newMovie = {
            title: e.target.title.value,
            imgUrl: e.target.imgUrl.value,
            year: e.target.year.value,
    };
    this.props.addNewMovie(newMovie);
     
};
render () {
    return (
        <form onSubmit={this.onSubmitHandler}>
        <div>
            
            <input id ="title" type="text"placeholder="Title"/>
            <input id= "year" type="num"placeholder="year"/>
            <input id="imgUrl"type="text"placeholder="imgUrl"/>
        </div>
        <button type="submit" className= "btn btn-primary">
            Add movie
        </button>
        </form>
    )
}
}  
  