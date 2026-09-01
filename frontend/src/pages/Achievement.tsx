import {
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import {
  Award,
  ChevronLeft,
  ChevronRight,
  Filter,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Trash2,
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
  useAchievements,
  useCreateAchievement,
  useDeleteAchievement,
  useRestoreAchievement,
  useUpdateAchievement,
} from "../hooks/UseAchievement";

import { useStudents } from "../hooks/UseStudent";
import { useStudentStore } from "../Stores/StudentStores";
import type { Achievement } from "../api/Achievement.api";

interface AchievementForm {
  student_id: number;
  title: string;
  description: string;
  type: Achievement["type"];
  points: number;
  achieved_at: string;
}

const typeConfig: Record<
  Achievement["type"],
  { label: string; color: string }
> = {
  academic: {
    label: "Academic",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  leadership: {
    label: "Leadership",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  sports: {
    label: "Sports",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  discipline: {
    label: "Discipline",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  community: {
    label: "Community",
    color: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  },
};

const initialForm = (): AchievementForm => ({
  student_id: 0,
  title: "",
  description: "",
  type: "academic",
  points: 10,
  achieved_at: new Date().toISOString().slice(0, 10),
});

export default function AchievementPage() {
  const user = useStudentStore((state) => state.user);

  const [page, setPage] = useState(1);
  const limit = 10;

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const [selectedId, setSelectedId] = useState<number | null>(null);

  type ActiveModal = "none" | "create" | "edit";

  const [activeModal, setActiveModal] =
    useState<ActiveModal>("none");

  const [createForm, setCreateForm] =
    useState<AchievementForm>(initialForm());

  const [editForm, setEditForm] =
    useState<AchievementForm>(initialForm());

  const achievementsQuery = useAchievements(page, limit);
  const studentsQuery = useStudents(1, 100);

  const studentsList = useMemo(
    () => studentsQuery.data?.data ?? [],
    [studentsQuery.data]
  );

  const createMutation = useCreateAchievement();
  const updateMutation = useUpdateAchievement();
  const deleteMutation = useDeleteAchievement();
  const restoreMutation = useRestoreAchievement();

  const achievements = useMemo(
    () => achievementsQuery.data?.data ?? [],
    [achievementsQuery.data]
  );

  const filtered = useMemo(() => {
    let result = achievements;

    const query = search.trim().toLowerCase();

    if (query) {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query) ||
          item.student?.fullname?.toLowerCase().includes(query)
      );
    }

    if (typeFilter !== "all") {
      result = result.filter(
        (item) => item.type === typeFilter
      );
    }

    return result;
  }, [achievements, search, typeFilter]);

  const canManage =
    user?.role === "main_monitor" ||
    user?.role === "assistant_monitor";

  const closeModal = () => {
    setActiveModal("none");
    setSelectedId(null);
  };

  const openCreate = () => {
    setSelectedId(null);
    setCreateForm(initialForm());
    setActiveModal("create");
  };

  const openEdit = (item: Achievement) => {
    setSelectedId(item.id);

    setEditForm({
      student_id: item.student_id,
      title: item.title,
      description: item.description ?? "",
      type: item.type,
      points: item.points,
      achieved_at: (
        item.achieved_at ??
        new Date().toISOString()
      ).slice(0, 10),
    });

    setActiveModal("edit");
  };

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (createForm.student_id <= 0) {
      toast.error("Please select a student");
      return;
    }

    toast.promise(
      createMutation.mutateAsync(createForm),
      {
        loading: "Creating achievement...",
        success: () => {
          closeModal();
          setCreateForm(initialForm());
          return "Achievement created successfully";
        },
        error: (error: Error) =>
          `Failed to create achievement: ${error.message}`,
      }
    );
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedId) return;

    toast.promise(
      updateMutation.mutateAsync({
        id: selectedId,
        payload: editForm,
      }),
      {
        loading: "Updating achievement...",
        success: () => {
          closeModal();
          return "Achievement updated successfully";
        },
        error: (error: Error) =>
          `Failed to update achievement: ${error.message}`,
      }
    );
  };

  // Direct delete - no confirmation dialog
  const handleDelete = (id: number) => {
    toast.promise(
      deleteMutation.mutateAsync(id),
      {
        loading: "Deleting achievement...",
        success: "Achievement deleted successfully",
        error: (error: Error) =>
          `Failed to delete achievement: ${error.message}`,
      }
    );
  };

  const handleRestore = (id: number) => {
    toast.promise(
      restoreMutation.mutateAsync(id),
      {
        loading: "Restoring achievement...",
        success: "Achievement restored successfully",
        error: (error: Error) =>
          `Failed to restore achievement: ${error.message}`,
      }
    );
  };

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white">
            <Award className="h-7 w-7 text-[hsl(var(--brand))]" />
            Student Achievements
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Recognize and reward academic, leadership, and athletic excellence.
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
              Add Achievement
            </Button>

            <DialogContent className="border-zinc-800 bg-zinc-900 text-zinc-100 sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white">
                  Add New Achievement
                </DialogTitle>

                <DialogDescription className="text-zinc-400">
                  Award points and recognition to a student.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleCreate}
                className="mt-2 space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div className="space-y-2">
                    <Label
                      htmlFor="create_achieve_student_id"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Select Student
                    </Label>

                    <select
                      id="create_achieve_student_id"
                      value={createForm.student_id || ""}
                      onChange={(e) =>
                        setCreateForm((current) => ({
                          ...current,
                          student_id: Number(e.target.value),
                        }))
                      }
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--brand))]"
                      required
                    >
                      <option value="" disabled>
                        Select student...
                      </option>

                      {studentsList.map((student) => (
                        <option
                          key={student.id}
                          value={student.id}
                          className="bg-zinc-900"
                        >
                          {student.fullname} ({student.student_code})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="create_achieve_points"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Award Points
                    </Label>

                    <Input
                      id="create_achieve_points"
                      type="number"
                      value={createForm.points}
                      onChange={(e) =>
                        setCreateForm((current) => ({
                          ...current,
                          points: Number(e.target.value),
                        }))
                      }
                      className="border-zinc-800 bg-zinc-950 focus:border-[hsl(var(--brand))]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="create_achieve_title"
                    className="text-xs font-semibold text-zinc-300"
                  >
                    Achievement Title
                  </Label>

                  <Input
                    id="create_achieve_title"
                    value={createForm.title}
                    onChange={(e) =>
                      setCreateForm((current) => ({
                        ...current,
                        title: e.target.value,
                      }))
                    }
                    placeholder="e.g. Math Olympiad 1st Place"
                    className="border-zinc-800 bg-zinc-950 focus:border-[hsl(var(--brand))]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div className="space-y-2">
                    <Label
                      htmlFor="create_achieve_type"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Category Type
                    </Label>

                    <select
                      id="create_achieve_type"
                      value={createForm.type}
                      onChange={(e) =>
                        setCreateForm((current) => ({
                          ...current,
                          type: e.target.value as Achievement["type"],
                        }))
                      }
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--brand))]"
                    >
                      <option value="academic">Academic</option>
                      <option value="leadership">Leadership</option>
                      <option value="sports">Sports</option>
                      <option value="discipline">Discipline</option>
                      <option value="community">Community</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="create_achieve_date"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Date Achieved
                    </Label>

                    <Input
                      id="create_achieve_date"
                      type="date"
                      value={createForm.achieved_at}
                      onChange={(e) =>
                        setCreateForm((current) => ({
                          ...current,
                          achieved_at: e.target.value,
                        }))
                      }
                      className="border-zinc-800 bg-zinc-950 focus:border-[hsl(var(--brand))]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="create_achieve_desc"
                    className="text-xs font-semibold text-zinc-300"
                  >
                    Description
                  </Label>

                  <textarea
                    id="create_achieve_desc"
                    value={createForm.description}
                    onChange={(e) =>
                      setCreateForm((current) => ({
                        ...current,
                        description: e.target.value,
                      }))
                    }
                    rows={3}
                    placeholder="Describe the recognition details..."
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--brand))]"
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
                      : "Save Achievement"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

          <Input
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            className="rounded-xl border-zinc-800 bg-zinc-900/60 pl-10 text-zinc-200 placeholder:text-zinc-500 focus:border-[hsl(var(--brand))]"
            placeholder="Search achievements by title, student, or category..."
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
              <option value="academic" className="bg-zinc-900">
                Academic
              </option>
              <option value="leadership" className="bg-zinc-900">
                Leadership
              </option>
              <option value="sports" className="bg-zinc-900">
                Sports
              </option>
              <option value="discipline" className="bg-zinc-900">
                Discipline
              </option>
              <option value="community" className="bg-zinc-900">
                Community
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <Card className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-xl backdrop-blur-xl">
        <CardHeader className="border-b border-zinc-800/60 pb-4">
          <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
            <Award className="h-4 w-4 text-[hsl(var(--brand))]" />
            Achievement Records ({filtered.length})
          </CardTitle>

          <CardDescription className="text-xs text-zinc-400">
            Student recognitions, points, and honors.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-zinc-950/60">
                <TableRow className="border-zinc-800 hover:bg-transparent">

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Title
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Category
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Points
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Student
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Date Achieved
                  </TableHead>

                  <TableHead className="text-right text-xs font-semibold text-zinc-400">
                    Actions
                  </TableHead>

                </TableRow>
              </TableHeader>

              <TableBody>
                {achievementsQuery.isLoading ? (
                  Array.from({ length: 4 }).map((_, index) => (
                    <TableRow
                      key={index}
                      className="border-zinc-800/40"
                    >
                      <TableCell colSpan={6}>
                        <Skeleton className="h-10 w-full bg-zinc-800/40" />
                      </TableCell>
                    </TableRow>
                  ))
                ) : filtered.length === 0 ? (
                  <TableRow className="border-zinc-800/40">
                    <TableCell
                      colSpan={6}
                      className="py-12 text-center text-sm text-zinc-500"
                    >
                      No achievement records found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((item) => {
                    const badgeType =
                      typeConfig[item.type] ||
                      typeConfig.academic;

                    return (
                      <TableRow
                        key={item.id}
                        className="border-zinc-800/40 transition-colors hover:bg-zinc-800/30"
                      >
                        <TableCell className="text-sm font-medium text-zinc-200">
                          {item.title}
                        </TableCell>

                        <TableCell>
                          <Badge
                            className={`${badgeType.color} rounded-full border px-2.5 py-0.5 text-[11px] font-medium`}
                          >
                            {badgeType.label}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-sm font-semibold text-[hsl(var(--brand))]">
                          +{item.points} pts
                        </TableCell>

                        <TableCell className="text-sm text-zinc-300">
                          {item.student?.fullname ??
                            `Student #${item.student_id}`}
                        </TableCell>

                        <TableCell className="text-xs text-zinc-400">
                          {new Date(
                            item.achieved_at
                          ).toLocaleDateString()}
                        </TableCell>

                        <TableCell className="text-right">
                          {canManage && (
                            <div className="flex items-center justify-end gap-1.5">

                              {/* Edit */}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => openEdit(item)}
                                className="h-8 w-8 rounded-lg p-0 text-zinc-400 transition-colors hover:bg-amber-400/10 hover:text-amber-400"
                                title="Edit Achievement"
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>

                              {/* Direct Delete */}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  handleDelete(item.id)
                                }
                                disabled={deleteMutation.isPending}
                                className="h-8 w-8 rounded-lg p-0 text-zinc-400 transition-colors hover:bg-red-400/10 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50"
                                title="Delete Achievement"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>

                              {/* Restore */}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  handleRestore(item.id)
                                }
                                disabled={restoreMutation.isPending}
                                className="h-8 w-8 rounded-lg p-0 text-zinc-400 transition-colors hover:bg-emerald-400/10 hover:text-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
                                title="Restore Achievement"
                              >
                                <RotateCcw className="h-4 w-4" />
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
                disabled={achievements.length < limit}
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
              Edit Achievement
            </DialogTitle>

            <DialogDescription className="text-zinc-400">
              Modify achievement details.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleUpdate}
            className="mt-2 space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-zinc-300">
                  Select Student
                </Label>

                <select
                  value={editForm.student_id || ""}
                  onChange={(e) =>
                    setEditForm((current) => ({
                      ...current,
                      student_id: Number(e.target.value),
                    }))
                  }
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--brand))]"
                  required
                >
                  <option value="" disabled>
                    Select student...
                  </option>

                  {studentsList.map((student) => (
                    <option
                      key={student.id}
                      value={student.id}
                      className="bg-zinc-900"
                    >
                      {student.fullname} ({student.student_code})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-zinc-300">
                  Points
                </Label>

                <Input
                  type="number"
                  value={editForm.points}
                  onChange={(e) =>
                    setEditForm((current) => ({
                      ...current,
                      points: Number(e.target.value),
                    }))
                  }
                  className="border-zinc-800 bg-zinc-950"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-zinc-300">
                Title
              </Label>

              <Input
                value={editForm.title}
                onChange={(e) =>
                  setEditForm((current) => ({
                    ...current,
                    title: e.target.value,
                  }))
                }
                className="border-zinc-800 bg-zinc-950"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-zinc-300">
                  Category Type
                </Label>

                <select
                  value={editForm.type}
                  onChange={(e) =>
                    setEditForm((current) => ({
                      ...current,
                      type: e.target.value as Achievement["type"],
                    }))
                  }
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
                >
                  <option value="academic">Academic</option>
                  <option value="leadership">Leadership</option>
                  <option value="sports">Sports</option>
                  <option value="discipline">Discipline</option>
                  <option value="community">Community</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-zinc-300">
                  Achieved At
                </Label>

                <Input
                  type="date"
                  value={editForm.achieved_at}
                  onChange={(e) =>
                    setEditForm((current) => ({
                      ...current,
                      achieved_at: e.target.value,
                    }))
                  }
                  className="border-zinc-800 bg-zinc-950"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-zinc-300">
                Description
              </Label>

              <textarea
                value={editForm.description}
                onChange={(e) =>
                  setEditForm((current) => ({
                    ...current,
                    description: e.target.value,
                  }))
                }
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
                  : "Update Achievement"}
              </Button>
            </DialogFooter>
          </form>

        </DialogContent>
      </Dialog>

    </div>
  );
}
