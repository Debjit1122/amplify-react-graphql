/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  ScrollView,
  SelectField,
  StepperField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  Field,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Events, Attendees, AttendeesEvents } from "../models";
import { fetchByPath, processFile, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function EventsCreateForm(props) {
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
  const { tokens } = useTheme();
  const initialValues = {
    eventTitle: "",
    eventType: "",
    eventCategory: "",
    eventDesc: "",
    eventAgenda: undefined,
    eventSpeakers: "",
    eventTags: "",
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
    eventTicketCurrency: undefined,
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
    eventCreatorImage: undefined,
    eventCreatorBio: "",
    orgName: "",
    orgEmail: "",
    orgPhone: "",
    orgWebsite: "",
    eventImage: undefined,
    eventLogo: undefined,
    eventCodeofConduct: "",
    attendeess: [],
  };
  const [eventTitle, setEventTitle] = React.useState(initialValues.eventTitle);
  const [eventType, setEventType] = React.useState(initialValues.eventType);
  const [eventCategory, setEventCategory] = React.useState(
    initialValues.eventCategory
  );
  const [eventDesc, setEventDesc] = React.useState(initialValues.eventDesc);
  const [eventAgenda, setEventAgenda] = React.useState(
    initialValues.eventAgenda
  );
  const [eventSpeakers, setEventSpeakers] = React.useState(
    initialValues.eventSpeakers
  );
  const [eventTags, setEventTags] = React.useState(initialValues.eventTags);
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
  const [eventCreatorImage, setEventCreatorImage] = React.useState(
    initialValues.eventCreatorImage
  );
  const [eventCreatorBio, setEventCreatorBio] = React.useState(
    initialValues.eventCreatorBio
  );
  const [orgName, setOrgName] = React.useState(initialValues.orgName);
  const [orgEmail, setOrgEmail] = React.useState(initialValues.orgEmail);
  const [orgPhone, setOrgPhone] = React.useState(initialValues.orgPhone);
  const [orgWebsite, setOrgWebsite] = React.useState(initialValues.orgWebsite);
  const [eventImage, setEventImage] = React.useState(initialValues.eventImage);
  const [eventLogo, setEventLogo] = React.useState(initialValues.eventLogo);
  const [eventCodeofConduct, setEventCodeofConduct] = React.useState(
    initialValues.eventCodeofConduct
  );
  const [attendeess, setAttendeess] = React.useState(initialValues.attendeess);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEventTitle(initialValues.eventTitle);
    setEventType(initialValues.eventType);
    setEventCategory(initialValues.eventCategory);
    setEventDesc(initialValues.eventDesc);
    setEventAgenda(initialValues.eventAgenda);
    setEventSpeakers(initialValues.eventSpeakers);
    setEventTags(initialValues.eventTags);
    setEventStartDate(initialValues.eventStartDate);
    setEventEndDate(initialValues.eventEndDate);
    setEventStartTime(initialValues.eventStartTime);
    setEventEndTime(initialValues.eventEndTime);
    setEventTimeZone(initialValues.eventTimeZone);
    setEventVenueName(initialValues.eventVenueName);
    setEventCountry(initialValues.eventCountry);
    setEventStreetAddress(initialValues.eventStreetAddress);
    setEventCity(initialValues.eventCity);
    setEventState(initialValues.eventState);
    setEventZipCode(initialValues.eventZipCode);
    setEventVirtualURL(initialValues.eventVirtualURL);
    setEventTicketCurrency(initialValues.eventTicketCurrency);
    setEventTicketPrice(initialValues.eventTicketPrice);
    setEventTicketQuantity(initialValues.eventTicketQuantity);
    setEventTicketSaleStart(initialValues.eventTicketSaleStart);
    setEventTicketSaleEnd(initialValues.eventTicketSaleEnd);
    setPromoLinkedin(initialValues.promoLinkedin);
    setPromoTwitter(initialValues.promoTwitter);
    setPromoFacebook(initialValues.promoFacebook);
    setPromoInstagram(initialValues.promoInstagram);
    setPromoDiscord(initialValues.promoDiscord);
    setPromoDiscountType(initialValues.promoDiscountType);
    setPromoDiscountAmount(initialValues.promoDiscountAmount);
    setPromoDiscountCode(initialValues.promoDiscountCode);
    setPromoDiscountExpiration(initialValues.promoDiscountExpiration);
    setEventCreatorName(initialValues.eventCreatorName);
    setEventCreatorHeadline(initialValues.eventCreatorHeadline);
    setEventCreatorImage(initialValues.eventCreatorImage);
    setEventCreatorBio(initialValues.eventCreatorBio);
    setOrgName(initialValues.orgName);
    setOrgEmail(initialValues.orgEmail);
    setOrgPhone(initialValues.orgPhone);
    setOrgWebsite(initialValues.orgWebsite);
    setEventImage(initialValues.eventImage);
    setEventLogo(initialValues.eventLogo);
    setEventCodeofConduct(initialValues.eventCodeofConduct);
    setAttendeess(initialValues.attendeess);
    setCurrentAttendeessValue(undefined);
    setCurrentAttendeessDisplayValue("");
    setErrors({});
  };
  const [currentAttendeessDisplayValue, setCurrentAttendeessDisplayValue] =
    React.useState("");
  const [currentAttendeessValue, setCurrentAttendeessValue] =
    React.useState(undefined);
  const attendeessRef = React.createRef();
  const getIDValue = {
    attendeess: (r) => JSON.stringify({ id: r?.id }),
  };
  const attendeessIdSet = new Set(
    Array.isArray(attendeess)
      ? attendeess.map((r) => getIDValue.attendeess?.(r))
      : getIDValue.attendeess?.(attendeess)
  );
  const attendeesRecords = useDataStoreBinding({
    type: "collection",
    model: Attendees,
  }).items;
  const getDisplayValue = {
    attendeess: (r) =>
      `${r?.attendeeName ? r?.attendeeName + " - " : ""}${r?.id}`,
  };
  const validations = {
    eventTitle: [{ type: "Required" }],
    eventType: [],
    eventCategory: [],
    eventDesc: [{ type: "Required" }],
    eventAgenda: [{ type: "Required" }],
    eventSpeakers: [],
    eventTags: [],
    eventStartDate: [{ type: "Required" }],
    eventEndDate: [{ type: "Required" }],
    eventStartTime: [{ type: "Required" }],
    eventEndTime: [{ type: "Required" }],
    eventTimeZone: [{ type: "Required" }],
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
    eventCreatorName: [{ type: "Required" }],
    eventCreatorHeadline: [{ type: "Required" }],
    eventCreatorImage: [],
    eventCreatorBio: [],
    orgName: [],
    orgEmail: [{ type: "Required" }, { type: "Email" }],
    orgPhone: [{ type: "Required" }, { type: "Phone" }],
    orgWebsite: [{ type: "URL" }],
    eventImage: [],
    eventLogo: [],
    eventCodeofConduct: [],
    attendeess: [],
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
      rowGap={tokens.space.xl.value}
      columnGap="15px"
      padding={tokens.space.xxxl.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          eventTitle,
          eventType,
          eventCategory,
          eventDesc,
          eventAgenda,
          eventSpeakers,
          eventTags,
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
          eventCreatorImage,
          eventCreatorBio,
          orgName,
          orgEmail,
          orgPhone,
          orgWebsite,
          eventImage,
          eventLogo,
          eventCodeofConduct,
          attendeess,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            eventTitle: modelFields.eventTitle,
            eventType: modelFields.eventType,
            eventCategory: modelFields.eventCategory,
            eventDesc: modelFields.eventDesc,
            eventAgenda: modelFields.eventAgenda,
            eventSpeakers: modelFields.eventSpeakers,
            eventTags: modelFields.eventTags,
            eventStartDate: modelFields.eventStartDate,
            eventEndDate: modelFields.eventEndDate,
            eventStartTime: modelFields.eventStartTime,
            eventEndTime: modelFields.eventEndTime,
            eventTimeZone: modelFields.eventTimeZone,
            eventVenueName: modelFields.eventVenueName,
            eventCountry: modelFields.eventCountry,
            eventStreetAddress: modelFields.eventStreetAddress,
            eventCity: modelFields.eventCity,
            eventState: modelFields.eventState,
            eventZipCode: modelFields.eventZipCode,
            eventVirtualURL: modelFields.eventVirtualURL,
            eventTicketCurrency: modelFields.eventTicketCurrency,
            eventTicketPrice: modelFields.eventTicketPrice,
            eventTicketQuantity: modelFields.eventTicketQuantity,
            eventTicketSaleStart: modelFields.eventTicketSaleStart,
            eventTicketSaleEnd: modelFields.eventTicketSaleEnd,
            promoLinkedin: modelFields.promoLinkedin,
            promoTwitter: modelFields.promoTwitter,
            promoFacebook: modelFields.promoFacebook,
            promoInstagram: modelFields.promoInstagram,
            promoDiscord: modelFields.promoDiscord,
            promoDiscountType: modelFields.promoDiscountType,
            promoDiscountAmount: modelFields.promoDiscountAmount,
            promoDiscountCode: modelFields.promoDiscountCode,
            promoDiscountExpiration: modelFields.promoDiscountExpiration,
            eventCreatorName: modelFields.eventCreatorName,
            eventCreatorHeadline: modelFields.eventCreatorHeadline,
            eventCreatorImage: modelFields.eventCreatorImage,
            eventCreatorBio: modelFields.eventCreatorBio,
            orgName: modelFields.orgName,
            orgEmail: modelFields.orgEmail,
            orgPhone: modelFields.orgPhone,
            orgWebsite: modelFields.orgWebsite,
            eventImage: modelFields.eventImage,
            eventLogo: modelFields.eventLogo,
            eventCodeofConduct: modelFields.eventCodeofConduct,
          };
          const events = await DataStore.save(new Events(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...attendeess.reduce((promises, attendees) => {
              promises.push(
                DataStore.save(
                  new AttendeesEvents({
                    events,
                    attendees,
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "EventsCreateForm")}
      {...rest}
    >
      <Heading
        level={4}
        children="Event Details"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Title</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
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
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
          label="Category"
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
              eventTitle,
              eventType,
              eventCategory,
              eventDesc: value,
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
      <Field
        errorMessage={errors.eventAgenda?.errorMessage}
        hasError={errors.eventAgenda?.hasError}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Agenda</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setEventAgenda((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  eventTitle,
                  eventType,
                  eventCategory,
                  eventDesc,
                  eventAgenda: value,
                  eventSpeakers,
                  eventTags,
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
                  eventCreatorImage,
                  eventCreatorBio,
                  orgName,
                  orgEmail,
                  orgPhone,
                  orgWebsite,
                  eventImage,
                  eventLogo,
                  eventCodeofConduct,
                  attendeess,
                };
                const result = onChange(modelFields);
                value = result?.eventAgenda ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setEventAgenda((prev) => {
              let value = initialValues?.eventAgenda;
              if (onChange) {
                const modelFields = {
                  eventTitle,
                  eventType,
                  eventCategory,
                  eventDesc,
                  eventAgenda: value,
                  eventSpeakers,
                  eventTags,
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
                  eventCreatorImage,
                  eventCreatorBio,
                  orgName,
                  orgEmail,
                  orgPhone,
                  orgWebsite,
                  eventImage,
                  eventLogo,
                  eventCodeofConduct,
                  attendeess,
                };
                const result = onChange(modelFields);
                value = result?.eventAgenda ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"private"}
          acceptedFileTypes={[".pdf"]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "eventAgenda")}
        ></StorageManager>
      </Field>
      <TextAreaField
        label="Speaker Details"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventAgenda,
              eventSpeakers: value,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
      <TextAreaField
        label="Tags"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventTags: value,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
        {...getOverrideProps(overrides, "RowGrid8")}
      >
        <TextField
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Start Date</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
          label={
            <span style={{ display: "inline-flex" }}>
              <span>End Date</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
        {...getOverrideProps(overrides, "RowGrid9")}
      >
        <TextField
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Start Time</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
          label={
            <span style={{ display: "inline-flex" }}>
              <span>End Time</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Time Zone</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
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
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
        {...getOverrideProps(overrides, "RowGrid12")}
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
              id: "C\u00F4te d'Ivoire",
              label: "C\u00F4te d'Ivoire",
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
              id: "Congo (Congo-Brazzaville)",
              label: "Congo (Congo-Brazzaville)",
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
              id: "Czechia (Czech Republic)",
              label: "Czechia (Czech Republic)",
            },
            {
              id: "Democratic Republic of the Congo",
              label: "Democratic Republic of the Congo",
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
              id: "Holy See",
              label: "Holy See",
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
              id: "Myanmar (formerly Burma)",
              label: "Myanmar (formerly Burma)",
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
              id: "North Korea",
              label: "North Korea",
            },
            {
              id: "North Macedonia (formerly Macedonia)",
              label: "North Macedonia (formerly Macedonia)",
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
              id: "Palestine State",
              label: "Palestine State",
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
              id: "South Korea",
              label: "South Korea",
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
              id: "United States of America",
              label: "United States of America",
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
            setEventCountry(id);
            runValidationTasks("eventCountry", id);
          }}
          onClear={() => {
            setEventCountry("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
        {...getOverrideProps(overrides, "RowGrid14")}
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
        {...getOverrideProps(overrides, "RowGrid17")}
      >
        <Autocomplete
          label="Currency"
          isRequired={false}
          isReadOnly={false}
          options={[
            {
              id: "ALL",
              label: "ALL",
            },
            {
              id: "AFN",
              label: "AFN",
            },
            {
              id: "ARS",
              label: "ARS",
            },
            {
              id: "AWG",
              label: "AWG",
            },
            {
              id: "AUD",
              label: "AUD",
            },
            {
              id: "AZN",
              label: "AZN",
            },
            {
              id: "BSD",
              label: "BSD",
            },
            {
              id: "BBD",
              label: "BBD",
            },
            {
              id: "BYR",
              label: "BYR",
            },
            {
              id: "BZD",
              label: "BZD",
            },
            {
              id: "BMD",
              label: "BMD",
            },
            {
              id: "BOB",
              label: "BOB",
            },
            {
              id: "BAM",
              label: "BAM",
            },
            {
              id: "BWP",
              label: "BWP",
            },
            {
              id: "BGN",
              label: "BGN",
            },
            {
              id: "BRL",
              label: "BRL",
            },
            {
              id: "BND",
              label: "BND",
            },
            {
              id: "KHR",
              label: "KHR",
            },
            {
              id: "CAD",
              label: "CAD",
            },
            {
              id: "KYD",
              label: "KYD",
            },
            {
              id: "CLP",
              label: "CLP",
            },
            {
              id: "CNY",
              label: "CNY",
            },
            {
              id: "COP",
              label: "COP",
            },
            {
              id: "CRC",
              label: "CRC",
            },
            {
              id: "HRK",
              label: "HRK",
            },
            {
              id: "CUP",
              label: "CUP",
            },
            {
              id: "CZK",
              label: "CZK",
            },
            {
              id: "DKK",
              label: "DKK",
            },
            {
              id: "DOP",
              label: "DOP",
            },
            {
              id: "EGP",
              label: "EGP",
            },
            {
              id: "SVC",
              label: "SVC",
            },
            {
              id: "EEK",
              label: "EEK",
            },
            {
              id: "EUR",
              label: "EUR",
            },
            {
              id: "FKP",
              label: "FKP",
            },
            {
              id: "FJD",
              label: "FJD",
            },
            {
              id: "GEL",
              label: "GEL",
            },
            {
              id: "GHC",
              label: "GHC",
            },
            {
              id: "GIP",
              label: "GIP",
            },
            {
              id: "GTQ",
              label: "GTQ",
            },
            {
              id: "GGP",
              label: "GGP",
            },
            {
              id: "GYD",
              label: "GYD",
            },
            {
              id: "HNL",
              label: "HNL",
            },
            {
              id: "HKD",
              label: "HKD",
            },
            {
              id: "HUF",
              label: "HUF",
            },
            {
              id: "ISK",
              label: "ISK",
            },
            {
              id: "INR",
              label: "INR",
            },
            {
              id: "IDR",
              label: "IDR",
            },
            {
              id: "IRR",
              label: "IRR",
            },
            {
              id: "IMP",
              label: "IMP",
            },
            {
              id: "ILS",
              label: "ILS",
            },
            {
              id: "JMD",
              label: "JMD",
            },
            {
              id: "JPY",
              label: "JPY",
            },
            {
              id: "JEP",
              label: "JEP",
            },
            {
              id: "KZT",
              label: "KZT",
            },
            {
              id: "KPW",
              label: "KPW",
            },
            {
              id: "KRW",
              label: "KRW",
            },
            {
              id: "KGS",
              label: "KGS",
            },
            {
              id: "LAK",
              label: "LAK",
            },
            {
              id: "LVL",
              label: "LVL",
            },
            {
              id: "LBP",
              label: "LBP",
            },
            {
              id: "LRD",
              label: "LRD",
            },
            {
              id: "LTL",
              label: "LTL",
            },
            {
              id: "MKD",
              label: "MKD",
            },
            {
              id: "MYR",
              label: "MYR",
            },
            {
              id: "MUR",
              label: "MUR",
            },
            {
              id: "MXN",
              label: "MXN",
            },
            {
              id: "MNT",
              label: "MNT",
            },
            {
              id: "MZN",
              label: "MZN",
            },
            {
              id: "NAD",
              label: "NAD",
            },
            {
              id: "NPR",
              label: "NPR",
            },
            {
              id: "ANG",
              label: "ANG",
            },
            {
              id: "NZD",
              label: "NZD",
            },
            {
              id: "NIO",
              label: "NIO",
            },
            {
              id: "NGN",
              label: "NGN",
            },
            {
              id: "NOK",
              label: "NOK",
            },
            {
              id: "OMR",
              label: "OMR",
            },
            {
              id: "PKR",
              label: "PKR",
            },
            {
              id: "PAB",
              label: "PAB",
            },
            {
              id: "PYG",
              label: "PYG",
            },
            {
              id: "PEN",
              label: "PEN",
            },
            {
              id: "PHP",
              label: "PHP",
            },
            {
              id: "PLN",
              label: "PLN",
            },
            {
              id: "QAR",
              label: "QAR",
            },
            {
              id: "RON",
              label: "RON",
            },
            {
              id: "RUB",
              label: "RUB",
            },
            {
              id: "SHP",
              label: "SHP",
            },
            {
              id: "SAR",
              label: "SAR",
            },
            {
              id: "RSD",
              label: "RSD",
            },
            {
              id: "SCR",
              label: "SCR",
            },
            {
              id: "SGD",
              label: "SGD",
            },
            {
              id: "SBD",
              label: "SBD",
            },
            {
              id: "SOS",
              label: "SOS",
            },
            {
              id: "ZAR",
              label: "ZAR",
            },
            {
              id: "LKR",
              label: "LKR",
            },
            {
              id: "SEK",
              label: "SEK",
            },
            {
              id: "CHF",
              label: "CHF",
            },
            {
              id: "SRD",
              label: "SRD",
            },
            {
              id: "SYP",
              label: "SYP",
            },
            {
              id: "TWD",
              label: "TWD",
            },
            {
              id: "THB",
              label: "THB",
            },
            {
              id: "TTD",
              label: "TTD",
            },
            {
              id: "TRL",
              label: "TRL",
            },
            {
              id: "TVD",
              label: "TVD",
            },
            {
              id: "UAH",
              label: "UAH",
            },
            {
              id: "GBP",
              label: "GBP",
            },
            {
              id: "USD",
              label: "USD",
            },
            {
              id: "UYU",
              label: "UYU",
            },
            {
              id: "UZS",
              label: "UZS",
            },
            {
              id: "VEF",
              label: "VEF",
            },
            {
              id: "VND",
              label: "VND",
            },
            {
              id: "YER",
              label: "YER",
            },
            {
              id: "ZWD",
              label: "ZWD",
            },
          ]}
          onSelect={({ id, label }) => {
            setEventTicketCurrency(id);
            runValidationTasks("eventTicketCurrency", id);
          }}
          onClear={() => {
            setEventTicketCurrency("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
          labelHidden={false}
          {...getOverrideProps(overrides, "eventTicketCurrency")}
        ></Autocomplete>
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
        {...getOverrideProps(overrides, "RowGrid18")}
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
        {...getOverrideProps(overrides, "RowGrid25")}
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
                eventDesc,
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
        {...getOverrideProps(overrides, "RowGrid26")}
      >
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
                eventDesc,
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
              e.target.value === ""
                ? ""
                : new Date(e.target.value).toISOString();
            if (onChange) {
              const modelFields = {
                eventTitle,
                eventType,
                eventCategory,
                eventDesc,
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
        {...getOverrideProps(overrides, "RowGrid28")}
      >
        <TextField
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Full Name</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Headline</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
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
                eventAgenda,
                eventSpeakers,
                eventTags,
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
                eventCreatorImage,
                eventCreatorBio,
                orgName,
                orgEmail,
                orgPhone,
                orgWebsite,
                eventImage,
                eventLogo,
                eventCodeofConduct,
                attendeess,
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
      <Field
        errorMessage={errors.eventCreatorImage?.errorMessage}
        hasError={errors.eventCreatorImage?.hasError}
        label={"Profile Image"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setEventCreatorImage((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  eventTitle,
                  eventType,
                  eventCategory,
                  eventDesc,
                  eventAgenda,
                  eventSpeakers,
                  eventTags,
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
                  eventCreatorImage: value,
                  eventCreatorBio,
                  orgName,
                  orgEmail,
                  orgPhone,
                  orgWebsite,
                  eventImage,
                  eventLogo,
                  eventCodeofConduct,
                  attendeess,
                };
                const result = onChange(modelFields);
                value = result?.eventCreatorImage ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setEventCreatorImage((prev) => {
              let value = initialValues?.eventCreatorImage;
              if (onChange) {
                const modelFields = {
                  eventTitle,
                  eventType,
                  eventCategory,
                  eventDesc,
                  eventAgenda,
                  eventSpeakers,
                  eventTags,
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
                  eventCreatorImage: value,
                  eventCreatorBio,
                  orgName,
                  orgEmail,
                  orgPhone,
                  orgWebsite,
                  eventImage,
                  eventLogo,
                  eventCodeofConduct,
                  attendeess,
                };
                const result = onChange(modelFields);
                value = result?.eventCreatorImage ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={[]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "eventCreatorImage")}
        ></StorageManager>
      </Field>
      <TextAreaField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio: value,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
        {...getOverrideProps(overrides, "SectionalElement7")}
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
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName: value,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
            <span>Organizer / Support Email</span>
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
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail: value,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
            <span>Organizer / Support Phone</span>
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
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone: value,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite: value,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess,
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
        {...getOverrideProps(overrides, "SectionalElement6")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid37")}
      >
        <Field
          errorMessage={errors.eventImage?.errorMessage}
          hasError={errors.eventImage?.hasError}
          label={"Event Cover Image"}
          isRequired={false}
          isReadOnly={false}
        >
          <StorageManager
            onUploadSuccess={({ key }) => {
              setEventImage((prev) => {
                let value = key;
                if (onChange) {
                  const modelFields = {
                    eventTitle,
                    eventType,
                    eventCategory,
                    eventDesc,
                    eventAgenda,
                    eventSpeakers,
                    eventTags,
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
                    eventCreatorImage,
                    eventCreatorBio,
                    orgName,
                    orgEmail,
                    orgPhone,
                    orgWebsite,
                    eventImage: value,
                    eventLogo,
                    eventCodeofConduct,
                    attendeess,
                  };
                  const result = onChange(modelFields);
                  value = result?.eventImage ?? value;
                }
                return value;
              });
            }}
            onFileRemove={({ key }) => {
              setEventImage((prev) => {
                let value = initialValues?.eventImage;
                if (onChange) {
                  const modelFields = {
                    eventTitle,
                    eventType,
                    eventCategory,
                    eventDesc,
                    eventAgenda,
                    eventSpeakers,
                    eventTags,
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
                    eventCreatorImage,
                    eventCreatorBio,
                    orgName,
                    orgEmail,
                    orgPhone,
                    orgWebsite,
                    eventImage: value,
                    eventLogo,
                    eventCodeofConduct,
                    attendeess,
                  };
                  const result = onChange(modelFields);
                  value = result?.eventImage ?? value;
                }
                return value;
              });
            }}
            processFile={processFile}
            accessLevel={"public"}
            acceptedFileTypes={[]}
            isResumable={false}
            showThumbnails={true}
            maxFileCount={1}
            {...getOverrideProps(overrides, "eventImage")}
          ></StorageManager>
        </Field>
        <Field
          errorMessage={errors.eventLogo?.errorMessage}
          hasError={errors.eventLogo?.hasError}
          label={"Event logo"}
          isRequired={false}
          isReadOnly={false}
        >
          <StorageManager
            onUploadSuccess={({ key }) => {
              setEventLogo((prev) => {
                let value = key;
                if (onChange) {
                  const modelFields = {
                    eventTitle,
                    eventType,
                    eventCategory,
                    eventDesc,
                    eventAgenda,
                    eventSpeakers,
                    eventTags,
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
                    eventCreatorImage,
                    eventCreatorBio,
                    orgName,
                    orgEmail,
                    orgPhone,
                    orgWebsite,
                    eventImage,
                    eventLogo: value,
                    eventCodeofConduct,
                    attendeess,
                  };
                  const result = onChange(modelFields);
                  value = result?.eventLogo ?? value;
                }
                return value;
              });
            }}
            onFileRemove={({ key }) => {
              setEventLogo((prev) => {
                let value = initialValues?.eventLogo;
                if (onChange) {
                  const modelFields = {
                    eventTitle,
                    eventType,
                    eventCategory,
                    eventDesc,
                    eventAgenda,
                    eventSpeakers,
                    eventTags,
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
                    eventCreatorImage,
                    eventCreatorBio,
                    orgName,
                    orgEmail,
                    orgPhone,
                    orgWebsite,
                    eventImage,
                    eventLogo: value,
                    eventCodeofConduct,
                    attendeess,
                  };
                  const result = onChange(modelFields);
                  value = result?.eventLogo ?? value;
                }
                return value;
              });
            }}
            processFile={processFile}
            accessLevel={"public"}
            acceptedFileTypes={[]}
            isResumable={false}
            showThumbnails={true}
            maxFileCount={1}
            {...getOverrideProps(overrides, "eventLogo")}
          ></StorageManager>
        </Field>
      </Grid>
      <TextAreaField
        label="Code of Conduct"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct: value,
              attendeess,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              eventTitle,
              eventType,
              eventCategory,
              eventDesc,
              eventAgenda,
              eventSpeakers,
              eventTags,
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
              eventCreatorImage,
              eventCreatorBio,
              orgName,
              orgEmail,
              orgPhone,
              orgWebsite,
              eventImage,
              eventLogo,
              eventCodeofConduct,
              attendeess: values,
            };
            const result = onChange(modelFields);
            values = result?.attendeess ?? values;
          }
          setAttendeess(values);
          setCurrentAttendeessValue(undefined);
          setCurrentAttendeessDisplayValue("");
        }}
        currentFieldValue={currentAttendeessValue}
        label={"Attendees"}
        items={attendeess}
        hasError={errors?.attendeess?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("attendeess", currentAttendeessValue)
        }
        errorMessage={errors?.attendeess?.errorMessage}
        getBadgeText={getDisplayValue.attendeess}
        setFieldValue={(model) => {
          setCurrentAttendeessDisplayValue(
            model ? getDisplayValue.attendeess(model) : ""
          );
          setCurrentAttendeessValue(model);
        }}
        inputFieldRef={attendeessRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Attendees"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Attendees"
          value={currentAttendeessDisplayValue}
          options={attendeesRecords
            .filter((r) => !attendeessIdSet.has(getIDValue.attendeess?.(r)))
            .map((r) => ({
              id: getIDValue.attendeess?.(r),
              label: getDisplayValue.attendeess?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAttendeessValue(
              attendeesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAttendeessDisplayValue(label);
            runValidationTasks("attendeess", label);
          }}
          onClear={() => {
            setCurrentAttendeessDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.attendeess?.hasError) {
              runValidationTasks("attendeess", value);
            }
            setCurrentAttendeessDisplayValue(value);
            setCurrentAttendeessValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("attendeess", currentAttendeessDisplayValue)
          }
          errorMessage={errors.attendeess?.errorMessage}
          hasError={errors.attendeess?.hasError}
          ref={attendeessRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "attendeess")}
        ></Autocomplete>
      </ArrayField>
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
