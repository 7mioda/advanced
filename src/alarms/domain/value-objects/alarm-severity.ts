export class AlarmSeverity {
  public constructor(readonly value: 'critical' | 'low' | 'medium' | 'high') {}

  isEqual(value: 'critical' | 'low' | 'medium' | 'high'): boolean {
    return this.value === value;
  }
}
