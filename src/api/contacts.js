import { request } from "./client";

export const getContacts = () => {
    return request('/api/information/contacts/');
};
