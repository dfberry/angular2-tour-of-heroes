import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Blog } from './blog';
import { BlogService } from './blog.service';

@Component({
  moduleId: module.id,
  selector: 'my-blogs',
  templateUrl: 'blog.component.html'
})
export class BlogsComponent implements OnInit {
  @Input() blogs: Blog[];
  error: any;

  constructor() {
  }

  ngOnInit(): void {

  }
}
