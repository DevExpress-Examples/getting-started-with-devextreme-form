<template>
  <div id="app-container">
    <form action="/employee-page" @submit="handleSubmit">
      <DxForm 
        id="form"
        :form-data="employee"
        :read-only="isFormReadOnly"
        label-location="top"
        :show-colon-after-label="false">
        <DxGroupItem
          :col-count="2">
            <DxGroupItem caption="Employee">
              <DxSimpleItem data-field="name" :is-required="true"/>
              <DxSimpleItem data-field="position"/>
              <DxSimpleItem data-field="hireDate"/>
              <DxSimpleItem data-field="officeNumber">
                  <DxNumericRule
                      message="This field should contain a number"
                  />
              </DxSimpleItem>
            </DxGroupItem>
            <DxGroupItem caption="Personal Information">
              <DxTabbedItem>
                <DxTabPanelOptions
                  :height="320" :element-attr="{ id: 'tabbedItem' }"
                />
                <DxTab title="Contacts">
                  <DxSimpleItem data-field="phone"/>
                  <DxSimpleItem data-field="skype"/>
                  <DxSimpleItem data-field="email">
                      <DxEmailRule
                          message="This is not a valid Email"
                      />
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
        <DxButtonItem 
          :button-options="submitButtonOptions"
          horizontal-alignment="center"
        />
      </DxForm>
    </form>

    <DxCheckBox
      id="check-box"
      text="Enable read-only mode"
      v-model:value="isFormReadOnly"
    />
  </div>
</template>

<script>
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import { 
    DxForm, 
    DxSimpleItem, 
    DxGroupItem,
    DxButtonItem,
    DxTabbedItem,
    DxTab,
    DxTabPanelOptions,
    DxNumericRule, 
    DxEmailRule
} from 'devextreme-vue/form';

import { DxCheckBox } from 'devextreme-vue/check-box';
import { DxTextArea } from 'devextreme-vue/text-area'; // eslint-disable-line vue/no-unused-components


const employee = {
    name: 'John Heart',
    position: 'CEO',
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    phone: '+1(213) 555-9392',
    skype: 'jheart_DX_skype',
    email: 'jheart@dx-email.com',
    notes: 'John has been in the Audio/Video industry since 1990.'
};

const submitButtonOptions = {
    text: "Submit the Form",
    useSubmitBehavior: true
};

let isFormReadOnly = false;

export default {
  name: "app",
    components: {
        DxForm,
        DxSimpleItem,
        DxGroupItem,
        DxButtonItem,
        DxTabbedItem,
        DxTab,
        DxTabPanelOptions,
        DxNumericRule, 
        DxEmailRule,
        DxCheckBox,
        DxTextArea // eslint-disable-line vue/no-unused-components
    },
    data() {
        return {
          employee,
          submitButtonOptions,
          isFormReadOnly
        }
    },
    methods: {
        handleSubmit(e) {
            setTimeout(() => { 
                alert("Submitted");          
            }, 1000);
            
            e.preventDefault();
        }
    }
}
</script>

<style scoped>
#form {
  height: 35em;
  margin: 20px 0 0 20px;
  padding: 10px;
  border: 1px solid;
}

#check-box {
  margin: 20px;
}

#app-container {
  width: 900px;
  position: relative;
}

#tabbedItem {
  margin-top: 18px;
}
</style>