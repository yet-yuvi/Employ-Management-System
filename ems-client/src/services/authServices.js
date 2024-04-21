// import Cookies from "js-cookie";
// import api from "../Axios";
// import { authAPI } from "../utils/apiEndpoints";
// import { token } from "../utils/enums";

// const setTokens = (accessToken, refreshToken) => {
//   api.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
//   Cookies.set(token.ACCESS, accessToken);
//   Cookies.set(token.REFRESH, refreshToken);
// };

// const getAccess = async () => {
//   try {
//     const accessToken = Cookies.get(token.ACCESS);
//     const refreshToken = Cookies.get(token.REFRESH);
//     if (accessToken && refreshToken) {
//       api.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
//       const tokens = await api.post(authAPI.LOGIN, {
//         refreshToken,
//         type: "refresh",
//       });
//       setTokens(tokens.data.accessToken, tokens.data.refreshToken);
//       return tokens.data.user;
//     } else {
//       return null;
//     }
//   } catch (err) {
//     return null;
//   }
// };

// export {
//     getAccess,

// }
