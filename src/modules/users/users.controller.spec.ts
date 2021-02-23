import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  describe('CreateUser', () => {
    it('should be defined', () => {
      expect(controller.create).toBeDefined();
    });
  });

  describe('FindAllUsers', () => {
    it('should be defined', () => {
      expect(controller.findAll).toBeDefined();
    });
  });

  describe('FindUserById', () => {
    it('should be defined', () => {
      expect(controller.findOne).toBeDefined();
    });
  });

  describe('FindUserById', () => {
    it('should be defined', () => {
      expect(controller.findOne).toBeDefined();
    });
  });

  describe('UpdateUser', () => {
    it('should be defined', () => {
      expect(controller.update).toBeDefined();
    });
  });

  describe('DeleteUser', () => {
    it('should be defined', () => {
      expect(controller.remove).toBeDefined();
    });
  });
});
