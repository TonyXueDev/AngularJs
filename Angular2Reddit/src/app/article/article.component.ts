import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {class: 'row'}
})
export class ArticleComponent implements OnInit {
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }
// 默认情况下， JavaScript会把click事件冒泡到所有父级组件中。
// 因为click事件被冒泡到了父级，浏览器就会尝试导航到这个空白链接，于是浏览器就重新刷新了。
// 解决方案：我们得让click的事件处理器返回false。这能确保浏览器不会尝试刷新页面。
  voteUp() {
    this.votes += 1;
    return false;
  }

  voteDown() {
    this.votes -= 1;
    return false;
  }
  ngOnInit() {
  }

}
