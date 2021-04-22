import React, { ReactFragment } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Formik, FormikProps } from "formik";
import {
  ResetPasswordData,
  ResetPasswordSchema,
} from "../../data/ResetPasswordModel";
import { FormInput } from "../../components/FormInput";
import { Button, Layout, LayoutElement } from "@ui-kitten/components";
import { AppRoute } from '../../navigation/app-routes';

const ResetPasswordScreen = (props:ResetPasswordScreenProps): LayoutElement => {

  const onFormSubmit = (values: ResetPasswordData): void => {
    navigateSignIn();
  };

  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };
  const RenderForm = (props: FormikProps<ResetPasswordData>): ReactFragment => {
    return (
      <React.Fragment>
        <FormInput
          id="email"
          style={styles.formControl}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Button style={styles.submitButton} onPress={() => props.handleSubmit}>
          Reset
        </Button>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <ImageBackground
        style={styles.appBar}
        source={require("../../../assets/image-background.jpeg")}
      >
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={ResetPasswordData.empty()}
          validationSchema={ResetPasswordSchema}
          onSubmit={onFormSubmit}
        >
          {RenderForm}
        </Formik>
      </Layout>
    </React.Fragment>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formControl: {
    marginVertical: 4,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  submitButton: {
    borderRadius: 25,
    marginVertical: 20,
  },
});
