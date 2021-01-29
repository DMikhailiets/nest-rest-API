import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Request, Response } from 'express'
import { ProductService } from 'src/products/product-service/product-service.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {

    }
    // @Get()
    // @Redirect('https://google.com', 301)
    // getAll (@Req() req: Request, @Res() res: Response) {
    //     return 'getAll'
    // }
    @Get()
    getAll (): Promise<Product[]>{
        return this.productService.getAll()
    }
    @Get(':id')
    getOne (@Param('id') id: string): Promise<Product> {
        return this.productService.getById(id)
    }
    @Post ()
    @HttpCode(HttpStatus.CREATED)
    @Header('header', 'header-value')
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.create(createProductDto)
    }
    @Delete(':id')
    remove(@Param('id')id: string): Promise<Product>{
        return this.productService.remove(id)
    }
    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
        return this.productService.update(id, updateProductDto)
    }
}
