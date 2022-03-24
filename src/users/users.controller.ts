import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get('list')
    findAll(@Res() response) {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() body: User) {
        return this.usersService.create(body);
    }

    @Patch(':id')   
    update(@Param('id') id: string, @Body() body: User) {
        return this.usersService.update(id, body);
    }

    @Delete(':id') 
    remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }   
}
