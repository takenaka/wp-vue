<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostsStore from '~/stores/posts';

@Component
export default class extends Vue {
  private PostsStore = PostsStore;

  private async created() {
    await this.PostsStore.getPosts(5);
  }
}
</script>

<template>
  <div>
    <h2>WP-Vue</h2>

    <ul>
      <li v-for="post of PostsStore.posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{
          post.title.rendered
        }}</router-link>
      </li>
    </ul>
  </div>
</template>
