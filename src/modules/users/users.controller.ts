import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserIdDto } from './dto/user-id.dto';
import { IAllUsers } from './grpc/users-grpc.interface';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UsersController', 'CreateUser')
  async create(@Payload() createUserDto: CreateUserDto) {
    return { data: await this.usersService.create(createUserDto) };
  }

  @GrpcMethod('UsersController', 'FindAllUsers')
  async findAll(): Promise<IAllUsers> {
    return { data: await this.usersService.findAll() };
  }

  @GrpcMethod('UsersController', 'FindUserById')
  async findOne(@Payload() userIdDto: UserIdDto) {
    return { data: await this.usersService.findOne(userIdDto.id) };
  }

  @GrpcMethod('UsersController', 'UpdateUser')
  async update(@Payload() updateUserDto: UpdateUserDto) {
    return {
      data: await this.usersService.update(updateUserDto.id, updateUserDto),
    };
  }

  @GrpcMethod('UsersController', 'DeleteUser')
  async remove(@Payload() userIdDto: UserIdDto) {
    return { ok: await this.usersService.remove(userIdDto.id) };
  }
}
