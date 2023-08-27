/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, HeadingProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Attendees } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventsCreateFormInputValues = {
    eventTitle?: string;
    eventType?: string;
    eventCategory?: string;
    eventDesc?: string;
    eventAgenda?: string;
    eventSpeakers?: string;
    eventTags?: string;
    eventStartDate?: string;
    eventEndDate?: string;
    eventStartTime?: string;
    eventEndTime?: string;
    eventTimeZone?: string;
    eventVenueName?: string;
    eventCountry?: string;
    eventStreetAddress?: string;
    eventCity?: string;
    eventState?: string;
    eventZipCode?: number;
    eventVirtualURL?: string;
    eventTicketCurrency?: string;
    eventTicketPrice?: number;
    eventTicketQuantity?: number;
    eventTicketSaleStart?: string;
    eventTicketSaleEnd?: string;
    promoLinkedin?: string;
    promoTwitter?: string;
    promoFacebook?: string;
    promoInstagram?: string;
    promoDiscord?: string;
    promoDiscountType?: string;
    promoDiscountAmount?: number;
    promoDiscountCode?: string;
    promoDiscountExpiration?: string;
    eventCreatorName?: string;
    eventCreatorHeadline?: string;
    eventCreatorImage?: string;
    eventCreatorBio?: string;
    orgName?: string;
    orgEmail?: string;
    orgPhone?: string;
    orgWebsite?: string;
    eventImage?: string;
    eventLogo?: string;
    eventCodeofConduct?: string;
    attendeess?: Attendees[];
};
export declare type EventsCreateFormValidationValues = {
    eventTitle?: ValidationFunction<string>;
    eventType?: ValidationFunction<string>;
    eventCategory?: ValidationFunction<string>;
    eventDesc?: ValidationFunction<string>;
    eventAgenda?: ValidationFunction<string>;
    eventSpeakers?: ValidationFunction<string>;
    eventTags?: ValidationFunction<string>;
    eventStartDate?: ValidationFunction<string>;
    eventEndDate?: ValidationFunction<string>;
    eventStartTime?: ValidationFunction<string>;
    eventEndTime?: ValidationFunction<string>;
    eventTimeZone?: ValidationFunction<string>;
    eventVenueName?: ValidationFunction<string>;
    eventCountry?: ValidationFunction<string>;
    eventStreetAddress?: ValidationFunction<string>;
    eventCity?: ValidationFunction<string>;
    eventState?: ValidationFunction<string>;
    eventZipCode?: ValidationFunction<number>;
    eventVirtualURL?: ValidationFunction<string>;
    eventTicketCurrency?: ValidationFunction<string>;
    eventTicketPrice?: ValidationFunction<number>;
    eventTicketQuantity?: ValidationFunction<number>;
    eventTicketSaleStart?: ValidationFunction<string>;
    eventTicketSaleEnd?: ValidationFunction<string>;
    promoLinkedin?: ValidationFunction<string>;
    promoTwitter?: ValidationFunction<string>;
    promoFacebook?: ValidationFunction<string>;
    promoInstagram?: ValidationFunction<string>;
    promoDiscord?: ValidationFunction<string>;
    promoDiscountType?: ValidationFunction<string>;
    promoDiscountAmount?: ValidationFunction<number>;
    promoDiscountCode?: ValidationFunction<string>;
    promoDiscountExpiration?: ValidationFunction<string>;
    eventCreatorName?: ValidationFunction<string>;
    eventCreatorHeadline?: ValidationFunction<string>;
    eventCreatorImage?: ValidationFunction<string>;
    eventCreatorBio?: ValidationFunction<string>;
    orgName?: ValidationFunction<string>;
    orgEmail?: ValidationFunction<string>;
    orgPhone?: ValidationFunction<string>;
    orgWebsite?: ValidationFunction<string>;
    eventImage?: ValidationFunction<string>;
    eventLogo?: ValidationFunction<string>;
    eventCodeofConduct?: ValidationFunction<string>;
    attendeess?: ValidationFunction<Attendees>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventsCreateFormOverridesProps = {
    EventsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    eventTitle?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    eventType?: PrimitiveOverrideProps<SelectFieldProps>;
    eventCategory?: PrimitiveOverrideProps<SelectFieldProps>;
    eventDesc?: PrimitiveOverrideProps<TextAreaFieldProps>;
    eventAgenda?: PrimitiveOverrideProps<StorageManagerProps>;
    eventSpeakers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    eventTags?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid8?: PrimitiveOverrideProps<GridProps>;
    eventStartDate?: PrimitiveOverrideProps<TextFieldProps>;
    eventEndDate?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid9?: PrimitiveOverrideProps<GridProps>;
    eventStartTime?: PrimitiveOverrideProps<TextFieldProps>;
    eventEndTime?: PrimitiveOverrideProps<TextFieldProps>;
    eventTimeZone?: PrimitiveOverrideProps<AutocompleteProps>;
    SectionalElement2?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid12?: PrimitiveOverrideProps<GridProps>;
    eventVenueName?: PrimitiveOverrideProps<TextFieldProps>;
    eventCountry?: PrimitiveOverrideProps<AutocompleteProps>;
    eventStreetAddress?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid14?: PrimitiveOverrideProps<GridProps>;
    eventCity?: PrimitiveOverrideProps<TextFieldProps>;
    eventState?: PrimitiveOverrideProps<TextFieldProps>;
    eventZipCode?: PrimitiveOverrideProps<TextFieldProps>;
    eventVirtualURL?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement3?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid17?: PrimitiveOverrideProps<GridProps>;
    eventTicketCurrency?: PrimitiveOverrideProps<AutocompleteProps>;
    eventTicketPrice?: PrimitiveOverrideProps<TextFieldProps>;
    eventTicketQuantity?: PrimitiveOverrideProps<StepperFieldProps>;
    RowGrid18?: PrimitiveOverrideProps<GridProps>;
    eventTicketSaleStart?: PrimitiveOverrideProps<TextFieldProps>;
    eventTicketSaleEnd?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement4?: PrimitiveOverrideProps<HeadingProps>;
    promoLinkedin?: PrimitiveOverrideProps<TextFieldProps>;
    promoTwitter?: PrimitiveOverrideProps<TextFieldProps>;
    promoFacebook?: PrimitiveOverrideProps<TextFieldProps>;
    promoInstagram?: PrimitiveOverrideProps<TextFieldProps>;
    promoDiscord?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid25?: PrimitiveOverrideProps<GridProps>;
    promoDiscountType?: PrimitiveOverrideProps<SelectFieldProps>;
    promoDiscountAmount?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid26?: PrimitiveOverrideProps<GridProps>;
    promoDiscountCode?: PrimitiveOverrideProps<TextFieldProps>;
    promoDiscountExpiration?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement5?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid28?: PrimitiveOverrideProps<GridProps>;
    eventCreatorName?: PrimitiveOverrideProps<TextFieldProps>;
    eventCreatorHeadline?: PrimitiveOverrideProps<TextFieldProps>;
    eventCreatorImage?: PrimitiveOverrideProps<StorageManagerProps>;
    eventCreatorBio?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SectionalElement7?: PrimitiveOverrideProps<HeadingProps>;
    orgName?: PrimitiveOverrideProps<TextFieldProps>;
    orgEmail?: PrimitiveOverrideProps<TextFieldProps>;
    orgPhone?: PrimitiveOverrideProps<TextFieldProps>;
    orgWebsite?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement6?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid37?: PrimitiveOverrideProps<GridProps>;
    eventImage?: PrimitiveOverrideProps<StorageManagerProps>;
    eventLogo?: PrimitiveOverrideProps<StorageManagerProps>;
    eventCodeofConduct?: PrimitiveOverrideProps<TextAreaFieldProps>;
    attendeess?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EventsCreateFormProps = React.PropsWithChildren<{
    overrides?: EventsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventsCreateFormInputValues) => EventsCreateFormInputValues;
    onSuccess?: (fields: EventsCreateFormInputValues) => void;
    onError?: (fields: EventsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventsCreateFormInputValues) => EventsCreateFormInputValues;
    onValidate?: EventsCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventsCreateForm(props: EventsCreateFormProps): React.ReactElement;
