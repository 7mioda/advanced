import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { AlarmEntity } from '../entities/alarm.entity';
import { AlarmMapper } from '../mappers/alarm.mapper';

export class OrmAlarmRepository implements AlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private readonly alarmRepository: Repository<AlarmEntity>,
  ) {}

  async findAll(): Promise<Alarm[]> {
    const entities = await this.alarmRepository.find();
    return entities.map((entity) => AlarmMapper.toDomain(entity));
  }
  async save(alarm: Alarm): Promise<Alarm> {
    const entity = await this.alarmRepository.save(
      AlarmMapper.toPersistence(alarm),
    );

    return AlarmMapper.toDomain(entity);
  }
}
