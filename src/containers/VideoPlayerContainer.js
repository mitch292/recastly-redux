import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


const mapStateToProps = (state) => ({
  video: state.currentVideo
})

const mapDispatchToProps = (dispatch) => {}


const VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer)

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;



// const mapStateToProps = (state) => ({
//   videos: state.videoList
// })

// const mapDispatchToProps = (dispatch) => ({
//   handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
// })



// const VideoListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(VideoList);
