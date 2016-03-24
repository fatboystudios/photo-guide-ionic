import {Page} from 'ionic-angular';


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
    
}
