import { Component } from '@angular/core';
import { Blog, BlogService } from './blog/index';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a><br>
      <a routerLink="/blogs" routerLinkActive="active">Blogs</a><br>

    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  count1 = 0;
  count2 = 0;
  url: string = "hello world";


  //save(ev: any): void {
  //    console.log("save called");
  //}
 // mark(ev: any): void {
   // console.log("mark called");
   // Observable.of(this.count1);
      // scan (reduce) to a stream of counts
      //.scan(count => this.count1 + 1, 0)
      // Set the count on an element each time it changes
      //.subscribe(count => this.count2 = this.count1);
/*
var myObservable = Observable.create(observer => {
  console.log("create observable");
  observer.next('foo');
  setTimeout(() => 
    observer.next('bar'), 1000);
    console.log("observer.next bar");
});
myObservable.subscribe(value => console.log("subscribe to " + value));  


}
*/
   constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    /*
            this.blogService.getBlogs()
            .subscribe(
                (items ) => this.blogStore = items,
                (err) => {console.log(err);}
            );*/

  }

}
