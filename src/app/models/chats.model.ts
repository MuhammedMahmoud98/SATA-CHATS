export class Message {
  body?: string;

  time?: Date;

  personal?: boolean = true;
}

export interface User {
  id?: number;
  name?: string;
  lastSeen?: Date;
  outerMessage?: string;
  messages?: Message[];
  image?: string;
}
