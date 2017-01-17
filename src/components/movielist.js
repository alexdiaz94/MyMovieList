import React from 'react';
import MovieListTitle from './movielisttitle';

class MovieList extends React.Component {
  render() {
    let moviefeed = this.props.movies.map((movie, i) => {
      console.log(movie)
      return (
        <MovieListTitle movie={movie.title}
        key={movie.id}
        deleteRequest={this.props.deleteRequest}


        />
      );
    });
    return (
      <ul>
        {moviefeed}
      </ul>
    );
  }
}
const propTypes = {
  movies: React.PropTypes.array.isRequired
};

MovieList.propTypes = propTypes;

export default MovieList;
