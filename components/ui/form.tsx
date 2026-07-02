"use client";

import * as React from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

const Form = FormProvider;

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  return <Controller {...props} />;
}

function FormItem({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`space-y-2 ${className}`} {...props} />;
}

function FormLabel({
  className = "",
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={`text-sm font-semibold text-zinc-700 ${className}`}
      {...props}
    />
  );
}

function FormControl({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function FormMessage() {
  const {
    formState: { errors },
  } = useFormContext();

  return null;
}

export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage };
