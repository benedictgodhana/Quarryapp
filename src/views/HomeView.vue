<template>
  <v-sheet class="pa-12" rounded >
    <v-card class="mx-auto px-6 py-8" max-width="444" elevation="6" style="margin-top:20px; border-radius: 20px;" title="USER LOGIN PAGE">
      
      <v-divider elevation="6"></v-divider><br>

      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
        

      >
        <v-text-field
          v-model="username"
          :readonly="loading"
          :rules="[required, usernameRule]"
          class="mb-2"
          clearable
          label="Username"
          variant="outlined"

          placeholder="Enter your Username"
          
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required, passwordRule]"
          clearable
          label="Password"
          placeholder="Enter your password"
          variant="outlined"
          type="password"
        ></v-text-field>

        <v-btn
  :disabled="!form"
  :loading="loading"
  block
  color="info"
  type="submit"
  elevation="7"
  variant="elevated"
  style="border-radius: 10px;"
>
  <v-icon left>
    mdi-login  <!-- You can replace this with the icon you want -->
  </v-icon>
  Click to login
</v-btn>


        <v-divider></v-divider>
      </v-form>
    </v-card>

    <v-alert
      v-model="showSuccessDialog"
      type="success"
      title="Login Successful"
      text="You have successfully logged in."
    >
      <v-card-actions>
        <v-btn color="primary" @click="showSuccessDialog = false">Close</v-btn>
      </v-card-actions>
    </v-alert>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    form: false,
    username: null,
    password: null,
    rememberMe: false,
    loading: false,
    showSuccessDialog: false, // Controls whether the success dialog is shown
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;

      // Simulate a login process (replace with your actual login logic)
      this.loading = true;

      setTimeout(() => {
        // Simulate a successful login
        this.loading = false;
        this.showSuccessDialog = true; // Show the success dialog
        this.$router.push('/dashboard'); // Redirect to the dashboard on success
      }, 2000);
    },

    required(v) {
      return !!v || 'Field is required';
    },

    usernameRule(v) {
      return (v || '').length >= 4 || 'Username must be at least 4 characters';
    },

    passwordRule(v) {
      return (v || '').length >= 6 || 'Password must be at least 6 characters';
    },
  },
};
</script>
