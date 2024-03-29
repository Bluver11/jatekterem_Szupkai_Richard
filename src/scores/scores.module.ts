import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ScoresController],
  providers: [ScoresService,PrismaService],
})
export class ScoresModule {}
