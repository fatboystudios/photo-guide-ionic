import {Page, NavParams, NavController} from 'ionic-angular';
import {Http, Response} from "angular2/http";
import {Article} from "../article/article";
import {PictureSettingsPage} from "../picture-settings/picture-settings";


@Page({
    templateUrl: 'build/pages/article-details/article-details.html',
})
export class ArticleDetailsPage {
    private article:Article;
    private htmlData:string;
    private nav:NavController;

    constructor(navParams:NavParams, nav:NavController, http:Http) {
        this.nav = nav;
        this.article = navParams.get("article");

        http.get(this.article.detailsUrl)
            .subscribe((res:Response) => this.htmlData = res.text());
    }

    gotoPictureSettings() {
        this.nav.push(PictureSettingsPage, {article: this.article})
    }

}
