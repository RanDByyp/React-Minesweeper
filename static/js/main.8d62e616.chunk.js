(this["webpackJsonpminesweeper-clone-06"]=this["webpackJsonpminesweeper-clone-06"]||[]).push([[0],{120:function(e,t,n){e.exports=n(402)},124:function(e,t,n){},26:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),l=n(15),s=n.n(l),r=(n(124),n(31)),o=n(32),c=n(8),u=n(34),h=n(33),d=(n(26),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).mouseDownEvent=i.mouseDownEvent.bind(Object(c.a)(i)),i}return Object(o.a)(n,[{key:"getValue",value:function(){return this.props.isRevealed?this.props.isMine?this.props.isExploded?"\ud83d\udca5":"\ud83d\udca3":0==this.props.neighbours?null:this.props.neighbours:this.props.isFlagged?"\ud83d\udea9":null}},{key:"mouseDownEvent",value:function(e){switch(e.button){case 0:this.props.onLeftClick(this.props);break;case 2:this.props.onRightClick(this.props)}}},{key:"render",value:function(){var e=this.props.isRevealed;return a.a.createElement("div",{className:["Cell",e&&"revealed"].filter((function(e){return 0!=e})).join(" "),onMouseDown:this.mouseDownEvent,onContextMenu:function(e){return e.preventDefault()}},this.getValue())}}]),n}(a.a.Component));function f(e){return Math.floor(Math.random()*e)}function g(e,t){for(var n=e.length,i=e[0].length,a=0;a<n;a++)for(var l=0;l<i;l++)e[a][l]=t(e,l,a);return e}function m(e,t,n){for(var i=e.length,a=e[0].length,l=[],s=n-1;s<=n+1;s++)for(var r=t-1;r<=t+1;r++)r==t&&s==n||r<0||r>a-1||s<0||s>i-1||l.push(e[s][r]);return l}n(125);var v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={field:i.generateField()},i.cellCount=i.props.cells,i.handleLeftClick=i.handleLeftClick.bind(Object(c.a)(i)),i.handleRightClick=i.handleRightClick.bind(Object(c.a)(i)),i}return Object(o.a)(n,[{key:"newGame",value:function(){var e=this;this.setState((function(t){return t.field=e.generateField()})),this.cellCount=this.props.cells,this.props.onGameOver()}},{key:"generateField",value:function(){var e=this.initializeField();return e=this.plantMinesField(e),this.countNeighboursField(e)}},{key:"initializeField",value:function(){return console.log("\ud83c\udf31\ud83d\udd32 initializeField()"),function(e,t,n){for(var i=[],a=0;a<t;a++){i.push([]);for(var l=0;l<e;l++)i[a][l]=n(l,a)}return i}(this.props.width,this.props.height,(function(e,t){return{corX:e,corY:t,isMine:!1,isExploded:!1,isRevealed:!1,isEmpty:!1,isFlagged:!1,neighbours:0}}))}},{key:"plantMinesField",value:function(e){return console.log("\ud83d\udca3\ud83d\udd32 populateField()"),function(e,t,n,i){for(var a=e.length,l=e[0].length;i;){var s=f(a),r=f(l);t(e[s][r])||(e[s][r]=n(e[s][r]),i--)}return e}(e,(function(e){return e.isMine}),(function(e){return e.isMine=!0,e}),this.props.mines)}},{key:"countNeighboursField",value:function(e){return console.log("\ud83c\udfe0\ud83d\udd32 countNeighboursField()"),g(e,(function(e,t,n){var i=0;return m(e,t,n).forEach((function(e){e.isMine&&i++})),e[n][t].neighbours=i,0!=i||e[n][t].isMine||(e[n][t].isEmpty=!0),e[n][t]}))}},{key:"updateState",value:function(e){this.setState((function(t){return t.field=e}))}},{key:"updateCellOfField",value:function(e,t){return e[t.corY][t.corX]=t,e}},{key:"incrementFlag",value:function(e){var t=this.props.flags;e>0?this.props.flags>=this.props.mines&&(e=0):e<0&&this.props.flags<1&&(e=0),t+=e,this.props.onFlag(t)}},{key:"incrementCells",value:function(e){e.isMine||this.cellCount--,this.cellCount<=0&&this.props.onGameOver(2),this.props.onCellRevealed(this.cellCount)}},{key:"flagCell",value:function(e,t){return t.isRevealed||(t.isFlagged?(e[t.corY][t.corX].isFlagged=!1,this.incrementFlag(1)):this.props.flags>0&&(e[t.corY][t.corX].isFlagged=!0,this.incrementFlag(-1))),e[t.corY][t.corX]}},{key:"revealCell",value:function(e,t){return this.incrementCells(t),e[t.corY][t.corX].isRevealed=!0,e[t.corY][t.corX]}},{key:"revealNeighbours",value:function(e,t){var n=this;return m(this.state.field,t.corX,t.corY).forEach((function(e){e.isRevealed||n.checkCell(e)})),e}},{key:"revealMines",value:function(e,t){var n=this;return console.log("\ud83d\udca3 revealMines()"),g(e,(function(i,a,l){return i[l][a].isMine&&(a==t.corX&&l==t.corY&&(i[l][a].isExploded=!0),i[l][a]=n.revealCell(e,i[l][a]),i[l][a]=n.flagCell(e,i[l][a])),i[l][a]}))}},{key:"checkCell",value:function(e){if(console.log("\ud83d\udd0e checkCell()"),!e.isRevealed&!e.isFlagged&!this.props.gameOver){var t=this.state.field;e.isEmpty?(e=this.revealCell(t,e),e=this.flagCell(t,e),t=this.updateCellOfField(t,e),t=this.revealNeighbours(t,e)):e.isEmpty||e.isMine?e.isMine&&(t=this.revealMines(t,e),this.props.onGameOver(1)):(e=this.revealCell(t,e),e=this.flagCell(t,e),t=this.updateCellOfField(t,e)),this.updateState(t)}}},{key:"handleLeftClick",value:function(e){this.checkCell(e)}},{key:"handleRightClick",value:function(e){if(!this.props.gameOver){var t=this.state.field;e=this.flagCell(t,e),t=this.updateCellOfField(t,e),this.updateState(t)}}},{key:"handleGameOver",value:function(){this.props.onGameOver()}},{key:"componentDidUpdate",value:function(e){1==this.props.pendingNewGame&0==e.pendingNewGame&&(this.newGame(),this.props.afterNewGame())}},{key:"render",value:function(){var e=this,t={gridTemplateColumns:"repeat("+this.props.width+",1fr)",gridTemplateRows:"repeat("+this.props.height+",1fr)"};return a.a.createElement("div",{className:"Field",style:t},this.state.field.map((function(t){return t.map((function(t){return a.a.createElement(d,{key:String("x"+t.corX+"y"+t.corY),corX:t.corX,corY:t.corY,isMine:t.isMine,isExploded:t.isExploded,isRevealed:t.isRevealed,isEmpty:t.isEmpty,isFlagged:t.isFlagged,neighbours:t.neighbours,onLeftClick:e.handleLeftClick,onRightClick:e.handleRightClick})}))})))}}]),n}(a.a.Component);var p=function(e){var t=function(t){e.onButtonClick(t.target.value)};return a.a.createElement("div",{className:"Menu"},a.a.createElement("button",{className:"menu-item",value:"0",onClick:t},"Easy"),a.a.createElement("button",{className:"menu-item",value:"1",onClick:t},"Medium"),a.a.createElement("button",{className:"menu-item",value:"2",onClick:t},"Hard"),a.a.createElement("p",{className:"menu-item"},"\ud83d\udea9"+e.flags))};var y=function(e){return a.a.createElement("div",{className:"Message"},["*Left-Click on a cell to reveal it.\n*Right-Click on a cell to 'flag' (or 'unflag') it.\n->\n* A revealed cell can be empty, numbered, or a mine.\n* A flagged cell can not be revealed.\n* An empty cell has 0 adjacent cells that contain a mine.\n* A numbered cell has X adjacent cells that contain a mine,where X is the number the cell displays.\n->\n* Reveal a mine and you lose the game.\n* Reveal all cells, except for the cells that contain a mine and you win the game.\n-","You lost! Press any difficulty to start a new game. Good luck!\n-","You won! Congratulations! \ud83c\udf88\ud83c\udf88\ud83c\udf88\n -"][e.gameOver].split("\n").map((function(e,t){return a.a.createElement("p",{key:t},e)})),a.a.createElement("a",{href:"https://github.com/RanDByyp"},"Made by RanDByyp"))},k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).difficultySettings=[{height:8,width:8,mines:10},{height:13,width:15,mines:40},{height:16,width:30,mines:99}],i.state={pendingNewGame:!1,gameOver:0,difficulty:0,height:i.difficultySettings[0].height,width:i.difficultySettings[0].width,mines:i.difficultySettings[0].mines,flags:i.difficultySettings[0].mines,cells:i.difficultySettings[0].height*i.difficultySettings[0].width-i.difficultySettings[0].mines},i.handleButtonClick=i.handleButtonClick.bind(Object(c.a)(i)),i.handleFlagging=i.handleFlagging.bind(Object(c.a)(i)),i.handleResetPendingNewGame=i.handleResetPendingNewGame.bind(Object(c.a)(i)),i.handleGameOver=i.handleGameOver.bind(Object(c.a)(i)),i.handleReveal=i.handleReveal.bind(Object(c.a)(i)),i}return Object(o.a)(n,[{key:"changeDifficulty",value:function(e){this.setState({difficulty:e,height:this.difficultySettings[e].height,width:this.difficultySettings[e].width,mines:this.difficultySettings[e].mines,flags:this.difficultySettings[e].mines,cells:this.difficultySettings[e].height*this.difficultySettings[e].width-this.difficultySettings[e].mines})}},{key:"setPendingNewGame",value:function(){this.setState((function(e){return e.pendingNewGame=!0}))}},{key:"handleResetPendingNewGame",value:function(){this.setState((function(e){return e.pendingNewGame=!1})),this.setState((function(e){return e.gameOver=0}))}},{key:"handleButtonClick",value:function(e){this.changeDifficulty(e),this.setPendingNewGame()}},{key:"handleFlagging",value:function(e){this.setState((function(t){return t.flags=e}))}},{key:"handleGameOver",value:function(e){this.setState((function(t){return t.gameOver=e}))}},{key:"handleReveal",value:function(e){this.setState((function(t){return t.cells=e}))}},{key:"render",value:function(){var e={maxWidth:this.state.width+35+"px"};return a.a.createElement("div",{className:"Game",style:e},a.a.createElement("div",{className:"game-holder"},a.a.createElement(p,{flags:this.state.flags,cells:this.state.cells,gameOver:this.gameOver,onButtonClick:this.handleButtonClick}),a.a.createElement(v,{width:this.state.width,height:this.state.height,mines:this.state.mines,flags:this.state.flags,cells:this.state.cells,gameOver:this.state.gameOver,pendingNewGame:this.state.pendingNewGame,afterNewGame:this.handleResetPendingNewGame,onGameOver:this.handleGameOver,onFlag:this.handleFlagging,onCellRevealed:this.handleReveal}),a.a.createElement(y,{gameOver:this.state.gameOver})))}}]),n}(a.a.Component);var C=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[120,1,2]]]);
//# sourceMappingURL=main.8d62e616.chunk.js.map