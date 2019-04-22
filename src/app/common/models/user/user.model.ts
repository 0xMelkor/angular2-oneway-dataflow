import { UserType } from './user-type.enum';

export interface User {
    type: UserType;
    accounts: string[];
}
