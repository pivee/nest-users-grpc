import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { IUser } from './entities/user.interface';

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService');

  // TEST: Mocks
  private users: IUser[] = [
    {
      email: 'piveedj@gmail.com',
      username: 'pivee',
      firstName: 'Pivithuru',
      lastName: 'Jayakody',
    },
    {
      email: 'sahanpd@gmail.com',
      username: 'sahan',
      firstName: 'Sahan',
      lastName: 'Dharmawardhana',
    },
    {
      email: 'samantha@gmail.com',
      username: 'samantha',
      firstName: 'Samantha',
      lastName: 'Samaradiwakara',
    },
  ];

  create(createUserDto: CreateUserDto) {
    const newUser = new User({
      email: createUserDto.email,
      username: createUserDto.username,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      address: createUserDto.address,
      phone: createUserDto.phone,
    });
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.username === id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const indexToUpdate = this.users.findIndex((user) => user.username === id);
    if (indexToUpdate < 0) {
      throw new NotFoundException();
    } else {
      const existingData = this.users[indexToUpdate];
      const updatedData = {
        ...existingData,
        ...updateUserDto,
      };
      this.users[indexToUpdate] = updatedData;
      return updatedData;
    }
  }

  remove(id: string) {
    const indexToDelete = this.users.findIndex((user) => user.username === id);
    if (indexToDelete < 0) {
      throw new NotFoundException();
    } else {
      this.users.splice(indexToDelete, 1);
      return true;
    }
  }
}
