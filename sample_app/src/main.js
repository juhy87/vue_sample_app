/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0,
        modelList : [
          {
            id          : 1,
            type        : "1",
            title       : "차종 조회",
            description : "차종 정보를 조회하는...",
            domain      : "품질",
            cluster     : "A 클러스터",
            template    : ""
    
          },
          {
            id          : 2,
            type        : "1",
            title       : "RO Data 조회",
            description : "RO Data 정보를 조회하는...",
            domain      : "품질",
            cluster     : "A 클러스터",
            template    : ""
    
          },

        ],
        modelRunHistory : [
          {
            id          : 1,
            type        : "1",
            title       : "차종 조회",
            description : "차종 정보를 조회하는...",
            domain      : "품질",
            date        : "2023-03-01"
          },
          {
            id          : 2,
            type        : "1",
            title       : "RO Data 조회",
            description : "RO Data 정보를 조회하는...",
            domain      : "품질",
            date        : "2023-02-01"
          },
          {
            id          : 3,
            type        : "1",
            title       : "RO Data 조회",
            description : "RO Data 정보를 조회하는...",
            domain      : "품질",
            date        : "2023-01-01"
          },
        ]

      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      addModel (state, payload){
        console.log("[payload]")
        console.log(payload)
        state.modelList.push(payload)

      }
    }
  })
  

const app = createApp(App)

app.use(store)

registerPlugins(app)

app.mount('#app')
