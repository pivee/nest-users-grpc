import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IAllUsersText } from './grpc/users-grpc.interface';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UsersController', 'CreateUser')
  create(@Payload() createUserDto: CreateUserDto) {
    return { data: this.usersService.create(createUserDto) };
  }

  @GrpcMethod('UsersController', 'FindAllUsers')
  findAll(): IAllUsersText {
    return { data: this.usersService.findAll() };
  }

  @MessagePattern('findOneUser')
  findOne(@Payload() id: string) {
    return this.usersService.findOne(id);
  }

  @MessagePattern('updateUser')
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern('removeUser')
  remove(@Payload() id: string) {
    return this.usersService.remove(id);
  }
}
