export type BaseResponse<T> = {
  code: number;
  message: string;
  data: T;
};

export type Template = {
  id: number;
  name: string;
};

export type PersonalDetailTemplate = {
  genderOptions: Template[];
  nationalityOptions: Template[];
};
