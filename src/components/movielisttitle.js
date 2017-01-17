import React from 'react';

class MovieListTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isEditing: false
    }

    this.onEditClick = this.onEditClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);

  }

  onEditClick(id) {
    this.setState({
      isEditing: true
    });
  }
  onCancelClick(id) {
    this.setState({
      isEditing: false
    });
  }
  onSaveClick(e) {
    e.preventDefault();

    const oldTitle = this.props.title;
    const newTitle = this.refs.editInput.value;
    this.props.saveList(oldTitle, newTitle);
    this.setState({
      isEditing: false
    });
  }
  onDeleteClick(e, id) {
    this.props.deleteRequest(this.props.movie.title)
    }

  renderListSection() {
    const {
      title,
    } = this.props;
    console.log(this.props)
    // if (this.state.isEditing) {
      return (
        <li>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={this.props.movie} ref="editInput" />
          </form>
        </li>
      );
    // }
  }
  renderEditSection() {
    if (this.state.isEditing) {
      return (
        <li>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick}>Cancel</button>
        </li>
      );
    }
    return (
      <li>
          <button onClick={this.onEditClick}>Edit</button>
          <button onClick={this.onDeleteClick}>Delete</button>
        </li>

    );
    console.log(this.onDeleteClick);
  }


  render() {
    return (
      <ul>
        {/*<li className="titles">*/}
        <div className="titles">
          {this.renderListSection()}
          {this.props.movie}
        {/*<li className="editTitles">*/}
          {this.renderEditSection()}
          {/*</li>*/}
        </div>
      </ul>
    );
  }
}
export default MovieListTitle;
