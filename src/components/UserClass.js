import React from "react";
import UserContext from "../utils/userContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 10,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count:{this.state.count}</h1>
        <button
          onClick={() => {
            // we can not update state variable   directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increase
        </button>
        <h1>Count:{count2}</h1>
        <h3>Name:{name}</h3>
        <h4>Location:{location}</h4>mf v,df v dlvmd;m
        <h4>contact:7489398400</h4>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default UserClass;
