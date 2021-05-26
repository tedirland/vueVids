<template>
  <div>
<SearchBar @termChange="onTermChange"> </SearchBar>
     </div>
</template>


<script>
import axios from 'axios'
import SearchBar from './components/SearchBar';
import {YOUTUBE_API_KEY} from '../config'

export default {
  name: 'App',
  components: {
    SearchBar
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
      }).then(response => console.log(response))


// console.log(YOUTUBE_API_KEY)
// console.log(searchTerm)
  }

}
}
</script>
