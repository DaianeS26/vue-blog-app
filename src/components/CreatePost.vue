<template>
  <div class='post center'>
      <h2> Create Your Blog Post</h2>
      <div>
        <label for="Title">Title:
          <input v-model='title' type='text'>
        </label>
      </div>
      <div>
        <label for="Description">Description:
            <input v-model='description' type='text'>
        </label>
      </div>
      <button @click="createPost">Submit</button> 
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

    export default {
        data(){
            return {
                title: '',
                description: ''
            }
        }, 
        methods: {
          ...mapActions(["addPost"]),
          createPost(){
            this.addPost({title: this.title, description: this.description})
          }
        }

    }
</script>

<style>

</style>