import React, { Component } from "react";
//列表渲染
const users = [
  { username: "Jerry", age: 21, gender: "male" },
  { username: "Tomy", age: 22, gender: "male" },
  { username: "Lily", age: 19, gender: "female" },
  { username: "Lucy", age: 20, gender: "female" }
];

// class App extends Component {
//   render() {
//     const userElement = [];
//     for (let user of users) {
//       userElement.push(
//         <div>
//           <div>姓名：{user.username}</div>
//           <div>年龄：{user.age}</div>
//           <div>性别：{user.gender}</div>
//           <hr />
//         </div>
//       );
//     }
//     return <div>{userElement}</div>;
//   }
// }


//ES6  map


class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
       {users.map((user,i)=> <User key={i} user = {user} />)}
      </div>
    );
  }
}

export default App;
