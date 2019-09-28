import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/ibij.jpg",
      allMemeImg: []
    };
    this.handlechange = this.handlechange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({
          allMemeImg: memes
        });
      });
  }

  handlechange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            className="meme-form__input"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handlechange}
          ></input>
          <br></br>
          <br></br>
          <input
            className="meme-form__input"
            name="bottomText"
            placeholder="Bottom text"
            value={this.state.bottomText}
            onChange={this.handlechange}
          ></input>
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
