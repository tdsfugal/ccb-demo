import React, { Component } from 'react';
import { func } from 'prop-types';

export default class AddBookPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
    };
  }

  updateTitle = e => this.setState({ title: e.target.value });
  updateAuthor = e => this.setState({ author: e.target.value });

  render() {
    const { author, title } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={this.updateTitle}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={this.updateAuthor}
        />
        <button onClick={() => this.props.handleSubmit(this.state)}>
          Submit
        </button>
      </div>
    );
  }
}

AddBookPopup.propTypes = {
  handleSubmit: func.isRequired,
};
