import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Historial from "@/pages/Historial.vue";
import Addppersonal from "@/pages/Addppersonal.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Profesion from "@/pages/Profesion.vue";
import Especialidades from "@/pages/Especialidades.vue";
import Pacientes from "@/pages/Pacientes.vue";
import AsignarServicio from "@/pages/AsignarServicio.vue";
import AgregarPaciente from "@/pages/AgregarPaciente.vue"
import AgregarEspecialidad from "@/pages/AgregarEspecialidades.vue"
import AsignarEspecialidad from "@/pages/AsignarEspecialidad.vue"
import Addasig from "@/pages/Addasig.vue"
import Enfermeras from "@/pages/Enfermeras.vue"
import AgregarEnfermeras from "@/pages/AgregarEnfermeras.vue"
import EditarEspecialidad from "@/pages/EditarEspecialidad.vue"
import Horarios from "@/pages/Horarios.vue"
import AgregarHorario from "@/pages/AgregarHorario.vue"
import EspEnfermeras from "@/pages/EspEnfermeras.vue"
import AsigEnfermeras from "@/pages/AsigEnfermeras.vue"
import AgregarTurno from "@/pages/AgregarTurno.vue"
import Calendarios from "@/pages/Calendarios.vue" 
import Login from "@/pages/Login/Login.vue" 

const routes = [{
  path: "/",
  component: DashboardLayout,
  redirect: "dashboard",

  children:[
    {
      path: "addppersonal",
      name: " Gestion",
      component: Addppersonal
    },
    {
      path: "addasig",
      name: " agregarrr",
      component: Addasig
    },
    {
      path: "dashboard",
      name: "Programar Turno",
      component: Dashboard
    },
    {
      path: "especialidades",
      name: "Especialidades",
      component: Especialidades
    },
    {
      path: "pacientes",
      name: "Pacientes",
      component: Pacientes
    },
    
    {
      path: "user",
      name: "Perfil de Usuario",
      component: UserProfile
    },
    

    {
      path: "profesion",
      name: "Profesion",
      component: Profesion
    },
    {
      path: "historial",
      name: "Historial",
      component: Historial
    },
    {
      path: "asignarServicio",
      name: "Asignar Servicio",
      component: AsignarServicio
    },
    {
      path: "agregarpaciente",
      name: "Agregar Paciente",
      component: AgregarPaciente
    },
    {
      path: "agregarespecialidad",
      name: "Agregar Especialidad",
      component: AgregarEspecialidad
    },
    {
      path: "asignarEspecialidad",
      name: "Asignar Especialidad",
      component: AsignarEspecialidad
    },
    {
      path: "enfermeras",
      name: "Enfermeras",
      component: Enfermeras
    },
    {
      path: "espenfermeras",
      name: "Esp Enfermeras",
      component: EspEnfermeras
    },
    {
      path: "agregarenfermeras",
      name: "Agregar Enfermeras",
      component: AgregarEnfermeras
    },
    {
      path: "asigEnfermeras",
      name: "Especialidad a Enfermeras",
      component: AsigEnfermeras
    },
    {
      path: "editarEspecialidad",
      name: "editarEspecialidad",
      component: EditarEspecialidad
    },
    {
      path: "horarios",
      name: "horarios",
      component: Horarios
    },
    {
      path: "agregarhorario",
      name: "Agregar Horarios",
      component: AgregarHorario
    },
    {
      path: "agregarturno",
      name: "Agregar Turnos",
      component: AgregarTurno
    },
    {
      path: "calendarios",
      name: "Calendarios",
      component: Calendarios
    },
    {
      path: "login",
      name: "Login",
      component: Login
    },
    
   
  ]

},
// {
//   path:"/",
//   redirect:"login",
//   component:LoginLayout,
//   children:[

  

//   ]

// }

]

export default routes;
