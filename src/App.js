import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUserList: [],
      searchText: ""
    };
  }

  getFilteredUserList() {
    return this.props.users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      return fullName.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1;
    });
  }

  handleSearchBarChange(value) {
    this.setState({
      searchText: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>
          Available users
        </h2>
        <SearchBar onSearchQueryChange={this.handleSearchBarChange.bind(this)} />
        <UserList users={this.getFilteredUserList()} onUserSelect={(selectedUser) => {
          console.log("User selected in app", selectedUser);
          this.setState({
            selectedUserList: [
              ...this.state.selectedUserList,
              selectedUser
            ]
          });
        }} />

        <h2>
          Selected users
        </h2>
        <UserList users={this.state.selectedUserList} onUserSelect={() => {}} />
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};

export default App;
