import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectRequestOT'
})
export class SelectRequestOTPipe implements PipeTransform {

  transform(item: any, arg: any): any {
    if (arg === '') return item;
    const resultPost = [];
    for (const post of item) {
      if ((post.property.offerType.toLowerCase().indexOf(arg.toLowerCase()) > -1)) {
        resultPost.push(post);
      };
    };
    return resultPost;

  }

}
