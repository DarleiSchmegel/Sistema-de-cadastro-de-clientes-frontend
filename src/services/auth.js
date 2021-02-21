export const TOKEN_KEY = "@airbnb-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  // const  username  = localStorage.getItem(username);
   localStorage.removeItem(TOKEN_KEY);
   //localStorage.removeItem(username);
};