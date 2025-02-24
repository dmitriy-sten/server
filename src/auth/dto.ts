import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class SignUpBodyDto {
    @ApiProperty({
        example: 'test@gmail.com'
    })
    @IsEmail()
    email: string

    @ApiProperty({
        example: '1234'
    })
    @IsNotEmpty()
    password: string
}


export class SignIpBodyDto {
    @ApiProperty({
        example: 'test@gmail.com'
    })
    @IsEmail()
    email: string

    @ApiProperty({
        example: '1234'
    })
    @IsNotEmpty()
    password: string
}


export class GetSessionDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    email: string


    @ApiProperty()
    iat: number

    @ApiProperty()
    exp: number
}