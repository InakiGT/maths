import { Module } from '@nestjs/common';
import { ProblemsService } from './services/problems.service';
import { ProblemController } from './controllers/problems.controller';

@Module({
  providers: [ProblemsService],
  controllers: [ProblemController],
})
export class ProblemsModule {}
