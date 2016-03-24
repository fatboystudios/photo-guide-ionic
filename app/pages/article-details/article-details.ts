import {Page, NavParams} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/article-details/article-details.html',
})
export class ArticleDetailsPage {
    private article;
    
    constructor(navParams:NavParams) {
        this.article = navParams.get("article");
    }

}
