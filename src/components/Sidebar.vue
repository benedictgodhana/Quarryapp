<template>
    <aside class="sidebar">
      <!-- Sidebar content, navigation links, icons, etc. -->
      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <!-- Add more sidebar items as needed -->
      </v-list>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  /* Add styling for the sidebar here */
  .sidebar {
    width: 240px;
    background-color: #333; /* Customize the background color */
    color: white; /* Customize the text color */
    /* Add more styling as needed */
  }
  </style>
  