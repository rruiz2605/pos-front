import { Pipe, PipeTransform } from '@angular/core';
import { ICodeValue } from '@models/general';

@Pipe({
  name: 'fromList',
  standalone: true
})
export class FromListPipe implements PipeTransform {

  transform(code: string, list: ICodeValue[]): unknown {
    return list.find(item => item.code === code)?.value || code;
  }

}
