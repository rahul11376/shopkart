import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
const Login = () => {
  const [view, setView] = useState("login"); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


   const handlesubmit =async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    
     const payload ={
    //  email, password
      email,
      password
    }
    console.log("payload",payload);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/Login",payload,{
      headers: {
      Authorization: `Bearer ${token}`
     }
     });

      console.log("login response",res);
       localStorage.setItem("token", res.data.token);
      location.href = "/"; // Redirect to home on successful login

    } catch (error) {
      console.error("error in login", error.response?.data || error.message);
    }

  };



  return (
    <Page>
      <Card>
        <Brand>
          <Logo>
            Shop<Highlight>Kart</Highlight>
          </Logo>
          <Subtitle>Premium Watch Store</Subtitle>
        </Brand>

        {view === "login" && (
          <form onSubmit={handlesubmit}>
            <Label>Email Address</Label>
            <Input type="email" placeholder="you@shopkart.com" 
                   value={email}
                   onChange={e => setEmail(e.target.value)} 
           />

            <Label>Password</Label>
            <Input type="password" placeholder="••••••••"
                   value={password}
                   onChange={e => setPassword(e.target.value)} 
            />

            <Row>
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <LinkButton type="button" onClick={() => setView("forgot")}>
                Forgot Password?
              </LinkButton>
            </Row>

            <Button type="submit" >Sign In</Button>
          </form>
        )}

        {view === "forgot" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setView("success");
            }}
          >
            <Back type="button" onClick={() => setView("login")}>
              ← Back
            </Back>

            <Title>Forgot Password</Title>
            <InfoText>
              Enter the email address associated with your account.
            </InfoText>

            <Label>Email Address</Label>
            <Input type="email" placeholder="you@shopkart.com" required />

            <Button type="submit">Reset Password</Button>
          </form>
        )}

        {view === "success" && (
          <SuccessWrapper>
            <Check>✓</Check>
            <Title>Password Reset Done</Title>
            <InfoText>Now you can access your account.</InfoText>

            <Button type="button" onClick={() => setView("login")}>
              Sign In
            </Button>
          </SuccessWrapper>
        )}

        {view === "login" && (
          <FooterText>
            New to ShopKart? <Link href="/Signup">Create an account</Link>
          </FooterText>
        )}
      </Card>
    </Page>
  );
};

export default Login;



const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3a1f1f 0%, #ebe6df 100%);
`;

const Card = styled.div`
  width: 100%;
  max-width: 380px;
  background: #ffffff;
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
`;

const Brand = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Highlight = styled.span`
  color: #b88a44; /* luxury gold tone */
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  margin-bottom: 18px;
`;

const Link = styled.a`
  color: #b88a44;
  text-decoration: none;
  font-weight: 500;
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

  &:hover {
    background: #000;
  }
`;

const FooterText = styled.p`
  margin-top: 18px;
  font-size: 13px;
  text-align: center;
  color: #6b7280;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 6px;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 16px;
  text-align: center;
`;

const Back = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  cursor: pointer;
  color: #6b7280;
  margin-bottom: 10px;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #b88a44;
  font-weight: 500;
  cursor: pointer;
`;

const SuccessWrapper = styled.div`
  text-align: center;
`;

const Check = styled.div`
  width: 42px;
  height: 42px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background: #16a34a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
`;



















// import React from "react";
// import styled from "styled-components";

// const Login = () => {
//   return (
//     <Page>
//       <Card>
//         <Brand>
//           <Logo>
//             Shop<Highlight>Kart</Highlight>
//           </Logo>
//           <Subtitle>Premium Watch Store</Subtitle>
//         </Brand>

//         <form>
//           <Label>Email Address</Label>
//           <Input type="email" placeholder="you@shopkart.com" />

//           <Label>Password</Label>
//           <Input type="password" placeholder="••••••••" />

//           <Row>
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//             <Link href="#">Forgot Password?</Link>
//           </Row>

//           <Button type="submit">Sign In</Button>
//         </form>

//         <FooterText>
//           New to ShopKart? <Link href="#">Create an account</Link>
//         </FooterText>
//       </Card>
//     </Page>
//   );
// };

// export default Login;


// const Page = styled.div`
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(135deg, #f5f5f5, #eaeaea);
// `;

// const Card = styled.div`
//   width: 100%;
//   max-width: 380px;
//   background: #ffffff;
//   padding: 30px;
//   border-radius: 18px;
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
// `;

// const Brand = styled.div`
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const Logo = styled.div`
//   font-size: 26px;
//   font-weight: 700;
//   letter-spacing: 1px;
// `;

// const Highlight = styled.span`
//   color: #b88a44; /* luxury gold tone */
// `;

// const Subtitle = styled.p`
//   font-size: 14px;
//   color: #6b7280;
//   margin-top: 4px;
// `;

// const Label = styled.label`
//   font-size: 13px;
//   margin-bottom: 6px;
//   display: block;
//   font-weight: 500;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin-bottom: 14px;
//   border-radius: 8px;
//   border: 1px solid #d1d5db;
//   outline: none;

//   &:focus {
//     border-color: #b88a44;
//   }
// `;

// const Row = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 13px;
//   margin-bottom: 18px;
// `;

// const Link = styled.a`
//   color: #b88a44;
//   text-decoration: none;
//   font-weight: 500;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 13px;
//   border-radius: 10px;
//   border: none;
//   background: #111827;
//   color: #ffffff;
//   font-weight: 600;
//   cursor: pointer;
//   letter-spacing: 0.5px;

//   &:hover {
//     background: #000;
//   }
// `;

// const FooterText = styled.p`
//   margin-top: 18px;
//   font-size: 13px;
//   text-align: center;
//   color: #6b7280;
// `;



// import React from "react";
// import styled from "styled-components";


// const Login = () => {
//   return (
//     <Page>
//       <Card>
//         <Title>Welcome to Shopkart</Title>
//         <Subtitle>Enter your credentials to access your account.</Subtitle>

//         <form>
//           <Label>Email</Label>
//           <Input type="email" placeholder="name@email.com" />

//           <Label>Password</Label>
//           <Input type="password" placeholder="••••••••" />

//           <Row>
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//             <Link href="#">Forgot Password?</Link>
//           </Row>

//           <Button type="submit">Log In</Button>
//         </form>
//       </Card>
//     </Page>
//   );
// };

// export default Login;

// const Page = styled.div`
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: #f4f5f7;
// `;

// const Card = styled.div`
//   width: 100%;
//   max-width: 380px;
//   background: #ffffff;
//   padding: 28px;
//   border-radius: 16px;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
// `;

// const Title = styled.h1`
//   font-size: 22px;
//   margin-bottom: 6px;
// `;

// const Subtitle = styled.p`
//   font-size: 14px;
//   color: #6b7280;
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   font-size: 13px;
//   margin-bottom: 6px;
//   display: block;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin-bottom: 14px;
//   border-radius: 8px;
//   border: 1px solid #e5e7eb;
//   outline: none;

//   &:focus {
//     border-color: #6a0dfc;
//   }
// `;

// const Row = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 13px;
//   margin-bottom: 16px;
// `;

// const Link = styled.a`
//   color: #6a0dfc;
//   text-decoration: none;
//   font-weight: 500;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px;
//   border-radius: 8px;
//   border: none;
//   background: #6a0dfc;
//   color: #ffffff;
//   font-weight: 600;
//   cursor: pointer;

//   &:hover {
//     opacity: 0.95;
//   }
// `;

