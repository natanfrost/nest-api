import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get('list')
    findAll(@Res() response) {
        return response.status(HttpStatus.OK).send('users list');
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `user number ${id}`
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return body;
    }

    @Patch(':id')   
    update(@Param('id') id: string, @Body() body) {
        return `updating user ${id}`
    }

    @Delete(':id') 
    remove(@Param('id') id: string) {
        return `removing user with id ${id}`;
    }   
}
