"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<{ text: string; error: boolean }>({
    text: "",
    error: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setStatus({ text: "", error: false });

    try {
      const action = form.action; // https://formsubmit.co/info@trident-builders.ca
      const ajaxUrl = action.replace("formsubmit.co/", "formsubmit.co/ajax/");
      const res = await fetch(ajaxUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data || data.success === "false" || data.success === false) {
        throw new Error(data?.message || "Request failed");
      }
      setStatus({
        text: "Thank you! Your registration has been received — our team will be in touch shortly.",
        error: false,
      });
      form.reset();
    } catch {
      setStatus({
        text: "Something went wrong sending your registration. Please email us directly at info@trident-builders.ca.",
        error: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="reg-form"
      action="https://formsubmit.co/info@trident-builders.ca"
      method="POST"
      onSubmit={onSubmit}
    >
      <h3>Register for Priority Access</h3>
      <input type="hidden" name="_subject" value="New Priority Access Registration — Summer Heaven" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <div className="form-row">
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
      </div>
      <div className="form-row">
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone" required />
      </div>
      <div className="form-row radio-row">
        <span>Are you a Realtor?</span>
        <label>
          <input type="radio" name="realtor" value="no" defaultChecked /> No
        </label>
        <label>
          <input type="radio" name="realtor" value="yes" /> Yes
        </label>
      </div>
      <textarea name="message" placeholder="Message (optional)" rows={3}></textarea>
      <button type="submit" className="btn btn-solid full-width" disabled={submitting}>
        {submitting ? "Sending…" : "Submit Registration"}
      </button>
      <p className={`form-note${status.error ? " form-note-error" : ""}`}>{status.text}</p>
    </form>
  );
}
