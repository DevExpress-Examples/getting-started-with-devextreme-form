<template>
  <div id="app-container">
    <form
      action="/employee-page"
      @submit="handleSubmit"
    >
      <DxForm
        id="form"
        :form-data="employee"
        :read-only="isFormReadOnly"
        label-location="top"
        :show-colon-after-label="false"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem caption="Employee">
            <DxSimpleItem
              data-field="name"
              :is-required="true"
            />
            <DxSimpleItem data-field="position"/>
            <DxSimpleItem data-field="hireDate"/>
            <DxSimpleItem data-field="officeNumber">
              <DxNumericRule message="This field should contain a number"/>
            </DxSimpleItem>
          </DxGroupItem>
          <DxGroupItem caption="Personal Information">
            <DxTabbedItem>
              <DxTabPanelOptions :height="280"/>
              <DxTab title="Contacts">
                <DxSimpleItem data-field="phone"/>
                <DxSimpleItem data-field="skype"/>
                <DxSimpleItem data-field="email">
                  <DxEmailRule message="This is not a valid Email"/>
                </DxSimpleItem>
              </DxTab>
              <DxTab title="Note">
                <DxSimpleItem
                  data-field="notes"
                  editor-type="dxTextArea"
                />
              </DxTab>
            </DxTabbedItem>
          </DxGroupItem>
        </DxGroupItem>
        <DxButtonItem horizontal-alignment="center">
          <DxButtonOptions
            text="Submit the Form"
            :use-submit-behavior="true"
          />
        </DxButtonItem>
      </DxForm>

      <DxCheckBox
        id="check-box"
        text="Enable read-only mode"
        v-model:value="isFormReadOnly"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxButtonItem,
  DxButtonOptions,
  DxTabbedItem,
  DxTab,
  DxTabPanelOptions,
  DxNumericRule,
  DxEmailRule,
} from 'devextreme-vue/form';
import { DxCheckBox } from 'devextreme-vue/check-box';
import 'devextreme-vue/text-area';
import notify from 'devextreme/ui/notify';
import type { Employee } from '../types';

const employee: Employee = {
  name: 'John Heart',
  position: 'CEO',
  hireDate: new Date(2012, 4, 13),
  officeNumber: 901,
  phone: '+1(213) 555-9392',
  skype: 'jheart_DX_skype',
  email: 'jheart@dx-email.com',
  notes: 'John has been in the Audio/Video industry since 1990.',
};

const isFormReadOnly = ref<boolean>(false);

const handleSubmit = (e: Event): void => {
  setTimeout(() => {
    notify('Submitted', 'success', 2000);
  }, 1000);

  e.preventDefault();
};
</script>

<style scoped>
#form {
  padding: 10px;
  border: var(--dx-border-width) solid var(--dx-color-border);
  border-radius: var(--dx-border-radius);
}

#check-box {
  margin-top: 10px;
}
</style>
