import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


const mapStateToProps = (store) => ({
  video: store.currentVideo
})

const mapDispatchToProps = (dispatch) => {
  
}


const VideoPlayerContainer = connect(
  mapStateToProps
  // mapDispatchToProps
)(VideoPlayer)

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
