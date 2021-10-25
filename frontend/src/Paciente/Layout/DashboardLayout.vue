<template>
  <div class="wrapper">
    <side-bar>
      
      <sidebar-link to="/addppersonal">
        <i class="tim-icons icon-lock-circle"></i>
        <template>
          <p>Gestion</p>
        </template>
      </sidebar-link>

    </side-bar>
   
    <div class="main-panel" :data="backgroundColor">
      <top-navbar></top-navbar>

      <dashboard-content></dashboard-content>

      
    </div>

  </div>
</template>
<style lang="scss"></style>
<script>


import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./DashboardContent.vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/SidebarPlugin/SidebarLink.vue";



export default {

  components: {
    TopNavbar,
    DashboardContent,
    SideBar,
    SidebarLink,
  },


  data() {
    return {
      backgroundColor: "#11AAB8",
      services:[],
    };
  },
 

};
</script>


<style scoped>
p{
  font-size:13px ;
}
</style>