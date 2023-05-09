import { Controller, Get, Query } from '@nestjs/common';

import { ProblemsService } from '../services/problems.service';
import { FilterProblemsDto } from '../dtos/problems.dto';

@Controller('problems')
export class ProblemController {
  constructor(private problemsService: ProblemsService) {}

  @Get()
  findAll(@Query() params: FilterProblemsDto) {
    return this.problemsService.findAll(params);
  }
}
