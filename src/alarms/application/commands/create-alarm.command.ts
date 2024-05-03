export class CreateAlarmCommand {
  constructor(
    readonly name: string,
    readonly severity: string,
  ) {}
}
