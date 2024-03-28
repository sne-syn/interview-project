export type Link = {
  path: string;
  label: string;
};

export interface Location {
  city: string;
  country: string;
}

export type UserOverview = {
  name: string;
  location: string | null;
  description: string;
  age: number;
  avatar: string;
  links: Link[] | null;
};

export interface UserDetail {
  name: string;
  location: Location | null;
  description: string;
  occupation: string;
  avatar: string;
  links: Link[] | null;
}
