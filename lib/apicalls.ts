const version = process.env.API_VERSION || "v1";
const type = ["protected", "private"];
const baseApi = `/api/${version}/${type[0]}`;

export const getUsers = `${baseApi}/user`;
export const addPhoto = `${baseApi}/upload`;
export const sendEmail = `${baseApi}/ses`;
export const clearance = `${baseApi}/clearance`;
export const requirements = `${baseApi}/requirements`;
