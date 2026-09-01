import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { useLoginStudent } from "../hooks/UseStudent";
import useStudentStore from "../Stores/StudentStores";

function LoginPage() {
  const [studentCode, setStudentCode] = useState("");

  const navigate = useNavigate();

  const loginMutation = useLoginStudent();

  const setSession = useStudentStore((state) => state.setSession);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const code = studentCode.trim();

    if (!code) {
      return;
    }

    loginMutation.mutate(code, {
      onSuccess: (response) => {
        const {
          student,
          access_token,
          refresh_token,
        } = response.data;

        // Save login session
        setSession(
          student,
          access_token,
          refresh_token
        );

        // Go to dashboard after successful login
        navigate("/dashboard", {
          replace: true,
        });
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[hsl(var(--background))] px-6 py-10 text-[hsl(var(--foreground))]">
      <Card className="w-full max-w-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-2xl shadow-black/20">
        <CardHeader className="space-y-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--brand))]/10 text-2xl font-black text-[hsl(var(--brand))]">
            3C
          </div>

          <CardTitle className="text-2xl">
            Class 3C Portal
          </CardTitle>

          <CardDescription>
            Sign in with your student code to continue.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-[hsl(var(--muted-foreground))]">
                Student code
              </label>

              <input
                type="text"
                value={studentCode}
                onChange={(event) =>
                  setStudentCode(event.target.value)
                }
                placeholder="Enter your code"
                autoComplete="username"
                className="w-full rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand))] focus:ring-2 focus:ring-[hsl(var(--brand))]/20"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={
                loginMutation.isPending ||
                !studentCode.trim()
              }
            >
              {loginMutation.isPending
                ? "Signing in..."
                : "Login"}
            </Button>

            {loginMutation.isError && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                {loginMutation.error instanceof Error
                  ? loginMutation.error.message
                  : "Login failed. Please check your student code and try again."}
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-sm text-[hsl(var(--muted-foreground))] transition hover:text-[hsl(var(--brand))]"
            >
              ← Back to home
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
