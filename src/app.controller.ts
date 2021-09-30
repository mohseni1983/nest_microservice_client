import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDto } from './message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(msg:string): string {
    const data:MessageDto={
      name:'Ali',
      family:'Mohseni'
    }
    return this.appService.getHello(data);
  }
}
