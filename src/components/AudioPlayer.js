import React from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import done from '../sounds/done.wav';

const AudioPlayer = props => {
  return (
    <Sound playStatus={props.playStatus} url={done} />
  );
};

AudioPlayer.propTypes = {
  playStatus: PropTypes.string.isRequired
};

export default AudioPlayer;

