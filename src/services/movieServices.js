import axios from "axios";
const url = "https://6286ac987864d2883e7842af.mockapi.io";

export const movieServices = {
  getAllMovies() {
    const movies = axios.get(url + "/movies").then((res) => {
      return res.data;
    });
    return movies;
  },
// deleteMovie(id) {
//    const deleteMovie = axios.delete(url + "/movies/" + id).then((res) => {
//      return res.data;
//    });
//   return deleteMovie;
 // },

deleteMovie(id) {
  return axios.delete (url + "/movies/" +id).then((res) =>res);
   
  },


  postMovie(data) {
    const postMovie = axios.post(url + "/movies",data).then((res) => {
      return res.data;
    });
    return postMovie;
  },
};

