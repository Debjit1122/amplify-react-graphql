/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, HeadingProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateEventCreateFormInputValues = {
    name?: string;
    description?: string;
    detailedInfo?: string;
    Country?: string;
    mode?: string;
    venue?: string;
    type?: string;
    dateTime?: string;
    endDate?: string;
    ticketPrice?: number;
    orgName?: string;
    orgEmail?: string;
    orgPhone?: string;
    orgDesc?: string;
    orgAddress?: string;
};
export declare type CreateEventCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    detailedInfo?: ValidationFunction<string>;
    Country?: ValidationFunction<string>;
    mode?: ValidationFunction<string>;
    venue?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    dateTime?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    ticketPrice?: ValidationFunction<number>;
    orgName?: ValidationFunction<string>;
    orgEmail?: ValidationFunction<string>;
    orgPhone?: ValidationFunction<string>;
    orgDesc?: ValidationFunction<string>;
    orgAddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateEventCreateFormOverridesProps = {
    CreateEventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    detailedInfo?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Country?: PrimitiveOverrideProps<AutocompleteProps>;
    mode?: PrimitiveOverrideProps<SelectFieldProps>;
    venue?: PrimitiveOverrideProps<TextAreaFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    dateTime?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    ticketPrice?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    orgName?: PrimitiveOverrideProps<TextFieldProps>;
    orgEmail?: PrimitiveOverrideProps<TextFieldProps>;
    orgPhone?: PrimitiveOverrideProps<TextFieldProps>;
    orgDesc?: PrimitiveOverrideProps<TextAreaFieldProps>;
    orgAddress?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CreateEventCreateFormProps = React.PropsWithChildren<{
    overrides?: CreateEventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateEventCreateFormInputValues) => CreateEventCreateFormInputValues;
    onSuccess?: (fields: CreateEventCreateFormInputValues) => void;
    onError?: (fields: CreateEventCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateEventCreateFormInputValues) => CreateEventCreateFormInputValues;
    onValidate?: CreateEventCreateFormValidationValues;
} & React.CSSProperties>;
export default function CreateEventCreateForm(props: CreateEventCreateFormProps): React.ReactElement;
