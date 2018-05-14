import React from 'react';
import JPlayer, {
  initializeOptions, Gui, SeekBar, Audio, Title, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, BrowserUnsupported,
} from 'react-jplayer';

const defaultOptions = {
  id: 'AudioPlayer',
  autoplay: true,
  keyEnabled: true,
  verticalVolume: true,
  volume: 0.3,
};

initializeOptions(defaultOptions);

const AudioPlayer = () => (
  <JPlayer id={defaultOptions.id} className="jp-sleek">
    <Audio />
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa fa-play-circle"></i></Play>
        <Repeat><i className="fa fa-repeat" /></Repeat>
        <div className="jp-progress">
          <SeekBar>
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute>
            <i className="fa"></i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <div className="jp-title-container">
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
);

export default AudioPlayer;
