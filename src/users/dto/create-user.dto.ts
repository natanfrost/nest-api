import { IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @MaxLength(40)
    @IsString()
    readonly name: string;

    @IsString({each: true})
    readonly tags: string[];
}
