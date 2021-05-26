<template>
  <div>
<SearchBar @termChange="onTermChange"> </SearchBar>
     </div>
</template>


<script>
import SearchBar from './components/SearchBar';
import YOUTUBE_API_KEY from '../config'

export default {
  name: 'App',
  components: {
    SearchBar
  },
  methods:{
    onTermChange(searchTerm) {
      console.log(searchTerm)

  }

}
}
</script>
