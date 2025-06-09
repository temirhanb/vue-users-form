<script setup lang="ts">
import { useUsersStore, type TUser } from "@/stores/usersStore";

const store = useUsersStore();

const handlerDeleteUser = (item: TUser) => {
  store.deleteUser(item.id);
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
          disabled
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          :value="user.mark.map(({ text }) => text).join('; ')"
        />
      </div>
      <div class="mx-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Тип записи:</span>
        <input
          disabled
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          :value="user.type"
        />
      </div>
      <div class="mx-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Логин:</span>
        <input
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          disabled
          :value="user.login"
        />
      </div>
      <div class="mx-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Пароль:</span>
        <input
          type="password"
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          disabled
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
