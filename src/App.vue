<template>
  <div class="container">
<SearchBar @termChange="onTermChange"> </SearchBar>
<VideoDetail :video="selectedVideo" />
<VideoList @videoSelect="onVideoSelect" :videos="videos"> </VideoList>
     </div>
</template>


<script>
import axios from 'axios'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import {YOUTUBE_API_KEY} from '../config'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return { videos: [], selectedVideo: null}
  },
  methods:{
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YOUTUBE_API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => {
        this.videos = response.data.items
      })


// console.log(YOUTUBE_API_KEY)
// console.log(searchTerm)
  }

}
}
</script>
