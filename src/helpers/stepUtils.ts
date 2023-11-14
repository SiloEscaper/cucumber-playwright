import { ICustomWorld } from '../support/custom-world';

interface ILogReport {
  log: string;
  context: ICustomWorld;
}

export async function addLog({ log, context }: ILogReport): Promise<void> {
  await context.attach(log, 'text/plain');
  // eslint-disable-next-line no-console
  await console.log(log);
}
