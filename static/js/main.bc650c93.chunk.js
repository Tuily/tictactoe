(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),c=a.n(s),o=a(7),i=a(1),u=a(2),l=a(3),m=a(4),h=(a(13),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).setColor=function(){if(e.props.value)return e.props.value.toLowerCase()},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("button",{className:["square",this.setColor()].join(" "),onClick:this.props.onClick},this.props.value)}}]),a}(r.Component)),p=(a(14),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).renderSquare=function(t){return n.a.createElement(h,{value:e.props.squares[t],onClick:function(){return e.props.onClick(t)}})},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.Component)),d=(a(15),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleClick=function(e){var t=r.state.history.slice(0,r.state.stepNumber+1),a=t[t.length-1].squares.slice();if(!r.calculateWinner(a)&&!a[e]){var n=e%3+1+"-"+(parseInt(e/3)+1);a[e]=r.state.xIsNext?"X":"O",r.setState({history:t.concat([{squares:a,position:n}]),stepNumber:t.length,xIsNext:!r.state.xIsNext})}},r.restart=function(){r.jumpTo(0);var e=!r.state.rotateBoard;r.setState({rotateBoard:e})},r.jumpTo=function(e){r.setState({stepNumber:e,xIsNext:e%2===0})},r.calculateWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(o.a)(t[a],3),n=r[0],s=r[1],c=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[c])return e[n]}return null},r.state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,rotateBoard:!1},r}return Object(u.a)(a,[{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],s=this.calculateWinner(r.squares);a.map((function(e,a){var r=a?"Go to move #"+a+" ("+e.position+")":"Go to game start";return n.a.createElement("li",{key:a},n.a.createElement("button",{onClick:function(){return t.jumpTo(a)},className:t.state.stepNumber===a?"selected":""},r))}));return e=s?"Winner: "+s:9===this.state.stepNumber?"Draw":"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",{className:"game"},n.a.createElement("h2",{className:"title"},"Tic tac toe"),n.a.createElement("div",{className:"game-board ".concat(this.state.rotateBoard?"rotate":"")},n.a.createElement(p,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("div",null,n.a.createElement("button",{className:"restart",onClick:this.restart},"Restart"))))}}]),a}(r.Component));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.bc650c93.chunk.js.map