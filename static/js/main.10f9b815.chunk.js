(window["webpackJsonpmeme-generator"]=window["webpackJsonpmeme-generator"]||[]).push([[0],{11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),l=a(4),r=a.n(l);var o=function(){return m.a.createElement("header",{className:"header"},m.a.createElement("img",{className:"header__img",src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Meme"}),m.a.createElement("p",{className:"header__paragraph"},"Meme Generator"))},c=a(5),s=a(6),i=a(7),h=a(10),u=a(8),p=a(1),d=a(9),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImg:[]},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;console.log(a),e.setState({allMemeImg:a})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.allMemeImg.length,a=Math.floor(Math.random()*t),n=this.state.allMemeImg[a].url;this.setState({randomImg:n})}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},m.a.createElement("input",{className:"meme-form__input",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),m.a.createElement("input",{className:"meme-form__input",name:"bottomText",placeholder:"Bottom text",value:this.state.bottomText,onChange:this.handleChange}),m.a.createElement("button",{className:"meme-form__button"},"Generate")),m.a.createElement("div",{className:"memes"},m.a.createElement("img",{className:"memes__img",src:this.state.randomImg,alt:"random img"}),m.a.createElement("h2",{className:"memes__top-text"},this.state.topText),m.a.createElement("h2",{className:"memes__bottom-text"},this.state.bottomText)))}}]),t}(m.a.Component);var f=function(){return m.a.createElement("p",{className:"footer"},"Made with \u2764 by human form Boat City, Earth ")};a(3);var b=function(){return m.a.createElement("div",null,m.a.createElement(o,null),m.a.createElement(g,null),m.a.createElement(f,null))},v=document.getElementById("root");r.a.render(m.a.createElement(b,null),v)},3:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.10f9b815.chunk.js.map