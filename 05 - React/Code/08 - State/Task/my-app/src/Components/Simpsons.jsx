import React from "react";

export default class simpson extends React.Component {
  state = {
    name: "Lisa",
    friend:"Janey Powell",
    school:"do",

  };

  changeState = () => {
    console.log("Application state changed!");
    this.setState({ name: "Bart", Friend: "Millhouse", school: "do not" });
  };

}

class simpson extends React.Component {
  render() {
    return (
        <div>
        <h2>Hi, my name is {this.state.name}. My best friend is {this.state.friend} and my mother is Marge Simpson. I really, really {this.state.school} love school</h2>
    <button onClick={this.changeState}>Change character</button>
    </div>
    ) ;
  }
}
