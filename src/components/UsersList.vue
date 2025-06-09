<script setup lang="ts">
import { useUsersStore, type TUser } from "@/stores/usersStore";
import { ref } from "vue";

const store = useUsersStore();

const markInput = ref("");

console.log("markInput", markInput);
const handlerDeleteUser = (item: TUser) => {
  store.deleteUser(item.id);
};

const handlerTest = (item: TUser, text: string, input: string) => {
  switch (input) {
    case "mark": {
      const newUser: TUser = {
        id: item.id,
        mark: text.split(";").map((item: string) => ({ text: item })),
        type: item.type,
        login: item.login,
        password: item.password,
      };
      return store.editUser(newUser);
    }
    case "type": {
      console.log(123);
      const newUser: TUser = {
        id: item.id,
        mark: item.mark,
        type: text,
        login: item.login,
        password: item.password,
      };
      return store.editUser(newUser);
    }
    case "login": {
      const newUser: TUser = {
        id: item.id,
        mark: item.mark,
        type: item.type,
        login: text,
        password: item.password,
      };
      return store.editUser(newUser);
    }
    case "password": {
      const newUser: TUser = {
        id: item.id,
        mark: item.mark,
        type: item.type,
        login: item.login,
        password: text,
      };
      return store.editUser(newUser);
    }
  }
};
</script>

<template>
  <div class="grid grid-cols-1 justify-center mt-6 mx-10 items-center">
    <div
      class="border-2 flex flex-col my-2 rounded border-blue-200 shadow-md"
      v-for="user in store.usersList"
      :key="`${user.id}`"
    >
      <div class="m-2 flex flex-col shadow">
        <div class="flex items-center mb-[2px]">
          <span>Метки:</span>
          <div class="w-[24px] h-[24px]">
            <img src="./../assets/question-icon.svg" alt="" />
          </div>
        </div>
        <input
          @input="(event) => handlerTest(user, event.target.value, 'mark')"
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          :value="user.mark.map(({ text }) => text).join(';')"
        />
      </div>
      <div class="mx-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Тип записи:</span>
        <select
          v-model="user.type"
          @input="(event) => handlerTest(user, event.target.value, 'type')"
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
        >
          <option value="Local">Локальная</option>
          <option value="LDAP">LDAP</option>
        </select>
      </div>
      <div class="mx-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Логин:</span>
        <input
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          @input="(event) => handlerTest(user, event.target.value, 'login')"
          :value="user.login"
        />
      </div>
      <div v-if="user.type !== 'ldap'" class="mx-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Пароль:</span>
        <input
          type="password"
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          @input="(event) => handlerTest(user, event.target.value, 'password')"

          :value="user.password"
        />
      </div>
      <button
        @click="handlerDeleteUser(user)"
        class="border-2 mx-2 hover:cursor-pointer mb-2 p-4 border-red-400 rounded"
      >
        <span class="text-red-500">Удалить учетную запись</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
