import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthGuard } from './auth.guard';
import { JWTGuard } from './jwt.guard';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [AuthGuard, JWTGuard],
  exports: [],
})
export class AuthModule {}
