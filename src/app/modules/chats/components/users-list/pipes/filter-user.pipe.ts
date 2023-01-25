import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../../../models/chats.model';

@Pipe({
  name: 'filterUser',
})
export class FilterUserPipe implements PipeTransform {
  transform(users: User[], searchValue: string): User[] {
    return users.filter((user) => user.name.toLowerCase().includes(searchValue.toLowerCase()));
  }
}
