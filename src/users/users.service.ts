import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 1,
            name: 'Robert Garcia',
            tags: ['node.js', 'nest.js', 'javascript']
        },
    ];

}
