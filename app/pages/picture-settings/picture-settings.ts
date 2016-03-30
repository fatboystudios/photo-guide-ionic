import {Page, NavParams} from "ionic-angular";
import {Article} from "../article/article";


@Page({
    templateUrl: 'build/pages/picture-settings/picture-settings.html',
})
export class PictureSettingsPage {
    private article:Article;

    constructor(navParams:NavParams) {

        this.article = navParams.get("article");
    }

}
