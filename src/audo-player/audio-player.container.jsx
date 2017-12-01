import React from 'react';
import PropTypes from 'prop-types';

import BaseComponent from '../shared/base.component';

export default class AudioPlayerContainer extends BaseComponent {
    constructor() {
        this._bind('handleTitleChange', 'handleVolumeChange');

        this.state = {
            src: '',
            title: 'Radio',
            volume: 0,
        };
    }

    handleTitleChange(newTitle) {
        this.setState({
            title: newTitle
        });
    }

    handleVolumeChange(newVolume) {
        this.setState({
            volume: newVolume
        });
    }

    render() {
        return (
            <div className="audio-player--container">
                <EditableTitle
                    title={this.props.title}
                    onTitleChange={this.handleTitleChange} />

                <AudioPlayer
                    src={this.props.src}
                    volume={this.state.volume}
                    onVolumeChange={this.handleVolumeChange} />
            </div>
        );
    }
}
