import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectRequestDep'
})
export class SelectRequestDepPipe implements PipeTransform {

  transform(item: any, arg: any): any {
    if (arg === '') return item;
    const resultPost = [];
    for (const post of item) {
      if ((post.property.department.toLowerCase().indexOf(arg.toLowerCase()) > -1)) {
        resultPost.push(post);
      };
    };
    return resultPost;

  }

}
