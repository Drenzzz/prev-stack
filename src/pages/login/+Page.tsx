import { useState } from "react";
import { AuthLayout } from "../../components/auth-layout";
import { LoginForm } from "../../components/login-form";
import { signIn } from "../../lib/auth-client";

export default function Page() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setError("");
    setPending(true);
    const form = new FormData(ev.currentTarget);
    const { error } = await signIn.email({
      email: String(form.get("email") ?? ""),
      password: String(form.get("password") ?? ""),
    });
    if (error) {
      setError(error.message ?? "Failed to log in. Check your credentials.");
      setPending(false);
    } else {
      window.location.href = "/dashboard";
    }
  }

  return (
    <AuthLayout>
      <LoginForm onSubmit={handleSubmit} error={error} pending={pending} />
    </AuthLayout>
  );
}
