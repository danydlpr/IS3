import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(item: any, arg: any): any {
    if (arg === '') return item;
    const resultPost = [];
    for (const post of item) {
      if (post.type.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPost.push(post);
      }
    }
    return resultPost;

  }
}

