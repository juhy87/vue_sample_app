<template>
  <v-app id="inspire">
    <v-system-bar>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <!-- <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->

    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <!--  -->
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <v-container>
        <v-row>
          <template v-for="n in result" :key="n">
            <v-col
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n.domain }}</strong>
            </v-col>

            <v-col
              v-for="model in n.modelList"
              :key="`${n}${model}`"
              cols="6"
              md="3"
            >
              <v-sheet style="height: 150px;padding: 10px;"  >
                <router-link :to="{name:'model_run', params: { id: model.id } }">
                  <h2 class="text-h5 mb-6">
                      {{model.title}}
                  </h2>
                </router-link>
                <p class="mb-4 text-medium-emphasis text-body-2">
                    {{model.description}}
                </p>
              </v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
  export default {
    data: () => ({
       result: [
        {
          domain: "품질",
          modelList: [
          ]
        },
        {
          domain: "판매",
          modelList: [
          ]
        }
       ],

       drawer: null 
      }),
      mounted(){
        console.log("[Model List] created  ")
        console.log(this.$store.state.modelList)
        console.log("rest2")
      //   this.result  =  [
      //   {
      //     type: "품질",
      //     modelList: [
      //     ]
      //   },
      //   {
      //     type: "판매",
      //     modelList: [
      //     ]
      //   }
      //  ]
       
       console.log(this.result)
       console.log(this.result.length)
       
       console.log(this.$store.state.modelList)
       this.result.forEach(ret => {
        ret.modelList = this.$store.state.modelList.filter(it => it.domain == ret.domain)
       })

       console.log(this.result)



      }
  }
</script>