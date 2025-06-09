<script setup lang="ts">
import { useUsersStore, type TNewUser } from "@/stores/usersStore";
import { reactive, ref, watch, type Ref, watchEffect } from "vue";

type TErrors = {
  markError: string;
  loginError: string;
  passwordError: string;
};
const store = useUsersStore();

const showForm: Ref<boolean> = ref(false);

const handlerShowForm = () => {
  store.addUser()
};
const newUser: TNewUser = reactive({
  mark: "",
  type: "local",
  login: "",
  password: "",
});

const errors: Ref<TErrors> = ref({
  markError: "",
  loginError: "Логин обязательное поле к заполнению",
  passwordError: "Пароль обязательное поле к заполнению",
});

watchEffect( () => {
  newUser.mark.length > 50
    ? (errors.value.markError = "Максимальная длина 50 символов")
    : (errors.value.markError = "");

  newUser.login === ""
    ? (errors.value.loginError = "Логин обязательное поле к заполнению")
    : (errors.value.loginError = "");
  newUser.login.length > 100
    ? (errors.value.loginError = "Максимальная длина 100 символов")
    : (errors.value.loginError = "");

  newUser.password === ""
    ? (errors.value.passwordError = "Пароль обязательное поле к заполнению")
    : (errors.value.passwordError = "");
  newUser.password.length > 100
    ? (errors.value.passwordError = "Максимальная длина 100 символов")
    : (errors.value.passwordError = "");
});

console.log("newUser", newUser);
</script>

<template>
  <div class="flex justify-center flex-col mx-10 items-center mb-10">
    <div
      v-if="showForm"
      class="w-[100%] border-2 flex flex-col my-2 rounded border-emerald-300 shadow-md"
    >
      <div class="m-2 flex flex-col">
        <div class="flex items-center mb-[2px]">
          <span>Метки:</span>
          <div class="w-[24px] h-[24px]">
            <img src="./../assets/question-icon.svg" alt="" />
          </div>
        </div>
        <input
          maxlength="100"
          :class="{ 'border-red-500': errors.markError !== '' }"
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          v-model="newUser.mark"
        />
        <span v-if="errors.markError !== ''" class="text-red-500"
          >*{{ errors.markError }}</span
        >
      </div>
      <div class="ml-2 mr-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Тип записи:</span>
        <select
          v-model="newUser.type"
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
        >
          <option value="local">Локальная</option>
          <option value="ldap">LDAP</option>
        </select>
      </div>
      <div class="ml-2 mr-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Логин:</span>
        <input
          :class="{ 'border-red-500': errors.loginError !== '' }"
          v-model="newUser.login"
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
        />
        <span v-if="errors.loginError !== ''" class="text-red-500">
          *{{ errors.loginError }}
        </span>
      </div>
      <div v-if="newUser.type !== 'ldap'" class="ml-2 mr-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Пароль:</span>
        <input
          :class="{ 'border-red-500': errors.passwordError !== '' }"
          v-model="newUser.password"
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
        />
        <span v-if="errors.passwordError !== ''" class="text-red-500">
          *{{ errors.passwordError }}
        </span>
      </div>
    </div>
    <button
      @click="handlerShowForm"
      class="border-2 p-4 border-emerald-400 w-[100%] rounded"
    >
      <span class="text-emerald-500">Добавить учетную запись</span>
    </button>
  </div>
</template>
