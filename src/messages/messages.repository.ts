import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MessageRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const found = messages[id];

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async findAll() {
    const contents = await readFile('./messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async createMessage(content: string) {
    const contents = await readFile('./messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = uuid();

    messages[id] = { id, content };

    await writeFile('./messages.json', await JSON.stringify(messages));

    return messages[id];
  }
}
