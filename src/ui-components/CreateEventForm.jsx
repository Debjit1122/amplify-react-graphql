/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CreateEvent } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CreateEventForm(props) {
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
    name: "",
    description: "",
    detailedInfo: "",
    Country: "",
    mode: "",
    type: "",
    dateTime: "",
    venue: "",
    orgName: "",
    orgEmail: "",
    orgPhone: "",
    endDate: "",
    ticketPrice: "",
    orgDesc: "",
    orgAddress: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [detailedInfo, setDetailedInfo] = React.useState(
    initialValues.detailedInfo
  );
  const [Country, setCountry] = React.useState(initialValues.Country);
  const [mode, setMode] = React.useState(initialValues.mode);
  const [type, setType] = React.useState(initialValues.type);
  const [dateTime, setDateTime] = React.useState(initialValues.dateTime);
  const [venue, setVenue] = React.useState(initialValues.venue);
  const [orgName, setOrgName] = React.useState(initialValues.orgName);
  const [orgEmail, setOrgEmail] = React.useState(initialValues.orgEmail);
  const [orgPhone, setOrgPhone] = React.useState(initialValues.orgPhone);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [ticketPrice, setTicketPrice] = React.useState(
    initialValues.ticketPrice
  );
  const [orgDesc, setOrgDesc] = React.useState(initialValues.orgDesc);
  const [orgAddress, setOrgAddress] = React.useState(initialValues.orgAddress);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setDetailedInfo(initialValues.detailedInfo);
    setCountry(initialValues.Country);
    setMode(initialValues.mode);
    setType(initialValues.type);
    setDateTime(initialValues.dateTime);
    setVenue(initialValues.venue);
    setOrgName(initialValues.orgName);
    setOrgEmail(initialValues.orgEmail);
    setOrgPhone(initialValues.orgPhone);
    setEndDate(initialValues.endDate);
    setTicketPrice(initialValues.ticketPrice);
    setOrgDesc(initialValues.orgDesc);
    setOrgAddress(initialValues.orgAddress);
    setErrors({});
  };
  const validations = {
    name: [],
    description: [],
    detailedInfo: [],
    Country: [],
    mode: [],
    type: [],
    dateTime: [],
    venue: [],
    orgName: [],
    orgEmail: [{ type: "Email" }],
    orgPhone: [{ type: "Phone" }],
    endDate: [],
    ticketPrice: [],
    orgDesc: [],
    orgAddress: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          name,
          description,
          detailedInfo,
          Country,
          mode,
          type,
          dateTime,
          venue,
          orgName,
          orgEmail,
          orgPhone,
          endDate,
          ticketPrice,
          orgDesc,
          orgAddress,
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
          await DataStore.save(new CreateEvent(modelFields));
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
      {...getOverrideProps(overrides, "CreateEventForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Detailed info"
        isRequired={false}
        isReadOnly={false}
        value={detailedInfo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo: value,
              Country,
              mode,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.detailedInfo ?? value;
          }
          if (errors.detailedInfo?.hasError) {
            runValidationTasks("detailedInfo", value);
          }
          setDetailedInfo(value);
        }}
        onBlur={() => runValidationTasks("detailedInfo", detailedInfo)}
        errorMessage={errors.detailedInfo?.errorMessage}
        hasError={errors.detailedInfo?.hasError}
        {...getOverrideProps(overrides, "detailedInfo")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={Country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country: value,
              mode,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.Country ?? value;
          }
          if (errors.Country?.hasError) {
            runValidationTasks("Country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("Country", Country)}
        errorMessage={errors.Country?.errorMessage}
        hasError={errors.Country?.hasError}
        {...getOverrideProps(overrides, "Country")}
      ></TextField>
      <TextField
        label="Mode"
        isRequired={false}
        isReadOnly={false}
        value={mode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode: value,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.mode ?? value;
          }
          if (errors.mode?.hasError) {
            runValidationTasks("mode", value);
          }
          setMode(value);
        }}
        onBlur={() => runValidationTasks("mode", mode)}
        errorMessage={errors.mode?.errorMessage}
        hasError={errors.mode?.hasError}
        {...getOverrideProps(overrides, "mode")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              type: value,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={dateTime && convertToLocal(new Date(dateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime: value,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.dateTime ?? value;
          }
          if (errors.dateTime?.hasError) {
            runValidationTasks("dateTime", value);
          }
          setDateTime(value);
        }}
        onBlur={() => runValidationTasks("dateTime", dateTime)}
        errorMessage={errors.dateTime?.errorMessage}
        hasError={errors.dateTime?.hasError}
        {...getOverrideProps(overrides, "dateTime")}
      ></TextField>
      <TextField
        label="Venue"
        isRequired={false}
        isReadOnly={false}
        value={venue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime,
              venue: value,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.venue ?? value;
          }
          if (errors.venue?.hasError) {
            runValidationTasks("venue", value);
          }
          setVenue(value);
        }}
        onBlur={() => runValidationTasks("venue", venue)}
        errorMessage={errors.venue?.errorMessage}
        hasError={errors.venue?.hasError}
        {...getOverrideProps(overrides, "venue")}
      ></TextField>
      <TextField
        label="Org name"
        isRequired={false}
        isReadOnly={false}
        value={orgName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime,
              venue,
              orgName: value,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.orgName ?? value;
          }
          if (errors.orgName?.hasError) {
            runValidationTasks("orgName", value);
          }
          setOrgName(value);
        }}
        onBlur={() => runValidationTasks("orgName", orgName)}
        errorMessage={errors.orgName?.errorMessage}
        hasError={errors.orgName?.hasError}
        {...getOverrideProps(overrides, "orgName")}
      ></TextField>
      <TextField
        label="Org email"
        isRequired={false}
        isReadOnly={false}
        value={orgEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail: value,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.orgEmail ?? value;
          }
          if (errors.orgEmail?.hasError) {
            runValidationTasks("orgEmail", value);
          }
          setOrgEmail(value);
        }}
        onBlur={() => runValidationTasks("orgEmail", orgEmail)}
        errorMessage={errors.orgEmail?.errorMessage}
        hasError={errors.orgEmail?.hasError}
        {...getOverrideProps(overrides, "orgEmail")}
      ></TextField>
      <TextField
        label="Org phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={orgPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone: value,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.orgPhone ?? value;
          }
          if (errors.orgPhone?.hasError) {
            runValidationTasks("orgPhone", value);
          }
          setOrgPhone(value);
        }}
        onBlur={() => runValidationTasks("orgPhone", orgPhone)}
        errorMessage={errors.orgPhone?.errorMessage}
        hasError={errors.orgPhone?.hasError}
        {...getOverrideProps(overrides, "orgPhone")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={endDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate: value,
              ticketPrice,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.endDate ?? value;
          }
          if (errors.endDate?.hasError) {
            runValidationTasks("endDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("endDate", endDate)}
        errorMessage={errors.endDate?.errorMessage}
        hasError={errors.endDate?.hasError}
        {...getOverrideProps(overrides, "endDate")}
      ></TextField>
      <TextField
        label="Ticket price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ticketPrice}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice: value,
              orgDesc,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.ticketPrice ?? value;
          }
          if (errors.ticketPrice?.hasError) {
            runValidationTasks("ticketPrice", value);
          }
          setTicketPrice(value);
        }}
        onBlur={() => runValidationTasks("ticketPrice", ticketPrice)}
        errorMessage={errors.ticketPrice?.errorMessage}
        hasError={errors.ticketPrice?.hasError}
        {...getOverrideProps(overrides, "ticketPrice")}
      ></TextField>
      <TextField
        label="Org desc"
        isRequired={false}
        isReadOnly={false}
        value={orgDesc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc: value,
              orgAddress,
            };
            const result = onChange(modelFields);
            value = result?.orgDesc ?? value;
          }
          if (errors.orgDesc?.hasError) {
            runValidationTasks("orgDesc", value);
          }
          setOrgDesc(value);
        }}
        onBlur={() => runValidationTasks("orgDesc", orgDesc)}
        errorMessage={errors.orgDesc?.errorMessage}
        hasError={errors.orgDesc?.hasError}
        {...getOverrideProps(overrides, "orgDesc")}
      ></TextField>
      <TextField
        label="Org address"
        isRequired={false}
        isReadOnly={false}
        value={orgAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              type,
              dateTime,
              venue,
              orgName,
              orgEmail,
              orgPhone,
              endDate,
              ticketPrice,
              orgDesc,
              orgAddress: value,
            };
            const result = onChange(modelFields);
            value = result?.orgAddress ?? value;
          }
          if (errors.orgAddress?.hasError) {
            runValidationTasks("orgAddress", value);
          }
          setOrgAddress(value);
        }}
        onBlur={() => runValidationTasks("orgAddress", orgAddress)}
        errorMessage={errors.orgAddress?.errorMessage}
        hasError={errors.orgAddress?.hasError}
        {...getOverrideProps(overrides, "orgAddress")}
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
