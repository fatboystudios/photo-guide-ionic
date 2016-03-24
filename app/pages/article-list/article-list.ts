import {Page, NavController} from 'ionic-angular';
import {ArticleDetailsPage} from "../article-details/article-details";


@Page({
    templateUrl: 'build/pages/article-list/article-list.html',
})
export class ArticleListPage {

    articles = [
        {
            title: 'Title',
            image: 'http://lorempixel.com/400/200/',
            description: "Some short description"
        },
        {
            title: 'Some other stuff',
            image: 'http://lorempixel.com/400/200/',
            description: "And some longer description. And some longer description"
        }
    ];
    private nav:NavController;


    constructor(nav:NavController) {
        this.nav = nav;
    }

    itemSelected(article) {
        this.nav.push(ArticleDetailsPage, {article: article})
    }
}
