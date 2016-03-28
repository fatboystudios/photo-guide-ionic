import {Page, NavParams, NavController} from 'ionic-angular';
import {Http, Response} from "angular2/http";
import {Article} from "../article/article";
import {ArticleDetailsPage} from "../article-details/article-details";


@Page({
    templateUrl: 'build/pages/article-intro/article-intro.html',
})
export class ArticleIntroPage {
    private article:Article;
    private htmlData:string;
    private nav:NavController;

    constructor(navParams:NavParams, nav:NavController, http:Http) {
        this.nav = nav;
        this.article = navParams.get("article");

        http.get(this.article.introUrl)
            .subscribe((res:Response) => this.htmlData = res.text());
    }

    readMore() {
        this.nav.push(ArticleDetailsPage, {article: this.article})
    }

    showReadMoreButton():boolean {
        return this.article.readMore;
    }

}
