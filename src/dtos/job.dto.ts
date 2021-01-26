import { ApiProperty } from "@nestjs/swagger";


export class JobDTO {
    @ApiProperty({
        type: String,
        description: 'Le titre du job',
        default: ''
    })
    readonly title:string;
    @ApiProperty({
        type: Number,
        description: 'Le salaire du job',
        default: 3000
    })
    readonly salaire: number;
}