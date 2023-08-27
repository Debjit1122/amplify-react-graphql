/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Attendees, Events as Events0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AttendeesUpdateFormInputValues = {
    attendeeName?: string;
    attendeeAge?: number;
    attendeeDOB?: string;
    attendeeGender?: string;
    attendeeEmail?: string;
    attendeePhone?: string;
    attendeeStreetAddress?: string;
    attendeeCity?: string;
    attendeeState?: string;
    attendeeZipCode?: string;
    attendeeCountry?: string;
    attendeeCompanyName?: string;
    attendeeJobTitle?: string;
    attendeeCompanySize?: string;
    attendeeReferral?: string;
    attendeeQuestions?: string;
    Events?: Events0[];
};
export declare type AttendeesUpdateFormValidationValues = {
    attendeeName?: ValidationFunction<string>;
    attendeeAge?: ValidationFunction<number>;
    attendeeDOB?: ValidationFunction<string>;
    attendeeGender?: ValidationFunction<string>;
    attendeeEmail?: ValidationFunction<string>;
    attendeePhone?: ValidationFunction<string>;
    attendeeStreetAddress?: ValidationFunction<string>;
    attendeeCity?: ValidationFunction<string>;
    attendeeState?: ValidationFunction<string>;
    attendeeZipCode?: ValidationFunction<string>;
    attendeeCountry?: ValidationFunction<string>;
    attendeeCompanyName?: ValidationFunction<string>;
    attendeeJobTitle?: ValidationFunction<string>;
    attendeeCompanySize?: ValidationFunction<string>;
    attendeeReferral?: ValidationFunction<string>;
    attendeeQuestions?: ValidationFunction<string>;
    Events?: ValidationFunction<Events0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttendeesUpdateFormOverridesProps = {
    AttendeesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    attendeeName?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeAge?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeDOB?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeGender?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeEmail?: PrimitiveOverrideProps<TextFieldProps>;
    attendeePhone?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeStreetAddress?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeCity?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeState?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeZipCode?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeCountry?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeCompanyName?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeJobTitle?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeCompanySize?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeReferral?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeQuestions?: PrimitiveOverrideProps<TextFieldProps>;
    Events?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AttendeesUpdateFormProps = React.PropsWithChildren<{
    overrides?: AttendeesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    attendees?: Attendees;
    onSubmit?: (fields: AttendeesUpdateFormInputValues) => AttendeesUpdateFormInputValues;
    onSuccess?: (fields: AttendeesUpdateFormInputValues) => void;
    onError?: (fields: AttendeesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttendeesUpdateFormInputValues) => AttendeesUpdateFormInputValues;
    onValidate?: AttendeesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AttendeesUpdateForm(props: AttendeesUpdateFormProps): React.ReactElement;
