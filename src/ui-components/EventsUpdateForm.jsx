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
  StepperField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Events } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EventsUpdateForm(props) {
  const {
    id: idProp,
    events: eventsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    eventTitle: "",
    eventType: "",
    eventCategory: "",
    eventDesc: "",
    eventSpeakers: "",
    eventStartDate: "",
    eventEndDate: "",
    eventStartTime: "",
    eventEndTime: "",
    eventTimeZone: undefined,
    eventVenueName: "",
    eventCountry: undefined,
    eventStreetAddress: "",
    eventCity: "",
    eventState: "",
    eventZipCode: "",
    eventVirtualURL: "",
    eventTicketCurrency: "",
    eventTicketPrice: "",
    eventTicketQuantity: 0,
    eventTicketSaleStart: "",
    eventTicketSaleEnd: "",
    promoLinkedin: "",
    promoTwitter: "",
    promoFacebook: "",
    promoInstagram: "",
    promoDiscord: "",
    promoDiscountType: "",
    promoDiscountAmount: "",
    promoDiscountCode: "",
    promoDiscountExpiration: "",
    eventCreatorName: "",
    eventCreatorHeadline: "",
    eventCreatorBio: "",
    orgName: "",
    orgEmail: "",
    orgPhone: "",
    orgWebsite: "",
    eventCodeofConduct: "",
  };
  const [eventTitle, setEventTitle] = React.useState(initialValues.eventTitle);
  const [eventType, setEventType] = React.useState(initialValues.eventType);
  const [eventCategory, setEventCategory] = React.useState(
    initialValues.eventCategory
  );
  const [eventDesc, setEventDesc] = React.useState(initialValues.eventDesc);
  const [eventSpeakers, setEventSpeakers] = React.useState(
    initialValues.eventSpeakers
  );
  const [eventStartDate, setEventStartDate] = React.useState(
    initialValues.eventStartDate
  );
  const [eventEndDate, setEventEndDate] = React.useState(
    initialValues.eventEndDate
  );
  const [eventStartTime, setEventStartTime] = React.useState(
    initialValues.eventStartTime
  );
  const [eventEndTime, setEventEndTime] = React.useState(
    initialValues.eventEndTime
  );
  const [eventTimeZone, setEventTimeZone] = React.useState(
    initialValues.eventTimeZone
  );
  const [eventVenueName, setEventVenueName] = React.useState(
    initialValues.eventVenueName
  );
  const [eventCountry, setEventCountry] = React.useState(
    initialValues.eventCountry
  );
  const [eventStreetAddress, setEventStreetAddress] = React.useState(
    initialValues.eventStreetAddress
  );
  const [eventCity, setEventCity] = React.useState(initialValues.eventCity);
  const [eventState, setEventState] = React.useState(initialValues.eventState);
  const [eventZipCode, setEventZipCode] = React.useState(
    initialValues.eventZipCode
  );
  const [eventVirtualURL, setEventVirtualURL] = React.useState(
    initialValues.eventVirtualURL
  );
  const [eventTicketCurrency, setEventTicketCurrency] = React.useState(
    initialValues.eventTicketCurrency
  );
  const [eventTicketPrice, setEventTicketPrice] = React.useState(
    initialValues.eventTicketPrice
  );
  const [eventTicketQuantity, setEventTicketQuantity] = React.useState(
    initialValues.eventTicketQuantity
  );
  const [eventTicketSaleStart, setEventTicketSaleStart] = React.useState(
    initialValues.eventTicketSaleStart
  );
  const [eventTicketSaleEnd, setEventTicketSaleEnd] = React.useState(
    initialValues.eventTicketSaleEnd
  );
  const [promoLinkedin, setPromoLinkedin] = React.useState(
    initialValues.promoLinkedin
  );
  const [promoTwitter, setPromoTwitter] = React.useState(
    initialValues.promoTwitter
  );
  const [promoFacebook, setPromoFacebook] = React.useState(
    initialValues.promoFacebook
  );
  const [promoInstagram, setPromoInstagram] = React.useState(
    initialValues.promoInstagram
  );
  const [promoDiscord, setPromoDiscord] = React.useState(
    initialValues.promoDiscord
  );
  const [promoDiscountType, setPromoDiscountType] = React.useState(
    initialValues.promoDiscountType
  );
  const [promoDiscountAmount, setPromoDiscountAmount] = React.useState(
    initialValues.promoDiscountAmount
  );
  const [promoDiscountCode, setPromoDiscountCode] = React.useState(
    initialValues.promoDiscountCode
  );
  const [promoDiscountExpiration, setPromoDiscountExpiration] = React.useState(
    initialValues.promoDiscountExpiration
  );
  const [eventCreatorName, setEventCreatorName] = React.useState(
    initialValues.eventCreatorName
  );
  const [eventCreatorHeadline, setEventCreatorHeadline] = React.useState(
    initialValues.eventCreatorHeadline
  );
  const [eventCreatorBio, setEventCreatorBio] = React.useState(
    initialValues.eventCreatorBio
  );
  const [orgName, setOrgName] = React.useState(initialValues.orgName);
  const [orgEmail, setOrgEmail] = React.useState(initialValues.orgEmail);
  const [orgPhone, setOrgPhone] = React.useState(initialValues.orgPhone);
  const [orgWebsite, setOrgWebsite] = React.useState(initialValues.orgWebsite);
  const [eventCodeofConduct, setEventCodeofConduct] = React.useState(
    initialValues.eventCodeofConduct
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventsRecord
      ? { ...initialValues, ...eventsRecord }
      : initialValues;
    setEventTitle(cleanValues.eventTitle);
    setEventType(cleanValues.eventType);
    setEventCategory(cleanValues.eventCategory);
    setEventDesc(cleanValues.eventDesc);
    setEventSpeakers(cleanValues.eventSpeakers);
    setEventStartDate(cleanValues.eventStartDate);
    setEventEndDate(cleanValues.eventEndDate);
    setEventStartTime(cleanValues.eventStartTime);
    setEventEndTime(cleanValues.eventEndTime);
    setEventTimeZone(cleanValues.eventTimeZone);
    setEventVenueName(cleanValues.eventVenueName);
    setEventCountry(cleanValues.eventCountry);
    setEventStreetAddress(cleanValues.eventStreetAddress);
    setEventCity(cleanValues.eventCity);
    setEventState(cleanValues.eventState);
    setEventZipCode(cleanValues.eventZipCode);
    setEventVirtualURL(cleanValues.eventVirtualURL);
    setEventTicketCurrency(cleanValues.eventTicketCurrency);
    setEventTicketPrice(cleanValues.eventTicketPrice);
    setEventTicketQuantity(cleanValues.eventTicketQuantity);
    setEventTicketSaleStart(cleanValues.eventTicketSaleStart);
    setEventTicketSaleEnd(cleanValues.eventTicketSaleEnd);
    setPromoLinkedin(cleanValues.promoLinkedin);
    setPromoTwitter(cleanValues.promoTwitter);
    setPromoFacebook(cleanValues.promoFacebook);
    setPromoInstagram(cleanValues.promoInstagram);
    setPromoDiscord(cleanValues.promoDiscord);
    setPromoDiscountType(cleanValues.promoDiscountType);
    setPromoDiscountAmount(cleanValues.promoDiscountAmount);
    setPromoDiscountCode(cleanValues.promoDiscountCode);
    setPromoDiscountExpiration(cleanValues.promoDiscountExpiration);
    setEventCreatorName(cleanValues.eventCreatorName);
    setEventCreatorHeadline(cleanValues.eventCreatorHeadline);
    setEventCreatorBio(cleanValues.eventCreatorBio);
    setOrgName(cleanValues.orgName);
    setOrgEmail(cleanValues.orgEmail);
    setOrgPhone(cleanValues.orgPhone);
    setOrgWebsite(cleanValues.orgWebsite);
    setEventCodeofConduct(cleanValues.eventCodeofConduct);
    setErrors({});
  };
  const [eventsRecord, setEventsRecord] = React.useState(eventsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Events, idProp)
        : eventsModelProp;
      setEventsRecord(record);
    };
    queryData();
  }, [idProp, eventsModelProp]);
  React.useEffect(resetStateValues, [eventsRecord]);
  const validations = {
    eventTitle: [],
    eventType: [],
    eventCategory: [],
    eventDesc: [],
    eventSpeakers: [],
    eventStartDate: [],
    eventEndDate: [],
    eventStartTime: [],
    eventEndTime: [],
    eventTimeZone: [],
    eventVenueName: [],
    eventCountry: [],
    eventStreetAddress: [],
    eventCity: [],
    eventState: [],
    eventZipCode: [],
    eventVirtualURL: [{ type: "URL" }],
    eventTicketCurrency: [],
    eventTicketPrice: [],
    eventTicketQuantity: [],
    eventTicketSaleStart: [],
    eventTicketSaleEnd: [],
    promoLinkedin: [],
    promoTwitter: [{ type: "URL" }],
    promoFacebook: [{ type: "URL" }],
    promoInstagram: [{ type: "URL" }],
    promoDiscord: [{ type: "URL" }],
    promoDiscountType: [],
    promoDiscountAmount: [],
    promoDiscountCode: [],
    promoDiscountExpiration: [],
    eventCreatorName: [],
    eventCreatorHeadline: [],
    eventCreatorBio: [],
    orgName: [],
    orgEmail: [{ type: "Email" }],
    orgPhone: [{ type: "Phone" }],
    orgWebsite: [{ type: "URL" }],
    eventCodeofConduct: [],
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
          eventTitle,
          eventType,
          eventCategory,
          eventDesc,
          eventSpeakers,
          eventStartDate,
          eventEndDate,
          eventStartTime,
          eventEndTime,
          eventTimeZone,
          eventVenueName,
          eventCountry,
          eventStreetAddress,
          eventCity,
          eventState,
          eventZipCode,
          eventVirtualURL,
          eventTicketCurrency,
          eventTicketPrice,
          eventTicketQuantity,
          eventTicketSaleStart,
          eventTicketSaleEnd,
          promoLinkedin,
          promoTwitter,
          promoFacebook,
          promoInstagram,
          promoDiscord,
          promoDiscountType,
          promoDiscountAmount,
          promoDiscountCode,
          promoDiscountExpiration,
          eventCreatorName,
          eventCreatorHeadline,
          eventCreatorBio,
          orgName,
          orgEmail,
          orgPhone,
          orgWebsite,
          eventCodeofConduct,
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
          await DataStore.save(
            Events.copyOf(eventsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EventsUpdateForm")}
      {...rest}
    >
      <Heading
        level={4}
        children="Event Details"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={eventTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle: value,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.eventTitle ?? value;
          }
          if (errors.eventTitle?.hasError) {
            runValidationTasks("eventTitle", value);
          }
          setEventTitle(value);
        }}
        onBlur={() => runValidationTasks("eventTitle", eventTitle)}
        errorMessage={errors.eventTitle?.errorMessage}
        hasError={errors.eventTitle?.hasError}
        {...getOverrideProps(overrides, "eventTitle")}
      ></TextField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <SelectField
          label="Type"
          placeholder="Please select an option"
          isDisabled={false}
          value={eventType}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType: value,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventType ?? value;
            }
            if (errors.eventType?.hasError) {
              runValidationTasks("eventType", value);
            }
            setEventType(value);
          }}
          onBlur={() => runValidationTasks("eventType", eventType)}
          errorMessage={errors.eventType?.errorMessage}
          hasError={errors.eventType?.hasError}
          {...getOverrideProps(overrides, "eventType")}
        >
          <option
            children="in-person"
            value="in-person"
            {...getOverrideProps(overrides, "eventTypeoption0")}
          ></option>
          <option
            children="virtual"
            value="virtual"
            {...getOverrideProps(overrides, "eventTypeoption1")}
          ></option>
          <option
            children="hybrid"
            value="hybrid"
            {...getOverrideProps(overrides, "eventTypeoption2")}
          ></option>
        </SelectField>
        <SelectField
          label="Event category"
          placeholder="Please select an option"
          isDisabled={false}
          value={eventCategory}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory: value,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventCategory ?? value;
            }
            if (errors.eventCategory?.hasError) {
              runValidationTasks("eventCategory", value);
            }
            setEventCategory(value);
          }}
          onBlur={() => runValidationTasks("eventCategory", eventCategory)}
          errorMessage={errors.eventCategory?.errorMessage}
          hasError={errors.eventCategory?.hasError}
          {...getOverrideProps(overrides, "eventCategory")}
        >
          <option
            children="Social"
            value="Social"
            {...getOverrideProps(overrides, "eventCategoryoption0")}
          ></option>
          <option
            children="Corporate"
            value="Corporate"
            {...getOverrideProps(overrides, "eventCategoryoption1")}
          ></option>
          <option
            children="Cultural and Arts"
            value="Cultural and Arts"
            {...getOverrideProps(overrides, "eventCategoryoption2")}
          ></option>
          <option
            children="Sports"
            value="Sports"
            {...getOverrideProps(overrides, "eventCategoryoption3")}
          ></option>
          <option
            children="Charity and Fundraising"
            value="Charity and Fundraising"
            {...getOverrideProps(overrides, "eventCategoryoption4")}
          ></option>
          <option
            children="Religious and Spiritual"
            value="Religious and Spiritual"
            {...getOverrideProps(overrides, "eventCategoryoption5")}
          ></option>
          <option
            children="Educational"
            value="Educational"
            {...getOverrideProps(overrides, "eventCategoryoption6")}
          ></option>
          <option
            children="Networking"
            value="Networking"
            {...getOverrideProps(overrides, "eventCategoryoption7")}
          ></option>
          <option
            children="Experiential"
            value="Experiential"
            {...getOverrideProps(overrides, "eventCategoryoption8")}
          ></option>
          <option
            children="Fashion and Beauty"
            value="Fashion and Beauty"
            {...getOverrideProps(overrides, "eventCategoryoption9")}
          ></option>
          <option
            children="Technology and Innovation"
            value="Technology and Innovation"
            {...getOverrideProps(overrides, "eventCategoryoption10")}
          ></option>
          <option
            children="Environmental and Sustainability"
            value="Environmental and Sustainability"
            {...getOverrideProps(overrides, "eventCategoryoption11")}
          ></option>
          <option
            children="Health and Wellness"
            value="Health and Wellness"
            {...getOverrideProps(overrides, "eventCategoryoption12")}
          ></option>
          <option
            children="Gaming and Entertainment"
            value="Gaming and Entertainment"
            {...getOverrideProps(overrides, "eventCategoryoption13")}
          ></option>
          <option
            children="Travel and Tourism"
            value="Travel and Tourism"
            {...getOverrideProps(overrides, "eventCategoryoption14")}
          ></option>
          <option
            children="Political and Social Activism"
            value="Political and Social Activism"
            {...getOverrideProps(overrides, "eventCategoryoption15")}
          ></option>
          <option
            children="Community"
            value="Community"
            {...getOverrideProps(overrides, "eventCategoryoption16")}
          ></option>
          <option
            children="Academic"
            value="Academic"
            {...getOverrideProps(overrides, "eventCategoryoption17")}
          ></option>
          <option
            children="Artistic"
            value="Artistic"
            {...getOverrideProps(overrides, "eventCategoryoption18")}
          ></option>
          <option
            children="Celebrity"
            value="Celebrity"
            {...getOverrideProps(overrides, "eventCategoryoption19")}
          ></option>
        </SelectField>
      </Grid>
      <TextAreaField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={eventDesc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc: value,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.eventDesc ?? value;
          }
          if (errors.eventDesc?.hasError) {
            runValidationTasks("eventDesc", value);
          }
          setEventDesc(value);
        }}
        onBlur={() => runValidationTasks("eventDesc", eventDesc)}
        errorMessage={errors.eventDesc?.errorMessage}
        hasError={errors.eventDesc?.hasError}
        {...getOverrideProps(overrides, "eventDesc")}
      ></TextAreaField>
      <TextAreaField
        label="Speaker Details"
        isRequired={false}
        isReadOnly={false}
        value={eventSpeakers}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers: value,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.eventSpeakers ?? value;
          }
          if (errors.eventSpeakers?.hasError) {
            runValidationTasks("eventSpeakers", value);
          }
          setEventSpeakers(value);
        }}
        onBlur={() => runValidationTasks("eventSpeakers", eventSpeakers)}
        errorMessage={errors.eventSpeakers?.errorMessage}
        hasError={errors.eventSpeakers?.hasError}
        {...getOverrideProps(overrides, "eventSpeakers")}
      ></TextAreaField>
      <Heading
        level={4}
        children="Date & Time"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid6")}
      >
        <TextField
          label="Start Date"
          isRequired={false}
          isReadOnly={false}
          type="date"
          value={eventStartDate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate: value,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventStartDate ?? value;
            }
            if (errors.eventStartDate?.hasError) {
              runValidationTasks("eventStartDate", value);
            }
            setEventStartDate(value);
          }}
          onBlur={() => runValidationTasks("eventStartDate", eventStartDate)}
          errorMessage={errors.eventStartDate?.errorMessage}
          hasError={errors.eventStartDate?.hasError}
          {...getOverrideProps(overrides, "eventStartDate")}
        ></TextField>
        <TextField
          label="Event end date"
          isRequired={false}
          isReadOnly={false}
          type="date"
          value={eventEndDate}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate: value,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventEndDate ?? value;
            }
            if (errors.eventEndDate?.hasError) {
              runValidationTasks("eventEndDate", value);
            }
            setEventEndDate(value);
          }}
          onBlur={() => runValidationTasks("eventEndDate", eventEndDate)}
          errorMessage={errors.eventEndDate?.errorMessage}
          hasError={errors.eventEndDate?.hasError}
          {...getOverrideProps(overrides, "eventEndDate")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid7")}
      >
        <TextField
          label="Start Time"
          isRequired={false}
          isReadOnly={false}
          type="time"
          value={eventStartTime}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime: value,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventStartTime ?? value;
            }
            if (errors.eventStartTime?.hasError) {
              runValidationTasks("eventStartTime", value);
            }
            setEventStartTime(value);
          }}
          onBlur={() => runValidationTasks("eventStartTime", eventStartTime)}
          errorMessage={errors.eventStartTime?.errorMessage}
          hasError={errors.eventStartTime?.hasError}
          {...getOverrideProps(overrides, "eventStartTime")}
        ></TextField>
        <TextField
          label="End Time"
          isRequired={false}
          isReadOnly={false}
          type="time"
          value={eventEndTime}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime: value,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventEndTime ?? value;
            }
            if (errors.eventEndTime?.hasError) {
              runValidationTasks("eventEndTime", value);
            }
            setEventEndTime(value);
          }}
          onBlur={() => runValidationTasks("eventEndTime", eventEndTime)}
          errorMessage={errors.eventEndTime?.errorMessage}
          hasError={errors.eventEndTime?.hasError}
          {...getOverrideProps(overrides, "eventEndTime")}
        ></TextField>
      </Grid>
      <Autocomplete
        label="Time Zone"
        isRequired={false}
        isReadOnly={false}
        options={[
          {
            id: "UTC",
            label: "UTC",
          },
          {
            id: "GMT",
            label: "GMT",
          },
          {
            id: "WET",
            label: "WET",
          },
          {
            id: "CET",
            label: "CET",
          },
          {
            id: "EET",
            label: "EET",
          },
          {
            id: "MSK",
            label: "MSK",
          },
          {
            id: "AST",
            label: "AST",
          },
          {
            id: "GST",
            label: "GST",
          },
          {
            id: "IST",
            label: "IST",
          },
          {
            id: "PKT",
            label: "PKT",
          },
          {
            id: "BST",
            label: "BST",
          },
          {
            id: "NPT",
            label: "NPT",
          },
          {
            id: "ALMT",
            label: "ALMT",
          },
          {
            id: "MMST",
            label: "MMST",
          },
          {
            id: "WIT",
            label: "WIT",
          },
          {
            id: "ICT",
            label: "ICT",
          },
          {
            id: "CST",
            label: "CST",
          },
          {
            id: "JST",
            label: "JST",
          },
          {
            id: "KST",
            label: "KST",
          },
          {
            id: "ACST",
            label: "ACST",
          },
          {
            id: "AEST",
            label: "AEST",
          },
          {
            id: "ACDT",
            label: "ACDT",
          },
          {
            id: "AEDT",
            label: "AEDT",
          },
          {
            id: "NZST",
            label: "NZST",
          },
          {
            id: "CHADT",
            label: "CHADT",
          },
          {
            id: "FJT",
            label: "FJT",
          },
          {
            id: "NRT",
            label: "NRT",
          },
          {
            id: "GILT",
            label: "GILT",
          },
          {
            id: "TVT",
            label: "TVT",
          },
          {
            id: "WAKT",
            label: "WAKT",
          },
          {
            id: "CHST",
            label: "CHST",
          },
          {
            id: "SST",
            label: "SST",
          },
          {
            id: "HST",
            label: "HST",
          },
          {
            id: "AKST",
            label: "AKST",
          },
          {
            id: "PST",
            label: "PST",
          },
          {
            id: "MST",
            label: "MST",
          },
          {
            id: "EST",
            label: "EST",
          },
          {
            id: "EDT",
            label: "EDT",
          },
        ]}
        onSelect={({ id, label }) => {
          setEventTimeZone(id);
          runValidationTasks("eventTimeZone", id);
        }}
        onClear={() => {
          setEventTimeZone("");
        }}
        defaultValue={eventTimeZone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone: value,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.eventTimeZone ?? value;
          }
          if (errors.eventTimeZone?.hasError) {
            runValidationTasks("eventTimeZone", value);
          }
          setEventTimeZone(value);
        }}
        onBlur={() => runValidationTasks("eventTimeZone", eventTimeZone)}
        errorMessage={errors.eventTimeZone?.errorMessage}
        hasError={errors.eventTimeZone?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "eventTimeZone")}
      ></Autocomplete>
      <Heading
        level={4}
        children="Location"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid10")}
      >
        <TextField
          label="Venue Name"
          isRequired={false}
          isReadOnly={false}
          value={eventVenueName}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName: value,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventVenueName ?? value;
            }
            if (errors.eventVenueName?.hasError) {
              runValidationTasks("eventVenueName", value);
            }
            setEventVenueName(value);
          }}
          onBlur={() => runValidationTasks("eventVenueName", eventVenueName)}
          errorMessage={errors.eventVenueName?.errorMessage}
          hasError={errors.eventVenueName?.hasError}
          {...getOverrideProps(overrides, "eventVenueName")}
        ></TextField>
        <Autocomplete
          label="Country"
          isRequired={false}
          isReadOnly={false}
          options={[]}
          onSelect={({ id, label }) => {
            setEventCountry(id);
            runValidationTasks("eventCountry", id);
          }}
          onClear={() => {
            setEventCountry("");
          }}
          defaultValue={eventCountry}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry: value,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventCountry ?? value;
            }
            if (errors.eventCountry?.hasError) {
              runValidationTasks("eventCountry", value);
            }
            setEventCountry(value);
          }}
          onBlur={() => runValidationTasks("eventCountry", eventCountry)}
          errorMessage={errors.eventCountry?.errorMessage}
          hasError={errors.eventCountry?.hasError}
          labelHidden={false}
          {...getOverrideProps(overrides, "eventCountry")}
        ></Autocomplete>
      </Grid>
      <TextField
        label="Street Address"
        isRequired={false}
        isReadOnly={false}
        value={eventStreetAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress: value,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.eventStreetAddress ?? value;
          }
          if (errors.eventStreetAddress?.hasError) {
            runValidationTasks("eventStreetAddress", value);
          }
          setEventStreetAddress(value);
        }}
        onBlur={() =>
          runValidationTasks("eventStreetAddress", eventStreetAddress)
        }
        errorMessage={errors.eventStreetAddress?.errorMessage}
        hasError={errors.eventStreetAddress?.hasError}
        {...getOverrideProps(overrides, "eventStreetAddress")}
      ></TextField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid12")}
      >
        <TextField
          label="City"
          isRequired={false}
          isReadOnly={false}
          value={eventCity}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity: value,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventCity ?? value;
            }
            if (errors.eventCity?.hasError) {
              runValidationTasks("eventCity", value);
            }
            setEventCity(value);
          }}
          onBlur={() => runValidationTasks("eventCity", eventCity)}
          errorMessage={errors.eventCity?.errorMessage}
          hasError={errors.eventCity?.hasError}
          {...getOverrideProps(overrides, "eventCity")}
        ></TextField>
        <TextField
          label="State"
          isRequired={false}
          isReadOnly={false}
          value={eventState}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState: value,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventState ?? value;
            }
            if (errors.eventState?.hasError) {
              runValidationTasks("eventState", value);
            }
            setEventState(value);
          }}
          onBlur={() => runValidationTasks("eventState", eventState)}
          errorMessage={errors.eventState?.errorMessage}
          hasError={errors.eventState?.hasError}
          {...getOverrideProps(overrides, "eventState")}
        ></TextField>
        <TextField
          label="Zip Code"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={eventZipCode}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode: value,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventZipCode ?? value;
            }
            if (errors.eventZipCode?.hasError) {
              runValidationTasks("eventZipCode", value);
            }
            setEventZipCode(value);
          }}
          onBlur={() => runValidationTasks("eventZipCode", eventZipCode)}
          errorMessage={errors.eventZipCode?.errorMessage}
          hasError={errors.eventZipCode?.hasError}
          {...getOverrideProps(overrides, "eventZipCode")}
        ></TextField>
      </Grid>
      <TextField
        label="Virtual Event URL (if applicable)"
        isRequired={false}
        isReadOnly={false}
        value={eventVirtualURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL: value,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.eventVirtualURL ?? value;
          }
          if (errors.eventVirtualURL?.hasError) {
            runValidationTasks("eventVirtualURL", value);
          }
          setEventVirtualURL(value);
        }}
        onBlur={() => runValidationTasks("eventVirtualURL", eventVirtualURL)}
        errorMessage={errors.eventVirtualURL?.errorMessage}
        hasError={errors.eventVirtualURL?.hasError}
        {...getOverrideProps(overrides, "eventVirtualURL")}
      ></TextField>
      <Heading
        level={4}
        children="Pricing"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid15")}
      >
        <TextField
          label="Currency"
          isRequired={false}
          isReadOnly={false}
          value={eventTicketCurrency}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency: value,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventTicketCurrency ?? value;
            }
            if (errors.eventTicketCurrency?.hasError) {
              runValidationTasks("eventTicketCurrency", value);
            }
            setEventTicketCurrency(value);
          }}
          onBlur={() =>
            runValidationTasks("eventTicketCurrency", eventTicketCurrency)
          }
          errorMessage={errors.eventTicketCurrency?.errorMessage}
          hasError={errors.eventTicketCurrency?.hasError}
          {...getOverrideProps(overrides, "eventTicketCurrency")}
        ></TextField>
        <TextField
          label="Price"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={eventTicketPrice}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice: value,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventTicketPrice ?? value;
            }
            if (errors.eventTicketPrice?.hasError) {
              runValidationTasks("eventTicketPrice", value);
            }
            setEventTicketPrice(value);
          }}
          onBlur={() =>
            runValidationTasks("eventTicketPrice", eventTicketPrice)
          }
          errorMessage={errors.eventTicketPrice?.errorMessage}
          hasError={errors.eventTicketPrice?.hasError}
          {...getOverrideProps(overrides, "eventTicketPrice")}
        ></TextField>
        <StepperField
          label="Quantity"
          isReadOnly={false}
          isRequired={false}
          value={eventTicketQuantity}
          onStepChange={(e) => {
            let value = e;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity: value,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventTicketQuantity ?? value;
            }
            if (errors.eventTicketQuantity?.hasError) {
              runValidationTasks("eventTicketQuantity", value);
            }
            setEventTicketQuantity(value);
          }}
          onBlur={() =>
            runValidationTasks("eventTicketQuantity", eventTicketQuantity)
          }
          errorMessage={errors.eventTicketQuantity?.errorMessage}
          hasError={errors.eventTicketQuantity?.hasError}
          {...getOverrideProps(overrides, "eventTicketQuantity")}
        ></StepperField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid16")}
      >
        <TextField
          label="Sale Start"
          isRequired={false}
          isReadOnly={false}
          type="datetime-local"
          value={
            eventTicketSaleStart &&
            convertToLocal(new Date(eventTicketSaleStart))
          }
          onChange={(e) => {
            let value =
              e.target.value === ""
                ? ""
                : new Date(e.target.value).toISOString();
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart: value,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventTicketSaleStart ?? value;
            }
            if (errors.eventTicketSaleStart?.hasError) {
              runValidationTasks("eventTicketSaleStart", value);
            }
            setEventTicketSaleStart(value);
          }}
          onBlur={() =>
            runValidationTasks("eventTicketSaleStart", eventTicketSaleStart)
          }
          errorMessage={errors.eventTicketSaleStart?.errorMessage}
          hasError={errors.eventTicketSaleStart?.hasError}
          {...getOverrideProps(overrides, "eventTicketSaleStart")}
        ></TextField>
        <TextField
          label="Sale End"
          isRequired={false}
          isReadOnly={false}
          type="datetime-local"
          value={
            eventTicketSaleEnd && convertToLocal(new Date(eventTicketSaleEnd))
          }
          onChange={(e) => {
            let value =
              e.target.value === ""
                ? ""
                : new Date(e.target.value).toISOString();
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd: value,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventTicketSaleEnd ?? value;
            }
            if (errors.eventTicketSaleEnd?.hasError) {
              runValidationTasks("eventTicketSaleEnd", value);
            }
            setEventTicketSaleEnd(value);
          }}
          onBlur={() =>
            runValidationTasks("eventTicketSaleEnd", eventTicketSaleEnd)
          }
          errorMessage={errors.eventTicketSaleEnd?.errorMessage}
          hasError={errors.eventTicketSaleEnd?.hasError}
          {...getOverrideProps(overrides, "eventTicketSaleEnd")}
        ></TextField>
      </Grid>
      <Heading
        level={4}
        children="Promotions & Discounts"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Heading>
      <TextField
        label="Linkedin"
        isRequired={false}
        isReadOnly={false}
        value={promoLinkedin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin: value,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.promoLinkedin ?? value;
          }
          if (errors.promoLinkedin?.hasError) {
            runValidationTasks("promoLinkedin", value);
          }
          setPromoLinkedin(value);
        }}
        onBlur={() => runValidationTasks("promoLinkedin", promoLinkedin)}
        errorMessage={errors.promoLinkedin?.errorMessage}
        hasError={errors.promoLinkedin?.hasError}
        {...getOverrideProps(overrides, "promoLinkedin")}
      ></TextField>
      <TextField
        label="Twitter"
        isRequired={false}
        isReadOnly={false}
        value={promoTwitter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter: value,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.promoTwitter ?? value;
          }
          if (errors.promoTwitter?.hasError) {
            runValidationTasks("promoTwitter", value);
          }
          setPromoTwitter(value);
        }}
        onBlur={() => runValidationTasks("promoTwitter", promoTwitter)}
        errorMessage={errors.promoTwitter?.errorMessage}
        hasError={errors.promoTwitter?.hasError}
        {...getOverrideProps(overrides, "promoTwitter")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        value={promoFacebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook: value,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.promoFacebook ?? value;
          }
          if (errors.promoFacebook?.hasError) {
            runValidationTasks("promoFacebook", value);
          }
          setPromoFacebook(value);
        }}
        onBlur={() => runValidationTasks("promoFacebook", promoFacebook)}
        errorMessage={errors.promoFacebook?.errorMessage}
        hasError={errors.promoFacebook?.hasError}
        {...getOverrideProps(overrides, "promoFacebook")}
      ></TextField>
      <TextField
        label="Instagram"
        isRequired={false}
        isReadOnly={false}
        value={promoInstagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram: value,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.promoInstagram ?? value;
          }
          if (errors.promoInstagram?.hasError) {
            runValidationTasks("promoInstagram", value);
          }
          setPromoInstagram(value);
        }}
        onBlur={() => runValidationTasks("promoInstagram", promoInstagram)}
        errorMessage={errors.promoInstagram?.errorMessage}
        hasError={errors.promoInstagram?.hasError}
        {...getOverrideProps(overrides, "promoInstagram")}
      ></TextField>
      <TextField
        label="Discord"
        isRequired={false}
        isReadOnly={false}
        value={promoDiscord}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord: value,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.promoDiscord ?? value;
          }
          if (errors.promoDiscord?.hasError) {
            runValidationTasks("promoDiscord", value);
          }
          setPromoDiscord(value);
        }}
        onBlur={() => runValidationTasks("promoDiscord", promoDiscord)}
        errorMessage={errors.promoDiscord?.errorMessage}
        hasError={errors.promoDiscord?.hasError}
        {...getOverrideProps(overrides, "promoDiscord")}
      ></TextField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid23")}
      >
        <SelectField
          label="Discount Type"
          placeholder="Please select an option"
          isDisabled={false}
          value={promoDiscountType}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType: value,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.promoDiscountType ?? value;
            }
            if (errors.promoDiscountType?.hasError) {
              runValidationTasks("promoDiscountType", value);
            }
            setPromoDiscountType(value);
          }}
          onBlur={() =>
            runValidationTasks("promoDiscountType", promoDiscountType)
          }
          errorMessage={errors.promoDiscountType?.errorMessage}
          hasError={errors.promoDiscountType?.hasError}
          {...getOverrideProps(overrides, "promoDiscountType")}
        >
          <option
            children="Amount"
            value="Amount"
            {...getOverrideProps(overrides, "promoDiscountTypeoption0")}
          ></option>
          <option
            children="Percentage"
            value="Percentage"
            {...getOverrideProps(overrides, "promoDiscountTypeoption1")}
          ></option>
        </SelectField>
        <TextField
          label="Discount Amount"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={promoDiscountAmount}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount: value,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.promoDiscountAmount ?? value;
            }
            if (errors.promoDiscountAmount?.hasError) {
              runValidationTasks("promoDiscountAmount", value);
            }
            setPromoDiscountAmount(value);
          }}
          onBlur={() =>
            runValidationTasks("promoDiscountAmount", promoDiscountAmount)
          }
          errorMessage={errors.promoDiscountAmount?.errorMessage}
          hasError={errors.promoDiscountAmount?.hasError}
          {...getOverrideProps(overrides, "promoDiscountAmount")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid24")}
      >
        <TextField
          label="Discount Code"
          isRequired={false}
          isReadOnly={false}
          value={promoDiscountCode}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode: value,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.promoDiscountCode ?? value;
            }
            if (errors.promoDiscountCode?.hasError) {
              runValidationTasks("promoDiscountCode", value);
            }
            setPromoDiscountCode(value);
          }}
          onBlur={() =>
            runValidationTasks("promoDiscountCode", promoDiscountCode)
          }
          errorMessage={errors.promoDiscountCode?.errorMessage}
          hasError={errors.promoDiscountCode?.hasError}
          {...getOverrideProps(overrides, "promoDiscountCode")}
        ></TextField>
        <TextField
          label="Discount Expiration"
          isRequired={false}
          isReadOnly={false}
          type="datetime-local"
          value={
            promoDiscountExpiration &&
            convertToLocal(new Date(promoDiscountExpiration))
          }
          onChange={(e) => {
            let value =
              e.target.value === ""
                ? ""
                : new Date(e.target.value).toISOString();
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration: value,
                eventCreatorName,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.promoDiscountExpiration ?? value;
            }
            if (errors.promoDiscountExpiration?.hasError) {
              runValidationTasks("promoDiscountExpiration", value);
            }
            setPromoDiscountExpiration(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "promoDiscountExpiration",
              promoDiscountExpiration
            )
          }
          errorMessage={errors.promoDiscountExpiration?.errorMessage}
          hasError={errors.promoDiscountExpiration?.hasError}
          {...getOverrideProps(overrides, "promoDiscountExpiration")}
        ></TextField>
      </Grid>
      <Heading
        level={4}
        children="Creator Info"
        {...getOverrideProps(overrides, "SectionalElement5")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid26")}
      >
        <TextField
          label="Full Name"
          isRequired={false}
          isReadOnly={false}
          value={eventCreatorName}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName: value,
                eventCreatorHeadline,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventCreatorName ?? value;
            }
            if (errors.eventCreatorName?.hasError) {
              runValidationTasks("eventCreatorName", value);
            }
            setEventCreatorName(value);
          }}
          onBlur={() =>
            runValidationTasks("eventCreatorName", eventCreatorName)
          }
          errorMessage={errors.eventCreatorName?.errorMessage}
          hasError={errors.eventCreatorName?.hasError}
          {...getOverrideProps(overrides, "eventCreatorName")}
        ></TextField>
        <TextField
          label="Headline"
          isRequired={false}
          isReadOnly={false}
          value={eventCreatorHeadline}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventSpeakers,
                eventStartDate,
                eventEndDate,
                eventStartTime,
                eventEndTime,
                eventTimeZone,
                eventVenueName,
                eventCountry,
                eventStreetAddress,
                eventCity,
                eventState,
                eventZipCode,
                eventVirtualURL,
                eventTicketCurrency,
                eventTicketPrice,
                eventTicketQuantity,
                eventTicketSaleStart,
                eventTicketSaleEnd,
                promoLinkedin,
                promoTwitter,
                promoFacebook,
                promoInstagram,
                promoDiscord,
                promoDiscountType,
                promoDiscountAmount,
                promoDiscountCode,
                promoDiscountExpiration,
                eventCreatorName,
                eventCreatorHeadline: value,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventCodeofConduct,
              };
              const result = onChange(modelFields);
              value = result?.eventCreatorHeadline ?? value;
            }
            if (errors.eventCreatorHeadline?.hasError) {
              runValidationTasks("eventCreatorHeadline", value);
            }
            setEventCreatorHeadline(value);
          }}
          onBlur={() =>
            runValidationTasks("eventCreatorHeadline", eventCreatorHeadline)
          }
          errorMessage={errors.eventCreatorHeadline?.errorMessage}
          hasError={errors.eventCreatorHeadline?.hasError}
          {...getOverrideProps(overrides, "eventCreatorHeadline")}
        ></TextField>
      </Grid>
      <TextAreaField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={eventCreatorBio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio: value,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.eventCreatorBio ?? value;
          }
          if (errors.eventCreatorBio?.hasError) {
            runValidationTasks("eventCreatorBio", value);
          }
          setEventCreatorBio(value);
        }}
        onBlur={() => runValidationTasks("eventCreatorBio", eventCreatorBio)}
        errorMessage={errors.eventCreatorBio?.errorMessage}
        hasError={errors.eventCreatorBio?.hasError}
        {...getOverrideProps(overrides, "eventCreatorBio")}
      ></TextAreaField>
      <Heading
        level={4}
        children="Contact Info"
        {...getOverrideProps(overrides, "SectionalElement6")}
      ></Heading>
      <TextField
        label="Organization Name (if applicable)"
        isRequired={false}
        isReadOnly={false}
        value={orgName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName: value,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
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
        label="Organizer / Support Email"
        isRequired={false}
        isReadOnly={false}
        value={orgEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail: value,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
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
        label="Organizer / Support Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={orgPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone: value,
              orgWebsite,
              eventCodeofConduct,
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
        label="Company Website "
        isRequired={false}
        isReadOnly={false}
        value={orgWebsite}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite: value,
              eventCodeofConduct,
            };
            const result = onChange(modelFields);
            value = result?.orgWebsite ?? value;
          }
          if (errors.orgWebsite?.hasError) {
            runValidationTasks("orgWebsite", value);
          }
          setOrgWebsite(value);
        }}
        onBlur={() => runValidationTasks("orgWebsite", orgWebsite)}
        errorMessage={errors.orgWebsite?.errorMessage}
        hasError={errors.orgWebsite?.hasError}
        {...getOverrideProps(overrides, "orgWebsite")}
      ></TextField>
      <Heading
        level={4}
        children="Other Details"
        {...getOverrideProps(overrides, "SectionalElement7")}
      ></Heading>
      <TextAreaField
        label="Code of Conduct"
        isRequired={false}
        isReadOnly={false}
        value={eventCodeofConduct}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventSpeakers,
              eventStartDate,
              eventEndDate,
              eventStartTime,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventVirtualURL,
              eventTicketCurrency,
              eventTicketPrice,
              eventTicketQuantity,
              eventTicketSaleStart,
              eventTicketSaleEnd,
              promoLinkedin,
              promoTwitter,
              promoFacebook,
              promoInstagram,
              promoDiscord,
              promoDiscountType,
              promoDiscountAmount,
              promoDiscountCode,
              promoDiscountExpiration,
              eventCreatorName,
              eventCreatorHeadline,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventCodeofConduct: value,
            };
            const result = onChange(modelFields);
            value = result?.eventCodeofConduct ?? value;
          }
          if (errors.eventCodeofConduct?.hasError) {
            runValidationTasks("eventCodeofConduct", value);
          }
          setEventCodeofConduct(value);
        }}
        onBlur={() =>
          runValidationTasks("eventCodeofConduct", eventCodeofConduct)
        }
        errorMessage={errors.eventCodeofConduct?.errorMessage}
        hasError={errors.eventCodeofConduct?.hasError}
        {...getOverrideProps(overrides, "eventCodeofConduct")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Save Changes"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || eventsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
