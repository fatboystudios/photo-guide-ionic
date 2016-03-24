import {Page} from 'ionic-angular';
import {AboutPage} from '../about/about';
import {ArticleListPage} from "../article-list/article-list";


@Page({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root:any = ArticleListPage;
    tab2Root:any = AboutPage;
}
