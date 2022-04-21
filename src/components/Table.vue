<template>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="
              text-xs text-gray-700
              uppercase
              bg-gray-50
              dark:bg-gray-700 dark:text-gray-400
            "
          >
            <tr>
              <th scope="col" class="px-6 py-3">#</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Cost</th>
              <th scope="col" class="px-6 py-3">Quantity</th>
              <th scope="col" class="px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="item in items" class="bg-white border-b ">
              <th
                scope="row"
                class="
                  px-6
                  py-4
                  font-medium
                  text-gray-900
                  
                  whitespace-nowrap
                "
              > 
                
              </th>
              <td class="px-6 py-4">{{item.key}}</td>
              <td class="px-6 py-4">{{item.key}}</td>
              <td class="px-6 py-4">{{item.value}}</td>
              <td class="px-6 py-4">{{item.value}}</td>

            </tr> -->

               <tr class="bg-white border-b ">
              <th
                scope="row"
                class="
                  px-6
                  py-4
                  font-medium
                  text-gray-900
                  
                  whitespace-nowrap
                "
              > 
                1
              </th>
              <td class="px-6 py-4">SERVER</td>
              <td class="px-6 py-4">SERVER</td>
              <td class="px-6 py-4">items</td>
              <td class="px-6 py-4">items</td>

            </tr>
          </tbody>
        </table>
      </div>
</template>



<script>
import axios from "axios";
export default {
  name: 'SignIn',
    data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`https://precious-syrniki-2ab003.netlify.app/api.json`);
    //   this.items = res.data;
        const items = res.data.item[2].response[0].header
        console.log(items[0].key)

    } catch (error) {
      console.log(error);
    }
  },
}
</script>