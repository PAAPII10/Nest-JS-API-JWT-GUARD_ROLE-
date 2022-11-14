/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
  ) {}

  async findUserByEmail(email: string) {
    let user: User = await this.userRepo.findOne({ where: { email: email } });
    return user;
  }
}
