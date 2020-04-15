<template>
  <div id="app">
    <div v-if="posts.length === 0"> Loading...</div>
    <div v-for="post in posts" :key="post.id">
       <blog-post 
      :title="post.title" 
      :description="post.description">
      </blog-post>
    </div>
     <create-post></create-post>
  </div>
</template>

<script>

import BlogPost from './components/BlogPost';
import log from './mixins/log';
import CreatePost from './components/CreatePost';
import { mapActions, mapState } from 'vuex';

export default {
  name: "App",
  mixins: [log],
  components: {
   BlogPost,
   CreatePost
  },
  computed: {
    ...mapState(["posts"])
  },
  async created(){
    this.fetchPosts();
    this.logNow();
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  }
};
</script>

<style>

  body {
    background-color: rgb(245, 245, 245);
  }
 
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

   button {
        background-color: blueviolet;
        color: white;
        padding: 10px;
        border-radius: 10px;
    }

    .post {
        border: 1px rgb(207, 206, 206) solid;
        margin-bottom: 15px;
        padding: 50px;
        border-radius: 20px;
        background-color: white;
    }

  
    
</style>
