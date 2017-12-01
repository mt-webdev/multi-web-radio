import EditableTitle from './editable-title.component'
import React from 'react';
import AudioPlayer from './audo-player/audio-player.component';

export default class App extends React.Component {
  render() {
    return (<div>
      <h2>Welcome to React!</h2>
      <AudioPlayer src={'http://mp3.radiogong963.c.nmdn.net/ps-radiogong963/livestream.mp3'} />
      <EditableTitle title="Gong" />
      <p>
        http://mp3.radiogong963.c.nmdn.net/ps-radiogong963/livestream.mp3
      </p>
      <p>
        http://mp3channels.webradio.antenne.de:80/antenne
      </p>
    </div>);
  }
}
