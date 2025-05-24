import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const providers = [{ id: "credentials", name: "Email and password" }];

const signIn = async (provider, formData) => {
  const email = formData?.get("email");
  const password = formData?.get("password");

  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      //"http://localhost:3000/auth/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": "mySecureAuthToken123",
      },
      credentials: "include",
      body: JSON.stringify({ username: email, password }),
    });

    // FAILED LOGIN CREDENTIALS
    if (!response.ok) {
      return {
        type: "CredentialsSignin",
        error: "Invalid credentials.",
      };
    }

    // SUCCESS
    const data = await response.json();
    // // Redirect to profile page if login is successful
    // if (data?.message) {
    //   console.log("success", data);
    //   // window.location.href = `/profile/${data.user.id}`;
    //   navigate(`/profile/${data.user.id}`);
    // }
    console.log("sucess", data);
    window.location.href = `/profile/${data.userId}`;

    // return {
    //   type: "CredentialsSignin",
    //   ...data,
    // };
  } catch (error) {
    // ERROR (IF API IS DOWN)
    return {
      type: "CredentialsSignin",
      error: "Network error.",
    };
    // console.log("error", error);
  }
};

export default function SignInfunction() {
  const theme = useTheme();
  // const navigate = useNavigate();
  // const doSignIn = (props) => {
  //   console.log('props', props)
  //   //happy@startstruck.com
  //   signIn(props).then((data) => {
  //     console.log("data", data);
  //     navigate(`/profile/${data.userName}`);
  //   });
  // };

  return (
    // preview-start
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{
          emailField: { autoFocus: false },
          form: { noValidate: true },
        }}
      />
    </AppProvider>
    // preview-end
  );
}
