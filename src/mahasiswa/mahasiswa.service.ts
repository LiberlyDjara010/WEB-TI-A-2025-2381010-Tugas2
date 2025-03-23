import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { Mahasiswa } from './entities/mahasiswa.entity';

@Injectable()
export class MahasiswaService {
  private mahasiswas: Mahasiswa[] = [];
  private idCounter = 1;

  create(createMahasiswaDto: CreateMahasiswaDto): Mahasiswa {
    const mahasiswa = {
      id: this.idCounter++,
      ...createMahasiswaDto,
    };
    this.mahasiswas.push(mahasiswa);
    return mahasiswa;
  }

  findAll(): Mahasiswa[] {
    return this.mahasiswas;
  }

  findOne(id: number): Mahasiswa {
    const mahasiswa = this.mahasiswas.find(m => m.id === id);
    if (!mahasiswa) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak ditemukan`);
    }
    return mahasiswa;
  }

  update(id: number, updateMahasiswaDto: UpdateMahasiswaDto): Mahasiswa {
    const index = this.mahasiswas.findIndex(m => m.id === id);
    if (index === -1) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak ditemukan`);
    }
    
    this.mahasiswas[index] = {
      ...this.mahasiswas[index],
      ...updateMahasiswaDto,
    };
    
    return this.mahasiswas[index];
  }

  remove(id: number): { message: string } {
    const index = this.mahasiswas.findIndex(m => m.id === id);
    if (index === -1) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak ditemukan`);
    }
    
    this.mahasiswas.splice(index, 1);
    return { message: `Mahasiswa dengan ID ${id} berhasil dihapus` };
  }
}
