<template>
  <section class="content">
    <div class="row">
      <div class="col-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6">
                
                <template>
                  <h5 class="card-category">Turnos</h5>
                </template>

                <template>
                  <h2 class="card-title">Programar Turnos</h2>
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
                <router-link class="btn btn-info agregar" to="/agregarTurno">Agregar</router-link>
            </template>
          </h4>
        
          <section class="row">
            <div class="col">
              <div class="card">
                <div class="card-body table-responsive-lg my-5">
                  <table class="table table-hover">
                    <thead class="thead-dark">
                      <tr>
                        <th>Id</th>
                        <th>Nombre Turno</th>
                        <th>calendari #</th>
                        
                      </tr>
                    </thead>

                    <tbody v-for="turno in turnos"
                    :key="turno.name_turn">
                      <tr class="">
                        <td>{{turno.abbreviation_name}}</td>
                        <td>{{turno.name_turn}}</td>
                        <td>{{turno.schedule_id}}</td>
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

  </section>
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
      turnos:[], 
    }
  },

  mounted(){
    this.MostrarTurnos();

  },

  

  methods:{

    //metodo para mostrar los Pacientes existentes

    MostrarTurnos(){
      axios
      .get("http://127.0.0.1:8000/api/shifts/v1")
      .then(datos =>{
        console.log(datos)
        this.turnos = datos.data.turnos
      })
    },
  }
};
</script>
<style>
input {
  width: 80px;
}

.agregar{

background:#11AAB8 !important;
}

.agregar:hover{
  background-color: #11AAB8 !important;
}

th{
  color: aliceblue  !important;
}
</style>
