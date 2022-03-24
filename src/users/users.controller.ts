import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('users')
export class UsersController {
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
}
