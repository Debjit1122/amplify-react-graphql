/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, HeadingProps, RadioGroupFieldProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Events as Events0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AttendeesCreateFormInputValues = {
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
export declare type AttendeesCreateFormValidationValues = {
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
export declare type AttendeesCreateFormOverridesProps = {
    AttendeesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    attendeeName?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    attendeeAge?: PrimitiveOverrideProps<StepperFieldProps>;
    attendeeDOB?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeGender?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeEmail?: PrimitiveOverrideProps<TextFieldProps>;
    attendeePhone?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    attendeeStreetAddress?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid7?: PrimitiveOverrideProps<GridProps>;
    attendeeCity?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeState?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeZipCode?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeCountry?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid9?: PrimitiveOverrideProps<GridProps>;
    attendeeCompanyName?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeJobTitle?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeCompanySize?: PrimitiveOverrideProps<SelectFieldProps>;
    attendeeReferral?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    attendeeQuestions?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Events?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AttendeesCreateFormProps = React.PropsWithChildren<{
    overrides?: AttendeesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AttendeesCreateFormInputValues) => AttendeesCreateFormInputValues;
    onSuccess?: (fields: AttendeesCreateFormInputValues) => void;
    onError?: (fields: AttendeesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttendeesCreateFormInputValues) => AttendeesCreateFormInputValues;
    onValidate?: AttendeesCreateFormValidationValues;
} & React.CSSProperties>;
export default function AttendeesCreateForm(props: AttendeesCreateFormProps): React.ReactElement;
