import { MessageRepository } from './messages.repository';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessageRepository],
})
export class MessagesModule {}
