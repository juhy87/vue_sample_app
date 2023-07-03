<template>
  <h1>Create Model</h1>
  <v-card
    class="mx-auto"
    max-width="1000px"
  >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-radio-group inline label="Type" v-model="modelData.type">
                <v-radio label="Hive Query" value="1"></v-radio>
                <v-radio label="Spark Job" value="2"></v-radio>
              </v-radio-group>
              <v-text-field
                label="Title"
                placeholder="차량 데이터 조회 Template"
                v-model="modelData.title"
              ></v-text-field>
              <v-text-field
                label="Description"
                placeholder="차량 번호 와 OO을 입력하는 Template 입니다."
                v-model="modelData.description"
              ></v-text-field>
              <v-combobox
                label="Domain"
                :items="['품질', '판매']"
                variant="outlined"
                v-model="modelData.domain"
              ></v-combobox>
              <v-combobox
                label="클러스터"
                :items="['A 클러스터', 'B 클러스터']"
                variant="outlined"
                v-model="modelData.cluster"
              ></v-combobox>
              <v-textarea clearable v-model="modelData.template"  label="Temmplate" variant="outlined" placeholder="select name, carType, age &#13;&#10  from user &#13;&#10where name = {{name}} &#13;&#10    and carType = {{carType}}"></v-textarea>
              <span class="text-caption text-grey-darken-1">
                parameter 예시 참조
              </span><br>
              <v-btn class="text-end"
                color="primary"
                variant="flat"
                @click="setTemplate"
              >
               Set Template 
              </v-btn>
              <!-- <v-combobox
                label="Combobox"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"
              ></v-combobox> -->
            </v-col>
            <v-col cols="12" md="6">
              <v-card :title=paramMeta.name style="padding:0px 10px ;" v-for="paramMeta in parameterMetas" :key="paramMeta" >
                <v-text-field
                  label="Label"
                  placeholder="name"
                  v-model="paramMeta.name"
                ></v-text-field>
                <v-combobox
                  label="Type"
                  v-model="paramMeta.type"
                  :items="['String', 'Integer']"
                ></v-combobox>
                <v-combobox
                  label="Domain"
                  v-model="paramMeta.codeName"
                  :items="['NO', '차종 Code', 'OO Code']"
                ></v-combobox>
                <v-text-field
                  label="Value"
                  placeholder="name"
                  v-model="paramMeta.value"
                ></v-text-field>
              </v-card>
              
            </v-col>
          </v-row>
          
        </v-card-text>
        
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-table
            fixed-header
            height="300px"
          >
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  CarType
                </th>
                <th class="text-left">
                  age
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in sampleResult"
                :key="item.id"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.carType }}</td>
                <td>{{ item.age }}</td>
              </tr>
            </tbody>
          </v-table>

          <v-card :title=resultMeta.name style="padding:0px 10px ;" v-for="resultMeta in resultMetas" :key="resultMeta" >
            <v-row>
                <v-col cols="12" sm="4">
                  <v-text-field
                    label="Name"
                    v-model="resultMeta.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-combobox
                    label="Type"
                    v-model="resultMeta.type"
                    :items="['String', 'Integer']"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-combobox
                  label="Domain"
                  v-model="resultMeta.codeName"
                  :items="['NO', '차종 Code', 'OO Code']"
                ></v-combobox>
                </v-col>
              </v-row>
          </v-card>

          
        </v-card-text>
      </v-window-item>

      <!-- <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="text-caption text-grey">Thanks for signing up!</span>
        </div>
      </v-window-item> -->
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        v-if="step > 1"
        variant="text"
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      
      <v-btn
        v-if="step < 2"
        color="primary"
        variant="flat"
        @click="funNext"
      >
        RUN
      </v-btn>
      
      <v-btn
        v-if="step == 2"
        color="primary"
        variant="flat"
        @click="createTemplate"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      step: 1,
      modelData : {
        type        : "1",
        title       : "",
        description : "",
        domain      : "품질",
        cluster     : "A 클러스터",
        template    : "select name, carType, age from user where name = {{name}} and carType = {{carType}}"

      },
      parameterMetas : [],
      resultMetas : [],
      sampleResult : []
       
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Set Template & search Test'
          case 2: return 'Set Result Meta Data'
          default: return 'Account created'
        }
      },
    },
    methods:{
      createTemplate(){
        this.$store.commit('increment')
        console.log(this.$store.state.count)
        console.log("this.modelData")
        console.log(this.modelData)

        this.modelData.id = Math.floor(Math.random() * 1000)
        this.$store.commit('addModel',this.modelData)
        console.log(this.$store.state.modelList)
        this.$router.push({name:'model_list'})
      },
      funNext(){
        
        this.step++

        this.resultMetas = [
          {
            name : 'name',
            type : 'String',
            codeName : 'NO',
            code : '',
          },
          {
            name : 'age',
            type : 'Integer',
            codeName : 'NO',
            code : '',
          },
          {
            name : 'carType',
            type : 'String',
            codeName : 'NO',
            code : '2',
          }
        ]

        this.sampleResult = [
            {
              "id" : "sample_1",
              "name" : "Ben",
              "carType" : "CD01",
              "age" : 10
            },
            {
              "id" : "sample_2",
              "name" : "Alvin",
              "carType" : "CD01",
              "age" : 50
            },
            {
              "id" : "sample_3",
              "name" : "Jenny",
              "carType" : "CD01",
              "age" : 30
            },

        ]
      },

      setTemplate(){
        this.parameterMetas = [
          {
            name : 'name',
            type : 'String',
            codeName : 'NO',
            code : '1',
            value : ''
          },
          {
            name : 'carType',
            type : 'String',
            codeName : 'NO',
            code : '2',
            value : ''
          }
        ]
        
      }
    }
  }
</script>