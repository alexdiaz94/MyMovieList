import React from 'react';



class MovieListTitle extends React.Component {
  constructor(props) {
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
  onSaveClick(e) {
    e.preventDefault();

    const oldTitle = this.props.title;
    const newTitle = this.refs.editInput.value;
    this.props.saveList(oldTitle, newTitle);
    this.setState({ isEditing: false });
  }
  renderListSection() {
    const {title, isDone } = this.props;

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={title} ref="editInput" />
          </form>
        </td>
        );
    }
}

  renderEditSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
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
        <td>
          {this.props.myMovieList}
        <td>
          {this.renderEditSection()}
          </td>
        </td>
      </tr>
    );
  }
}
export default MovieListTitle;
