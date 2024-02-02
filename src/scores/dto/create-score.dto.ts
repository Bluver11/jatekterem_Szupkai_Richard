import { IsDefined, IsInt, IsNotEmpty, } from "class-validator"

export class CreateScoreDto {
  
  @IsNotEmpty({message:'A név megadása kötelező!'})

  name:string
  @IsDefined({message: 'A pont megadása kötelező!'})
  @IsInt()
  points:number
}

