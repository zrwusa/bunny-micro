// src/app.helpers.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'WELCOME_MESSAGE' };
  }
}
