import React from 'react';
import MovieListHeader from './movielistheader';
import MovieListTitle from './movielisttitle';
import _ from 'lodash';

class MovieList extends React.Component {
  renderList() {
    return _.map(this.props.myMovieList, (list, index) => <MovieListTitle key={index}
      {...list} />);
  }


  render() {
    return (
      <table>
        <MovieListHeader />
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }
}
export default MovieList;
