import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "22f5a0a1-b93e-48af-a71d-d65c5c5dbbc8",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage} & count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
};

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`follow?page=${currentPage} & count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

export const authAPI = {
  me() {
    return instance.get("auth/me");
  },
};
