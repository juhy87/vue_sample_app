<!-- <template>
  <router-view />
</template> -->

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            title="Park Ju Hyung"
            subtitle="hyundai@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="Model List" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Create Model" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Model Run History" value=""></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 1000px"> 
        <router-view></router-view>     
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),

    props: {
      source: String
    }
  }
</script>

<script setup>
  //
</script>
<!-- 

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script> -->
