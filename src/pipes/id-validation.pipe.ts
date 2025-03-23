import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  transform(value: any) {
    const id = parseInt(value, 10);
    if (isNaN(id) || id <= 0) {
      throw new BadRequestException('ID harus berupa angka positif');
    }
    return id;
  }
}