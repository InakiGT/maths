import { Injectable } from '@nestjs/common';

import { FilterProblemsDto } from '../dtos/problems.dto';

@Injectable()
export class ProblemsService {
  findAll(params?: FilterProblemsDto) {
    return {
      title: 'example',
      description: 'Just an example',
      solution: 23.12,
      params,
    };
  }
}
