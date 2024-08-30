import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Form, Input, Space, Typography } from "antd";
import SocialLogin from "./components/SocialLogin";

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const handleSignUp = (value: { email: string; password: string }) => {
    console.log(value);
  };
  return (
    <>
      <Card style={{ width: "60%" }}>
        <div className="text-center">
          <Title level={2}>Create an account</Title>
          <Paragraph type="secondary">Start your 30-day free trial.</Paragraph>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleSignUp}
          disabled={isLoading}
        >
          <Form.Item
            name={"name"}
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input allowClear maxLength={100} placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="email"
              allowClear
              maxLength={100}
              placeholder="Enter your email"
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password maxLength={100} placeholder="Create a password" />
          </Form.Item>
        </Form>

        <div className="mt-4 mb-3">
          <Button
            onClick={() => form.submit()}
            type="primary"
            style={{ width: "100%" }}
            size="large"
          >
            Get started
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-3 text-center">
          <Space>
            <Text>Already have an account?</Text>
            <Link to={"/login"}>Log in</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default SignUp;
