import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-show-article',
    templateUrl: './show-article.component.html'
})
export class ShowArticleComponent {
    public limit: number = 100
    @Input() article: Object
}
