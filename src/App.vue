<template>
  <div>
<SearchBar @termChange="onTermChange"> </SearchBar>
<VideoList :videos="videos"> </VideoList>
     </div>
</template>


<script>
import axios from 'axios'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import {YOUTUBE_API_KEY} from '../config'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList
  },
  data() {
    return { videos: []}
  },
  methods:{
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
