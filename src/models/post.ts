export interface WPPost {
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
