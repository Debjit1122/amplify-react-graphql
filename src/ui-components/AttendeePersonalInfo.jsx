/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  Heading,
  Radio,
  RadioGroupField,
  StepperField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Attendees } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AttendeePersonalInfo(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    attendeeName: "",
    attendeeAge: 0,
    attendeeDOB: "",
    attendeeGender: undefined,
    attendeeEmail: "",
    attendeePhone: "",
  };
  const [attendeeName, setAttendeeName] = React.useState(
    initialValues.attendeeName
  );
  const [attendeeAge, setAttendeeAge] = React.useState(
    initialValues.attendeeAge
  );
  const [attendeeDOB, setAttendeeDOB] = React.useState(
    initialValues.attendeeDOB
  );
  const [attendeeGender, setAttendeeGender] = React.useState(
    initialValues.attendeeGender
  );
  const [attendeeEmail, setAttendeeEmail] = React.useState(
    initialValues.attendeeEmail
  );
  const [attendeePhone, setAttendeePhone] = React.useState(
    initialValues.attendeePhone
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAttendeeName(initialValues.attendeeName);
    setAttendeeAge(initialValues.attendeeAge);
    setAttendeeDOB(initialValues.attendeeDOB);
    setAttendeeGender(initialValues.attendeeGender);
    setAttendeeEmail(initialValues.attendeeEmail);
    setAttendeePhone(initialValues.attendeePhone);
    setErrors({});
  };
  const validations = {
    attendeeName: [{ type: "Required" }],
    attendeeAge: [],
    attendeeDOB: [],
    attendeeGender: [],
    attendeeEmail: [{ type: "Required" }, { type: "Email" }],
    attendeePhone: [{ type: "Required" }, { type: "Phone" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          attendeeName,
          attendeeAge,
          attendeeDOB,
          attendeeGender,
          attendeeEmail,
          attendeePhone,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Attendees(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AttendeePersonalInfo")}
      {...rest}
    >
      <Heading
        level={5}
        children="Personal Information"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Full Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={attendeeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName: value,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
            };
            const result = onChange(modelFields);
            value = result?.attendeeName ?? value;
          }
          if (errors.attendeeName?.hasError) {
            runValidationTasks("attendeeName", value);
          }
          setAttendeeName(value);
        }}
        onBlur={() => runValidationTasks("attendeeName", attendeeName)}
        errorMessage={errors.attendeeName?.errorMessage}
        hasError={errors.attendeeName?.hasError}
        {...getOverrideProps(overrides, "attendeeName")}
      ></TextField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <StepperField
          label="Age"
          isReadOnly={false}
          isRequired={false}
          value={attendeeAge}
          onStepChange={(e) => {
            let value = e;
            if (onChange) {
              const modelFields = {
                attendeeName,
                attendeeAge: value,
                attendeeDOB,
                attendeeGender,
                attendeeEmail,
                attendeePhone,
              };
              const result = onChange(modelFields);
              value = result?.attendeeAge ?? value;
            }
            if (errors.attendeeAge?.hasError) {
              runValidationTasks("attendeeAge", value);
            }
            setAttendeeAge(value);
          }}
          onBlur={() => runValidationTasks("attendeeAge", attendeeAge)}
          errorMessage={errors.attendeeAge?.errorMessage}
          hasError={errors.attendeeAge?.hasError}
          {...getOverrideProps(overrides, "attendeeAge")}
        ></StepperField>
        <TextField
          label="Date of Birth"
          isRequired={false}
          isReadOnly={false}
          type="date"
          value={attendeeDOB}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                attendeeName,
                attendeeAge,
                attendeeDOB: value,
                attendeeGender,
                attendeeEmail,
                attendeePhone,
              };
              const result = onChange(modelFields);
              value = result?.attendeeDOB ?? value;
            }
            if (errors.attendeeDOB?.hasError) {
              runValidationTasks("attendeeDOB", value);
            }
            setAttendeeDOB(value);
          }}
          onBlur={() => runValidationTasks("attendeeDOB", attendeeDOB)}
          errorMessage={errors.attendeeDOB?.errorMessage}
          hasError={errors.attendeeDOB?.hasError}
          {...getOverrideProps(overrides, "attendeeDOB")}
        ></TextField>
      </Grid>
      <RadioGroupField
        label="Gender"
        name="attendeeGender"
        isReadOnly={false}
        isRequired={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender: value,
              attendeeEmail,
              attendeePhone,
            };
            const result = onChange(modelFields);
            value = result?.attendeeGender ?? value;
          }
          if (errors.attendeeGender?.hasError) {
            runValidationTasks("attendeeGender", value);
          }
          setAttendeeGender(value);
        }}
        onBlur={() => runValidationTasks("attendeeGender", attendeeGender)}
        errorMessage={errors.attendeeGender?.errorMessage}
        hasError={errors.attendeeGender?.hasError}
        {...getOverrideProps(overrides, "attendeeGender")}
      >
        <Radio
          children="Male"
          value="Male"
          {...getOverrideProps(overrides, "attendeeGenderRadio0")}
        ></Radio>
        <Radio
          children="Female"
          value="Female"
          {...getOverrideProps(overrides, "attendeeGenderRadio1")}
        ></Radio>
        <Radio
          children="Non-Binary"
          value="Non-Binary"
          {...getOverrideProps(overrides, "attendeeGenderRadio2")}
        ></Radio>
        <Radio
          children="Others"
          value="Others"
          {...getOverrideProps(overrides, "attendeeGenderRadio3")}
        ></Radio>
      </RadioGroupField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Email</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={attendeeEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail: value,
              attendeePhone,
            };
            const result = onChange(modelFields);
            value = result?.attendeeEmail ?? value;
          }
          if (errors.attendeeEmail?.hasError) {
            runValidationTasks("attendeeEmail", value);
          }
          setAttendeeEmail(value);
        }}
        onBlur={() => runValidationTasks("attendeeEmail", attendeeEmail)}
        errorMessage={errors.attendeeEmail?.errorMessage}
        hasError={errors.attendeeEmail?.hasError}
        {...getOverrideProps(overrides, "attendeeEmail")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Phone</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={attendeePhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone: value,
            };
            const result = onChange(modelFields);
            value = result?.attendeePhone ?? value;
          }
          if (errors.attendeePhone?.hasError) {
            runValidationTasks("attendeePhone", value);
          }
          setAttendeePhone(value);
        }}
        onBlur={() => runValidationTasks("attendeePhone", attendeePhone)}
        errorMessage={errors.attendeePhone?.errorMessage}
        hasError={errors.attendeePhone?.hasError}
        {...getOverrideProps(overrides, "attendeePhone")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
