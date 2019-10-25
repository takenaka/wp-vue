<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostStore from '~/stores/post';

@Component
export default class extends Vue {
  private PostStore = PostStore;

  private async created() {
    await PostStore.getPost(Number(this.$route.params.id));
  }
}
</script>

<template>
  <div>
    <h2>{{ PostStore.post.title.rendered }}</h2>
    <div v-html="PostStore.post.content.rendered"></div>
  </div>
</template>
