export type StackItem = {
  iconUrl: string;
  itemName: string;
  skillGrade: number;
};

export type TechStackScheme = {
  stackTitle: "Toolbox" | "Other";
  stackItems: StackItem[];
};
