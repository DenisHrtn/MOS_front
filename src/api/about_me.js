import { request } from "./client";

export const getAboutMe = () => {
    return request('/api/information/users/info/');
};