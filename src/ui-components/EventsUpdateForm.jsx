/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
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
    eventTags: "",
    eventStartDate: "",
    eventStartTime: "",
    eventDesc: "",
    eventAgenda: "",
    eventSpeakers: "",
    eventEndDate: "",
    eventEndTime: "",
    eventTimeZone: "",
    eventVenueName: "",
    eventCountry: "",
    eventStreetAddress: "",
    eventCity: "",
    eventState: "",
    eventZipCode: "",
    eventTicketQuantity: "",
    eventTicketCurrency: "",
    eventTicketPrice: "",
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
    orgName: "",
    orgEmail: "",
    orgCountryCode: "",
    orgPhone: "",
    orgWebsite: "",
    eventCodeofConduct: "",
    eventLogo: "",
    eventImage: "",
    eventVirtualURL: "",
    eventCreatorUser: "",
    eventCreatorName: "",
    eventCreatorImage: "",
    eventCreatorBio: "",
    eventCreatorHeadline: "",
  };
  const [eventTitle, setEventTitle] = React.useState(initialValues.eventTitle);
  const [eventType, setEventType] = React.useState(initialValues.eventType);
  const [eventCategory, setEventCategory] = React.useState(
    initialValues.eventCategory
  );
  const [eventTags, setEventTags] = React.useState(initialValues.eventTags);
  const [eventStartDate, setEventStartDate] = React.useState(
    initialValues.eventStartDate
  );
  const [eventStartTime, setEventStartTime] = React.useState(
    initialValues.eventStartTime
  );
  const [eventDesc, setEventDesc] = React.useState(initialValues.eventDesc);
  const [eventAgenda, setEventAgenda] = React.useState(
    initialValues.eventAgenda
  );
  const [eventSpeakers, setEventSpeakers] = React.useState(
    initialValues.eventSpeakers
  );
  const [eventEndDate, setEventEndDate] = React.useState(
    initialValues.eventEndDate
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
  const [eventTicketQuantity, setEventTicketQuantity] = React.useState(
    initialValues.eventTicketQuantity
  );
  const [eventTicketCurrency, setEventTicketCurrency] = React.useState(
    initialValues.eventTicketCurrency
  );
  const [eventTicketPrice, setEventTicketPrice] = React.useState(
    initialValues.eventTicketPrice
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
  const [orgName, setOrgName] = React.useState(initialValues.orgName);
  const [orgEmail, setOrgEmail] = React.useState(initialValues.orgEmail);
  const [orgCountryCode, setOrgCountryCode] = React.useState(
    initialValues.orgCountryCode
  );
  const [orgPhone, setOrgPhone] = React.useState(initialValues.orgPhone);
  const [orgWebsite, setOrgWebsite] = React.useState(initialValues.orgWebsite);
  const [eventCodeofConduct, setEventCodeofConduct] = React.useState(
    initialValues.eventCodeofConduct
  );
  const [eventLogo, setEventLogo] = React.useState(initialValues.eventLogo);
  const [eventImage, setEventImage] = React.useState(initialValues.eventImage);
  const [eventVirtualURL, setEventVirtualURL] = React.useState(
    initialValues.eventVirtualURL
  );
  const [eventCreatorUser, setEventCreatorUser] = React.useState(
    initialValues.eventCreatorUser
  );
  const [eventCreatorName, setEventCreatorName] = React.useState(
    initialValues.eventCreatorName
  );
  const [eventCreatorImage, setEventCreatorImage] = React.useState(
    initialValues.eventCreatorImage
  );
  const [eventCreatorBio, setEventCreatorBio] = React.useState(
    initialValues.eventCreatorBio
  );
  const [eventCreatorHeadline, setEventCreatorHeadline] = React.useState(
    initialValues.eventCreatorHeadline
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventsRecord
      ? { ...initialValues, ...eventsRecord }
      : initialValues;
    setEventTitle(cleanValues.eventTitle);
    setEventType(cleanValues.eventType);
    setEventCategory(cleanValues.eventCategory);
    setEventTags(cleanValues.eventTags);
    setEventStartDate(cleanValues.eventStartDate);
    setEventStartTime(cleanValues.eventStartTime);
    setEventDesc(cleanValues.eventDesc);
    setEventAgenda(cleanValues.eventAgenda);
    setEventSpeakers(cleanValues.eventSpeakers);
    setEventEndDate(cleanValues.eventEndDate);
    setEventEndTime(cleanValues.eventEndTime);
    setEventTimeZone(cleanValues.eventTimeZone);
    setEventVenueName(cleanValues.eventVenueName);
    setEventCountry(cleanValues.eventCountry);
    setEventStreetAddress(cleanValues.eventStreetAddress);
    setEventCity(cleanValues.eventCity);
    setEventState(cleanValues.eventState);
    setEventZipCode(cleanValues.eventZipCode);
    setEventTicketQuantity(cleanValues.eventTicketQuantity);
    setEventTicketCurrency(cleanValues.eventTicketCurrency);
    setEventTicketPrice(cleanValues.eventTicketPrice);
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
    setOrgName(cleanValues.orgName);
    setOrgEmail(cleanValues.orgEmail);
    setOrgCountryCode(cleanValues.orgCountryCode);
    setOrgPhone(cleanValues.orgPhone);
    setOrgWebsite(cleanValues.orgWebsite);
    setEventCodeofConduct(cleanValues.eventCodeofConduct);
    setEventLogo(cleanValues.eventLogo);
    setEventImage(cleanValues.eventImage);
    setEventVirtualURL(cleanValues.eventVirtualURL);
    setEventCreatorUser(cleanValues.eventCreatorUser);
    setEventCreatorName(cleanValues.eventCreatorName);
    setEventCreatorImage(cleanValues.eventCreatorImage);
    setEventCreatorBio(cleanValues.eventCreatorBio);
    setEventCreatorHeadline(cleanValues.eventCreatorHeadline);
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
    eventTags: [],
    eventStartDate: [],
    eventStartTime: [],
    eventDesc: [],
    eventAgenda: [],
    eventSpeakers: [],
    eventEndDate: [],
    eventEndTime: [],
    eventTimeZone: [],
    eventVenueName: [],
    eventCountry: [],
    eventStreetAddress: [],
    eventCity: [],
    eventState: [],
    eventZipCode: [],
    eventTicketQuantity: [],
    eventTicketCurrency: [],
    eventTicketPrice: [],
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
    orgName: [],
    orgEmail: [{ type: "Email" }],
    orgCountryCode: [],
    orgPhone: [{ type: "Phone" }],
    orgWebsite: [{ type: "URL" }],
    eventCodeofConduct: [],
    eventLogo: [],
    eventImage: [],
    eventVirtualURL: [{ type: "URL" }],
    eventCreatorUser: [],
    eventCreatorName: [],
    eventCreatorImage: [],
    eventCreatorBio: [],
    eventCreatorHeadline: [],
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
          eventTags,
          eventStartDate,
          eventStartTime,
          eventDesc,
          eventAgenda,
          eventSpeakers,
          eventEndDate,
          eventEndTime,
          eventTimeZone,
          eventVenueName,
          eventCountry,
          eventStreetAddress,
          eventCity,
          eventState,
          eventZipCode,
          eventTicketQuantity,
          eventTicketCurrency,
          eventTicketPrice,
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
          orgName,
          orgEmail,
          orgCountryCode,
          orgPhone,
          orgWebsite,
          eventCodeofConduct,
          eventLogo,
          eventImage,
          eventVirtualURL,
          eventCreatorUser,
          eventCreatorName,
          eventCreatorImage,
          eventCreatorBio,
          eventCreatorHeadline,
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
      <TextField
        label="Event title"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Event type"
        isRequired={false}
        isReadOnly={false}
        value={eventType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType: value,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      ></TextField>
      <TextField
        label="Event category"
        isRequired={false}
        isReadOnly={false}
        value={eventCategory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory: value,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      ></TextField>
      <TextField
        label="Event tags"
        isRequired={false}
        isReadOnly={false}
        value={eventTags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags: value,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
            };
            const result = onChange(modelFields);
            value = result?.eventTags ?? value;
          }
          if (errors.eventTags?.hasError) {
            runValidationTasks("eventTags", value);
          }
          setEventTags(value);
        }}
        onBlur={() => runValidationTasks("eventTags", eventTags)}
        errorMessage={errors.eventTags?.errorMessage}
        hasError={errors.eventTags?.hasError}
        {...getOverrideProps(overrides, "eventTags")}
      ></TextField>
      <TextField
        label="Event start date"
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
              eventTags,
              eventStartDate: value,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Event start time"
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
              eventTags,
              eventStartDate,
              eventStartTime: value,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Event desc"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc: value,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      ></TextField>
      <TextField
        label="Event agenda"
        isRequired={false}
        isReadOnly={false}
        value={eventAgenda}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda: value,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
            };
            const result = onChange(modelFields);
            value = result?.eventAgenda ?? value;
          }
          if (errors.eventAgenda?.hasError) {
            runValidationTasks("eventAgenda", value);
          }
          setEventAgenda(value);
        }}
        onBlur={() => runValidationTasks("eventAgenda", eventAgenda)}
        errorMessage={errors.eventAgenda?.errorMessage}
        hasError={errors.eventAgenda?.hasError}
        {...getOverrideProps(overrides, "eventAgenda")}
      ></TextField>
      <TextField
        label="Event speakers"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers: value,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate: value,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Event end time"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime: value,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Event time zone"
        isRequired={false}
        isReadOnly={false}
        value={eventTimeZone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone: value,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        {...getOverrideProps(overrides, "eventTimeZone")}
      ></TextField>
      <TextField
        label="Event venue name"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName: value,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Event country"
        isRequired={false}
        isReadOnly={false}
        value={eventCountry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry: value,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        {...getOverrideProps(overrides, "eventCountry")}
      ></TextField>
      <TextField
        label="Event street address"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress: value,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Event city"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity: value,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Event state"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState: value,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Event zip code"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode: value,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Event ticket quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={eventTicketQuantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity: value,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      ></TextField>
      <TextField
        label="Event ticket currency"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency: value,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Event ticket price"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice: value,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
            };
            const result = onChange(modelFields);
            value = result?.eventTicketPrice ?? value;
          }
          if (errors.eventTicketPrice?.hasError) {
            runValidationTasks("eventTicketPrice", value);
          }
          setEventTicketPrice(value);
        }}
        onBlur={() => runValidationTasks("eventTicketPrice", eventTicketPrice)}
        errorMessage={errors.eventTicketPrice?.errorMessage}
        hasError={errors.eventTicketPrice?.hasError}
        {...getOverrideProps(overrides, "eventTicketPrice")}
      ></TextField>
      <TextField
        label="Event ticket sale start"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          eventTicketSaleStart && convertToLocal(new Date(eventTicketSaleStart))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Event ticket sale end"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          eventTicketSaleEnd && convertToLocal(new Date(eventTicketSaleEnd))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Promo linkedin"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Promo twitter"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Promo facebook"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Promo instagram"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Promo discord"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Promo discount type"
        isRequired={false}
        isReadOnly={false}
        value={promoDiscountType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      ></TextField>
      <TextField
        label="Promo discount amount"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Promo discount code"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Promo discount expiration"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          promoDiscountExpiration &&
          convertToLocal(new Date(promoDiscountExpiration))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
          runValidationTasks("promoDiscountExpiration", promoDiscountExpiration)
        }
        errorMessage={errors.promoDiscountExpiration?.errorMessage}
        hasError={errors.promoDiscountExpiration?.hasError}
        {...getOverrideProps(overrides, "promoDiscountExpiration")}
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
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName: value,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail: value,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Org country code"
        isRequired={false}
        isReadOnly={false}
        value={orgCountryCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode: value,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
            };
            const result = onChange(modelFields);
            value = result?.orgCountryCode ?? value;
          }
          if (errors.orgCountryCode?.hasError) {
            runValidationTasks("orgCountryCode", value);
          }
          setOrgCountryCode(value);
        }}
        onBlur={() => runValidationTasks("orgCountryCode", orgCountryCode)}
        errorMessage={errors.orgCountryCode?.errorMessage}
        hasError={errors.orgCountryCode?.hasError}
        {...getOverrideProps(overrides, "orgCountryCode")}
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
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone: value,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
        label="Org website"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite: value,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Event codeof conduct"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct: value,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      ></TextField>
      <TextField
        label="Event logo"
        isRequired={false}
        isReadOnly={false}
        value={eventLogo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo: value,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
            };
            const result = onChange(modelFields);
            value = result?.eventLogo ?? value;
          }
          if (errors.eventLogo?.hasError) {
            runValidationTasks("eventLogo", value);
          }
          setEventLogo(value);
        }}
        onBlur={() => runValidationTasks("eventLogo", eventLogo)}
        errorMessage={errors.eventLogo?.errorMessage}
        hasError={errors.eventLogo?.hasError}
        {...getOverrideProps(overrides, "eventLogo")}
      ></TextField>
      <TextField
        label="Event image"
        isRequired={false}
        isReadOnly={false}
        value={eventImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage: value,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
            };
            const result = onChange(modelFields);
            value = result?.eventImage ?? value;
          }
          if (errors.eventImage?.hasError) {
            runValidationTasks("eventImage", value);
          }
          setEventImage(value);
        }}
        onBlur={() => runValidationTasks("eventImage", eventImage)}
        errorMessage={errors.eventImage?.errorMessage}
        hasError={errors.eventImage?.hasError}
        {...getOverrideProps(overrides, "eventImage")}
      ></TextField>
      <TextField
        label="Event virtual url"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL: value,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
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
      <TextField
        label="Event creator user"
        isRequired={false}
        isReadOnly={false}
        value={eventCreatorUser}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser: value,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
            };
            const result = onChange(modelFields);
            value = result?.eventCreatorUser ?? value;
          }
          if (errors.eventCreatorUser?.hasError) {
            runValidationTasks("eventCreatorUser", value);
          }
          setEventCreatorUser(value);
        }}
        onBlur={() => runValidationTasks("eventCreatorUser", eventCreatorUser)}
        errorMessage={errors.eventCreatorUser?.errorMessage}
        hasError={errors.eventCreatorUser?.hasError}
        {...getOverrideProps(overrides, "eventCreatorUser")}
      ></TextField>
      <TextField
        label="Event creator name"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName: value,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline,
            };
            const result = onChange(modelFields);
            value = result?.eventCreatorName ?? value;
          }
          if (errors.eventCreatorName?.hasError) {
            runValidationTasks("eventCreatorName", value);
          }
          setEventCreatorName(value);
        }}
        onBlur={() => runValidationTasks("eventCreatorName", eventCreatorName)}
        errorMessage={errors.eventCreatorName?.errorMessage}
        hasError={errors.eventCreatorName?.hasError}
        {...getOverrideProps(overrides, "eventCreatorName")}
      ></TextField>
      <TextField
        label="Event creator image"
        isRequired={false}
        isReadOnly={false}
        value={eventCreatorImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage: value,
              eventCreatorBio,
              eventCreatorHeadline,
            };
            const result = onChange(modelFields);
            value = result?.eventCreatorImage ?? value;
          }
          if (errors.eventCreatorImage?.hasError) {
            runValidationTasks("eventCreatorImage", value);
          }
          setEventCreatorImage(value);
        }}
        onBlur={() =>
          runValidationTasks("eventCreatorImage", eventCreatorImage)
        }
        errorMessage={errors.eventCreatorImage?.errorMessage}
        hasError={errors.eventCreatorImage?.hasError}
        {...getOverrideProps(overrides, "eventCreatorImage")}
      ></TextField>
      <TextField
        label="Event creator bio"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio: value,
              eventCreatorHeadline,
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
      ></TextField>
      <TextField
        label="Event creator headline"
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
              eventTags,
              eventStartDate,
              eventStartTime,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventEndDate,
              eventEndTime,
              eventTimeZone,
              eventVenueName,
              eventCountry,
              eventStreetAddress,
              eventCity,
              eventState,
              eventZipCode,
              eventTicketQuantity,
              eventTicketCurrency,
              eventTicketPrice,
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
              orgName,
              orgEmail,
              orgCountryCode,
              orgPhone,
              orgWebsite,
              eventCodeofConduct,
              eventLogo,
              eventImage,
              eventVirtualURL,
              eventCreatorUser,
              eventCreatorName,
              eventCreatorImage,
              eventCreatorBio,
              eventCreatorHeadline: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || eventsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
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
