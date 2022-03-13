import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectRequestCity'
})
export class SelectRequestCityPipe implements PipeTransform {

  transform(item: any, arg: any): any {
    if (arg === '') return item;
    const resultPost = [];
    for (const post of item) {
      if ((post.property.city.toLowerCase().indexOf(arg.toLowerCase()) > -1)) {
        resultPost.push(post);
      };
    };
    return resultPost;

  }

}
