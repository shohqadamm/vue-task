<template>
  <div class="flex mx-8 my-8">
    <div class="w-4/6">
      <Table />
    </div>
    <div class="p-2 bg-white rounded ml-2 w-1/6">
      <h1 class="text-">Number Check</h1>
      <div class="flex justify-between flex-col">
        <div class="flex justify-between border-b-2 border-indigo-600"><span class="font-bold">All</span> <span>0</span></div>
        <div class="flex justify-between"><span>Received</span> <span>0</span></div>
        <div class="flex justify-between"><span>Deal</span> <span>0</span></div>
      </div>
      <div class="flex justify-between mt-1 ">
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3"><Icon icon="bi:trash" color="red" /></span>
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3"><Icon icon="ant-design:plus-outlined" /></span>
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3"><Icon icon="akar-icons:minus" /></span>
      </div>
       <div class="flex justify-between mt-1">
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">1</span>
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">2</span>
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">3</span>
      </div>
        <div class="flex justify-between mt-1 ">
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">4</span>
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">5</span>
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">6</span>
      </div>
        <div class="flex justify-between mt-1 ">
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">7</span>
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">8</span>
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">9</span>
      </div>
        <div class="flex justify-between mt-1 ">
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">0</span>
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5">.</span>
        <span class="bg-slate-200 border-2 cursor-pointer rounded text-3xl  border-black p-3 px-5"><Icon icon="fa6-solid:delete-left" /></span>
      </div>
      <div class="w-full bg-indigo-400 text-white py-3 text-center mt-2 cursor-pointer" @click="alert('payment successfull')" >PAY</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
import Table from "@/components/Table.vue";

export default {
  name: "Dashboard",
  data() {
    return {};
    // end chart data line
  },
  components: {
    Icon,
    Table,
  },
  mounted() {},
};
</script>
