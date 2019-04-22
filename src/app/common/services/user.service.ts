import { Injectable } from '@angular/core';
import { User } from '../models/user/user.model';
import { UserType } from '../models';

@Injectable()
export class UserService {

    constructor() { }

    getUser(): User {
        return {
            type: UserType.TYPE_1,
            accounts: [
                'IT73A0100501000000000041XXX',
                'IT75A0100501600000000817XXX',
                'IT02R0100501600000000818XXX',
                'IT80P0100501600000000819XXX',
                'IT57T0100501600000000830XXX',
                'IT46U0101015200451402476XXX',
                'IT12G0200802034000000678XXX',
                'IT03R0200802199000000789XXX',
                'FR03R0200802199000000789XXX'
            ]
        };
    }
}
