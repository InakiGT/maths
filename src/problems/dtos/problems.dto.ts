import { IsOptional, IsString } from '@nestjs/class-validator';

export class FilterProblemsDto {
  @IsOptional()
  @IsString()
  topic: string;
}
