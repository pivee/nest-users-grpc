import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserNotFoundException } from './exceptions/user-not-found.exception';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    this.logger.verbose('Create User');
    const newUser = new User({
      email: createUserDto.email,
      username: createUserDto.username,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      address: createUserDto.address,
      phone: createUserDto.phone,
    });
    const createdUser = await this.usersRepository.create(newUser);
    await this.usersRepository.save(createdUser);
    return createdUser;
  }

  async findAll() {
    this.logger.verbose('List all Users');
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    this.logger.verbose(`Find one User by Id "${id}"`);
    return await this.usersRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const existingData = await this.usersRepository.findOne(id);
    if (!existingData) {
      throw new UserNotFoundException(id);
    } else {
      const updatedData = {
        ...existingData,
        ...updateUserDto,
      };
      await this.usersRepository.update(id, updatedData);
      return await this.usersRepository.findOne(id);
    }
  }

  async remove(id: string) {
    const existingData = await this.usersRepository.findOne(id);
    if (!existingData) {
      throw new UserNotFoundException(id);
    } else {
      await this.usersRepository.update(id, {
        isDeleted: true,
      });
      await this.usersRepository.softDelete(id);
      return true;
    }
  }
}
