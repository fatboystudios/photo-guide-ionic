import {Page, NavParams, SqlStorage, Storage, NavController} from "ionic-angular";
import {Article} from "../article/article";


@Page({
    templateUrl: 'build/pages/picture-settings/picture-settings.html',
})
export class PictureSettingsPage {
    private article:Article;
    private settings;
    private storage:Storage;
    private nav:NavController;

    constructor(navParams:NavParams, nav:NavController) {
        this.nav = nav;
        this.settings = {};
        this.article = navParams.get("article");

        this.storage = new Storage(SqlStorage, {});

        this.storage.get(this.article.title).then(result => {
            this.settings = JSON.parse(result || '{}')
        })
    }

    save() {
        this.storage.set(this.article.title, JSON.stringify(this.settings));
        this.nav.pop();
    }

}
