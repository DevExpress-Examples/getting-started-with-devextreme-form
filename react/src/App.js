import React, { useState, useCallback } from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css'

import Form, { 
  SimpleItem, 
  GroupItem,
  ButtonItem,
  TabbedItem,
  Tab,
  TabPanelOptions,
  NumericRule, 
  EmailRule,
  ButtonOptions
} from 'devextreme-react/form';

import { CheckBox } from 'devextreme-react/check-box';
import 'devextreme-react/text-area';

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

const tabPanelProperties = {
  id: 'tabbedItem'
}

const App = () => {
  const handleSubmit = React.useCallback((e) => {
      setTimeout(() => { 
          alert("Submitted");          
      }, 1000);

      e.preventDefault();
  }, []);

  const [isFormReadOnly, setisFormReadOnly] = useState(false);

  const onCheckBoxValueChanged = useCallback((e) => {
      setisFormReadOnly(e.value);
  }, []);

  return (
    <div id="app-container">
      <form action="/employee-page" onSubmit={handleSubmit}>
        <Form
          id="form"
          formData={employee}
          readOnly={isFormReadOnly}
          labelLocation="top"
          showColonAfterLabel={false}>
          <GroupItem
            colCount={2}>
            <GroupItem caption="Employee">
              <SimpleItem dataField="name" isRequired={true} />
              <SimpleItem dataField="position" />
              <SimpleItem dataField="hireDate" />
              <SimpleItem dataField="officeNumber">
                <NumericRule
                  message="This field should contain a number"
                />
              </SimpleItem>
            </GroupItem>
            <GroupItem caption="Personal Information">
              <TabbedItem>
                <TabPanelOptions
                  height={320} elementAttr={tabPanelProperties}
                />
                <Tab title="Contacts">
                  <SimpleItem dataField="phone" />
                  <SimpleItem dataField="skype" />
                  <SimpleItem dataField="email">
                    <EmailRule
                      message="This is not a valid Email"
                    />
                  </SimpleItem>
                </Tab>
                <Tab title="Note">
                  <SimpleItem 
                    dataField="notes"
                    editorType="dxTextArea"
                  />
                </Tab>
              </TabbedItem>
            </GroupItem>
          </GroupItem>
          <ButtonItem 
            horizontalAlignment="center">
            <ButtonOptions 
              text="Submit the Form"
              useSubmitBehavior={true}
            />
          </ButtonItem>
        </Form>
      </form>

      <CheckBox
        id="check-box"
        text="Enable read-only mode"
        value={isFormReadOnly}
        onValueChanged={onCheckBoxValueChanged}
      />
    </div>
  );
}

export default App;