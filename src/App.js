import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "홍길동",
    birthday: "911222",
    gender: "남자",
    job: "대학생"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "박보검",
    birthday: "911222",
    gender: "남자",
    job: "대학생"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/1",
    name: "송혜교",
    birthday: "911222",
    gender: "여자",
    job: "대학생"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
        {/* <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />

        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />

        <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        /> */}
      </div>
    );
  }
}

export default App;
