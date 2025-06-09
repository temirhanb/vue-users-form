<script setup lang="ts"></script>

<template>
  <div class="flex justify-center flex-col mx-10 items-center mb-10">
    <div
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
          disabled
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          :value="''"
        />
      </div>
      <div class="ml-2 mr-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Тип записи:</span>
        <input
          disabled
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          :value="''"
        />
      </div>
      <div class="ml-2 mr-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Логин:</span>
        <input
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          disabled
          :value="''"
        />
      </div>
      <div class="ml-2 mr-2 mb-2 flex flex-col">
        <span class="mb-[2px]">Пароль:</span>
        <input
          class="border-[1px] outline-none pl-2 rounded border-blue-200"
          disabled
          :value="''"
        />
      </div>
    </div>
    <button class="border-2 p-4 border-emerald-400 w-[100%] rounded">
      <span>Добавить учетную запись</span>
    </button>
  </div>
</template>
