import Vue from 'vue';
import wp from '~/models/wpapi';
import { WPPost } from '~/models/post';

export class PostStore {
  private _post: WPPost = new WPPost();

  public get post() {
    return this._post;
  }

  public async getPost(id: number) {
    try {
      this._post = await wp.posts().id(id);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default Vue.observable(new PostStore());
