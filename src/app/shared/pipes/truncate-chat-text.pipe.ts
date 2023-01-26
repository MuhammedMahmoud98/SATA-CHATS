import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateChatText',
})
export class TruncateChatTextPipe implements PipeTransform {
  transform(value: string, truncateNumber: number): string {
    return `${value.slice(0, truncateNumber)}..`;
  }
}
