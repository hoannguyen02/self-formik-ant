import React from "react";
import { Input, Form } from "antd";

const CreateAntField = (Component) => ({ field, ...props }) => (
  <Form.Item>
    <Component {...field} {...props} />
  </Form.Item>
);

export const AntInput = CreateAntField(Input);
