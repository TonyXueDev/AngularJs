import {Component, Input, OnInit} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {class: 'row'}
})
export class ArticleComponent implements OnInit {
  @Input() article: Article; // 这里是将我们在appcomponent定义的文章数组articles，在页面中遍历之后为article注入到这里
  constructor() {
  }
// 默认情况下， JavaScript会把click事件冒泡到所有父级组件中。
// 因为click事件被冒泡到了父级，浏览器就会尝试导航到这个空白链接，于是浏览器就重新刷新了。
// 解决方案：我们得让click的事件处理器返回false。这能确保浏览器不会尝试刷新页面。
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
// 这里这样做的原因是之前的做法违反了迪米特法则,也就是说article.component.ts 过多的了解了Article这个类的属性
// 而迪米特法则是指：一个对象对其他对象的结构或属性所作的假设应该越少越好，所以这里将之前的voteup 和 votedown的对Artile的属性修改方法
// 添加到了Article类中去，而这里只是去调用Article中的实际voteup和votedown方法

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
  ngOnInit() {
  }

}
