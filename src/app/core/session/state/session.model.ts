import { ID } from '@datorama/akita';
  
export type Session = {
  ID: string;
  name: string;
  loggedIn: boolean;
}

/**
 * A factory function that creates Session
 * @param params
 */
export function createSession(params: Partial<Session>) {
  return {
    name: '',
    loggedIn: false
  } as Session;
}
