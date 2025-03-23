import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    UseGuards,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { MahasiswaService } from './mahasiswa.service';
  import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
  import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
  import { AuthGuard } from '../guards/auth.guard';
  import { IdValidationPipe } from '../pipes/id-validation.pipe';
  
  @Controller('mahasiswa')
  export class MahasiswaController {
    constructor(private readonly mahasiswaService: MahasiswaService) {}
  
    @Post()
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    create(@Body() createMahasiswaDto: CreateMahasiswaDto) {
      return this.mahasiswaService.create(createMahasiswaDto);
    }
  
    @Get()
    findAll() {
      return this.mahasiswaService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', IdValidationPipe) id: number) {
      return this.mahasiswaService.findOne(id);
    }
  
    @Put(':id')
    @UseGuards(AuthGuard)
    update(
      @Param('id', IdValidationPipe) id: number,
      @Body() updateMahasiswaDto: UpdateMahasiswaDto,
    ) {
      return this.mahasiswaService.update(id, updateMahasiswaDto);
    }
  
    @Delete(':id')
    @UseGuards(AuthGuard)
    remove(@Param('id', IdValidationPipe) id: number) {
      return this.mahasiswaService.remove(id);
    }
  }