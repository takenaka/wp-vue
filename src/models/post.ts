export interface IWPPost {
  id: number;
  author: number;
  categories: number[];
  type: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  date: string;
  slug: string;
  status: string;
  tags: number[];
}

export class WPPost implements IWPPost {
  public id = 0;
  public author = 0;

  public categories = [];
  public type = '';
  public title = {
    rendered: ''
  };
  public content = {
    rendered: '',
    protected: false
  };
  public date = '';
  public slug = '';
  public status = '';
  public tags = [];
}
