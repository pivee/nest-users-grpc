import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserIdDto } from './dto/user-id.dto';
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

  @GrpcMethod('UsersController', 'FindUserById')
  findOne(@Payload() userIdDto: UserIdDto) {
    return { data: this.usersService.findOne(userIdDto.id) };
  }

  @GrpcMethod('UsersController', 'UpdateUser')
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @GrpcMethod('UsersController', 'DeleteUser')
  remove(@Payload() userIdDto: UserIdDto) {
    return this.usersService.remove(userIdDto.id);
  }
}
