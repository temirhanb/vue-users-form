<script setup lang="ts">
import { useUsersStore } from "@/stores/usersStore";

const store = useUsersStore();

const handlerShowForm = () => {
  store.addUser();
};
</script>

<template>
  <div class="flex justify-center flex-col mx-10 items-center mb-10">
    <button
      @click="handlerShowForm"
      class="border-2 p-4 border-emerald-400 w-[100%] rounded"
    >
      <span class="text-emerald-500">Добавить учетную запись</span>
    </button>
  </div>
</template>
