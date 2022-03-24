import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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

    findAll() {
        return this.users;
    }

    findOne(id: string) {
        const user = this.users.find((user) => user.id === Number(id));

        if (!user) {
            throw new HttpException(`User ID: ${id} not found`, HttpStatus.NOT_FOUND);
        }
    }

    create(userDataDto: User) {
        this.users.push(userDataDto);
    }

    update(id: string, userDataDto: User) {
        const index = this.users.findIndex(user => user.id === Number(id));

        this.users[index] = userDataDto;
    }

    remove(id: string) {
        const index = this.users.findIndex(user => user.id === Number(id));

        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }
}
