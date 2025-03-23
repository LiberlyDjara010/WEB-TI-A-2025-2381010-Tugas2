import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMahasiswaDto {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  jurusan: string;

  @IsString()
  @IsNotEmpty()
  fakultas: string;
}