import React from 'react';


class Input extends React.Component {



  render() {

    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Save My List" ref="createInput"/>
        <button>Create Movie List</button>
      </form>
    );
  }
  handleCreate(e) {
    e.preventDefault();
    console.log(this.refs.createInput.value);
    const createInput = this.refs.createInput;
    const title = createInput.value;

    this.props.createList(title);
    this.refs.createInput.value = '';

  }
}
export default Input;
