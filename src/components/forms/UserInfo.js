import React from "react";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #f8d315;
  float: left;
  font-family: HelveticaNeueLT-BoldCond;
`;


const Form = styled.form`
  max-width: 50%;
  margin: 2rem auto;
  border; 2px solid #f8d315;
  label{
    display: block;
    padding: 1rem 0 0.5rem 0;
    clear: both;
  }
  input, textarea{
    display: block;
    width: 100%;
    padding: 0.5rem;
  }
`;

const Button = styled.button`
  border: 0;
  background: #f8d315;
  padding: 1rem;
  color: black;
  margin: 1rem 0;
  width: auto;
  text-transform: uppercase;
  &:hover {
    transform: scale(1.1);
  }
`;


const userInfo = (props) => {
  
  return <div>
      <Form onSubmit={props.submit}>
        <section>
          <legend>
            <Title>Delivery Address</Title>

          </legend>
          <div className="form_group">
            <div>
              <label htmlFor="company">Company (optional)</label>
              <input id="company" type="text" name="company" />
            </div>

            <div>
              <label htmlFor="street">Street</label> <br />
              <input id="street" type="text" name="street" />
            </div>
          </div>

          <div className="form_group">
            <div>
              <label htmlFor="city">City</label> <br />
              <input id="city" type="text" name="city" />
            </div>

            <div>
              <label htmlFor="postcode">Postcode</label> <br />
              <input id="postcode" type="text" name="postcode" />
            </div>
          </div>
        </section>

        <section>
          <legend>
            <Title>Your Details</Title>
          </legend>
          <div className="form_group">
            <div>
              <label htmlFor="firstName">First name*</label> <br />
              <input id="firstName" type="text" name="firstName" />
            </div>
            <div>
              <label htmlFor="email">Email address*</label> <br />
              <input id="email" type="text" name="email" />
            </div>
          </div>

          <div className="form_group">
            <div>
              <label htmlFor="lastName">Last name*</label> <br />
              <input id="lastName" type="text" name="lastName"  />
            </div>
            <div>
              <label htmlFor="phone">Phone number*</label> <br />
              <input id="phoneNumber" type="text" name="phoneNumber" />
            </div>
          </div>
          <Button>Submit</Button>
        </section>
      </Form>
    </div>;
};

export default userInfo;
