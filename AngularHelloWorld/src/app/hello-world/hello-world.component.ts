import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
 // templateUrl: './hello-world.component.html',这意味着我们将从该组件的同目录的hello-world.component.html文件中加载模板
  template: `<p> hello-world works inline!</p>` , // 与上类似，只不过这里不加载html，只加载这里写死的<p>的内容
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
