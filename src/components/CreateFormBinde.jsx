import { Component } from "react"; //creat component

export class CreateFormBinde extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: this.props.isEditMode,
      movie: this.props.movieToPreview,
    };
  }

  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value.toLowerCase();

    this.setState({ movie: { ...this.state.movie, [name]: value } });
  };

  //onSubmitHandler es una funció que crida a la funció addNewMovie
  onSubmitHandler = (e) => {
    e.preventDefault();

    let submitter = e.nativeEvent.submitter.value;

    if (submitter === "add" && this.props.isEditMode === false) {
      this.addItem(this.state.movie);
      return;
    } else {
      this.updateItem(this.state.movie);
      return;
    }
  };

  sanitize = (obj) => {
    for (let key in obj) {
      if (obj[key] === "" || obj[key] === undefined || obj[key] === null)
        return;
      if (typeof obj[key] !== "string") return;
    }
  };

  addItem = (state) => {
    this.sanitize(state);
    this.props.postMovie(state);
    this.resetInputsForm();
  };

  updateMovie = (state) => {
    this.sanitize(state);
    console.log(state);
    this.resetInputsForm();
  };

  resetInputsForm = () => {
    this.setState({ movie: { id: "", title: "", year: "", imgUrl: "" } });
  };

  render() {
    console.log(this.state);
    let val = this.state.isEditMode === false ? "add" : "edit";

    return (
      <section>
        <form className="form" onSubmit={this.onSubmitHandler}>
          {this.state.isEditMode === false ? (
            <p className="closeButton" onClick={() => this.props.toggleForm()}>
              <i className="fa-solid fa-x"></i>
            </p>
          ) : null}

          <div
            className={`input-container ${
              this.state.movie && this.state.isEditMode === true
                ? "preview-active"
                : ""
            }`}
          >
            <input
              name="title"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.movie.name}
              placeholder="name"
            ></input>
            
            <input
              name="year"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.movie.year}
              placeholder="year"
            ></input>
            <input
              name="imgUrl"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.movie.imgUrl}
              placeholder="img url"
            ></input>
           
          </div>

          <div
            className={`button-container ${
              this.state.movieToPreview && this.state.isEditMode
                ? "preview-active"
                : ""
            }`}
          >
            <button type="submit" className="add-button" value={val}>
              {val.toLocaleUpperCase()}
            </button>
          </div>
        </form>
      </section>
    );
  }
}
