export interface DistrictRow {
  sno: number;
  district: string;
  verified: number;
  pending: number;
  rejected: number;
}

export const districtVerification: DistrictRow[] = [
  { sno: 1, district: "Adilabad", verified: 120, pending: 10, rejected: 2 },
  { sno: 2, district: "Bhadradri", verified: 95, pending: 18, rejected: 1 },
  { sno: 3, district: "Hyderabad", verified: 210, pending: 6, rejected: 0 },
  { sno: 4, district: "Karimnagar", verified: 145, pending: 12, rejected: 3 },
  { sno: 5, district: "Khammam", verified: 160, pending: 9, rejected: 1 },
  { sno: 6, district: "Nalgonda", verified: 180, pending: 7, rejected: 4 }
];
