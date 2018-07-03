import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]; // 渲染多篇文章，这里定义了三篇文章
  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://Fullstack.io', 2),
      new Article('Angular Hpmepage', 'http://angular.io', 1)];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    // 将页面中填写的title，link和这里写死的0 push到Article数组中作为一个新的文章出现在页面中
    title.value = '';
    link.value = '';
    return false ;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes );
  }
}
