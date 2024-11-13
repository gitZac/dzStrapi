<template>
  <section class="section contact-form">
    <div class="container">
      <h2 class="section-title">{{ componentData.sectionTitle }}</h2>
      <p class="section-intro">{{ componentData.sectionIntro }}</p>

      <div class="contact-form__form-container">
        <form @submit.prevent="submit">
          <v-text-field
            v-model="firstName.value.value"
            :counter="10"
            :error-messages="firstName.errorMessage.value"
            variant="underlined"
            placeholder="Luke"
            label="First Name *"></v-text-field>

          <v-text-field
            v-model="lastName.value.value"
            :counter="10"
            :error-messages="lastName.errorMessage.value"
            variant="underlined"
            placeholder="Skywalker"
            label="Last Name *"></v-text-field>

          <v-text-field
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            variant="underlined"
            placeholder="2222222222"
            label="Phone Number *"></v-text-field>

          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            variant="underlined"
            placeholder="sonofvader@deathstar.com"
            label="E-mail *"></v-text-field>

          <v-btn
            class="me-4 dz-button button is-outlined is-primary is-medium"
            type="submit">
            submit
          </v-btn>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useField, useForm } from "vee-validate";
import { useStrapiData } from "~/composables/useStrapiData";

const strapi = useStrapiData();

const props = defineProps({
  componentData: {
    type: Object,
    default: () => {},
  },
});

const { handleSubmit } = useForm({
  validationSchema: {
    firstName(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    lastName(value) {
      if (value?.length >= 2) return true;

      return "Last Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Phone number needs to be at least 9 digits.";
    },
    email(value) {
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) return true;

      return "Must be a valid e-mail.";
    },
  },
});

const firstName = useField("firstName");
const lastName = useField("lastName");
const phone = useField("phone");
const email = useField("email");
const formFields = [firstName, lastName, phone, email];

const submit = handleSubmit(async (values) => {
  const submitted = await strapi.postFormData("contacts", values);

  if (submitted.status == "OK") {
    formFields.forEach((field) => {
      field.value.value = "";
    });
  }
});
</script>

<style lang="scss">
.contact-form {
  background: url("./../assets/img/background-dark-grad2.svg") no-repeat center
    center;
  background-size: cover;
  color: $light;

  .section-intro {
    text-align: center;
  }

  .section-title {
    font-weight: bold;
    text-transform: uppercase;
  }

  &__form-container {
    margin: auto;
    max-width: 750px;
  }

  .v-field-label {
    color: $white;
    opacity: 1;
  }
  .v-field__outline {
    color: $white;
    opacity: 1;
    --v-field-border-opacity: 1;
  }

  .v-field--variant-filled .v-field__outline::before,
  .v-field--variant-underlined .v-field__outline::before {
    color: $white;
    opacity: 1;
  }

  .v-field__outline {
    --v-field-border-width: 2px;
  }
}
</style>
