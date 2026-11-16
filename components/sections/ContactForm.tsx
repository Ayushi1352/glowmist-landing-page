"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types/templates.types";
import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { Icon } from "@/components/ui/Icon";
import { FormSuccess, Spinner } from "@/components/ui/FormSuccess";

/** White fields with a soft border */
const base =
  "peer w-full appearance-none rounded-[0.4rem] border-[0.07rem] border-[var(--color-border)] bg-[var(--color-bg-field)] px-[1.03rem] font-sans text-[1.05rem] text-[var(--color-heading)] shadow-[0_0.2rem_0.5rem_-0.35rem_var(--color-shadow-card)] outline-none transition-colors focus:border-[var(--color-primary)] lg:text-[1.125rem]";
const field = `${base} h-[3.19rem]`;

/** The design's placeholder with a red star; hidden as soon as the field has text */
const Label = ({ text, className = "top-1/2 -translate-y-1/2" }: { text: string; className?: string }) => (
  <span aria-hidden="true" className={`pointer-events-none absolute left-[1.03rem] font-sans text-[1.05rem] text-[var(--color-text)] peer-[:not(:placeholder-shown)]:hidden lg:text-[1.125rem] ${className}`}>
    {text} <span className="text-[var(--color-primary-light)]">*</span>
  </span>
);

const Field = ({ name, type = "text", label, autoComplete }: { name: string; type?: string; label: string; autoComplete?: string }) => (
  <label className="relative block">
    <input name={name} type={type} required placeholder=" " aria-label={label} autoComplete={autoComplete} className={field} />
    <Label text={label} />
  </label>
);

const SelectField = ({ name, placeholder, options }: { name: string; placeholder: string; options: string[] }) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        aria-label={placeholder}
        className={`${field} cursor-pointer pr-10 ${value === "" ? "text-[var(--color-text)]" : ""}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[var(--color-heading)]">
            {option}
          </option>
        ))}
      </select>
      <Icon name="LuChevronDown" className="pointer-events-none absolute right-[1.2rem] top-1/2 size-[1.3rem] -translate-y-1/2 text-[var(--color-heading)]" strokeWidth={2.2} />
    </div>
  );
};

/** The "Send Us a Message" form; dummy submit with a thank-you message in place of the button */
export const ContactForm = ({ data }: { data?: ContactFormData }) => {
  const submit = useDummySubmit();
  if (!data) return null;
  const { fields } = data;

  // remounting the form (via key) after each send clears every field, including the select
  return (
    <form
      key={submit.round}
      onSubmit={submit.onSubmit}
      onInput={submit.onInput}
      aria-busy={submit.sending}
      className="mt-5 grid gap-x-[1.31rem] gap-y-[1.125rem] sm:grid-cols-2 lg:mt-[0.75rem]"
    >
      <Field name="name" label={fields.name} autoComplete="name" />
      <Field name="phone" type="tel" label={fields.phone} autoComplete="tel" />
      <Field name="email" type="email" label={fields.email} autoComplete="email" />
      <SelectField name="service" placeholder={fields.service} options={data.serviceOptions} />
      <label className="relative block sm:col-span-2">
        <textarea name="message" required rows={4} placeholder=" " aria-label={fields.message} className={`${base} h-[7.27rem] resize-y py-[0.85rem]`} />
        <Label text={fields.message} className="top-[0.85rem]" />
      </label>
      {submit.showMessage ? (
        <FormSuccess
          name={submit.name}
          title={data.successTitle}
          message={data.success}
          leaving={submit.status === "leaving"}
          visibleFor={submit.visibleFor}
          onClose={submit.dismiss}
          closeLabel={data.closeLabel}
          className="sm:col-span-2 lg:mt-[0.5rem]"
        />
      ) : (
        <button
          type="submit"
          disabled={submit.sending}
          className="group flex h-[3.75rem] items-center justify-center gap-[0.75rem] rounded-[0.4rem] bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-dark)] font-heading text-[1.4rem] font-bold text-[var(--color-white)] transition-[filter] hover:brightness-110 disabled:cursor-wait disabled:opacity-80 sm:col-span-2 lg:mt-[0.5rem] lg:text-[1.59rem]"
        >
          {submit.sending ? (
            <>
              <Spinner className="size-5" />
              {data.sending}
            </>
          ) : (
            <>
              {data.button}
              <Icon name="LuArrowRight" className="size-[1.5rem] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.2} />
            </>
          )}
        </button>
      )}
    </form>
  );
};
