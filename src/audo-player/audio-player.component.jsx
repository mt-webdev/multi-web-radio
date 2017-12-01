import React from 'react';
import PropTypes from 'prop-types';

import BaseComponent from './../shared/base.component'

export default class AudioPlayer extends BaseComponent {
    constructor(props) {
        super(props);
        this._bind('play', 'pause');
    }

    play() {
        this.audioEl.play();
    }

    pause() {
        this.audioEl.pause();
    }

    render() {
        return (
            <div className="audio-player">
                <audio src={this.props.src}
                    ref={(el) => this.audioEl = el}
                ></audio>
                <button onClick={this.play}>|></button>
                <button onClick={this.pause}>|=|</button>
                <input type="range" min="0" max="1" step="0.05" />
                <span>{(this.props.volume)} %</span>
            </div>
        );
    }
};

AudioPlayer.propTypes = {
    src: PropTypes.string,
    volume: PropTypes.number
};

AudioPlayer.defaultProps = {
    src: '',
    volume: 0.5
};
