/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, HeadingProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Events } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventsUpdateFormInputValues = {
    eventTitle?: string;
    eventType?: string;
    eventCategory?: string;
    eventDesc?: string;
    eventSpeakers?: string;
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
    eventCreatorBio?: string;
    orgName?: string;
    orgEmail?: string;
    orgPhone?: string;
    orgWebsite?: string;
    eventCodeofConduct?: string;
};
export declare type EventsUpdateFormValidationValues = {
    eventTitle?: ValidationFunction<string>;
    eventType?: ValidationFunction<string>;
    eventCategory?: ValidationFunction<string>;
    eventDesc?: ValidationFunction<string>;
    eventSpeakers?: ValidationFunction<string>;
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
    eventCreatorBio?: ValidationFunction<string>;
    orgName?: ValidationFunction<string>;
    orgEmail?: ValidationFunction<string>;
    orgPhone?: ValidationFunction<string>;
    orgWebsite?: ValidationFunction<string>;
    eventCodeofConduct?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventsUpdateFormOverridesProps = {
    EventsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    eventTitle?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    eventType?: PrimitiveOverrideProps<SelectFieldProps>;
    eventCategory?: PrimitiveOverrideProps<SelectFieldProps>;
    eventDesc?: PrimitiveOverrideProps<TextAreaFieldProps>;
    eventSpeakers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid6?: PrimitiveOverrideProps<GridProps>;
    eventStartDate?: PrimitiveOverrideProps<TextFieldProps>;
    eventEndDate?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid7?: PrimitiveOverrideProps<GridProps>;
    eventStartTime?: PrimitiveOverrideProps<TextFieldProps>;
    eventEndTime?: PrimitiveOverrideProps<TextFieldProps>;
    eventTimeZone?: PrimitiveOverrideProps<AutocompleteProps>;
    SectionalElement2?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid10?: PrimitiveOverrideProps<GridProps>;
    eventVenueName?: PrimitiveOverrideProps<TextFieldProps>;
    eventCountry?: PrimitiveOverrideProps<AutocompleteProps>;
    eventStreetAddress?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid12?: PrimitiveOverrideProps<GridProps>;
    eventCity?: PrimitiveOverrideProps<TextFieldProps>;
    eventState?: PrimitiveOverrideProps<TextFieldProps>;
    eventZipCode?: PrimitiveOverrideProps<TextFieldProps>;
    eventVirtualURL?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement3?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid15?: PrimitiveOverrideProps<GridProps>;
    eventTicketCurrency?: PrimitiveOverrideProps<TextFieldProps>;
    eventTicketPrice?: PrimitiveOverrideProps<TextFieldProps>;
    eventTicketQuantity?: PrimitiveOverrideProps<StepperFieldProps>;
    RowGrid16?: PrimitiveOverrideProps<GridProps>;
    eventTicketSaleStart?: PrimitiveOverrideProps<TextFieldProps>;
    eventTicketSaleEnd?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement4?: PrimitiveOverrideProps<HeadingProps>;
    promoLinkedin?: PrimitiveOverrideProps<TextFieldProps>;
    promoTwitter?: PrimitiveOverrideProps<TextFieldProps>;
    promoFacebook?: PrimitiveOverrideProps<TextFieldProps>;
    promoInstagram?: PrimitiveOverrideProps<TextFieldProps>;
    promoDiscord?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid23?: PrimitiveOverrideProps<GridProps>;
    promoDiscountType?: PrimitiveOverrideProps<SelectFieldProps>;
    promoDiscountAmount?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid24?: PrimitiveOverrideProps<GridProps>;
    promoDiscountCode?: PrimitiveOverrideProps<TextFieldProps>;
    promoDiscountExpiration?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement5?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid26?: PrimitiveOverrideProps<GridProps>;
    eventCreatorName?: PrimitiveOverrideProps<TextFieldProps>;
    eventCreatorHeadline?: PrimitiveOverrideProps<TextFieldProps>;
    eventCreatorBio?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SectionalElement6?: PrimitiveOverrideProps<HeadingProps>;
    orgName?: PrimitiveOverrideProps<TextFieldProps>;
    orgEmail?: PrimitiveOverrideProps<TextFieldProps>;
    orgPhone?: PrimitiveOverrideProps<TextFieldProps>;
    orgWebsite?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement7?: PrimitiveOverrideProps<HeadingProps>;
    eventCodeofConduct?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type EventsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    events?: Events;
    onSubmit?: (fields: EventsUpdateFormInputValues) => EventsUpdateFormInputValues;
    onSuccess?: (fields: EventsUpdateFormInputValues) => void;
    onError?: (fields: EventsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventsUpdateFormInputValues) => EventsUpdateFormInputValues;
    onValidate?: EventsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventsUpdateForm(props: EventsUpdateFormProps): React.ReactElement;
