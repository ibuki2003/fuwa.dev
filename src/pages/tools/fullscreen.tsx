import React from "react";
import Title from "components/title";

function start(id: string) {
  const targ = document.getElementById(id);
  // @ts-ignore
  const requestFullScreen = targ.requestFullscreen || targ.mozRequestFullScreen || targ.webkitRequestFullScreen || targ.msRequestFullscreen;

  requestFullScreen.call(targ);
}
const FullScreen = () => (
  <article>
    <Title>Full Screen</Title>
    <h1>Full Screen</h1>
    <p>for screen cleaning, etc.</p>
    <div id="black" style={{ backgroundColor: 'black' }} />
    <div id="white" style={{ backgroundColor: 'white' }} />

    <button onClick={ () => start('black') }>Black</button>
    <button onClick={ () => start('white') }>White</button>
  </article>
);
export default FullScreen;
