import { SessionData } from 'express-session';

declare module 'express-session' {
  interface Session {
    user:user;
    authorized: boolean;
    // Puedes agregar más propiedades si es necesario
  }
}

interface user {
  email:string,
  userName:string,
  password?:string
  admin:boolean
}