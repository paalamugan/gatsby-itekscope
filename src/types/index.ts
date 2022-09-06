import { theme } from "@chakra-ui/react";

export interface HeaderBgImageProps {
  src: string;
  alt: string;
  title?: string;
}

export type Theme = Partial<typeof theme>;

export type Argument<T> = T extends (...args: infer U) => unknown ? U : never;

export type WithoutNullableKey<T> = {
  [Key in keyof T]-?: WithoutNullableKey<NonNullable<T[Key]>>;
};
