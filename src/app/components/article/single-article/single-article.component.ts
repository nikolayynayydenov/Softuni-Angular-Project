import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-single-article',
    templateUrl: './single-article.component.html'
})
export class SingleArticleComponent {
    @Input() article: Object
}
