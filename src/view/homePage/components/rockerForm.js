import React from "react";
import { Form, Input, Button, Select } from "antd";

const RockerForm = ({ form, countries, inputChangeHandler }) => {
  const { getFieldDecorator } = form;
  const { Option } = Select;

  const phoneValidation = (rule, value, callback) => {
    const phoneReg = /^0(\d{1,3}$)*[\d]{8,10}$/;
    if (value && !phoneReg.test(String(value))) {
      callback("Please enter a valid Swedish phone number! ");
    } else {
      callback();
    }
  };
  const snsValidation = (rule, value, callback) => {
    const snsReg = /^(19|20)?\d{2}((0[1-9])|(1[012]))(([012][1-9])|(3[01]))-\d{4}$/;
    if (value && !snsReg.test(String(value))) {
      callback("Please enter a valid Swedish Personal identity number! ");
    } else {
      callback();
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll(err => {
      if (!err) {
        localStorage.clear();
        console.log("Success");
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label="Social security number">
        {getFieldDecorator("ssn", {
          initialValue: localStorage.getItem("ssn"),
          rules: [
            {
              required: true,
              message: "Please input your Social security number!"
            },
            {
              validator: snsValidation
            }
          ]
        })(<Input onChange={e => inputChangeHandler("ssn", e.target.value)} />)}
      </Form.Item>
      <Form.Item label="Phone number">
        {getFieldDecorator("phoneNumber", {
          initialValue: localStorage.getItem("phoneNumber"),
          rules: [
            {
              required: true,
              message: "Please input your Phone number!"
            },
            {
              validator: phoneValidation
            }
          ]
        })(
          <Input
            onChange={e => inputChangeHandler("phoneNumber", e.target.value)}
          />
        )}
      </Form.Item>
      <Form.Item label="E-mail">
        {getFieldDecorator("email", {
          initialValue: localStorage.getItem("email"),
          rules: [
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: true,
              message: "Please input your E-mail!"
            }
          ]
        })(
          <Input onChange={e => inputChangeHandler("email", e.target.value)} />
        )}
      </Form.Item>
      <Form.Item label="Select Country" hasFeedback>
        {getFieldDecorator("country", {
          initialValue: localStorage.getItem("country"),
          rules: [{ required: true, message: "Please select your country!" }]
        })(
          <Select
            placeholder="Please select a country"
            showSearch
            onChange={e => inputChangeHandler("country", e)}
          >
            {countries.map(country => {
              return (
                <Option key={country.name} value={country.name}>
                  {country.name}
                </Option>
              );
            })}
          </Select>
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedRockerForm = Form.create({ name: "rockerForm" })(RockerForm);

export default WrappedRockerForm;
