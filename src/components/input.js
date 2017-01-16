import React from 'react';


class Input extends React.Component {


handleCreate(e){
  e.preventDefault();

  this.props.createList(this.refs.createList.value);

}

  render() {

    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Example1" ref="createList"/>
        <button>Create Movie List</button>
      </form>
    );
  }
}
export default Input;
