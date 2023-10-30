import { defineStore } from 'pinia';
import { IUser } from '~/stores/user/types';
import { UserTokens } from '~/utils/enums/user/UserTokens';

interface IState {
    user: IUser;
}

export const userStore = defineStore({
    id: 'user',
    state: (): IState => {
        return {
            user: {
                id: 0,
                [UserTokens.ACCESS]: undefined,
            },
        };
    },
    getters: {
        isAuthorize: (state): boolean => state.user[UserTokens.ACCESS] !== undefined,
    },
    actions: {},
    persist: true,
});
