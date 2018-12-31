import { Api } from './Api';
import { ApiResponseData } from '@/tools/types/api';

export enum SpecialAccountIdentifiers {
    Me = 'me',
    Admin = 'admin',
}

export default {
    async fetchAccounts() {
        const res = await Api.instance.get<ApiResponseData>('accounts/all');
        return res.data;
    },

    async fetchBasicAccountInfo(accountId: string | SpecialAccountIdentifiers) {
        const res = await Api.instance.get<ApiResponseData>(`accounts/${accountId}/info/basic`);
        return res.data;
    },

    async fetchAccountRoles() {
        const res = await Api.instance.get<ApiResponseData>('accounts/roles');
        return res.data;
    },

    async updateAccountInfo(
        accountId: string | SpecialAccountIdentifiers,
        accountInfo: { username: string; name: string }
    ) {
        const res = await Api.instance.put<ApiResponseData>(
            `accounts/${accountId}/info`,
            accountInfo
        );
        return res.data;
    },
};