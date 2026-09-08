import React, { useState, useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.fluent.blue.light.css';
import Form, {
  SimpleItem,
  GroupItem,
  ButtonItem,
  TabbedItem,
  Tab,
  TabPanelOptions,
  NumericRule,
  EmailRule,
  ButtonOptions,
} from 'devextreme-react/form';
import CheckBox from 'devextreme-react/check-box';
import type { CheckBoxTypes } from 'devextreme-react/check-box';
import notify from 'devextreme/ui/notify';
import 'devextreme/ui/text_area';
import type { Employee } from './types';

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

function App(): JSX.Element {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    setTimeout(() => {
      notify('Submitted', 'success', 2000);
    }, 1000);

    e.preventDefault();
  }, []);

  const [isFormReadOnly, setIsFormReadOnly] = useState<boolean>(false);

  const onCheckBoxValueChanged = useCallback(
    (e: CheckBoxTypes.ValueChangedEvent) => {
      setIsFormReadOnly(e.value ?? false);
    },
    [],
  );

  return (
    <React.Fragment>
      <form action="/employee-page" onSubmit={handleSubmit}>
        <Form
          id="form"
          formData={employee}
          readOnly={isFormReadOnly}
          labelLocation="top"
          showColonAfterLabel={false}>
          <GroupItem colCount={2}>
            <GroupItem caption="Employee">
              <SimpleItem dataField="name" isRequired={true} />
              <SimpleItem dataField="position" />
              <SimpleItem dataField="hireDate" />
              <SimpleItem dataField="officeNumber">
                <NumericRule message="This field should contain a number" />
              </SimpleItem>
            </GroupItem>
            <GroupItem caption="Personal Information">
              <TabbedItem>
                <TabPanelOptions height={280} />
                <Tab title="Contacts">
                  <SimpleItem dataField="phone" />
                  <SimpleItem dataField="skype" />
                  <SimpleItem dataField="email">
                    <EmailRule message="This is not a valid Email" />
                  </SimpleItem>
                </Tab>
                <Tab title="Note">
                  <SimpleItem dataField="notes" editorType="dxTextArea" />
                </Tab>
              </TabbedItem>
            </GroupItem>
          </GroupItem>
          <ButtonItem horizontalAlignment="center">
            <ButtonOptions text="Submit the Form" useSubmitBehavior={true} />
          </ButtonItem>
        </Form>
      </form>
      <CheckBox
        id="check-box"
        text="Enable read-only mode"
        value={isFormReadOnly}
        onValueChanged={onCheckBoxValueChanged}
      />
    </React.Fragment>
  );
}

export default App;

