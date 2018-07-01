import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  // name: string; // added name property

  @Input() name: string; // 添加注解@Input，将name从父组件user-list.component中传入到这里
  constructor() {
    // this.name = 'Felipe'; // 采用上面的做法在页面上显示的是4个 Hello Felipe
    // 因为在user-list.component.html中用了user-item的组件标签，这意味着将user-item注入到了user-list中
    // 而这里写死了name属性的值，所以在页面上出现了4 个Hello Felipe
    // 解决方案：我们将this.name = 'Felipe';这段话注释掉，不能用这种传值的方法，引入@Input，当然除此之外html也要改
    // 要使用[]来将值传递到模板中
  }

  ngOnInit() {
  }

}
