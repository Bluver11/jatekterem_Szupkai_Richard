import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { PrismaService } from 'src/prisma.service';
import { take } from 'rxjs';

@Injectable()
export class ScoresService {

  constructor(private readonly db: PrismaService){}


  create(createScoreDto: CreateScoreDto) {
    return this.db.scores.create({
      data: createScoreDto
    });
  }

  findAll() {
    return this.db.scores.findMany();
  }


  findOne(id: number) {
    return this.db.scores.findFirstOrThrow({
        where: { id }
      });
  }

  update(id: number, updateScoreDto: UpdateScoreDto) {
    return this.db.scores.update({
      data: updateScoreDto,
      where: {id}
    });
  }

  remove(id: number) {
    return this.db.scores.delete({
      where: {id}
    });
  }

  findMore(limit:number){
    return this.db.scores.findMany({
     orderBy:{ points: 'desc'},
     take:limit

    })
  }

  findMoreDaily(){
    const today = new Date()
    today.setHours(0,0,0,0)
    return this.db.scores.findMany({
   orderBy:{
    points:'desc'
   },
   take:10,
   where:{
    time:{
      gte:today
    }
   }
    })
  }

}
