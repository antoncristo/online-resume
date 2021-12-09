export type ContactItemVariant = "LINK" | "TEXT";

export type ContactItem = {
  icon?: string;
  contactInfo: string;
  variant: ContactItemVariant;
};
