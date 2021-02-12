import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../_redux/actions/ActionAuthentication";

const Home = ({ user, logoutUser }) => {
  return (
    <div>
      Hi, {user && user.email} , YOu have successfully logged in{" "}
      <button onClick={logoutUser}>logout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.user.user });

const mapDispatchToProps = { logoutUser };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
