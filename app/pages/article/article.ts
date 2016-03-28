export class Article {
    title:string;
    description:string;
    image:string;
    details:string;
    intro:string;
    imageIntro:string;
    readMore:boolean;


    constructor(json) {
        this.title = json.title;
        this.description = json.description;
        this.image = json.image;
        this.imageIntro = json.imageIntro;
        this.details = json.details;
        this.intro = json.intro;
        this.readMore = 'true' === json.readMore;
    }


    get imageUrl():string {
        return 'build/content/' + this.image;
    }

    get imageIntroUrl():string {
        return 'build/content/' + this.imageIntro;
    }

    get detailsUrl():string {
        return 'build/content/' + this.details;
    }

    get introUrl():string {
        return 'build/content/' + this.intro;
    }
}