/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateEventFormInputValues = {
    name?: string;
    description?: string;
    detailedInfo?: string;
    Country?: string;
    mode?: string;
    type?: string;
    dateTime?: string;
    venue?: string;
    orgName?: string;
    orgEmail?: string;
    orgPhone?: string;
    endDate?: string;
    ticketPrice?: number;
    orgDesc?: string;
    orgAddress?: string;
};
export declare type CreateEventFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    detailedInfo?: ValidationFunction<string>;
    Country?: ValidationFunction<string>;
    mode?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    dateTime?: ValidationFunction<string>;
    venue?: ValidationFunction<string>;
    orgName?: ValidationFunction<string>;
    orgEmail?: ValidationFunction<string>;
    orgPhone?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
    ticketPrice?: ValidationFunction<number>;
    orgDesc?: ValidationFunction<string>;
    orgAddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateEventFormOverridesProps = {
    CreateEventFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    detailedInfo?: PrimitiveOverrideProps<TextFieldProps>;
    Country?: PrimitiveOverrideProps<TextFieldProps>;
    mode?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    dateTime?: PrimitiveOverrideProps<TextFieldProps>;
    venue?: PrimitiveOverrideProps<TextFieldProps>;
    orgName?: PrimitiveOverrideProps<TextFieldProps>;
    orgEmail?: PrimitiveOverrideProps<TextFieldProps>;
    orgPhone?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
    ticketPrice?: PrimitiveOverrideProps<TextFieldProps>;
    orgDesc?: PrimitiveOverrideProps<TextFieldProps>;
    orgAddress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateEventFormProps = React.PropsWithChildren<{
    overrides?: CreateEventFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateEventFormInputValues) => CreateEventFormInputValues;
    onSuccess?: (fields: CreateEventFormInputValues) => void;
    onError?: (fields: CreateEventFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateEventFormInputValues) => CreateEventFormInputValues;
    onValidate?: CreateEventFormValidationValues;
} & React.CSSProperties>;
export default function CreateEventForm(props: CreateEventFormProps): React.ReactElement;
