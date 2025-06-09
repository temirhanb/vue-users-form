import { defineStore } from "pinia";

export type TUser = {
  id: number;
  mark: Array<{ text: string }>;
  type: string;
  login: string;
  password: string;
};
export type TNewUser = {
  mark: string;
  type: string;
  login: string;
  password: string;
};
interface IState {
  usersList: TUser[];
}
export const useUsersStore = defineStore("users", {
  state: (): IState => {
    return {
      usersList: [
        {
          id: 1,
          mark: [{ text: "James" }, { text: "Jons" }],
          type: "Local",
          login: "dan",
          password: "1234",
        },
        {
          id: 2,
          mark: [{ text: "James" }, { text: "Jons" }],
          type: "Local",
          login: "dan",
          password: "1234",
        },
        {
          id: 3,
          mark: [{ text: "James" }, { text: "Jons" }],
          type: "Local",
          login: "dan",
          password: "1234",
        },
        {
          id: 4,
          mark: [{ text: "James" }, { text: "Jons" }],
          type: "Local",
          login: "dan",
          password: "1234",
        },
      ],
    };
  },
  getters: {
    getUsersList: (state) => state.usersList,
  },
  actions: {
    deleteUser(payload: number) {
      this.usersList = this.usersList.filter((item) => item.id !== payload);
      console.log("payload", payload);
    },

    addUser(payload: TNewUser) {
      const id = new Date();
      const newUser: TUser = {
        id: Number(id),
        mark: payload.mark.split(";").map((item) => ({ text: item })),
        type: payload.type,
        password: payload.password,
        login: payload.login,
      };
      console.log("newUser", newUser);
      this.usersList.push(newUser);
    },
  },
});
