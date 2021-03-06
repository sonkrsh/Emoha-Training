/**
 *
 * Sourav
 *
 */
/* import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import 'antd/dist/antd.css';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Form, Input, Button, Checkbox } from 'antd';
import { Helmet } from 'react-helmet';
import makeSelectSourav from './selectors';
import reducer from './reducer';
import saga from './saga';

import { formValueSubmit } from './actions';

export function Sourav({ handleSubmit }) {
  useInjectReducer({ key: 'sourav', reducer });
  useInjectSaga({ key: 'sourav', saga });

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = values => {
    handleSubmit(values);
  };

  const onFinishFailed = () => {};
  return (
    <div>
      <Helmet titleTemplate="sourav" defaultTitle="Sourav">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
    <h1>Hello</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="hello" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

Sourav.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Sourav.propTypes = {
  handleSubmit: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sourav: makeSelectSourav(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: evt => {
      dispatch(formValueSubmit(evt));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Sourav);
