<template>
  <div class="flex mx-8 my-8">
    <div class="w-4/6">
          <Table />
    </div>
    <div class="p-2 bg-white rounded ml-2">
      <h1 class="text-">Number Check</h1>
      <div class="flex justify-between">
        <span>All</span> <span>0</span>
      </div>
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
    Table
},
  mounted() {},
  
};
</script>
