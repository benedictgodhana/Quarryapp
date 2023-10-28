<template>
    <v-app>
      <v-app-bar app color="info">
        <v-app-bar-nav-icon style="margin-left: 0px;" @click.stop="rail = !rail"></v-app-bar-nav-icon>
        <h3 class="text-center" style="flex: 1;"></h3>
        <v-btn to="/" color="" elevation="6" class="mr-4">Logout</v-btn>
  
        <!-- Profile dropdown menu -->
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" elevation="6" class="mr-4">Profile</v-btn>
          </template>
          <v-list>
            <v-list-item to="/profile">My Profile</v-list-item>
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
            <v-navigation-drawer
      :value="isDrawerOpen"
      v-model="drawer"
      :rail="rail"
      app
      mobile-break-point="sm"
    >            <v-list>

                
              <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                title="Sandra Adams"
                subtitle="sandra_a88@gmailcom"
              >
            
            </v-list-item><br>

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
  
          
          </v-navigation-drawer>
  
          <v-main class="fixed-content">
            <v-container elevation="23" class="fixed-container">
              <v-card elevation="8" max-width="100%" class="my-16">
                <v-card-text>
                <v-icon left>mdi-package-variant-closed</v-icon>
                PRODUCTS REGISTER
                </v-card-text>
                <v-divider></v-divider><br>
                        <div>
        <v-row justify="end"  style="margin-top: 20px;" class="mr-4">
            <v-dialog
            v-model="dialog"
            persistent
            width="auto"
            
                >
      <template  v-slot:activator="{ props }">
        <v-btn
          color="info"
          v-bind="props"
          elevation="8"
          class="add-product-button"
            
        >
        <v-icon left>mdi-plus</v-icon> ADD PRODUCT
        </v-btn>
        
      </template>
      <v-card>
        <v-card-title color="info">
          <span class="text-h5"> ADD - UPDATE ACCOUNT CLIENT</span>
        </v-card-title>
        <v-card-text>
          <v-container style="width:500px;">
            <v-row>
             
              <v-col cols="12">
                <v-text-field
                  label="Product Name*"
                  required
                  variant="outlined"
                ></v-text-field>
              </v-col>
             
              <v-col
                cols="12"
              >
                <v-select
                  :items="['1', '2', '3', '4']"
                  label="Grade/ID*"
                  required
                  variant="outlined"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
              >
                <v-autocomplete
                  :items="['Active', 'Inactive']"
                  label="Status"
                  variant="outlined"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
                </div>
                <v-card-text style="margin-top:-48px">
      <v-form @submit.prevent="searchProducts">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="searchQuery" label="Search" variant="outlined" dense outlined></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-select v-model="filterStatus" :items="statusOptions" label="Filter by Status" variant="outlined" dense outlined></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn color="info" @click="searchProducts" class="mr-4">  <v-icon left>mdi-magnify</v-icon>Search</v-btn>
          </v-col>
        </v-row>
      </v-form>
    <v-table
    fixed-header
    height="300px"
    class="custom-table"
    >
    <thead>
    
    <tr>
        <th class="text-left">
            #
        </th>
      <th class="text-left">
        Product Name
      </th>
      <th class="text-left">
        Grade/ID
      </th>
      <th class="text-left">
        Status
      </th>
      <th class="text-left">
        Actions
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
    <td> <v-checkbox v-model="product.selected"></v-checkbox></td>
      <td>{{ product.name }}</td>
      <td>{{ product.grade }}</td>
      <td>{{ product.status }}</td>
      <td>
        <!-- Add actions here, e.g., Edit and Delete buttons -->
        <v-btn class="mr-4" color="success" @click="editProductDialog = true">
      <v-icon left>mdi-pencil</v-icon> Edit
    </v-btn>        
    <v-dialog v-model="editProductDialog" max-width="500">
      <v-card>
        <v-card-title>Edit Product</v-card-title>
        <v-card-text>
          <!-- Edit product form -->
          <v-form @submit.prevent="saveProductChanges">
            <v-text-field v-model="editedProduct.name" label="Product Name" variant="outlined"></v-text-field>
            <v-text-field v-model="editedProduct.grade" label="Grade/ID" variant="outlined"></v-text-field>
            <v-select v-model="editedProduct.status" :items="statusOptions" label="Status" variant="outlined"></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="editProductDialog = false">Cancel</v-btn>
          <v-btn color="success" @click="saveProductChanges">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    
    <v-btn color="red" @click="deleteProduct(product)">
  <v-icon left>mdi-delete</v-icon> Delete
</v-btn>

      </td>
    </tr>
  </tbody>
</v-table>
</v-card-text>

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
        dialog: false,
        editProductDialog: false,
        statusOptions: ['Active', 'Inactive'], // Sample status options
        editedProduct: {
        name: '',  // Initialize with empty values
        grade: '',
        status: '',
      },
        products: [
        { id: 1, name: 'Product 1', grade: 'A', status: 'Active' },
        { id: 2, name: 'Product 2', grade: 'B', status: 'Inactive' },
        { id: 3, name: 'Product 3', grade: 'C', status: 'Active' },
        
        // Add more product objects as needed
      ],
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
  .fixed-content {
    height: calc(100vh - 4px); /* 64px is the height of the app bar */
    overflow: hidden;
  }

  .fixed-container {
    height: 100%;
    overflow: auto;
  }

  .add-product-button {
    background-color: #2196F3; /* Change to your preferred background color */
    color: #fff; /* Change to your preferred text color */
    position: relative;
    z-index: 2;
    margin-top:-4px;
  }
  .custom-table {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.custom-table th, .custom-table td {
  border: 1px solid #e0e0e0;
  padding: 8px;
}

.custom-table th {
  background-color: #f0f0f0;
}
  
  </style>
  