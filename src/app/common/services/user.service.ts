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
                'IT73A0100501000000000041000',
                'IT75A0100501600000000817228',
                'IT02R0100501600000000818311',
                'IT80P0100501600000000819673',
                'IT57T0100501600000000830463',
                'IT46U0101015200451402476853',
                'IT12G0200802034000000678567',
                'IT03R0200802199000000789999'
            ]
        };
    }
}
