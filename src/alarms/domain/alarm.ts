import { AlarmSeverity } from './value-objects/alarm-severity';

export class Alarm {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly severity: AlarmSeverity,
  ) {}
}
