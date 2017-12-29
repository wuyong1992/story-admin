export class Article {

  articleId?: number;
  articleTitle: number;
  /* 文章来源 */
  articleSource: number;
  /* 文章受众 */
  articleAudience: number;
  /* 是否置顶 */
  articleTop: number;
  /* 是否推荐 */
  articleRecommend: number;
  /* 文章点击量 */
  articleClick: number;
  /* 文章内容id */
  articleContentId: number;
  /* 文章状态 */
  articleStatus: number;
  /* 文章排序字段 */
  articleSort: number;
  /* 文章缩略图 json格式 */
  articleThumbnail: string;
  /* 文章主缩略图 */
  articleMainThumbnail: number;
  /* 文章内容 */
  articleContentDetail: string;



  createTime: Date;
  updateTime: Date;
  deleteTime: Date;


}
