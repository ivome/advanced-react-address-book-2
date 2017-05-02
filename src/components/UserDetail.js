import React from "react";
import PropTypes from "prop-types";

function UserDetail(props) {
  return (
    <div>
      {props.user.firstName} {props.user.lastName}
      <button onClick={props.onSelect}>
        Select
      </button>
    </div>
  );
}

UserDetail.propTypes = {
  onSelect: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default UserDetail;
