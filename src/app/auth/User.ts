export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  roles: string[];
}

export enum Role {
  APPRENANT= 'APPRENANT',
  ADMIN= 'ADMIN',
  FORMATEUR= 'FORMATEUR',
}
 
