import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import VideoPlayer from 'react-native-video-player';
import Logos from './Logos';
import BorderContent from './BorderContent';

export default function MainVideo() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const isLandscape = windowWidth > windowHeight;
  const [showData, setShowData] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {showData && <Logos />}
        <VideoPlayer
          showDuration
          pauseOnPress
          onShowControls={() => {
            setShowData(!showData);
            console.log('control appears');
          }}
          onHideControls={() => {
            setShowData(true);
            console.log('control dispappears');
          }}
          controlsTimeout={5000}
          style={[
            styles.videoPlayer,
            isLandscape ? styles.landscapeVideo : styles.portraitVideo,
          ]}
          video={require('../assets/video/video.mp4')}
        />
        <View
          style={[styles.Btext, isLandscape ? styles.BtextLand : styles.Btext]}>
          {showData && <BorderContent />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  landscapeVideo: {
    width: '100%',
    height: 290,
  },
  portraitVideo: {
    marginTop: '40%',
    width: '100%',
    height: 300,
  },
  Btext: {
    marginTop: '40%',
  },
  BtextLand: {
    marginTop: 0,
  },
});
