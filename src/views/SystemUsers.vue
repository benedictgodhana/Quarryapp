<template>
    <v-app>
      <v-app-bar app color="info">
        <v-app-bar-nav-icon style="margin-left: 0px;" @click.stop="rail = !rail"></v-app-bar-nav-icon>
        <h3 class="text-center" style="flex: 1;">Quarry App</h3>
        <v-btn to="/" color="" elevation="6" class="mr-4">Logout</v-btn>
  
        <!-- Profile dropdown menu -->
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" elevation="6" class="mr-4">Profile</v-btn>
          </template>
          <v-list>
            <v-list-item to="/profile" >My Profile</v-list-item>
          </v-list>
        </v-menu>
  
        <!-- Settings dropdown menu -->
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" elevation="6" class="mr-4">Settings</v-btn>
          </template>
          <v-list>
            <v-list-item to="/settings">General Settings</v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
  
      <v-card elevation="6">
        <v-layout>
          <v-navigation-drawer :value="isDrawerOpen" v-model="drawer" :rail="rail" permanent @click="rail = false">
            <v-list>
              <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                title="Sandra Adams"
                subtitle="sandra_a88@gmailcom"
              ></v-list-item><br>
              <v-list-item prepend-icon="mdi-home" to="/dashboard" title="Dashboard" value="dashbord"></v-list-item>
              <v-list-item prepend-icon="mdi-account-group" to="/system" title="System Users Setup" value="System Users Setup"></v-list-item>
          <v-list-item prepend-icon="mdi-city-variant" title="Towns and Stations Setup" value="Towns and Stations Setup"></v-list-item>
          <v-list-item prepend-icon="mdi-cash-100" title="Received Mpesa Transfers" value="Received Mpesa Transfers"></v-list-item>
          <v-list-item prepend-icon="mdi-message" title="Bulk SMS Management" value="Bulk SMS Management"></v-list-item>
          <v-list-item prepend-icon="mdi-account-cog" title="Accounts Clients Setup" value="Accounts Clients Setup"></v-list-item>
          <v-list-item prepend-icon="mdi-truck-delivery" title="Delivery Trucks  Setup" value="Delivery Trucks Setup"></v-list-item>
          <v-list-item prepend-icon="mdi-parking" title="Products Setup" to="/product" value="Products Setup"></v-list-item>
          <v-list-item prepend-icon="mdi-cash" title="Product Price" value="Product Setup"></v-list-item>
          <v-list-item prepend-icon="mdi-moped" title="Product orders" value="Product Orders"></v-list-item>
          <v-list-item prepend-icon="mdi-cash-sync" title="Order Payments" value="Order Payments"></v-list-item>
            </v-list>
  
            <v-divider></v-divider>
  
            <v-list density="compact" nav>
              <!-- Your navigation items here -->
            </v-list>
          </v-navigation-drawer>
  
          <v-main class="fixed-content">
            <v-container elevation="23" class="fixed-container">
              <v-card elevation="8" max-width="100%" class="my-16">
                <v-table height="300px">
        <thead>
      <tr>
        <th class="text-left">
          UserName
        </th>
        <th class="text-left">
            
        </th>
        <th class="text-left">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
              </v-card>
            </v-container>
          </v-main>
        </v-layout>
      </v-card>
    </v-app>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    data() {
      return {
        drawer: true,
        rail: true,
        isDrawerOpen: false, // Add this line to define isDrawerOpen
      };
    },
    methods: {
      toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .fixed-content {
    height: calc(100vh - 4px); /* 64px is the height of the app bar */
    overflow: hidden;
  }
  
  .fixed-container {
    height: 100%;
    overflow: auto;
  }
  </style>
  