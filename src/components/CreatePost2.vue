<template>
  <div class='post center'>
      <h2> Create Your Blog Post</h2>
      <div>
        <label for="Title">Title:
          <input v-model='post.title' type='text'>
        </label>
      </div>
      <div>
        <label for="Description">Description:
            <input v-model='post.description' type='text'>
        </label>
      </div>
      <button @click="addPost">Submit</button> 
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

    export default {
        data(){
            return {
              post: {
                title: '',
                description: ''
              }
            }
        }, 
        methods: {
          ...mapActions(["addPost"]),
        }

    }
</script>

<style>

</style>