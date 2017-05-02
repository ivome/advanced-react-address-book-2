import React from "react";
import UserDetail from "./UserDetail";
import PropTypes from "prop-types";

function UserList(props) {
  return (
    <div>
      {props.users.map((user, key) => {
        return (
          <UserDetail
            user={user}
            onSelect={() => {
              console.log('Userwas clicked', user);
              props.onUserSelect(user);
            }}
            key={key} />
        );
      })}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onUserSelect: PropTypes.func.isRequired
};

export default UserList;
