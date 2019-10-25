import Vue from 'vue';
import wp from '~/models/wpapi';
import { WPPost } from '~/models/post';

export class PostStore {
  private _posts: WPPost[] = [];

  public get posts() {
    return this._posts;
  }

  public async getPosts() {
    try {
      this._posts = await wp.posts();
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default Vue.observable(new PostStore());
