<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                <template>
                  <h5 class="card-category">Calendarios</h5>
                </template>

                <template>
                  <h2 class="card-title">Calendarios Asignados </h2>
                </template>
              </div>
            </div>
          </template>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12 col-md-12">
        <card class="card">
          <h4 slot="header" class="card-title mb-4">
            <template>
                <router-link class="btn btn-info agregar" to="/agregarpaciente">Agregar</router-link>
            </template>
          </h4>

          <section class="row">
            <div class="col">
              <div class="card">
                <div class="card-body table-responsive-lg ">
                   <table class="table table-hover" >
                    <thead class="thead-dark"

                    >
                      <tr>
                        <th>ID</th>
                        <th>monday</th>
                        <th>Numero de Dias</th>
                        <th>thursday</th>
                        <th>friday</th>
                        <th>saturday</th>
                        <th>sunday</th>
                        <th>identification</th>
                        <!-- <th></th> -->
                      </tr>
                    </thead>

                    <tbody>

                      <tr v-for="calendario in schedules"
                    :key="calendario.id"
                    >
                        <td>{{calendario.id}}</td>
                        <td>{{calendario.monday}}</td>
                        <td>{{calendario.tuesday}}</td>
                        <td>{{calendario.thursday}}</td>
                        <td>{{calendario.friday}}</td>
                        <td>{{calendario.saturday}}</td>
                        <td>{{calendario.sunday}}</td>
                        <td>{{calendario.identification}}</td>
                        <!-- <td>
                          <button class="btn btn-info agregar"> editar</button>
                        </td> -->

                      </tr>

                    </tbody> 
                  </table>
                </div>
              </div>
            </div>
          </section>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { Card } from "@/components/index";

export default {
  components: {
    Card,
  },

  data(){
    return{
     schedules:[],
      
    }
  },

  mounted(){
    this.MostrarCalendarios();

  },

  

  methods:{

    //metodo para mostrar los Pacientes existentes

    MostrarCalendarios(){
      axios
      .get("http://127.0.0.1:8000/api/schedules/v1")
      .then(datos =>{
        console.log(datos)
        this.schedules = datos.data.schedules[0]
      })
    },
  }
}
</script>
<style  scoped>



th{
  color: aliceblue  !important;
}

</style>
