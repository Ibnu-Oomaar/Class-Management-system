import { useMemo, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Toaster } from "sonner";

import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

import { ThemeProvider, useTheme } from "./components/theme-provider";
import { schoolContent } from "./data/school";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import useStudentStore from "./Stores/StudentStores";

const languageOptions = [
  { code: "en", label: "English" },
  { code: "so", label: "Somali" },
  { code: "ar", label: "العربية" },
] as const;

const featureCards = [
  {
    title: "Academic Growth",
    text: "Students are encouraged to pursue excellence through discipline, curiosity, and consistent mentorship.",
  },
  {
    title: "Leadership",
    text: "Class 3C creates responsibility through service, initiative, and meaningful student participation.",
  },
  {
    title: "Teamwork",
    text: "We support every learner to collaborate, build confidence, and contribute to a stronger school culture.",
  },
];

function LogoMark() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--brand))]/40 bg-[hsl(var(--brand))]/10 text-lg font-black text-[hsl(var(--brand))] shadow-[0_0_22px_rgba(20,175,95,0.18)]">
        3C
      </div>

      <div className="leading-tight">
        <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[hsl(var(--muted-foreground))]">
          Noradin
        </div>

        <div className="text-sm font-bold text-[hsl(var(--foreground))]">
          Class 3C
        </div>
      </div>
    </Link>
  );
}

