import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mock__configService } from '../../specs/mocks/mock.config.service';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: ConfigService,
          useValue: mock__configService,
        },
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('💾 Create', () => {
    it('should be defined', () => {
      expect(service.create).toBeDefined();
    });
  });

  describe('🔍 Find All', () => {
    it('should be defined', () => {
      expect(service.findAll).toBeDefined();
    });
  });

  describe('🔍 Find One', () => {
    it('should be defined', () => {
      expect(service.findOne).toBeDefined();
    });
  });

  describe('📝 Update', () => {
    it('should be defined', () => {
      expect(service.update).toBeDefined();
    });
  });

  describe('🗑 Delete', () => {
    it('should be defined', () => {
      expect(service.remove).toBeDefined();
    });
  });
});
