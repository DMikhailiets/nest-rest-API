import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { Product, ProductDocument } from '../schemas/product.schema';
import { Model } from 'mongoose'
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor (@InjectModel(Product.name) private productModel: Model<ProductDocument> ) {

    }
    private products = []

    async getAll(): Promise<Product[]> {
        return this.productModel.find({}).exec()
    }
    async getById(id: string): Promise<Product> {
        return this.productModel.findById(id)
    }
    async create(productDto: CreateProductDto) {
        const newProduct = new this.productModel(productDto)
        return newProduct.save()
    }
    async remove(id: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(id)
    }
    async update(id: string, productDto: UpdateProductDto): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, productDto, {new: true})
    }
}
