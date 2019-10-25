import Vue from 'vue';
import wp from '~/models/wpapi';
import { IWPPost } from '~/models/post';

export class PostsStore {
  private _posts: IWPPost[] = [];

  public get posts() {
    return this._posts;
  }

  public async getPosts(perPage: number) {
    try {
      this._posts = await wp.posts().perPage(perPage);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default Vue.observable(new PostsStore());
