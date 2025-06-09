import { defineStore } from "pinia";

export type TUser = {
  id: number;
  mark: Array<{ text: string }>;
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
      usersList: [],
    };
  },
  getters: {},
  actions: {
    getUsersList(state: TUser[]) {
      console.log(1);
      this.usersList = state;
    },
    deleteUser(payload: number) {
      this.usersList = this.usersList.filter((item) => item.id !== payload);
    },

    addUser() {
      const id = new Date();
      const newUser: TUser = {
        id: Number(id),
        mark: [{ text: "" }],
        type: "Local",
        password: "",
        login: "",
      };
      this.usersList.push(newUser);
    },
    editUser(payload: TUser) {
      const updatedIdx = this.usersList.findIndex(
        ({ id }) => id === payload.id
      );
      this.usersList[updatedIdx] = payload;
    },
  },
});
