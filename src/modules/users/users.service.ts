import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './entities/user.interface';

@Injectable()
export class UsersService {
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
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
