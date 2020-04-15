<template>
  <div class='post'>
      <h2 v-text="title"></h2>
      <p v-if="isOpen">{{ description }}</p>
      <p v-else>{{ snippets }}</p>
      <button @click="changeState">{{ buttonText }}</button>
  </div>
</template>

<script>
    export default {
        props: {
            title: String,
            description: String
        },
        data(){
            return{
                isOpen: false,
            }
        },
        computed: {
            snippets(){
                const snippets = this.description.substring(0, 120);

                return `${snippets}...`;
            },
            buttonText(){
                return this.isOpen ? 'Show less' : 'Show more';
            }
        },
        methods: {
            changeState(){
                this.isOpen = !this.isOpen
            }
        }

    }
</script>

<style>
   
</style>