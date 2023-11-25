const version = process.env.API_VERSION || "v1";
const type = ["protected", "private"];
export const getUsers = `/api/${version}/${type[0]}/user`;
export const addPhoto = `/api/${version}/${type[0]}/upload`;
export const sendEmail = `/api/${version}/${type[0]}/ses`;
