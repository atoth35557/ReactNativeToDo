import { Button, CheckBox, Icon, Layout, LayoutElement } from "@ui-kitten/components";
import React, { ReactFragment, useState } from "react";
import { AppRoute } from "../../navigation/app-routes";
import { SignInScreenProps } from "../../navigation/AuthNavigator";
import { SignInData, SignInSchema } from "../../data/SignInModel";
import { Formik, FormikProps } from "formik";
import {
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FormInput } from "../../components/FormInput";
import { EyeIcon, EyeOffIcon } from "../../../assets/icons";

const SignInScreen = (props: SignInScreenProps): LayoutElement => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onFormSubmit = (values: SignInData): void => {
    navigateHome();
  };

  const navigateHome = () => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignUp = () => {
    props.navigation.navigate(AppRoute.SIGN_UP);
  };

  const navigateResetPassword = () => {
    props.navigation.navigate(AppRoute.RESET_PASSWORD);
  };

  const toggleSecureEntry = () => {
    setShowPassword(!showPassword);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={showPassword ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  const RenderForm = (props: FormikProps<SignInData>): ReactFragment => {
    return (
      <React.Fragment>
        <FormInput
          id="email"
          style={styles.formControl}
          placeholder="Email"
          keyboardType="email-address"
        />
        <FormInput
          id="password"
          style={styles.formControl}
          placeholder="Password"
          secureTextEntry={!showPassword}
          accessoryRight={renderIcon}
        />
        <View style={styles.resetPasswordContainer}>
          <CheckBox
            style={styles.formControl}
            checked={rememberMe}
            onChange={setRememberMe}
          >
            Remember Me
          </CheckBox>
          <Button
            appearance="ghost"
            status="basic"
            onPress={navigateResetPassword}
          >
            Forgot password?
          </Button>
        </View>
        <Button style={styles.submitButton} onPress={()=>props.handleSubmit}>
          Sign In
        </Button>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <ImageBackground
        style={styles.appBar}
        source={require("../../../assets/image-background.jpeg")}
      />
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={SignInData.empty()}
          validationSchema={SignInSchema}
          onSubmit={onFormSubmit}
        >
          {RenderForm}
        </Formik>
        <Button
          style={styles.noAccountButton}
          onPress={navigateSignUp}
          appearance="ghost"
          status="basic"
        >
          Don't have an account?
        </Button>
      </Layout>
    </React.Fragment>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  resetPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formControl: {
    marginVertical: 4,
  },
  submitButton: {
    borderRadius: 25,
    marginVertical: 24,
  },
  noAccountButton: {
    alignSelf: "center",
  },
});
