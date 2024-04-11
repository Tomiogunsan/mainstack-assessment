import React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export type IModalActionProps = {
  show?: boolean;
  text?: React.ReactNode;

  disabled?: boolean;
  className?: string;
  loading?: boolean;
  loadingText?: React.ReactNode;
};

export type IModalBaseProps = {
  onClose: () => void;
  children?: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export type IModalProps = IModalBaseProps & {
  icon?: React.ReactNode;
  subHeader?: React.ReactNode;
  action?: IModalActionProps;
  secondaryAction?: IModalActionProps;
};

export type IFilterModalProps<TFieldValues extends FieldValues> =
  IModalBaseProps & {
    action?: IModalActionProps;
    showClearAll?: boolean;
    form: UseFormReturn<TFieldValues>;
  };
