export interface UserType {
  typeId?: number;
  job?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  userId?: number;
  userName?: string;
  password?: string;
  typeId?: number;
  createdAt?: string;
  updatedAt?: string;
  UserType?: UserType;
}

export interface UserPayload {
  userName?: string;
  password?: string;
}
