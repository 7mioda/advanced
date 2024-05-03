import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { AlarmEntity } from '../entities/alarm.entity';
import { AlarmMapper } from '../mappers/alarm.mapper';

export class InMemoryAlarmRepository implements AlarmRepository {
  private readonly alarms = new Map<string, AlarmEntity>();
  constructor() {}

  async findAll(): Promise<Alarm[]> {
    const entities = Array.from(this.alarms.values());
    return entities.map((entity) => AlarmMapper.toDomain(entity));
  }
  async save(alarm: Alarm): Promise<Alarm> {
    this.alarms.set(alarm.id, AlarmMapper.toPersistence(alarm));
    const entity = this.alarms.get(alarm.id);
    return AlarmMapper.toDomain(entity);
  }
}
