import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Blog } from './blog';
import 'rxjs/add/operator/toPromise';

const blogsUrl = './app/blog/blog.data.json';

@Injectable()
export class BlogService {

  constructor(private http: Http) { 
  }

  getBlogs(){
    /*
    return this.http
      .get(blogsUrl)
      .map((response: Response) => response.json())
      .catch(this._handleErrorObservable);*/
  }
/*
    _handleErrorObservable(err:any){
        console.log(err); //log this
        //throw(err);
        return Observable.of(err); // pass back for ux
    }
    */

}