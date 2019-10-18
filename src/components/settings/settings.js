import React, { Component } from 'react';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
      }
      handleSubmit(event) {
        event.preventDefault();
        alert(
          `Selected file - ${
            this.fileInput.current.files[0].name
          }`
        );
      }
    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Settings;