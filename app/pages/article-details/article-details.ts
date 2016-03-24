import {Page, NavParams} from 'ionic-angular';
import {Http, Response} from "angular2/http";
import {Article} from "../article/article";


@Page({
    templateUrl: 'build/pages/article-details/article-details.html',
})
export class ArticleDetailsPage {
    private article:Article;
    private htmlData:string;

    constructor(navParams:NavParams, http:Http) {
        this.article = navParams.get("article");

        http.get(this.article.detailsUrl)
            .subscribe((res:Response) => this.htmlData = res.text());
    }

}
