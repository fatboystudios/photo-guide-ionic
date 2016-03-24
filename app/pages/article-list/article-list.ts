import {Page, NavController} from 'ionic-angular';
import {ArticleDetailsPage} from "../article-details/article-details";
import {Http, Response} from "angular2/http";
import {Article} from "./../article/article";


@Page({
    templateUrl: 'build/pages/article-list/article-list.html',
})
export class ArticleListPage {

    private articles:Array<Article>;
    private nav:NavController;


    constructor(nav:NavController, http:Http) {
        this.nav = nav;
        http.get("build/content/repository.json")
            .subscribe((res:Response) => this.articles = res.json().map(article => new Article(article)));
    }

    itemSelected(article) {
        this.nav.push(ArticleDetailsPage, {article: article})
    }
}
