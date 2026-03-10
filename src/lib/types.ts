export type CredentialType =
  | "state_license"
  | "dea"
  | "malpractice"
  | "board_cert"
  | "bls_acls"
  | "cme"
  | "custom";

export type StaffRole = "MD" | "NP" | "PA" | "RN" | "MA" | "Office Manager" | "Other";

export interface Credential {
  id: string;
  type: CredentialType;
  label: string;
  licenseNumber?: string;
  issuingState?: string;
  issuingOrg?: string;
  expiryDate: string;
  notes?: string;
  alertCC: boolean;
  staffId: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: StaffRole;
  email: string;
  credentials: Credential[];
}

export interface Practice {
  id: string;
  name: string;
  specialty: string;
  state: string;
  timezone: string;
  plan: "starter" | "professional" | "agency";
}

export interface AlertLog {
  id: string;
  credentialId: string;
  credentialLabel: string;
  staffName: string;
  type: "90_day" | "30_day" | "7_day";
  sentAt: string;
  delivered: boolean;
}

export const CREDENTIAL_TYPE_LABELS: Record<CredentialType, string> = {
  state_license: "State Medical License",
  dea: "DEA Registration",
  malpractice: "Malpractice Insurance",
  board_cert: "Board Certification",
  bls_acls: "BLS/ACLS",
  cme: "CME Hours",
  custom: "Custom",
};
