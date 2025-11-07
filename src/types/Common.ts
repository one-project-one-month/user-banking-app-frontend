export type BaseResponse<T> = {
  code: number;
  message: string;
  data: T;
};

export type Tempelate = {
  id: number;
  name: string;
};

export type PersonalDetailTemplate = {
  genderOptions: Tempelate[];
  nationalityOptions: Tempelate[];
};
