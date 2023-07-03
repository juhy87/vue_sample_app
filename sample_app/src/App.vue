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
          <v-list-item prepend-icon="mdi-folder" title="Model List" value="myfiles" router :to="{name:'model_list'}" exact></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Create Model" value="shared" router :to="{name:'model'}" exact></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Model Run History" value="" router :to="{name:'model_run_history'}" exact></v-list-item>
          <!-- <v-list-item prepend-icon="mdi-folder" title="Model List" value="myfiles" @click="$router.push({name:'model_list'})"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Create Model" value="shared" @click="$router.push({name:'model_run'})"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Model Run History" value="" @click="$router.push({name:'model_run_history'})"></v-list-item> -->
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 1000px; margin:20px"> 
        <router-view></router-view>     
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import router from './router';

  export default{
    data:() =>({

    }),
    props: {

    },
    methods : {
      // test(){
      //   alert("move")
      // }
    }
  }
</script>
