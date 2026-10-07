const STORAGE_KEY = "sa-roots-enquiries";

export type Enquiry = {
  id: string;
  createdAt: string;
  locale: "en" | "nl";
  name: string;
  email: string;
  phone: string;
  preferredDates: string;
  groupSize: string;
  rooming: string;
  budget: string;
  travelStyle: string;
  message: string;
};

function readAll(): Enquiry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Enquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveEnquiry(
  input: Omit<Enquiry, "id" | "createdAt">,
): Enquiry {
  const enquiry: Enquiry = {
    ...input,
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : String(Date.now()),
    createdAt: new Date().toISOString(),
  };
  const next = [enquiry, ...readAll()].slice(0, 25);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return enquiry;
}
