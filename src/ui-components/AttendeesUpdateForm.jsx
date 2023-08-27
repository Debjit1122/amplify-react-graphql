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
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Attendees, Events as Events0, AttendeesEvents } from "../models";
import { fetchByPath, validateField } from "./utils";
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
export default function AttendeesUpdateForm(props) {
  const {
    id: idProp,
    attendees: attendeesModelProp,
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
    attendeeAge: "",
    attendeeDOB: "",
    attendeeGender: "",
    attendeeEmail: "",
    attendeePhone: "",
    attendeeStreetAddress: "",
    attendeeCity: "",
    attendeeState: "",
    attendeeZipCode: "",
    attendeeCountry: "",
    attendeeCompanyName: "",
    attendeeJobTitle: "",
    attendeeCompanySize: "",
    attendeeReferral: "",
    attendeeQuestions: "",
    Events: [],
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
  const [attendeeStreetAddress, setAttendeeStreetAddress] = React.useState(
    initialValues.attendeeStreetAddress
  );
  const [attendeeCity, setAttendeeCity] = React.useState(
    initialValues.attendeeCity
  );
  const [attendeeState, setAttendeeState] = React.useState(
    initialValues.attendeeState
  );
  const [attendeeZipCode, setAttendeeZipCode] = React.useState(
    initialValues.attendeeZipCode
  );
  const [attendeeCountry, setAttendeeCountry] = React.useState(
    initialValues.attendeeCountry
  );
  const [attendeeCompanyName, setAttendeeCompanyName] = React.useState(
    initialValues.attendeeCompanyName
  );
  const [attendeeJobTitle, setAttendeeJobTitle] = React.useState(
    initialValues.attendeeJobTitle
  );
  const [attendeeCompanySize, setAttendeeCompanySize] = React.useState(
    initialValues.attendeeCompanySize
  );
  const [attendeeReferral, setAttendeeReferral] = React.useState(
    initialValues.attendeeReferral
  );
  const [attendeeQuestions, setAttendeeQuestions] = React.useState(
    initialValues.attendeeQuestions
  );
  const [Events, setEvents] = React.useState(initialValues.Events);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = attendeesRecord
      ? { ...initialValues, ...attendeesRecord, Events: linkedEvents }
      : initialValues;
    setAttendeeName(cleanValues.attendeeName);
    setAttendeeAge(cleanValues.attendeeAge);
    setAttendeeDOB(cleanValues.attendeeDOB);
    setAttendeeGender(cleanValues.attendeeGender);
    setAttendeeEmail(cleanValues.attendeeEmail);
    setAttendeePhone(cleanValues.attendeePhone);
    setAttendeeStreetAddress(cleanValues.attendeeStreetAddress);
    setAttendeeCity(cleanValues.attendeeCity);
    setAttendeeState(cleanValues.attendeeState);
    setAttendeeZipCode(cleanValues.attendeeZipCode);
    setAttendeeCountry(cleanValues.attendeeCountry);
    setAttendeeCompanyName(cleanValues.attendeeCompanyName);
    setAttendeeJobTitle(cleanValues.attendeeJobTitle);
    setAttendeeCompanySize(cleanValues.attendeeCompanySize);
    setAttendeeReferral(cleanValues.attendeeReferral);
    setAttendeeQuestions(cleanValues.attendeeQuestions);
    setEvents(cleanValues.Events ?? []);
    setCurrentEventsValue(undefined);
    setCurrentEventsDisplayValue("");
    setErrors({});
  };
  const [attendeesRecord, setAttendeesRecord] =
    React.useState(attendeesModelProp);
  const [linkedEvents, setLinkedEvents] = React.useState([]);
  const canUnlinkEvents = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Attendees, idProp)
        : attendeesModelProp;
      setAttendeesRecord(record);
      const linkedEvents = record
        ? await Promise.all(
            (
              await record.Events.toArray()
            ).map((r) => {
              return r.events;
            })
          )
        : [];
      setLinkedEvents(linkedEvents);
    };
    queryData();
  }, [idProp, attendeesModelProp]);
  React.useEffect(resetStateValues, [attendeesRecord, linkedEvents]);
  const [currentEventsDisplayValue, setCurrentEventsDisplayValue] =
    React.useState("");
  const [currentEventsValue, setCurrentEventsValue] = React.useState(undefined);
  const EventsRef = React.createRef();
  const getIDValue = {
    Events: (r) => JSON.stringify({ id: r?.id }),
  };
  const EventsIdSet = new Set(
    Array.isArray(Events)
      ? Events.map((r) => getIDValue.Events?.(r))
      : getIDValue.Events?.(Events)
  );
  const eventsRecords = useDataStoreBinding({
    type: "collection",
    model: Events0,
  }).items;
  const getDisplayValue = {
    Events: (r) => `${r?.eventTitle ? r?.eventTitle + " - " : ""}${r?.id}`,
  };
  const validations = {
    attendeeName: [],
    attendeeAge: [],
    attendeeDOB: [],
    attendeeGender: [],
    attendeeEmail: [{ type: "Email" }],
    attendeePhone: [{ type: "Phone" }],
    attendeeStreetAddress: [],
    attendeeCity: [],
    attendeeState: [],
    attendeeZipCode: [],
    attendeeCountry: [],
    attendeeCompanyName: [],
    attendeeJobTitle: [],
    attendeeCompanySize: [],
    attendeeReferral: [],
    attendeeQuestions: [],
    Events: [],
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
          attendeeStreetAddress,
          attendeeCity,
          attendeeState,
          attendeeZipCode,
          attendeeCountry,
          attendeeCompanyName,
          attendeeJobTitle,
          attendeeCompanySize,
          attendeeReferral,
          attendeeQuestions,
          Events,
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
          const promises = [];
          const eventsToLinkMap = new Map();
          const eventsToUnLinkMap = new Map();
          const eventsMap = new Map();
          const linkedEventsMap = new Map();
          Events.forEach((r) => {
            const count = eventsMap.get(getIDValue.Events?.(r));
            const newCount = count ? count + 1 : 1;
            eventsMap.set(getIDValue.Events?.(r), newCount);
          });
          linkedEvents.forEach((r) => {
            const count = linkedEventsMap.get(getIDValue.Events?.(r));
            const newCount = count ? count + 1 : 1;
            linkedEventsMap.set(getIDValue.Events?.(r), newCount);
          });
          linkedEventsMap.forEach((count, id) => {
            const newCount = eventsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                eventsToUnLinkMap.set(id, diffCount);
              }
            } else {
              eventsToUnLinkMap.set(id, count);
            }
          });
          eventsMap.forEach((count, id) => {
            const originalCount = linkedEventsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                eventsToLinkMap.set(id, diffCount);
              }
            } else {
              eventsToLinkMap.set(id, count);
            }
          });
          eventsToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const attendeesEventsRecords = await DataStore.query(
              AttendeesEvents,
              (r) =>
                r.and((r) => {
                  return [
                    r.eventsId.eq(recordKeys.id),
                    r.attendeesId.eq(attendeesRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(attendeesEventsRecords[i]));
            }
          });
          eventsToLinkMap.forEach((count, id) => {
            const eventsToLink = eventsRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new AttendeesEvents({
                    attendees: attendeesRecord,
                    events: eventsToLink,
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            attendeeName: modelFields.attendeeName,
            attendeeAge: modelFields.attendeeAge,
            attendeeDOB: modelFields.attendeeDOB,
            attendeeGender: modelFields.attendeeGender,
            attendeeEmail: modelFields.attendeeEmail,
            attendeePhone: modelFields.attendeePhone,
            attendeeStreetAddress: modelFields.attendeeStreetAddress,
            attendeeCity: modelFields.attendeeCity,
            attendeeState: modelFields.attendeeState,
            attendeeZipCode: modelFields.attendeeZipCode,
            attendeeCountry: modelFields.attendeeCountry,
            attendeeCompanyName: modelFields.attendeeCompanyName,
            attendeeJobTitle: modelFields.attendeeJobTitle,
            attendeeCompanySize: modelFields.attendeeCompanySize,
            attendeeReferral: modelFields.attendeeReferral,
            attendeeQuestions: modelFields.attendeeQuestions,
          };
          promises.push(
            DataStore.save(
              Attendees.copyOf(attendeesRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AttendeesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Attendee name"
        isRequired={false}
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
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
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
      <TextField
        label="Attendee age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={attendeeAge}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge: value,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
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
      ></TextField>
      <TextField
        label="Attendee dob"
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
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
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
      <TextField
        label="Attendee gender"
        isRequired={false}
        isReadOnly={false}
        value={attendeeGender}
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
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
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
      ></TextField>
      <TextField
        label="Attendee email"
        isRequired={false}
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
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
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
        label="Attendee phone"
        isRequired={false}
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
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
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
      <TextField
        label="Attendee street address"
        isRequired={false}
        isReadOnly={false}
        value={attendeeStreetAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress: value,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.attendeeStreetAddress ?? value;
          }
          if (errors.attendeeStreetAddress?.hasError) {
            runValidationTasks("attendeeStreetAddress", value);
          }
          setAttendeeStreetAddress(value);
        }}
        onBlur={() =>
          runValidationTasks("attendeeStreetAddress", attendeeStreetAddress)
        }
        errorMessage={errors.attendeeStreetAddress?.errorMessage}
        hasError={errors.attendeeStreetAddress?.hasError}
        {...getOverrideProps(overrides, "attendeeStreetAddress")}
      ></TextField>
      <TextField
        label="Attendee city"
        isRequired={false}
        isReadOnly={false}
        value={attendeeCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity: value,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.attendeeCity ?? value;
          }
          if (errors.attendeeCity?.hasError) {
            runValidationTasks("attendeeCity", value);
          }
          setAttendeeCity(value);
        }}
        onBlur={() => runValidationTasks("attendeeCity", attendeeCity)}
        errorMessage={errors.attendeeCity?.errorMessage}
        hasError={errors.attendeeCity?.hasError}
        {...getOverrideProps(overrides, "attendeeCity")}
      ></TextField>
      <TextField
        label="Attendee state"
        isRequired={false}
        isReadOnly={false}
        value={attendeeState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity,
              attendeeState: value,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.attendeeState ?? value;
          }
          if (errors.attendeeState?.hasError) {
            runValidationTasks("attendeeState", value);
          }
          setAttendeeState(value);
        }}
        onBlur={() => runValidationTasks("attendeeState", attendeeState)}
        errorMessage={errors.attendeeState?.errorMessage}
        hasError={errors.attendeeState?.hasError}
        {...getOverrideProps(overrides, "attendeeState")}
      ></TextField>
      <TextField
        label="Attendee zip code"
        isRequired={false}
        isReadOnly={false}
        value={attendeeZipCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode: value,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.attendeeZipCode ?? value;
          }
          if (errors.attendeeZipCode?.hasError) {
            runValidationTasks("attendeeZipCode", value);
          }
          setAttendeeZipCode(value);
        }}
        onBlur={() => runValidationTasks("attendeeZipCode", attendeeZipCode)}
        errorMessage={errors.attendeeZipCode?.errorMessage}
        hasError={errors.attendeeZipCode?.hasError}
        {...getOverrideProps(overrides, "attendeeZipCode")}
      ></TextField>
      <TextField
        label="Attendee country"
        isRequired={false}
        isReadOnly={false}
        value={attendeeCountry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry: value,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.attendeeCountry ?? value;
          }
          if (errors.attendeeCountry?.hasError) {
            runValidationTasks("attendeeCountry", value);
          }
          setAttendeeCountry(value);
        }}
        onBlur={() => runValidationTasks("attendeeCountry", attendeeCountry)}
        errorMessage={errors.attendeeCountry?.errorMessage}
        hasError={errors.attendeeCountry?.hasError}
        {...getOverrideProps(overrides, "attendeeCountry")}
      ></TextField>
      <TextField
        label="Attendee company name"
        isRequired={false}
        isReadOnly={false}
        value={attendeeCompanyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName: value,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.attendeeCompanyName ?? value;
          }
          if (errors.attendeeCompanyName?.hasError) {
            runValidationTasks("attendeeCompanyName", value);
          }
          setAttendeeCompanyName(value);
        }}
        onBlur={() =>
          runValidationTasks("attendeeCompanyName", attendeeCompanyName)
        }
        errorMessage={errors.attendeeCompanyName?.errorMessage}
        hasError={errors.attendeeCompanyName?.hasError}
        {...getOverrideProps(overrides, "attendeeCompanyName")}
      ></TextField>
      <TextField
        label="Attendee job title"
        isRequired={false}
        isReadOnly={false}
        value={attendeeJobTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle: value,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.attendeeJobTitle ?? value;
          }
          if (errors.attendeeJobTitle?.hasError) {
            runValidationTasks("attendeeJobTitle", value);
          }
          setAttendeeJobTitle(value);
        }}
        onBlur={() => runValidationTasks("attendeeJobTitle", attendeeJobTitle)}
        errorMessage={errors.attendeeJobTitle?.errorMessage}
        hasError={errors.attendeeJobTitle?.hasError}
        {...getOverrideProps(overrides, "attendeeJobTitle")}
      ></TextField>
      <TextField
        label="Attendee company size"
        isRequired={false}
        isReadOnly={false}
        value={attendeeCompanySize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize: value,
              attendeeReferral,
              attendeeQuestions,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.attendeeCompanySize ?? value;
          }
          if (errors.attendeeCompanySize?.hasError) {
            runValidationTasks("attendeeCompanySize", value);
          }
          setAttendeeCompanySize(value);
        }}
        onBlur={() =>
          runValidationTasks("attendeeCompanySize", attendeeCompanySize)
        }
        errorMessage={errors.attendeeCompanySize?.errorMessage}
        hasError={errors.attendeeCompanySize?.hasError}
        {...getOverrideProps(overrides, "attendeeCompanySize")}
      ></TextField>
      <TextField
        label="Attendee referral"
        isRequired={false}
        isReadOnly={false}
        value={attendeeReferral}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral: value,
              attendeeQuestions,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.attendeeReferral ?? value;
          }
          if (errors.attendeeReferral?.hasError) {
            runValidationTasks("attendeeReferral", value);
          }
          setAttendeeReferral(value);
        }}
        onBlur={() => runValidationTasks("attendeeReferral", attendeeReferral)}
        errorMessage={errors.attendeeReferral?.errorMessage}
        hasError={errors.attendeeReferral?.hasError}
        {...getOverrideProps(overrides, "attendeeReferral")}
      ></TextField>
      <TextField
        label="Attendee questions"
        isRequired={false}
        isReadOnly={false}
        value={attendeeQuestions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions: value,
              Events,
            };
            const result = onChange(modelFields);
            value = result?.attendeeQuestions ?? value;
          }
          if (errors.attendeeQuestions?.hasError) {
            runValidationTasks("attendeeQuestions", value);
          }
          setAttendeeQuestions(value);
        }}
        onBlur={() =>
          runValidationTasks("attendeeQuestions", attendeeQuestions)
        }
        errorMessage={errors.attendeeQuestions?.errorMessage}
        hasError={errors.attendeeQuestions?.hasError}
        {...getOverrideProps(overrides, "attendeeQuestions")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              attendeeName,
              attendeeAge,
              attendeeDOB,
              attendeeGender,
              attendeeEmail,
              attendeePhone,
              attendeeStreetAddress,
              attendeeCity,
              attendeeState,
              attendeeZipCode,
              attendeeCountry,
              attendeeCompanyName,
              attendeeJobTitle,
              attendeeCompanySize,
              attendeeReferral,
              attendeeQuestions,
              Events: values,
            };
            const result = onChange(modelFields);
            values = result?.Events ?? values;
          }
          setEvents(values);
          setCurrentEventsValue(undefined);
          setCurrentEventsDisplayValue("");
        }}
        currentFieldValue={currentEventsValue}
        label={"Events"}
        items={Events}
        hasError={errors?.Events?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Events", currentEventsValue)
        }
        errorMessage={errors?.Events?.errorMessage}
        getBadgeText={getDisplayValue.Events}
        setFieldValue={(model) => {
          setCurrentEventsDisplayValue(
            model ? getDisplayValue.Events(model) : ""
          );
          setCurrentEventsValue(model);
        }}
        inputFieldRef={EventsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Events"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Events"
          value={currentEventsDisplayValue}
          options={eventsRecords
            .filter((r) => !EventsIdSet.has(getIDValue.Events?.(r)))
            .map((r) => ({
              id: getIDValue.Events?.(r),
              label: getDisplayValue.Events?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentEventsValue(
              eventsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEventsDisplayValue(label);
            runValidationTasks("Events", label);
          }}
          onClear={() => {
            setCurrentEventsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Events?.hasError) {
              runValidationTasks("Events", value);
            }
            setCurrentEventsDisplayValue(value);
            setCurrentEventsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Events", currentEventsDisplayValue)}
          errorMessage={errors.Events?.errorMessage}
          hasError={errors.Events?.hasError}
          ref={EventsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Events")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || attendeesModelProp)}
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
              !(idProp || attendeesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
