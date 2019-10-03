import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImg: []
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    const length = this.state.allMemeImg.length;
    const randNumber = Math.floor(Math.random() * length);
    const randMemeImg = this.state.allMemeImg[randNumber].url;
    this.setState({ randomImg: randMemeImg });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            className="meme-form__input"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handlechange}
          ></input>
          <input
            className="meme-form__input"
            name="bottomText"
            placeholder="Bottom text"
            value={this.state.bottomText}
            onChange={this.handlechange}
          ></input>
          <button className="meme-form__button">Generate</button>
        </form>
        <div className="memes">
          <img src={this.state.randomImg} alt="random img"></img>
          <h2 className="memes__top-text">{this.state.topText}</h2>
          <h2 className="memes__bottom-text">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
