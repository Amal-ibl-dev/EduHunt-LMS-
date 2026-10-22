import type { Errors, TeacherSignUpData } from "./types";

export function validateAccount(d: TeacherSignUpData): Errors {
  const e: Errors = {};
  if (!d.firstName.trim()) e.firstName = "Enter your first name.";
  if (!d.lastName.trim()) e.lastName = "Enter your last name.";
  if (!/^\S+@\S+\.\S+$/.test(d.email)) e.email = "Enter a valid email address.";
  if (d.password.length < 8) e.password = "Use at least 8 characters.";
  if (d.confirmPassword !== d.password) e.confirmPassword = "Passwords do not match.";
  if (d.whatsapp && !/^\+?[0-9 ]{9,15}$/.test(d.whatsapp)) e.whatsapp = "Enter a valid phone number.";
  if (!d.gender) e.gender = "Select one option.";
  return e;
}

export function validateMode(d: TeacherSignUpData): Errors {
  const e: Errors = {};
  if (!d.acceptTerms) e.acceptTerms = "You must accept the terms to create an account.";
  return e;
}
