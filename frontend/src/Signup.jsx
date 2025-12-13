import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
const Signup = () => {
  const [step, setStep] = useState("signup"); // signup, emailVerification, success
  const [email, setEmail] = useState("");

 
  const handleSignupSubmit = async(e) => {
    e.preventDefault();

    // Grab the email from the form and go to verification step
    const formData = new FormData(e.target);
    const emailvalue =formData.get("email");
    const payload ={
        fullName: formData.get("fullName"),
        email:emailvalue,
        password: formData.get("password")
    }
    console.log("formData",payload);
  //  console.log( "payload",emailValue,password);

    setEmail(emailvalue);

    try {
            const res =await axios.post("http://localhost:5000/api/auth/Signup",payload);
            console.log(res);
        } catch (error) {
            console.log("error in signup",error);
        }

    setStep("emailVerification");
  };

  const handleResendEmail = () => {
    alert("Verification email resent!");
  };

  const handleEnterApp = () => {
    alert("Entering the app...");
    location.href = "/Login"; // Redirect to home
  };

  return (
    <Page>
      {step === "signup" && (
        <Card>
          <Brand>
            <Logo>
              Shop<Highlight>Kart</Highlight>
            </Logo>
            <Subtitle>Create your ShopKart account</Subtitle>
          </Brand>

          <form onSubmit={handleSignupSubmit}>
            <Label>Full Name</Label>
            <Input type="text" name="fullName" placeholder="John Doe" required />

            <Label>Email Address</Label>
            <Input type="email" name="email" placeholder="you@shopkart.com" required />

            <Label>Password</Label>
            <Input type="password" name="password" placeholder="••••••••" required />

            <Label>Confirm Password</Label>
            <Input type="password" name="confirmPassword" placeholder="••••••••" required />

            <Button type="submit">Create Account</Button>
          </form>

          <FooterText>
            Already have an account? <Link href="/Login">Sign in</Link>
          </FooterText>
        </Card>
      )}

      {step === "emailVerification" && (
        <Card>
          <IconWrapper>
            <EnvelopeIcon>✉️</EnvelopeIcon>
          </IconWrapper>
          <Title>Email Verification</Title>
          <Message>
            We have sent you an email verification to <Bold>{email}</Bold>. If you didn't receive it, click the button below.
          </Message>
          <Button onClick={handleResendEmail}>Re-Send Email</Button>
          <FooterText>
            <Link onClick={() => setStep("success")}>I have verified my email</Link>
          </FooterText>
        </Card>
      )}

      {step === "success" && (
        <Card>
          <IconWrapper>
            <CheckIcon>✔️</CheckIcon>
          </IconWrapper>
          <Title>Successfully Registration</Title>
          <Message>
            Hurray! You have successfully created your account. Enter the app to explore all its features.
          </Message>
          <Button onClick={handleEnterApp} style={{ background: "#5a17ea" }}>
            Enter the App
          </Button>
        </Card>
      )}
    </Page>
  );
};

export default Signup;



//Styled components (keeping your original styles + new ones)

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  //background: linear-gradient(135deg, #4d2828, #eaeaea);
  background: linear-gradient(135deg, #3a1f1f 0%, #ebe6df 100%);

`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 32px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Brand = styled.div`
  text-align: center;
  margin-bottom: 22px;
`;

const Logo = styled.h1`
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Highlight = styled.span`
  color: #b88a44;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
`;

const Label = styled.label`
  font-size: 13px;
  margin-bottom: 6px;
  display: block;
  font-weight: 500;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  outline: none;

  &:focus {
    border-color: #b88a44;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 13px;
  border-radius: 10px;
  border: none;
  background: #111827;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.5px;
  margin-top: 10px;

  &:hover {
    background: #000;
  }
`;

const FooterText = styled.p`
  margin-top: 20px;
  font-size: 13px;
  text-align: center;
  color: #6b7280;
`;

const Link = styled.a`
  color: #b88a44;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
`;

// New styled elements for verification and success screens

const IconWrapper = styled.div`
  margin-bottom: 18px;
  font-size: 40px;
`;

const EnvelopeIcon = styled.span`
  color: #5a17ea; /* purple */
`;

const CheckIcon = styled.span`
  color: #059669; /* green */
`;

const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 6px;
`;

const Message = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 16px;
`;

const Bold = styled.span`
  font-weight: 700;
`;









