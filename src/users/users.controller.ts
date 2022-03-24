import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('list')
    findAll() {
        return 'users list';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `user number ${id}`
    }

    @Post()
    create(@Body() body) {
        return body;
    }
}
