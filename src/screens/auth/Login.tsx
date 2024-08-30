import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";

const { Title, Paragraph, Text } = Typography;
const Login = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const handleLogin = (value: { email: string; password: string }) => {
    console.log(value);
  };
  return (
    <>
      <Card style={{ width: "60%" }}>
        <div className="text-center">
          <Title level={2}>Log in to your account</Title>
          <Paragraph type="secondary">
            Welcome back! Please enter your details.
          </Paragraph>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleLogin}
          disabled={isLoading}
        >
          <Form.Item
            name={"email"}
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" allowClear maxLength={100} />
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password maxLength={100} />
          </Form.Item>
        </Form>

        <div className="row">
          <div className="col">
            <Checkbox
              checked={isRemember}
              onChange={(val) => setIsRemember(val.target.checked)}
            >
              Remember for 30 days
            </Checkbox>
          </div>
          <div className="col text-right">
            <Link to={"/forget-password"}>Forget password</Link>
          </div>
        </div>

        <div className="mt-4">
          <Button
            onClick={() => form.submit()}
            type="primary"
            style={{ width: "100%" }}
            size="large"
          >
            Login
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-4 text-center">
          <Space>
            <Text>Don't have an account?</Text>
            <Link to={"/sign-up"}>Sign up</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default Login;
