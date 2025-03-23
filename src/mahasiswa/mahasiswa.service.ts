import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { Mahasiswa } from './entities/mahasiswa.entity';

@Injectable()
export class MahasiswaService {
  private mahasiswa: Mahasiswa[] = [];
  private idCounter = 1;

  create(createMahasiswaDto: CreateMahasiswaDto): Mahasiswa {
    const mahasiswa = {
      id: this.idCounter++,
      ...createMahasiswaDto,
    };
    this.mahasiswa.push(mahasiswa);
    return mahasiswa;
  }

  findAll(): Mahasiswa[] {
    return this.mahasiswa;
  }

  findOne(id: number): Mahasiswa {
    const mahasiswa = this.mahasiswa.find(m => m.id === id);
    if (!mahasiswa) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak ditemukan`);
    }
    return mahasiswa;
  }

  update(id: number, updateMahasiswaDto: UpdateMahasiswaDto): Mahasiswa {
    const index = this.mahasiswa.findIndex(m => m.id === id);
    if (index === -1) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak ditemukan`);
    }
    
    this.mahasiswa[index] = {
      ...this.mahasiswa[index],
      ...updateMahasiswaDto,
    };
    
    return this.mahasiswa[index];
  }

  remove(id: number): { message: string } {
    const index = this.mahasiswa.findIndex(m => m.id === id);
    if (index === -1) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak ditemukan`);
    }
    
    this.mahasiswa.splice(index, 1);
    return { message: `Mahasiswa dengan ID ${id} berhasil dihapus` };
  }
}