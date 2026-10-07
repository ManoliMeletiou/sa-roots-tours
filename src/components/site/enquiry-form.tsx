import { cloneElement, isValidElement, useState, type FormEvent, type ReactElement, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectField } from "@/components/ui/select-field";
import { Textarea } from "@/components/ui/textarea";
import { OPERATOR_EMAIL } from "@/lib/contact";
import { saveEnquiry } from "@/lib/enquire";
import { useLocale } from "@/lib/locale";

type FieldErrors = Partial<
  Record<
    "name" | "email" | "dates" | "groupSize" | "rooming" | "budget" | "travelStyle",
    string
  >
>;

type Fields = {
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

const emptyFields: Fields = {
  name: "",
  email: "",
  phone: "",
  preferredDates: "",
  groupSize: "",
  rooming: "",
  budget: "",
  travelStyle: "",
  message: "",
};

export function EnquiryForm() {
  const { t, locale } = useLocale();
  const c = t.enquire;
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mailto, setMailto] = useState("");
  const [summary, setSummary] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [fields, setFields] = useState<Fields>(emptyFields);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function validate(data: Fields): FieldErrors {
    const next: FieldErrors = {};
    if (data.name.trim().length < 2) next.name = c.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      next.email = c.errors.email;
    }
    if (data.preferredDates.trim().length < 2) next.dates = c.errors.dates;
    if (!data.groupSize) next.groupSize = c.errors.required;
    if (!data.rooming) next.rooming = c.errors.required;
    if (!data.budget) next.budget = c.errors.required;
    if (!data.travelStyle) next.travelStyle = c.errors.required;
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setPending(true);
    const text = enquiryText(fields, c);
    const href = enquiryMailto(fields.name, text);
    saveEnquiry({
      locale,
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      preferredDates: fields.preferredDates.trim(),
      groupSize: fields.groupSize,
      rooming: fields.rooming,
      budget: fields.budget,
      travelStyle: fields.travelStyle,
      message: fields.message.trim(),
    });
    setSummary(text);
    setMailto(href);
    setCopied(false);
    setPending(false);
    setFields(emptyFields);
    setDone(true);
    window.setTimeout(() => {
      window.location.href = href;
    }, 50);
  }

  if (done) {
    return (
      <div className="rounded-xl bg-paper p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-widest text-sage">
          {c.formTitle}
        </p>
        <h2 className="mt-3 font-display text-section font-medium leading-snug">
          {c.successTitle}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
          {c.successBody}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={mailto}>{c.successSend}</a>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(summary);
                setCopied(true);
              } catch {
                setCopied(false);
              }
            }}
          >
            {copied ? c.successCopied : c.successCopy}
          </Button>
        </div>
        <p className="mt-4 text-sm text-ink-soft">{OPERATOR_EMAIL}</p>
        <Button
          type="button"
          variant="ghost"
          className="mt-2"
          onClick={() => {
            setDone(false);
            setErrors({});
            setCopied(false);
          }}
        >
          {c.successAnother}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl bg-paper p-6 sm:p-8"
    >
      <h2 className="font-display text-section font-medium">{c.formTitle}</h2>
      <p className="mt-2 text-sm text-muted">{c.notice}</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="enq-name" label={c.name} error={errors.name}>
          <Input
            id="enq-name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field id="enq-email" label={c.email} error={errors.email}>
          <Input
            id="enq-email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>
        <Field
          id="enq-phone"
          label={c.phone}
          hint={c.phoneHint}
          className="sm:col-span-2"
        >
          <Input
            id="enq-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
        <Field
          id="enq-dates"
          label={c.dates}
          hint={c.datesHint}
          error={errors.dates}
          className="sm:col-span-2"
        >
          <Input
            id="enq-dates"
            name="preferredDates"
            value={fields.preferredDates}
            onChange={(e) => update("preferredDates", e.target.value)}
          />
        </Field>
        <Field id="enq-group" label={c.groupSize} error={errors.groupSize}>
          <SelectField
            id="enq-group"
            name="groupSize"
            value={fields.groupSize}
            onChange={(e) => update("groupSize", e.target.value)}
          >
            <option value="" disabled>
              {c.choose}
            </option>
            {c.groupOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field id="enq-rooming" label={c.rooming} error={errors.rooming}>
          <SelectField
            id="enq-rooming"
            name="rooming"
            value={fields.rooming}
            onChange={(e) => update("rooming", e.target.value)}
          >
            <option value="" disabled>
              {c.choose}
            </option>
            {c.roomingOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field id="enq-budget" label={c.budget} error={errors.budget}>
          <SelectField
            id="enq-budget"
            name="budget"
            value={fields.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            <option value="" disabled>
              {c.choose}
            </option>
            {c.budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field id="enq-style" label={c.travelStyle} error={errors.travelStyle}>
          <SelectField
            id="enq-style"
            name="travelStyle"
            value={fields.travelStyle}
            onChange={(e) => update("travelStyle", e.target.value)}
          >
            <option value="" disabled>
              {c.choose}
            </option>
            {c.styleOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field
          id="enq-message"
          label={c.message}
          hint={c.messageHint}
          className="sm:col-span-2"
        >
          <Textarea
            id="enq-message"
            name="message"
            maxLength={2000}
            value={fields.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </Field>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-muted">{c.privacy}</p>
      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full sm:w-auto"
        disabled={pending}
      >
        {pending ? c.submitting : c.submit}
      </Button>
    </form>
  );
}

function optionLabel(
  options: { value: string; label: string }[],
  value: string,
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

function enquiryText(
  fields: Fields,
  c: ReturnType<typeof useLocale>["t"]["enquire"],
) {
  return [
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Phone: ${fields.phone.trim() || "—"}`,
    `Timing: ${fields.preferredDates.trim()}`,
    `Group: ${optionLabel(c.groupOptions, fields.groupSize)}`,
    `Rooming: ${optionLabel(c.roomingOptions, fields.rooming)}`,
    `Budget: ${optionLabel(c.budgetOptions, fields.budget)}`,
    `Style: ${optionLabel(c.styleOptions, fields.travelStyle)}`,
    "",
    fields.message.trim() || "No extra note.",
  ].join("\n");
}

function enquiryMailto(name: string, text: string) {
  const subject = encodeURIComponent(`SA Roots Tours enquiry — ${name.trim()}`);
  const body = encodeURIComponent(text);
  return `mailto:${OPERATOR_EMAIL}?subject=${subject}&body=${body}`;
}

function Field({
  id,
  label,
  hint,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy =
    [!error ? hintId : undefined, errorId].filter(Boolean).join(" ") ||
    undefined;
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
      })
    : children;
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1.5">
        {label}
      </Label>
      {control}
      {hint && !error ? (
        <p id={hintId} className="mt-1.5 text-xs text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