function AppContent() {
  const [language, setLanguage] = useState<"en" | "so" | "ar">("en");
  const { theme, setTheme } = useTheme();

  const content = schoolContent[language];

  const navItems = useMemo(
    () => [
      { key: "home", label: content.nav.home },
      { key: "about", label: content.nav.about },
      { key: "testimonials", label: content.nav.testimonials },
      { key: "contact", label: content.nav.contact },
    ],
    [content.nav]
  );

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] antialiased selection:bg-[hsl(var(--brand))]/20">
      <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))]/80 bg-[hsl(var(--background))]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <LogoMark />

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="text-sm font-medium text-[hsl(var(--muted-foreground))] transition hover:text-[hsl(var(--brand))]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted))] p-1">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() =>
                    setLanguage(option.code as "en" | "so" | "ar")
                  }
                  className={[
                    "rounded-full px-2.5 py-1.5 text-[11px] font-medium transition",
                    language === option.code
                      ? "bg-[hsl(var(--brand))] text-white shadow-sm"
                      : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]",
                  ].join(" ")}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-base text-[hsl(var(--foreground))] transition hover:border-[hsl(var(--brand))]/50"
            >
              {theme === "light" ? "☾" : "☀"}
            </button>

            <Link to="/login">
              <Button className="rounded-full px-5 shadow-[0_0_18px_rgba(20,175,95,0.2)] hover:-translate-y-0.5">
                {content.nav.login}
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden border-b border-[hsl(var(--border))]"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(18,180,91,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(18,180,91,0.12),transparent_35%)]" />

          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand))]/30 bg-[hsl(var(--brand))]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[hsl(var(--brand))]">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand))]" />
                {content.hero.badge}
              </span>

              <div className="space-y-5">
                <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[hsl(var(--foreground))] md:text-5xl">
                  {content.hero.title}
                </h1>

                <p className="max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))] md:text-lg">
                  {content.hero.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/login">
                  <Button
                    size="lg"
                    className="rounded-full px-6 shadow-[0_10px_30px_rgba(20,175,95,0.25)] hover:-translate-y-1"
                  >
                    {content.hero.primary}
                  </Button>
                </Link>

                <a href="#about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-6"
                  >
                    {content.hero.secondary}
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-8 border-t border-[hsl(var(--border))] pt-8 text-sm text-[hsl(var(--muted-foreground))]">
                <div>
                  <div className="text-2xl font-black text-[hsl(var(--foreground))]">
                    5
                  </div>
                  <div>Leadership roles</div>
                </div>

                <div>
                  <div className="text-2xl font-black text-[hsl(var(--foreground))]">
                    3C
                  </div>
                  <div>Class identity</div>
                </div>

                <div>
                  <div className="text-2xl font-black text-[hsl(var(--foreground))]">
                    100%
                  </div>
                  <div>Student focus</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-4xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <div className="overflow-hidden rounded-3xl border border-[hsl(var(--brand))]/25 bg-[hsl(var(--background))]">
                  <img
                    src="/image.png"
                    alt="Class 3C hero"
                    className="h-105 w-full object-cover"
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
                        School profile
                      </div>

                      <div className="mt-2 text-xl font-bold text-[hsl(var(--foreground))]">
                        Noradin Secondary School
                      </div>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--brand))]/30 bg-[hsl(var(--brand))]/12 text-lg font-black text-[hsl(var(--brand))]">
                      3C
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[hsl(var(--muted-foreground))]">
              {content.about.label}
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              {content.about.title}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <Card
                key={card.title}
                className="group border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-0 transition duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand))]/40"
              >
                <CardHeader className="pb-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--brand))]/10 text-lg font-black text-[hsl(var(--brand))]">
                    ✓
                  </div>

                  <CardTitle className="text-xl">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base leading-7 text-[hsl(var(--muted-foreground))]">
                    {card.text}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          className="bg-[hsl(var(--muted))]/40 py-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[hsl(var(--muted-foreground))]">
                {content.testimonials.label}
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                {content.testimonials.title}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {content.testimonials.items.map((item, index) => (
                <Card
                  key={`${item.name}-${item.role}`}
                  className="group border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-0 transition duration-300 hover:-translate-y-2 hover:border-[hsl(var(--brand))]/40 hover:shadow-[0_20px_40px_rgba(20,175,95,0.10)]"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--brand))]/10 text-base font-black text-[hsl(var(--brand))]">
                      {item.name.split(" ")[0][0]}
                    </div>

                    <CardTitle className="text-lg">
                      {item.name}
                    </CardTitle>

                    <CardDescription className="font-semibold text-[hsl(var(--brand))]">
                      {item.role}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                      “{item.comment}”
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-4xl border border-[hsl(var(--border))] bg-[linear-gradient(135deg,rgba(20,175,95,0.08),hsl(var(--card)))] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div className="space-y-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[hsl(var(--muted-foreground))]">
                  {content.contact.label}
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  {content.contact.title}
                </h2>

                <p className="max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))] md:text-lg">
                  {content.contact.description}
                </p>
              </div>

              <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-sm">
                <div className="space-y-4 text-sm text-[hsl(var(--muted-foreground))]">
                  <p>
                    <span className="font-semibold text-[hsl(var(--foreground))]">
                      Email:
                    </span>{" "}
                    {content.contact.email}
                  </p>

                  <p>
                    <span className="font-semibold text-[hsl(var(--foreground))]">
                      Phone:
                    </span>{" "}
                    {content.contact.phone}
                  </p>

                  <p>
                    <span className="font-semibold text-[hsl(var(--foreground))]">
                      Address:
                    </span>{" "}
                    {content.contact.address}
                  </p>
                </div>

                <Button className="mt-6 w-full rounded-full">
                  {content.contact.submit}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function DashboardRoute() {
  return <Dashboard />;
}

function AppRoutes() {
  const isAuthenticated = useStudentStore(
    (state) => state.isAuthenticated
  );

  return (
    <Routes>
      <Route path="/" element={<AppContent />} />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/dashboard/*"
        element={
          isAuthenticated ? (
            <DashboardRoute />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="text-center">
        <h1 className="text-6xl font-black">404</h1>

        <p className="mt-3 text-[hsl(var(--muted-foreground))]">
          Page not found
        </p>

        <Link to="/" className="mt-6 inline-block">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="class-3c-theme">
      <Toaster richColors position="top-right" />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
