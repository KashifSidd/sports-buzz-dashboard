export class News {
    author: string;
    category: string;
    containsVideo: boolean;
    createdBy: string;
    createdOn: string;
    editorsChoice: boolean;
    featured: boolean;
    mainImgUrl: string;
    mainImgAlt: string;
    mainImgFieldId: string;
    mostPopular: boolean;
    mostPopularPosition: number;
    name: string;
    postBody: string;
    postSummary: string;
    publishedBy: string
    publishedOn: string;
    slug: string;
    trendingTopic: boolean;
    updatedBy: string;
    updatedOn: string;
    archived: boolean;
    cid: string;
    draft: string;
    id: string

    static fromJson(data: any): News {
        const n: News = new News();
        n['author'] = data['author'];
        n['author'] = data['author'];
        n['category'] = data['category'];
        n['containsVideo'] = data['contains-video'];
        n['createdBy'] = data['created-by'];
        n['createdOn'] = data['created-on'];
        n['editorsChoice'] = data['editor-s-choice'];
        n['featured'] = data['featured'];
        if (data['main-image-2']) {
            n['mainImgUrl'] = data['main-image-2']['url'];
            n['mainImgAlt'] = data['main-image-2']['alt'];
            n['mainImgFieldId'] = data['main-image-2']['fileId'];
        }
        if (data['main-image']) {
            n['mainImgUrl'] = data['main-image']['url'];
            n['mainImgAlt'] = data['main-image']['alt'];
            n['mainImgFieldId'] = data['main-image']['fileId'];
        }
        n['mostPopular'] = data['most-popular'];
        n['mostPopularPosition'] = data['most-popular-position'];
        n['name'] = data['name'];
        n['postBody'] = data['post-body'];
        n['postSummary'] = data['post-summary'];
        n['publishedBy'] = data['published-by'];
        n['publishedOn'] = data['published-on'];
        n['slug'] = data['slug'];
        n['trendingTopic'] = data['trending-topic'];
        n['updatedBy'] = data['updated-by'];
        n['updatedOn'] = data['updated-on'];
        n['archived'] = data['_archived'];
        n['cid'] = data['_cid'];
        n['draft'] = data['_draft'];
        n['id'] = data['_id'];
        return n;
    }
}