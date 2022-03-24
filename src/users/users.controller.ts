import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

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
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return body;
    }
}
