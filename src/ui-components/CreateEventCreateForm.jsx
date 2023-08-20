/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Button,
  Flex,
  Grid,
  Heading,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CreateEvent } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CreateEventCreateForm(props) {
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
    Country: undefined,
    mode: "",
    venue: "",
    type: "",
    dateTime: "",
    endDate: "",
    ticketPrice: "",
    orgName: "",
    orgEmail: "",
    orgPhone: "",
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
  const [venue, setVenue] = React.useState(initialValues.venue);
  const [type, setType] = React.useState(initialValues.type);
  const [dateTime, setDateTime] = React.useState(initialValues.dateTime);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [ticketPrice, setTicketPrice] = React.useState(
    initialValues.ticketPrice
  );
  const [orgName, setOrgName] = React.useState(initialValues.orgName);
  const [orgEmail, setOrgEmail] = React.useState(initialValues.orgEmail);
  const [orgPhone, setOrgPhone] = React.useState(initialValues.orgPhone);
  const [orgDesc, setOrgDesc] = React.useState(initialValues.orgDesc);
  const [orgAddress, setOrgAddress] = React.useState(initialValues.orgAddress);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setDetailedInfo(initialValues.detailedInfo);
    setCountry(initialValues.Country);
    setMode(initialValues.mode);
    setVenue(initialValues.venue);
    setType(initialValues.type);
    setDateTime(initialValues.dateTime);
    setEndDate(initialValues.endDate);
    setTicketPrice(initialValues.ticketPrice);
    setOrgName(initialValues.orgName);
    setOrgEmail(initialValues.orgEmail);
    setOrgPhone(initialValues.orgPhone);
    setOrgDesc(initialValues.orgDesc);
    setOrgAddress(initialValues.orgAddress);
    setErrors({});
  };
  const validations = {
    name: [
      { type: "Required" },
      {
        type: "NotContains",
        strValues: [
          "! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~",
        ],
        validationMessage:
          'The value must not contain any special characters "! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~"',
      },
    ],
    description: [
      { type: "Required" },
      {
        type: "LessThanChar",
        numValues: [60],
        validationMessage: "The value must be 60 characters or fewer",
      },
    ],
    detailedInfo: [
      { type: "Required" },
      {
        type: "LessThanChar",
        numValues: [1000],
        validationMessage: "The value must be 1000 characters or fewer",
      },
    ],
    Country: [],
    mode: [],
    venue: [],
    type: [],
    dateTime: [{ type: "Required" }],
    endDate: [],
    ticketPrice: [{ type: "Required" }],
    orgName: [{ type: "Required" }],
    orgEmail: [{ type: "Required" }, { type: "Email" }],
    orgPhone: [{ type: "Required" }, { type: "Phone" }],
    orgDesc: [{ type: "Required" }],
    orgAddress: [{ type: "Required" }],
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
          venue,
          type,
          dateTime,
          endDate,
          ticketPrice,
          orgName,
          orgEmail,
          orgPhone,
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
      {...getOverrideProps(overrides, "CreateEventCreateForm")}
      {...rest}
    >
      <Heading
        level={5}
        children="Event Details"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        placeholder="Add event name"
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
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Description</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="60 characters or fewer"
        isRequired={true}
        isReadOnly={false}
        placeholder="Enter a short description about your event"
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
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
      <TextAreaField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Detailed info</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="1000 characters or fewer"
        isRequired={true}
        isReadOnly={false}
        placeholder="Enter a detailed description about your event"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo: value,
              Country,
              mode,
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
      ></TextAreaField>
      <Autocomplete
        label="Country"
        isRequired={false}
        isReadOnly={false}
        placeholder="Please select a country"
        options={[
          {
            id: "Afghanistan",
            label: "Afghanistan",
          },
          {
            id: "Albania",
            label: "Albania",
          },
          {
            id: "Algeria",
            label: "Algeria",
          },
          {
            id: "Andorra",
            label: "Andorra",
          },
          {
            id: "Angola",
            label: "Angola",
          },
          {
            id: "Antigua and Barbuda",
            label: "Antigua and Barbuda",
          },
          {
            id: "Argentina",
            label: "Argentina",
          },
          {
            id: "Armenia",
            label: "Armenia",
          },
          {
            id: "Australia",
            label: "Australia",
          },
          {
            id: "Austria",
            label: "Austria",
          },
          {
            id: "Azerbaijan",
            label: "Azerbaijan",
          },
          {
            id: "Bahamas",
            label: "Bahamas",
          },
          {
            id: "Bahrain",
            label: "Bahrain",
          },
          {
            id: "Bangladesh",
            label: "Bangladesh",
          },
          {
            id: "Barbados",
            label: "Barbados",
          },
          {
            id: "Belarus",
            label: "Belarus",
          },
          {
            id: "Belgium",
            label: "Belgium",
          },
          {
            id: "Belize",
            label: "Belize",
          },
          {
            id: "Benin",
            label: "Benin",
          },
          {
            id: "Bhutan",
            label: "Bhutan",
          },
          {
            id: "Bolivia",
            label: "Bolivia",
          },
          {
            id: "Bosnia and Herzegovina",
            label: "Bosnia and Herzegovina",
          },
          {
            id: "Botswana",
            label: "Botswana",
          },
          {
            id: "Brazil",
            label: "Brazil",
          },
          {
            id: "Brunei",
            label: "Brunei",
          },
          {
            id: "Bulgaria",
            label: "Bulgaria",
          },
          {
            id: "Burkina Faso",
            label: "Burkina Faso",
          },
          {
            id: "Burundi",
            label: "Burundi",
          },
          {
            id: "Cabo Verde",
            label: "Cabo Verde",
          },
          {
            id: "Cambodia",
            label: "Cambodia",
          },
          {
            id: "Cameroon",
            label: "Cameroon",
          },
          {
            id: "Canada",
            label: "Canada",
          },
          {
            id: "Central African Republic",
            label: "Central African Republic",
          },
          {
            id: "Chad",
            label: "Chad",
          },
          {
            id: "Chile",
            label: "Chile",
          },
          {
            id: "China",
            label: "China",
          },
          {
            id: "Colombia",
            label: "Colombia",
          },
          {
            id: "Comoros",
            label: "Comoros",
          },
          {
            id: "Congo",
            label: "Congo",
          },
          {
            id: "Costa Rica",
            label: "Costa Rica",
          },
          {
            id: "Croatia",
            label: "Croatia",
          },
          {
            id: "Cuba",
            label: "Cuba",
          },
          {
            id: "Cyprus",
            label: "Cyprus",
          },
          {
            id: "Czech Republic",
            label: "Czech Republic",
          },
          {
            id: "Denmark",
            label: "Denmark",
          },
          {
            id: "Djibouti",
            label: "Djibouti",
          },
          {
            id: "Dominica",
            label: "Dominica",
          },
          {
            id: "Dominican Republic",
            label: "Dominican Republic",
          },
          {
            id: "Ecuador",
            label: "Ecuador",
          },
          {
            id: "Egypt",
            label: "Egypt",
          },
          {
            id: "El Salvador",
            label: "El Salvador",
          },
          {
            id: "Equatorial Guinea",
            label: "Equatorial Guinea",
          },
          {
            id: "Eritrea",
            label: "Eritrea",
          },
          {
            id: "Estonia",
            label: "Estonia",
          },
          {
            id: "Eswatini",
            label: "Eswatini",
          },
          {
            id: "Ethiopia",
            label: "Ethiopia",
          },
          {
            id: "Fiji",
            label: "Fiji",
          },
          {
            id: "Finland",
            label: "Finland",
          },
          {
            id: "France",
            label: "France",
          },
          {
            id: "Gabon",
            label: "Gabon",
          },
          {
            id: "Gambia",
            label: "Gambia",
          },
          {
            id: "Georgia",
            label: "Georgia",
          },
          {
            id: "Germany",
            label: "Germany",
          },
          {
            id: "Ghana",
            label: "Ghana",
          },
          {
            id: "Greece",
            label: "Greece",
          },
          {
            id: "Grenada",
            label: "Grenada",
          },
          {
            id: "Guatemala",
            label: "Guatemala",
          },
          {
            id: "Guinea",
            label: "Guinea",
          },
          {
            id: "Guinea-Bissau",
            label: "Guinea-Bissau",
          },
          {
            id: "Guyana",
            label: "Guyana",
          },
          {
            id: "Haiti",
            label: "Haiti",
          },
          {
            id: "Honduras",
            label: "Honduras",
          },
          {
            id: "Hungary",
            label: "Hungary",
          },
          {
            id: "Iceland",
            label: "Iceland",
          },
          {
            id: "India",
            label: "India",
          },
          {
            id: "Indonesia",
            label: "Indonesia",
          },
          {
            id: "Iran",
            label: "Iran",
          },
          {
            id: "Iraq",
            label: "Iraq",
          },
          {
            id: "Ireland",
            label: "Ireland",
          },
          {
            id: "Israel",
            label: "Israel",
          },
          {
            id: "Italy",
            label: "Italy",
          },
          {
            id: "Jamaica",
            label: "Jamaica",
          },
          {
            id: "Japan",
            label: "Japan",
          },
          {
            id: "Jordan",
            label: "Jordan",
          },
          {
            id: "Kazakhstan",
            label: "Kazakhstan",
          },
          {
            id: "Kenya",
            label: "Kenya",
          },
          {
            id: "Kiribati",
            label: "Kiribati",
          },
          {
            id: "Korea, North",
            label: "Korea, North",
          },
          {
            id: "Korea, South",
            label: "Korea, South",
          },
          {
            id: "Kosovo",
            label: "Kosovo",
          },
          {
            id: "Kuwait",
            label: "Kuwait",
          },
          {
            id: "Kyrgyzstan",
            label: "Kyrgyzstan",
          },
          {
            id: "Laos",
            label: "Laos",
          },
          {
            id: "Latvia",
            label: "Latvia",
          },
          {
            id: "Lebanon",
            label: "Lebanon",
          },
          {
            id: "Lesotho",
            label: "Lesotho",
          },
          {
            id: "Liberia",
            label: "Liberia",
          },
          {
            id: "Libya",
            label: "Libya",
          },
          {
            id: "Liechtenstein",
            label: "Liechtenstein",
          },
          {
            id: "Lithuania",
            label: "Lithuania",
          },
          {
            id: "Luxembourg",
            label: "Luxembourg",
          },
          {
            id: "Madagascar",
            label: "Madagascar",
          },
          {
            id: "Malawi",
            label: "Malawi",
          },
          {
            id: "Malaysia",
            label: "Malaysia",
          },
          {
            id: "Maldives",
            label: "Maldives",
          },
          {
            id: "Mali",
            label: "Mali",
          },
          {
            id: "Malta",
            label: "Malta",
          },
          {
            id: "Marshall Islands",
            label: "Marshall Islands",
          },
          {
            id: "Mauritania",
            label: "Mauritania",
          },
          {
            id: "Mauritius",
            label: "Mauritius",
          },
          {
            id: "Mexico",
            label: "Mexico",
          },
          {
            id: "Micronesia",
            label: "Micronesia",
          },
          {
            id: "Moldova",
            label: "Moldova",
          },
          {
            id: "Monaco",
            label: "Monaco",
          },
          {
            id: "Mongolia",
            label: "Mongolia",
          },
          {
            id: "Montenegro",
            label: "Montenegro",
          },
          {
            id: "Morocco",
            label: "Morocco",
          },
          {
            id: "Mozambique",
            label: "Mozambique",
          },
          {
            id: "Myanmar",
            label: "Myanmar",
          },
          {
            id: "Namibia",
            label: "Namibia",
          },
          {
            id: "Nauru",
            label: "Nauru",
          },
          {
            id: "Nepal",
            label: "Nepal",
          },
          {
            id: "Netherlands",
            label: "Netherlands",
          },
          {
            id: "New Zealand",
            label: "New Zealand",
          },
          {
            id: "Nicaragua",
            label: "Nicaragua",
          },
          {
            id: "Niger",
            label: "Niger",
          },
          {
            id: "Nigeria",
            label: "Nigeria",
          },
          {
            id: "North Macedonia",
            label: "North Macedonia",
          },
          {
            id: "Norway",
            label: "Norway",
          },
          {
            id: "Oman",
            label: "Oman",
          },
          {
            id: "Pakistan",
            label: "Pakistan",
          },
          {
            id: "Palau",
            label: "Palau",
          },
          {
            id: "Palestine",
            label: "Palestine",
          },
          {
            id: "Panama",
            label: "Panama",
          },
          {
            id: "Papua New Guinea",
            label: "Papua New Guinea",
          },
          {
            id: "Paraguay",
            label: "Paraguay",
          },
          {
            id: "Peru",
            label: "Peru",
          },
          {
            id: "Philippines",
            label: "Philippines",
          },
          {
            id: "Poland",
            label: "Poland",
          },
          {
            id: "Portugal",
            label: "Portugal",
          },
          {
            id: "Qatar",
            label: "Qatar",
          },
          {
            id: "Romania",
            label: "Romania",
          },
          {
            id: "Russia",
            label: "Russia",
          },
          {
            id: "Rwanda",
            label: "Rwanda",
          },
          {
            id: "Saint Kitts and Nevis",
            label: "Saint Kitts and Nevis",
          },
          {
            id: "Saint Lucia",
            label: "Saint Lucia",
          },
          {
            id: "Saint Vincent and the Grenadines",
            label: "Saint Vincent and the Grenadines",
          },
          {
            id: "Samoa",
            label: "Samoa",
          },
          {
            id: "San Marino",
            label: "San Marino",
          },
          {
            id: "Sao Tome and Principe",
            label: "Sao Tome and Principe",
          },
          {
            id: "Saudi Arabia",
            label: "Saudi Arabia",
          },
          {
            id: "Senegal",
            label: "Senegal",
          },
          {
            id: "Serbia",
            label: "Serbia",
          },
          {
            id: "Seychelles",
            label: "Seychelles",
          },
          {
            id: "Sierra Leone",
            label: "Sierra Leone",
          },
          {
            id: "Singapore",
            label: "Singapore",
          },
          {
            id: "Slovakia",
            label: "Slovakia",
          },
          {
            id: "Slovenia",
            label: "Slovenia",
          },
          {
            id: "Solomon Islands",
            label: "Solomon Islands",
          },
          {
            id: "Somalia",
            label: "Somalia",
          },
          {
            id: "South Africa",
            label: "South Africa",
          },
          {
            id: "South Sudan",
            label: "South Sudan",
          },
          {
            id: "Spain",
            label: "Spain",
          },
          {
            id: "Sri Lanka",
            label: "Sri Lanka",
          },
          {
            id: "Sudan",
            label: "Sudan",
          },
          {
            id: "Suriname",
            label: "Suriname",
          },
          {
            id: "Sweden",
            label: "Sweden",
          },
          {
            id: "Switzerland",
            label: "Switzerland",
          },
          {
            id: "Syria",
            label: "Syria",
          },
          {
            id: "Taiwan",
            label: "Taiwan",
          },
          {
            id: "Tajikistan",
            label: "Tajikistan",
          },
          {
            id: "Tanzania",
            label: "Tanzania",
          },
          {
            id: "Thailand",
            label: "Thailand",
          },
          {
            id: "Timor-Leste",
            label: "Timor-Leste",
          },
          {
            id: "Togo",
            label: "Togo",
          },
          {
            id: "Tonga",
            label: "Tonga",
          },
          {
            id: "Trinidad and Tobago",
            label: "Trinidad and Tobago",
          },
          {
            id: "Tunisia",
            label: "Tunisia",
          },
          {
            id: "Turkey",
            label: "Turkey",
          },
          {
            id: "Turkmenistan",
            label: "Turkmenistan",
          },
          {
            id: "Tuvalu",
            label: "Tuvalu",
          },
          {
            id: "Uganda",
            label: "Uganda",
          },
          {
            id: "Ukraine",
            label: "Ukraine",
          },
          {
            id: "United Arab Emirates",
            label: "United Arab Emirates",
          },
          {
            id: "United Kingdom",
            label: "United Kingdom",
          },
          {
            id: "Uruguay",
            label: "Uruguay",
          },
          {
            id: "Uzbekistan",
            label: "Uzbekistan",
          },
          {
            id: "Vanuatu",
            label: "Vanuatu",
          },
          {
            id: "Vatican City",
            label: "Vatican City",
          },
          {
            id: "Venezuela",
            label: "Venezuela",
          },
          {
            id: "Vietnam",
            label: "Vietnam",
          },
          {
            id: "Yemen",
            label: "Yemen",
          },
          {
            id: "Zambia",
            label: "Zambia",
          },
          {
            id: "Zimbabwe",
            label: "Zimbabwe",
          },
        ]}
        onSelect={({ id, label }) => {
          setCountry(id);
          runValidationTasks("Country", id);
        }}
        onClear={() => {
          setCountry("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country: value,
              mode,
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
        labelHidden={false}
        {...getOverrideProps(overrides, "Country")}
      ></Autocomplete>
      <SelectField
        label="Mode"
        placeholder="Please choose a mode of event"
        isDisabled={false}
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
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
      >
        <option
          children="in-person"
          value="in-person"
          {...getOverrideProps(overrides, "modeoption0")}
        ></option>
        <option
          children="virtual"
          value="virtual"
          {...getOverrideProps(overrides, "modeoption1")}
        ></option>
        <option
          children="hybrid"
          value="hybrid"
          {...getOverrideProps(overrides, "modeoption2")}
        ></option>
      </SelectField>
      <TextAreaField
        label="Venue (if applicable)"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              venue: value,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
      ></TextAreaField>
      <SelectField
        label="Type"
        placeholder="Please choose your event type"
        isDisabled={false}
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
              venue,
              type: value,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
      >
        <option
          children="Conference"
          value="Conference"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Workshop"
          value="Workshop"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Seminar"
          value="Seminar"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Webinar"
          value="Webinar"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
        <option
          children="Trade Show"
          value="Trade Show"
          {...getOverrideProps(overrides, "typeoption4")}
        ></option>
        <option
          children="Exhibition"
          value="Exhibition"
          {...getOverrideProps(overrides, "typeoption5")}
        ></option>
        <option
          children="Product Launch"
          value="Product Launch"
          {...getOverrideProps(overrides, "typeoption6")}
        ></option>
        <option
          children="Networking Event"
          value="Networking Event"
          {...getOverrideProps(overrides, "typeoption7")}
        ></option>
        <option
          children="Gala/Celebration"
          value="Gala/Celebration"
          {...getOverrideProps(overrides, "typeoption8")}
        ></option>
        <option
          children="Hackathon"
          value="Hackathon"
          {...getOverrideProps(overrides, "typeoption9")}
        ></option>
        <option
          children="Panel Discussion"
          value="Panel Discussion"
          {...getOverrideProps(overrides, "typeoption10")}
        ></option>
        <option
          children="Charity/Fundraising"
          value="Charity/Fundraising"
          {...getOverrideProps(overrides, "typeoption11")}
        ></option>
        <option
          children="Cultural/Artistic"
          value="Cultural/Artistic"
          {...getOverrideProps(overrides, "typeoption12")}
        ></option>
        <option
          children="Sports Event"
          value="Sports Event"
          {...getOverrideProps(overrides, "typeoption13")}
        ></option>
        <option
          children="Entertainment Show"
          value="Entertainment Show"
          {...getOverrideProps(overrides, "typeoption14")}
        ></option>
        <option
          children="Training Session"
          value="Training Session"
          {...getOverrideProps(overrides, "typeoption15")}
        ></option>
        <option
          children="Press Conference"
          value="Press Conference"
          {...getOverrideProps(overrides, "typeoption16")}
        ></option>
        <option
          children="Ceremony"
          value="Ceremony"
          {...getOverrideProps(overrides, "typeoption17")}
        ></option>
        <option
          children="Symposium"
          value="Symposium"
          {...getOverrideProps(overrides, "typeoption18")}
        ></option>
        <option
          children="Meetup"
          value="Meetup"
          {...getOverrideProps(overrides, "typeoption19")}
        ></option>
        <option
          children="Lecture"
          value="Lecture"
          {...getOverrideProps(overrides, "typeoption20")}
        ></option>
        <option
          children="Symposium"
          value="Symposium"
          {...getOverrideProps(overrides, "typeoption21")}
        ></option>
        <option
          children="Roundtable Discussion"
          value="Roundtable Discussion"
          {...getOverrideProps(overrides, "typeoption22")}
        ></option>
        <option
          children="Retreat"
          value="Retreat"
          {...getOverrideProps(overrides, "typeoption23")}
        ></option>
        <option
          children="Bootcamp"
          value="Bootcamp"
          {...getOverrideProps(overrides, "typeoption24")}
        ></option>
        <option
          children="Festival"
          value="Festival"
          {...getOverrideProps(overrides, "typeoption25")}
        ></option>
        <option
          children="Showcase"
          value="Showcase"
          {...getOverrideProps(overrides, "typeoption26")}
        ></option>
        <option
          children="Summit"
          value="Summit"
          {...getOverrideProps(overrides, "typeoption27")}
        ></option>
        <option
          children="Awards Ceremony"
          value="Awards Ceremony"
          {...getOverrideProps(overrides, "typeoption28")}
        ></option>
        <option
          children="Demo Day"
          value="Demo Day"
          {...getOverrideProps(overrides, "typeoption29")}
        ></option>
        <option
          children="Forum"
          value="Forum"
          {...getOverrideProps(overrides, "typeoption30")}
        ></option>
        <option
          children="Expo"
          value="Expo"
          {...getOverrideProps(overrides, "typeoption31")}
        ></option>
        <option
          children="Job Fair"
          value="Job Fair"
          {...getOverrideProps(overrides, "typeoption32")}
        ></option>
        <option
          children="Tour"
          value="Tour"
          {...getOverrideProps(overrides, "typeoption33")}
        ></option>
        <option
          children="Open House"
          value="Open House"
          {...getOverrideProps(overrides, "typeoption34")}
        ></option>
        <option
          children="Trade Mission"
          value="Trade Mission"
          {...getOverrideProps(overrides, "typeoption35")}
        ></option>
        <option
          children="Rally"
          value="Rally"
          {...getOverrideProps(overrides, "typeoption36")}
        ></option>
        <option
          children="Concert"
          value="Concert"
          {...getOverrideProps(overrides, "typeoption37")}
        ></option>
        <option
          children="Art Exhibition"
          value="Art Exhibition"
          {...getOverrideProps(overrides, "typeoption38")}
        ></option>
        <option
          children="Fashion Show"
          value="Fashion Show"
          {...getOverrideProps(overrides, "typeoption39")}
        ></option>
        <option
          children="Theater Production"
          value="Theater Production"
          {...getOverrideProps(overrides, "typeoption40")}
        ></option>
        <option
          children="Film Screening"
          value="Film Screening"
          {...getOverrideProps(overrides, "typeoption41")}
        ></option>
        <option
          children="Comedy Show"
          value="Comedy Show"
          {...getOverrideProps(overrides, "typeoption42")}
        ></option>
        <option
          children="Training Workshop"
          value="Training Workshop"
          {...getOverrideProps(overrides, "typeoption43")}
        ></option>
        <option
          children="Masterclass"
          value="Masterclass"
          {...getOverrideProps(overrides, "typeoption44")}
        ></option>
        <option
          children="Sponsorship Event"
          value="Sponsorship Event"
          {...getOverrideProps(overrides, "typeoption45")}
        ></option>
        <option
          children="Corporate Event"
          value="Corporate Event"
          {...getOverrideProps(overrides, "typeoption46")}
        ></option>
        <option
          children="Community Event"
          value="Community Event"
          {...getOverrideProps(overrides, "typeoption47")}
        ></option>
        <option
          children="E-Sports Tournament"
          value="E-Sports Tournament"
          {...getOverrideProps(overrides, "typeoption48")}
        ></option>
        <option
          children="Release Party"
          value="Release Party"
          {...getOverrideProps(overrides, "typeoption49")}
        ></option>
        <option
          children="Launch Event"
          value="Launch Event"
          {...getOverrideProps(overrides, "typeoption50")}
        ></option>
        <option
          children="Volunteer Event"
          value="Volunteer Event"
          {...getOverrideProps(overrides, "typeoption51")}
        ></option>
        <option
          children="Health Fair"
          value="Health Fair"
          {...getOverrideProps(overrides, "typeoption52")}
        ></option>
        <option
          children="Technology Showcase"
          value="Technology Showcase"
          {...getOverrideProps(overrides, "typeoption53")}
        ></option>
        <option
          children="Hackfest"
          value="Hackfest"
          {...getOverrideProps(overrides, "typeoption54")}
        ></option>
        <option
          children="Music Festival"
          value="Music Festival"
          {...getOverrideProps(overrides, "typeoption55")}
        ></option>
        <option
          children="Science Fair"
          value="Science Fair"
          {...getOverrideProps(overrides, "typeoption56")}
        ></option>
        <option
          children="Fashion Expo"
          value="Fashion Expo"
          {...getOverrideProps(overrides, "typeoption57")}
        ></option>
        <option
          children="Charity Auction"
          value="Charity Auction"
          {...getOverrideProps(overrides, "typeoption58")}
        ></option>
        <option
          children="Food Festival"
          value="Food Festival"
          {...getOverrideProps(overrides, "typeoption59")}
        ></option>
        <option
          children="Book Fair"
          value="Book Fair"
          {...getOverrideProps(overrides, "typeoption60")}
        ></option>
        <option
          children="Wellness Retreat"
          value="Wellness Retreat"
          {...getOverrideProps(overrides, "typeoption61")}
        ></option>
        <option
          children="Political Rally"
          value="Political Rally"
          {...getOverrideProps(overrides, "typeoption62")}
        ></option>
        <option
          children="Art Auction"
          value="Art Auction"
          {...getOverrideProps(overrides, "typeoption63")}
        ></option>
        <option
          children="Tech Conference"
          value="Tech Conference"
          {...getOverrideProps(overrides, "typeoption64")}
        ></option>
        <option
          children="Motivational Seminar"
          value="Motivational Seminar"
          {...getOverrideProps(overrides, "typeoption65")}
        ></option>
        <option
          children="Art Workshop"
          value="Art Workshop"
          {...getOverrideProps(overrides, "typeoption66")}
        ></option>
        <option
          children="Health Seminar"
          value="Health Seminar"
          {...getOverrideProps(overrides, "typeoption67")}
        ></option>
        <option
          children="Environmental Expo"
          value="Environmental Expo"
          {...getOverrideProps(overrides, "typeoption68")}
        ></option>
        <option
          children="Startup Pitch Event"
          value="Startup Pitch Event"
          {...getOverrideProps(overrides, "typeoption69")}
        ></option>
        <option
          children="Educational Conference"
          value="Educational Conference"
          {...getOverrideProps(overrides, "typeoption70")}
        ></option>
        <option
          children="Science Symposium"
          value="Science Symposium"
          {...getOverrideProps(overrides, "typeoption71")}
        ></option>
        <option
          children="Innovation Summit"
          value="Innovation Summit"
          {...getOverrideProps(overrides, "typeoption72")}
        ></option>
        <option
          children="Career Fair"
          value="Career Fair"
          {...getOverrideProps(overrides, "typeoption73")}
        ></option>
        <option
          children="Investor Demo Day"
          value="Investor Demo Day"
          {...getOverrideProps(overrides, "typeoption74")}
        ></option>
        <option
          children="AI Conference"
          value="AI Conference"
          {...getOverrideProps(overrides, "typeoption75")}
        ></option>
        <option
          children="Educational Workshop"
          value="Educational Workshop"
          {...getOverrideProps(overrides, "typeoption76")}
        ></option>
        <option
          children="Virtual Expo"
          value="Virtual Expo"
          {...getOverrideProps(overrides, "typeoption77")}
        ></option>
        <option
          children="TED-style Talk Event"
          value="TED-style Talk Event"
          {...getOverrideProps(overrides, "typeoption78")}
        ></option>
        <option
          children="Fitness Challenge"
          value="Fitness Challenge"
          {...getOverrideProps(overrides, "typeoption79")}
        ></option>
        <option
          children="Game Jam"
          value="Game Jam"
          {...getOverrideProps(overrides, "typeoption80")}
        ></option>
        <option
          children="Culinary Workshop"
          value="Culinary Workshop"
          {...getOverrideProps(overrides, "typeoption81")}
        ></option>
        <option
          children="Leadership Retreat"
          value="Leadership Retreat"
          {...getOverrideProps(overrides, "typeoption82")}
        ></option>
        <option
          children="Civic Engagement Event"
          value="Civic Engagement Event"
          {...getOverrideProps(overrides, "typeoption83")}
        ></option>
        <option
          children="Music Workshop"
          value="Music Workshop"
          {...getOverrideProps(overrides, "typeoption84")}
        ></option>
        <option
          children="Dance Showcase"
          value="Dance Showcase"
          {...getOverrideProps(overrides, "typeoption85")}
        ></option>
      </SelectField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Date time</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
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
              venue,
              type,
              dateTime: value,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
        label="End date (if applicable)"
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
              venue,
              type,
              dateTime,
              endDate: value,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Ticket price</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
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
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice: value,
              orgName,
              orgEmail,
              orgPhone,
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
      <Heading
        level={5}
        children="Organizer Details"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
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
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName: value,
              orgEmail,
              orgPhone,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Email</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
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
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail: value,
              orgPhone,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Phone</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
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
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone: value,
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
      <TextAreaField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Description</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
      ></TextAreaField>
      <TextAreaField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Address</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              detailedInfo,
              Country,
              mode,
              venue,
              type,
              dateTime,
              endDate,
              ticketPrice,
              orgName,
              orgEmail,
              orgPhone,
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
      ></TextAreaField>
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
