import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Pencil,
  Plus,
  Search,
  Trash2,
  Trophy,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Label } from "../components/ui/label";
import { Skeleton } from "../components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

import {
  useCompetitions,
  useCreateCompetition,
  useDeleteCompetition,
  useUpdateCompetition,
} from "../hooks/UseCompetition";
import { useStudentStore } from "../Stores/StudentStores";
import type { Competition } from "../api/Competition.api";

interface CompetitionForm {
  name: string;
  description: string;
  type: Competition["type"];
  start_date: string;
  end_date: string;
}

type ActiveModal = "none" | "create" | "edit";

const getToday = () => new Date().toISOString().slice(0, 10);

const initialForm = (): CompetitionForm => ({
  name: "",
  description: "",
  type: "football",
  start_date: getToday(),
  end_date: "",
});

const typeBadgeConfig: Record<
  Competition["type"],
  { label: string; color: string }
> = {
  football: {
    label: "Football",
    color:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  quiz: {
    label: "Quiz Tournament",
    color:
      "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  academic: {
    label: "Academic Contest",
    color:
      "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
};

export default function CompetitionPage() {
  const user = useStudentStore((state) => state.user);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [activeModal, setActiveModal] =
    useState<ActiveModal>("none");

  const [form, setForm] =
    useState<CompetitionForm>(initialForm());

  const limit = 10;

  // ---------------------------------------------
  // Queries & Mutations
  // ---------------------------------------------

  const query = useCompetitions(page, limit);

  const createMutation = useCreateCompetition();
  const updateMutation = useUpdateCompetition();
  const deleteMutation = useDeleteCompetition();

  const items = useMemo(
    () => query.data?.data ?? [],
    [query.data]
  );

  // ---------------------------------------------
  // Permissions
  // ---------------------------------------------

  const canManage =
    user?.role === "main_monitor" ||
    user?.role === "sports_leader";

  // ---------------------------------------------
  // Search & Filter
  // ---------------------------------------------

  const filtered = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return items.filter((item) => {
      const matchesSearch =
        !searchValue ||
        item.name.toLowerCase().includes(searchValue) ||
        item.type.toLowerCase().includes(searchValue);

      const matchesType =
        typeFilter === "all" ||
        item.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [items, search, typeFilter]);

  // ---------------------------------------------
  // Modal Helpers
  // ---------------------------------------------

  const closeModal = () => {
    setActiveModal("none");
    setSelectedId(null);
  };

  const openCreate = () => {
    setSelectedId(null);
    setForm(initialForm());
    setActiveModal("create");
  };

  const openEdit = (item: Competition) => {
    setSelectedId(item.id);

    setForm({
      name: item.name,
      description: item.description ?? "",
      type: item.type,
      start_date: item.start_date
        ? item.start_date.slice(0, 10)
        : getToday(),
      end_date: item.end_date
        ? item.end_date.slice(0, 10)
        : "",
    });

    setActiveModal("edit");
  };

  // ---------------------------------------------
  // Form Handler
  // ---------------------------------------------

  const handleField =
    (key: keyof CompetitionForm) =>
    (
      e: ChangeEvent<
        HTMLInputElement |
          HTMLTextAreaElement |
          HTMLSelectElement
      >
    ) => {
      setForm((current) => ({
        ...current,
        [key]: e.target.value,
      }));
    };

  // ---------------------------------------------
  // Create
  // ---------------------------------------------

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = form.name.trim();

    if (!name) {
      toast.error("Competition name is required");
      return;
    }

    toast.promise(
      createMutation.mutateAsync({
        name,
        description: form.description.trim(),
        type: form.type,
        start_date: form.start_date,
        ...(form.end_date.trim()
          ? { end_date: form.end_date }
          : {}),
      }),
      {
        loading: "Creating competition...",
        success: () => {
          closeModal();
          setForm(initialForm());
          return "Competition created successfully";
        },
        error: (error: Error) =>
          `Failed to create competition: ${error.message}`,
      }
    );
  };

  // ---------------------------------------------
  // Update
  // ---------------------------------------------

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedId === null) {
      toast.error("No competition selected");
      return;
    }

    const name = form.name.trim();

    if (!name) {
      toast.error("Competition name is required");
      return;
    }

    toast.promise(
      updateMutation.mutateAsync({
        id: selectedId,
        payload: {
          name,
          description: form.description.trim(),
          type: form.type,
          start_date: form.start_date,
          end_date: form.end_date.trim()
            ? form.end_date
            : null,
        },
      }),
      {
        loading: "Updating competition...",
        success: () => {
          closeModal();
          return "Competition updated successfully";
        },
        error: (error: Error) =>
          `Failed to update competition: ${error.message}`,
      }
    );
  };

  // ---------------------------------------------
  // Delete
  // ---------------------------------------------

  const handleDelete = (id: number) => {
    toast.promise(deleteMutation.mutateAsync(id), {
      loading: "Deleting competition...",
      success: "Competition deleted successfully",
      error: (error: Error) =>
        `Failed to delete competition: ${error.message}`,
    });
  };

  // ---------------------------------------------
  // Render
  // ---------------------------------------------

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white">
            <Trophy className="h-7 w-7 text-amber-400" />
            Class Competitions & Events
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Organize inter-class tournaments, sports matches,
            and academic quizzes.
          </p>
        </div>

        {canManage && (
          <Dialog
            open={activeModal === "create"}
            onOpenChange={(open) => {
              if (!open) closeModal();
            }}
          >
            <Button
              onClick={openCreate}
              className="rounded-xl bg-[hsl(var(--brand))] px-5 text-white shadow-lg shadow-[hsl(var(--brand))]/20 hover:bg-[hsl(var(--brand))]/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Competition
            </Button>

            <DialogContent className="border-zinc-800 bg-zinc-900 text-zinc-100 sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white">
                  Create New Competition
                </DialogTitle>

                <DialogDescription className="text-zinc-400">
                  Setup an event or tournament schedule.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleCreate}
                className="mt-2 space-y-4"
              >
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    Competition Name
                  </Label>

                  <Input
                    value={form.name}
                    onChange={handleField("name")}
                    placeholder="e.g. Annual Football League"
                    className="border-zinc-800 bg-zinc-950 focus:border-[hsl(var(--brand))]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-zinc-300">
                      Event Type
                    </Label>

                    <select
                      value={form.type}
                      onChange={handleField("type")}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
                    >
                      <option value="football">
                        Football
                      </option>
                      <option value="quiz">
                        Quiz
                      </option>
                      <option value="academic">
                        Academic
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-zinc-300">
                      Start Date
                    </Label>

                    <Input
                      type="date"
                      value={form.start_date}
                      onChange={handleField("start_date")}
                      className="border-zinc-800 bg-zinc-950"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    End Date (Optional)
                  </Label>

                  <Input
                    type="date"
                    value={form.end_date}
                    onChange={handleField("end_date")}
                    className="border-zinc-800 bg-zinc-950"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    Description
                  </Label>

                  <textarea
                    value={form.description}
                    onChange={handleField("description")}
                    rows={3}
                    placeholder="Tournament rules and details..."
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
                  />
                </div>

                <DialogFooter className="gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={closeModal}
                    className="border-zinc-700 text-zinc-300"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    disabled={createMutation.isPending}
                    className="bg-[hsl(var(--brand))] text-white"
                  >
                    {createMutation.isPending
                      ? "Creating..."
                      : "Create Event"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

          <Input
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            className="rounded-xl border-zinc-800 bg-zinc-900/60 pl-10 text-zinc-200 placeholder:text-zinc-500 focus:border-[hsl(var(--brand))]"
            placeholder="Search competitions by name or category..."
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400">
            <Filter className="h-3.5 w-3.5" />

            <span>Category:</span>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="cursor-pointer bg-transparent text-zinc-200 focus:outline-none"
            >
              <option value="all" className="bg-zinc-900">
                All
              </option>

              <option
                value="football"
                className="bg-zinc-900"
              >
                Football
              </option>

              <option
                value="quiz"
                className="bg-zinc-900"
              >
                Quiz
              </option>

              <option
                value="academic"
                className="bg-zinc-900"
              >
                Academic
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <Card className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-xl backdrop-blur-xl">
        <CardHeader className="border-b border-zinc-800/60 pb-4">
          <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
            <Trophy className="h-4 w-4 text-amber-400" />
            Competition Calendar ({filtered.length})
          </CardTitle>

          <CardDescription className="text-xs text-zinc-400">
            Upcoming and ongoing student competitions.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-zinc-950/60">
                <TableRow className="border-zinc-800 hover:bg-transparent">
                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Competition Name
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Type
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Start Date
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    End Date
                  </TableHead>

                  <TableHead className="text-right text-xs font-semibold text-zinc-400">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {query.isLoading ? (
                  Array.from({ length: 4 }).map((_, index) => (
                    <TableRow
                      key={index}
                      className="border-zinc-800/40"
                    >
                      <TableCell colSpan={5}>
                        <Skeleton className="h-10 w-full bg-zinc-800/40" />
                      </TableCell>
                    </TableRow>
                  ))
                ) : filtered.length === 0 ? (
                  <TableRow className="border-zinc-800/40">
                    <TableCell
                      colSpan={5}
                      className="py-12 text-center text-sm text-zinc-500"
                    >
                      No competitions found matching criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((item) => {
                    const badgeMeta =
                      typeBadgeConfig[item.type] ??
                      typeBadgeConfig.football;

                    return (
                      <TableRow
                        key={item.id}
                        className="border-zinc-800/40 transition-colors hover:bg-zinc-800/30"
                      >
                        <TableCell className="text-sm font-medium text-zinc-200">
                          {item.name}
                        </TableCell>

                        <TableCell>
                          <Badge
                            className={`${badgeMeta.color} rounded-full border px-2.5 py-0.5 text-[11px] font-medium`}
                          >
                            {badgeMeta.label}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-xs text-zinc-400">
                          {new Date(
                            item.start_date
                          ).toLocaleDateString()}
                        </TableCell>

                        <TableCell className="text-xs text-zinc-400">
                          {item.end_date
                            ? new Date(
                                item.end_date
                              ).toLocaleDateString()
                            : "Ongoing"}
                        </TableCell>

                        <TableCell className="text-right">
                          {canManage && (
                            <div className="flex items-center justify-end gap-1.5">
                              {/* EDIT */}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  openEdit(item)
                                }
                                className="h-8 w-8 rounded-lg p-0 text-zinc-400 transition-colors hover:bg-amber-400/10 hover:text-amber-400"
                                title="Edit Competition"
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>

                              {/* DELETE */}
                              <Button
                                variant="ghost"
                                size="sm"
                                disabled={deleteMutation.isPending}
                                onClick={() =>
                                  handleDelete(item.id)
                                }
                                className="h-8 w-8 rounded-lg p-0 text-zinc-400 transition-colors hover:bg-red-400/10 hover:text-red-400"
                                title="Delete Competition"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-zinc-800/60 px-6 py-4 text-xs text-zinc-400">
            <div>Page {page}</div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setPage((current) =>
                    Math.max(1, current - 1)
                  )
                }
                disabled={page === 1}
                className="h-8 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
              >
                <ChevronLeft className="mr-1 h-3.5 w-3.5" />
                Prev
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setPage((current) => current + 1)
                }
                disabled={items.length < limit}
                className="h-8 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
              >
                Next
                <ChevronRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog
        open={activeModal === "edit"}
        onOpenChange={(open) => {
          if (!open) closeModal();
        }}
      >
        <DialogContent className="border-zinc-800 bg-zinc-900 text-zinc-100 sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-white">
              Edit Competition
            </DialogTitle>

            <DialogDescription className="text-zinc-400">
              Update event details.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleUpdate}
            className="mt-2 space-y-4"
          >
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-zinc-300">
                Name
              </Label>

              <Input
                value={form.name}
                onChange={handleField("name")}
                className="border-zinc-800 bg-zinc-950"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-zinc-300">
                  Event Type
                </Label>

                <select
                  value={form.type}
                  onChange={handleField("type")}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
                >
                  <option value="football">
                    Football
                  </option>

                  <option value="quiz">
                    Quiz
                  </option>

                  <option value="academic">
                    Academic
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-zinc-300">
                  Start Date
                </Label>

                <Input
                  type="date"
                  value={form.start_date}
                  onChange={handleField("start_date")}
                  className="border-zinc-800 bg-zinc-950"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-zinc-300">
                End Date
              </Label>

              <Input
                type="date"
                value={form.end_date}
                onChange={handleField("end_date")}
                className="border-zinc-800 bg-zinc-950"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-zinc-300">
                Description
              </Label>

              <textarea
                value={form.description}
                onChange={handleField("description")}
                rows={3}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
              />
            </div>

            <DialogFooter className="gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={closeModal}
                className="border-zinc-700 text-zinc-300"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={updateMutation.isPending}
                className="bg-[hsl(var(--brand))] text-white"
              >
                {updateMutation.isPending
                  ? "Updating..."
                  : "Update Event"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
