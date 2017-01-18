import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import axios from 'axios';
import MovieList from './components/movielist';
import Input from './components/input';


class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      movies: [],
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteRequest = this.deleteRequest.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.getRequest = this.getRequest.bind(this);
  }
  componentDidMount() {
    this.getRequest();
  }
  enableEditMode() {
    this.setState({
      edit: true
    });
  }
  getRequest() {
    const url = 'https://mymovielist-af285.firebaseio.com/movies.json';
    axios.get(url)
      .then((response) => {
        console.log(response);

        const data = response.data;

        let movies = [];
        if (data) {
          movies = Object.keys(data).map((i) => {
            console.log(i);
            const movie = data[i];
            return {
              id: i,
              title: movie.title
            };
          });
        }
        this.setState({
          movies
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  postRequest() {
    const url = 'https://mymovielist-af285.firebaseio.com/movies.json';
    axios.post(url, {
        title: this.state.value
      })
      .then(() => {
        this.getRequest();
        this.setState({
          value: ''
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  patchRequest(id, moviesState) {
    console.log(id);
    let newTitle = '';
    console.log(this)
    for (let j = 0; j < moviesState.length; j++) {
      if (moviesState[j].id === id) {
        newTitle = moviesState[j].title
        // looping thru the array of movie state to find the new title
      }
    }
    const url = `https://mymovielist-af285.firebaseio.com/movies/${id}.json`;
    axios.patch(url, {
      title: newTitle
  })
    .then((response) => {
      this.getRequest();
      console.log(response);
  })
    .catch((error) => {
      console.log(error);
  });
}
    deleteRequest(id) {

    const url = `https://mymovielist-af285.firebaseio.com/movies/${id}.json`;
    axios.delete(url)
    //can perform other func before .then(end result)
    .then((response) => {
      this.getRequest();

    })
    .catch((error) => {
      console.log(error);
    });
  }
  handleChange(event) {
    console.log(event.target.id)
    this.setState({
      value: event.target.value
    });
  }
  updateMovie(event) {
    let inputId = event.target.id;
    let newTitle = event.target.value;
    let movies = this.state.movies;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === inputId){
        movies[i].title = newTitle;
        this.setState({ movies })
      }
    }
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postRequest();
  }

  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <h2>my Movie List</h2>
         <div>
          <Input
          inputValue={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}

          />
          <div>
          <MovieList movies={this.state.movies}
            deleteRequest={this.deleteRequest}
            updateMovie = {this.updateMovie}
            patchMovie = {this.patchRequest}
          />
          </div>
        </div>
      </div>
     </div>
    );
  }
}
export default App;
