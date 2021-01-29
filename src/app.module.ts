import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://dm:998BrfMax21@cluster0.gtmir.mongodb.net/products?retryWrites=true&w=majority')
  ],
})
export class AppModule {}
