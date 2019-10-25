<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostStore from '~/stores/posts';

@Component
export default class extends Vue {
  private PostStore = PostStore;

  private async created() {
    await this.PostStore.getPosts();

    console.log(this.PostStore.posts);
  }
}
</script>

<template>
  <div>
    <h2>WP-Vue</h2>

    <ul>
      <li v-for="post of PostStore.posts" :key="post.id">
        <router-link to="/post/">{{ post.title.rendered }}</router-link>
      </li>
    </ul>
  </div>
</template>
