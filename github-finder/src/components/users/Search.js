import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })
    onSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' })
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange}></input>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
                    <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
                </form>
            </div>
        )
    }
}

export default Search
