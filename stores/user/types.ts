import { UserTokens } from '~/utils/enums/user/UserTokens';

export interface IUser {
    id: number;
    [UserTokens.ACCESS]: string | undefined;
}
