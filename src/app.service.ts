import { Injectable, Logger } from '@nestjs/common';
import {ClientProxy,ClientProxyFactory,Transport } from '@nestjs/microservices'

@Injectable()
export class AppService {
  private logger=new Logger('Client')
  private client: ClientProxy;
  constructor(){
    this.client=ClientProxyFactory.create({
      transport:Transport.TCP,
      options:{
        host:'localhost',
        port:9922,

      }
    })
  }
   getHello(msg:string): any {
     this.logger.log('Client send to microservice')

    return  this.client.send<string,string>('hello',msg);
  }
}
