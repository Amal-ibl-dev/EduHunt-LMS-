export type TeacherSignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  profileSlug: string;
  password: string;
  confirmPassword: string;
  whatsapp: string;
  idNumber: string;
  gender: "female" | "male" | "";
  title: string;
  levels: string[];
  subjects: string[];
  otherSubjects: string;
  languages: string[];
  online: boolean;
  physical: boolean;
  cities: string[];
  otherCities: string;
  area: string;
  intro: string;
  notifications: boolean;
  publicProfile: boolean;
  acceptTerms: boolean;
  productUpdates: boolean;
};

export type Errors = Partial<Record<keyof TeacherSignUpData, string>>;

export const INITIAL_DATA: TeacherSignUpData = {
  firstName: "", lastName: "", email: "", profileSlug: "", password: "", confirmPassword: "", whatsapp: "", idNumber: "", gender: "",
  title: "", levels: [], subjects: [], otherSubjects: "", languages: [],
  online: false, physical: false, cities: [], otherCities: "", area: "", intro: "",
  notifications: true, publicProfile: true, acceptTerms: false, productUpdates: false,
};

export type StepProps = {
  data: TeacherSignUpData;
  errors: Errors;
  update: (patch: Partial<TeacherSignUpData>) => void;
};
