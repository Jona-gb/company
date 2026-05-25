import React from 'react';
interface FormInputProps {
    label: string;
    type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    options?: {
        value: string;
        label: string;
    }[];
}
export declare const FormInput: React.FC<FormInputProps>;
interface SuccessMessageProps {
    title: string;
    message: string;
    details?: string[];
}
export declare const SuccessMessage: React.FC<SuccessMessageProps>;
export {};
