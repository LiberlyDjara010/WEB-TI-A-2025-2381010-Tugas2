import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { MahasiswaController } from './mahasiswa/mahasiswa.controller';

@Module({
  imports: [MahasiswaModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(MahasiswaController);
  }
}
