import { Component } from "react"; //creat component

export class CreateFormBinde extends Component {
    constructor (props){
        super (props);
        this.state= {
        newMovie:this.props.editedMovie,
    }};       
        
     //onSubmitHandler es una funció que crida a la funció addNewMovie  
    onSubmitHandler = (e) => {
        e.preventDefault ();
        this.props.updateMovie(this.state.newMovie);
            
        this.props.addNewMovie(this.state.newMovie);
       
     //   this.resetInputsForm (e) 
       
    };

resetInputsForm = (e) => {
    e.target.title.value ="";
    e.target.imgUrl.value ="";
    e.target.year.value ="";
};

onImputChange = (e) => {  //funció que te un event (e)
    const name= e.target.name;
    const value= e.target.value;
    this.setState({newMovie: {...this.state.newMovie, [name]: value}})
};



render () {
    return (
        <section>


            <form onSubmit={this.onSubmitHandler}>
                <div>

                    <input type="text" name="title" value={this.state.newMovie.title} 
                     onChange={this.onImputChange}  placeholder="title" />
                   
                    <input type="num" name="year" value={this.state.newMovie.year} 
                     onChange={this.onImputChange}  placeholder="year" />
                      
                    <input type="text" name="imgUrl" value={this.state.newMovie.imgUrl} 
                     onChange={this.onImputChange} placeholder="imgUrl" />

                </div>
                <button type="submit" className="btn btn-primary">
                    Add movie
                </button>
            </form>
           
        </section>
    );
};
}
 
  