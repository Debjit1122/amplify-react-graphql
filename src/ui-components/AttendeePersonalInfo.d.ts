/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, RadioGroupFieldProps, StepperFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AttendeePersonalInfoInputValues = {
    attendeeName?: string;
    attendeeAge?: number;
    attendeeDOB?: string;
    attendeeGender?: string;
    attendeeEmail?: string;
    attendeePhone?: string;
};
export declare type AttendeePersonalInfoValidationValues = {
    attendeeName?: ValidationFunction<string>;
    attendeeAge?: ValidationFunction<number>;
    attendeeDOB?: ValidationFunction<string>;
    attendeeGender?: ValidationFunction<string>;
    attendeeEmail?: ValidationFunction<string>;
    attendeePhone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttendeePersonalInfoOverridesProps = {
    AttendeePersonalInfoGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    attendeeName?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    attendeeAge?: PrimitiveOverrideProps<StepperFieldProps>;
    attendeeDOB?: PrimitiveOverrideProps<TextFieldProps>;
    attendeeGender?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    attendeeEmail?: PrimitiveOverrideProps<TextFieldProps>;
    attendeePhone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AttendeePersonalInfoProps = React.PropsWithChildren<{
    overrides?: AttendeePersonalInfoOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AttendeePersonalInfoInputValues) => AttendeePersonalInfoInputValues;
    onSuccess?: (fields: AttendeePersonalInfoInputValues) => void;
    onError?: (fields: AttendeePersonalInfoInputValues, errorMessage: string) => void;
    onChange?: (fields: AttendeePersonalInfoInputValues) => AttendeePersonalInfoInputValues;
    onValidate?: AttendeePersonalInfoValidationValues;
} & React.CSSProperties>;
export default function AttendeePersonalInfo(props: AttendeePersonalInfoProps): React.ReactElement;
