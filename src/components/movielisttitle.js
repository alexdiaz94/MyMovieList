import React from 'react';
import MovieListHeader from './movielistheader';


class MovieListTitle extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isEditing: false
    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);

  }

  onEditClick() {
    this.setState({ isEditing: true });
  }
  onCancelClick() {
    this.setState({ isEditing: false });
  }

  renderEditSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button>Save</button>
          <button onClick={this.onCancelClick}>Cancel</button>
        </td>
        );
    }
    return (
        <td>
          <button onClick={this.onEditClick}>Edit</button>
          <button>Delete</button>
        </td>
      );
  }


  render() {
    return (
      <tr>
        <td>{this.props.myMovieList}</td>
        <td>
        <MovieListHeader />
          {this.renderEditSection()}
        </td>
      </tr>
    );
  }
}
export default MovieListTitle;
