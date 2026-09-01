import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Filter,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Trash2,
  TrendingDown,
  TrendingUp,
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";

import {
  useClassImpacts,
  useCreateClassImpact,
  useDeleteClassImpact,
  useRestoreClassImpact,
  useUpdateClassImpact,
} from "../hooks/UseClassImpact";

import { useStudents } from "../hooks/UseStudent";
import { useStudentStore } from "../Stores/StudentStores";
import type { ClassImpact } from "../api/ClassImpact.api";

interface ClassImpactForm {
  student_id: number;
  title: string;
  description: string;
  type: ClassImpact["type"];
  points: number;
  impact_date: string;
}

const initialForm = (): ClassImpactForm => ({
  student_id: 0,
  title: "",
  description: "",
  type: "positive",
  points: 5,
  impact_date: new Date().toISOString().slice(0, 10),
});

export default function ClassImpactPage() {
  const user = useStudentStore((state) => state.user);

  const [page, setPage] = useState(1);
  const limit = 10;

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  /*
   * IMPORTANT:
   * Only ONE modal state can be active at a time.
   */
  type ActiveModal = "none" | "create" | "edit" | "delete";

  const [activeModal, setActiveModal] =
    useState<ActiveModal>("none");

  const [selectedId, setSelectedId] =
    useState<number | null>(null);

  const [deleteTarget, setDeleteTarget] =
    useState<ClassImpact | null>(null);

  const [createForm, setCreateForm] =
    useState<ClassImpactForm>(initialForm());

  const [editForm, setEditForm] =
    useState<ClassImpactForm>(initialForm());

  /* =========================
     QUERIES / MUTATIONS
  ========================== */

  const query = useClassImpacts(page, limit);

  const studentsQuery = useStudents(1, 100);

  const studentsList = useMemo(
    () => studentsQuery.data?.data ?? [],
    [studentsQuery.data]
  );

  const createMutation = useCreateClassImpact();
  const updateMutation = useUpdateClassImpact();
  const deleteMutation = useDeleteClassImpact();
  const restoreMutation = useRestoreClassImpact();

  const items = useMemo(
    () => query.data?.data ?? [],
    [query.data]
  );

  /* =========================
     FILTERING
  ========================== */

  const filtered = useMemo(() => {
    let result = items;

    const q = search.trim().toLowerCase();

    if (q) {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.student?.fullname
            ?.toLowerCase()
            .includes(q)
      );
    }

    if (typeFilter !== "all") {
      result = result.filter(
        (item) => item.type === typeFilter
      );
    }

    return result;
  }, [items, search, typeFilter]);

  /* =========================
     PERMISSIONS
  ========================== */

  const canManage =
    user?.role === "main_monitor" ||
    user?.role === "assistant_monitor";

  /* =========================
     MODAL HELPERS
  ========================== */

  const closeModal = () => {
    setActiveModal("none");
    setSelectedId(null);
    setDeleteTarget(null);
  };

  const openCreate = () => {
    setSelectedId(null);
    setDeleteTarget(null);
    setCreateForm(initialForm());
    setActiveModal("create");
  };

  const openEdit = (item: ClassImpact) => {
    setDeleteTarget(null);

    setSelectedId(item.id);

    setEditForm({
      student_id: item.student_id,
      title: item.title,
      description: item.description ?? "",
      type: item.type,
      points: item.points,
      impact_date: item.impact_date
        ? item.impact_date.slice(0, 10)
        : new Date().toISOString().slice(0, 10),
    });

    setActiveModal("edit");
  };

  /*
   * IMPORTANT:
   * Delete replaces the edit modal completely.
   * The edit dialog is unmounted because activeModal becomes "delete".
   */
  const initiateDelete = (item: ClassImpact) => {
    setSelectedId(null);
    setDeleteTarget(item);
    setActiveModal("delete");
  };

  /* =========================
     CREATE
  ========================== */

  const handleCreate = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (createForm.student_id <= 0) {
      toast.error("Please select a student");
      return;
    }

    if (!createForm.title.trim()) {
      toast.error("Please enter a title");
      return;
    }

    if (createForm.points <= 0) {
      toast.error("Points must be greater than 0");
      return;
    }

    toast.promise(
      createMutation.mutateAsync(createForm),
      {
        loading: "Creating class impact...",

        success: () => {
          closeModal();
          setCreateForm(initialForm());

          return "Class impact record created successfully";
        },

        error: (error: Error) =>
          `Failed to create class impact: ${error.message}`,
      }
    );
  };

  /* =========================
     UPDATE
  ========================== */

  const handleUpdate = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (selectedId === null) {
      toast.error("No class impact selected");
      return;
    }

    if (editForm.student_id <= 0) {
      toast.error("Please select a student");
      return;
    }

    if (!editForm.title.trim()) {
      toast.error("Please enter a title");
      return;
    }

    if (editForm.points <= 0) {
      toast.error("Points must be greater than 0");
      return;
    }

    toast.promise(
      updateMutation.mutateAsync({
        id: selectedId,
        payload: editForm,
      }),
      {
        loading: "Updating class impact...",

        success: () => {
          closeModal();

          return "Class impact record updated successfully";
        },

        error: (error: Error) =>
          `Failed to update class impact: ${error.message}`,
      }
    );
  };

  /* =========================
     DELETE
  ========================== */

  const handleDelete = async () => {
    if (!deleteTarget) {
      return;
    }

    const id = deleteTarget.id;

    try {
      await toast.promise(
        deleteMutation.mutateAsync(id),
        {
          loading: "Deleting class impact...",

          success:
            "Class impact deleted successfully",

          error: (error: Error) =>
            `Failed to delete class impact: ${error.message}`,
        }
      );

      closeModal();
    } catch {
      /*
       * toast.promise already displays the error.
       * Keep the modal open if deletion fails.
       */
    }
  };

  /* =========================
     RESTORE
  ========================== */

  const handleRestore = (id: number) => {
    toast.promise(
      restoreMutation.mutateAsync(id),
      {
        loading: "Restoring class impact...",

        success:
          "Class impact restored successfully",

        error: (error: Error) =>
          `Failed to restore class impact: ${error.message}`,
      }
    );
  };

  /* =========================
     RENDER
  ========================== */

  return (
    <div className="space-y-6">
      {/* =========================================
          PAGE HEADER
      ========================================== */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white">
            <BookOpen className="h-7 w-7 text-indigo-400" />
            Class Impact Records
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Track positive contributions and negative
            impacts on class environment.
          </p>
        </div>

        {canManage && (
          <Button
            onClick={openCreate}
            className="rounded-xl bg-[hsl(var(--brand))] px-5 text-white shadow-lg shadow-[hsl(var(--brand))]/20 hover:bg-[hsl(var(--brand))]/90"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Class Impact
          </Button>
        )}
      </div>

      {/* =========================================
          CREATE DIALOG

          IMPORTANT:
          Only render when activeModal === "create".
      ========================================== */}

      {canManage && activeModal === "create" && (
        <Dialog
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              closeModal();
            }
          }}
        >
          <DialogContent className="sm:max-w-lg border-zinc-800 bg-zinc-900 text-zinc-100">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-white">
                Create Class Impact
              </DialogTitle>

              <DialogDescription className="text-zinc-400">
                Record positive support or negative
                behavior impact.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={handleCreate}
              className="mt-2 space-y-4"
            >
              {/* Student + Points */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    Select Student
                  </Label>

                  <select
                    value={
                      createForm.student_id || ""
                    }
                    onChange={(e) =>
                      setCreateForm((current) => ({
                        ...current,
                        student_id: Number(
                          e.target.value
                        ),
                      }))
                    }
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--brand))]"
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select student...
                    </option>

                    {studentsList.map((student) => (
                      <option
                        key={student.id}
                        value={student.id}
                      >
                        {student.fullname} (
                        {student.student_code})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    Impact Points
                  </Label>

                  <Input
                    type="number"
                    min="1"
                    value={createForm.points}
                    onChange={(e) =>
                      setCreateForm((current) => ({
                        ...current,
                        points: Number(
                          e.target.value
                        ),
                      }))
                    }
                    className="border-zinc-800 bg-zinc-950 focus:border-[hsl(var(--brand))]"
                    required
                  />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-zinc-300">
                  Title
                </Label>

                <Input
                  value={createForm.title}
                  onChange={(e) =>
                    setCreateForm((current) => ({
                      ...current,
                      title: e.target.value,
                    }))
                  }
                  placeholder="e.g. Organized Class Clean Up"
                  className="border-zinc-800 bg-zinc-950 focus:border-[hsl(var(--brand))]"
                  required
                />
              </div>

              {/* Type + Date */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    Impact Type
                  </Label>

                  <select
                    value={createForm.type}
                    onChange={(e) =>
                      setCreateForm((current) => ({
                        ...current,
                        type: e.target
                          .value as ClassImpact["type"],
                      }))
                    }
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
                  >
                    <option value="positive">
                      Positive (+)
                    </option>

                    <option value="negative">
                      Negative (-)
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    Impact Date
                  </Label>

                  <Input
                    type="date"
                    value={createForm.impact_date}
                    onChange={(e) =>
                      setCreateForm((current) => ({
                        ...current,
                        impact_date:
                          e.target.value,
                      }))
                    }
                    className="border-zinc-800 bg-zinc-950 focus:border-[hsl(var(--brand))]"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-zinc-300">
                  Description
                </Label>

                <textarea
                  value={createForm.description}
                  onChange={(e) =>
                    setCreateForm((current) => ({
                      ...current,
                      description: e.target.value,
                    }))
                  }
                  rows={3}
                  placeholder="Context of impact..."
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
                  disabled={
                    createMutation.isPending
                  }
                  className="bg-[hsl(var(--brand))] text-white"
                >
                  {createMutation.isPending
                    ? "Creating..."
                    : "Save Record"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* =========================================
          SEARCH / FILTER
      ========================================== */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

          <Input
            value={search}
            onChange={(
              e: ChangeEvent<HTMLInputElement>
            ) => setSearch(e.target.value)}
            className="rounded-xl border-zinc-800 bg-zinc-900/60 pl-10 text-zinc-200 placeholder:text-zinc-500 focus:border-[hsl(var(--brand))]"
            placeholder="Search class impacts..."
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400">
            <Filter className="h-3.5 w-3.5" />

            <span>Type:</span>

            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value)
              }
              className="cursor-pointer bg-transparent text-zinc-200 focus:outline-none"
            >
              <option
                value="all"
                className="bg-zinc-900"
              >
                All
              </option>

              <option
                value="positive"
                className="bg-zinc-900"
              >
                Positive
              </option>

              <option
                value="negative"
                className="bg-zinc-900"
              >
                Negative
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* =========================================
          TABLE
      ========================================== */}

      <Card className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-xl backdrop-blur-xl">
        <CardHeader className="border-b border-zinc-800/60 pb-4">
          <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
            <BookOpen className="h-4 w-4 text-[hsl(var(--brand))]" />

            Class Impact Log ({filtered.length})
          </CardTitle>

          <CardDescription className="text-xs text-zinc-400">
            Student conduct and influence records.
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
                    Type
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Points
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Student
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Impact Date
                  </TableHead>

                  <TableHead className="text-right text-xs font-semibold text-zinc-400">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {query.isLoading ? (
                  Array.from({ length: 4 }).map(
                    (_, index) => (
                      <TableRow
                        key={index}
                        className="border-zinc-800/40"
                      >
                        <TableCell colSpan={6}>
                          <Skeleton className="h-10 w-full bg-zinc-800/40" />
                        </TableCell>
                      </TableRow>
                    )
                  )
                ) : filtered.length === 0 ? (
                  <TableRow className="border-zinc-800/40">
                    <TableCell
                      colSpan={6}
                      className="py-12 text-center text-sm text-zinc-500"
                    >
                      No class impact records found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((item) => {
                    const isPositive =
                      item.type === "positive";

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
                            className={`${
                              isPositive
                                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                : "border-red-500/20 bg-red-500/10 text-red-400"
                            } flex w-fit items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium`}
                          >
                            {isPositive ? (
                              <TrendingUp className="h-3 w-3" />
                            ) : (
                              <TrendingDown className="h-3 w-3" />
                            )}

                            {isPositive
                              ? "Positive"
                              : "Negative"}
                          </Badge>
                        </TableCell>

                        <TableCell
                          className={`text-sm font-semibold ${
                            isPositive
                              ? "text-emerald-400"
                              : "text-red-400"
                          }`}
                        >
                          {isPositive ? "+" : "-"}
                          {item.points} pts
                        </TableCell>

                        <TableCell className="text-sm text-zinc-300">
                          {item.student?.fullname ??
                            `Student #${item.student_id}`}
                        </TableCell>

                        <TableCell className="text-xs text-zinc-400">
                          {item.impact_date
                            ? new Date(
                                item.impact_date
                              ).toLocaleDateString()
                            : "—"}
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
                                title="Edit Class Impact"
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>

                              {/* DELETE */}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  initiateDelete(item)
                                }
                                className="h-8 w-8 rounded-lg p-0 text-zinc-400 transition-colors hover:bg-red-400/10 hover:text-red-400"
                                title="Delete Class Impact"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>

                              {/* RESTORE */}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  handleRestore(item.id)
                                }
                                className="h-8 w-8 rounded-lg p-0 text-zinc-400 transition-colors hover:bg-emerald-400/10 hover:text-emerald-400"
                                title="Restore Record"
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

          {/* =====================================
              PAGINATION
          ====================================== */}

          <div className="flex items-center justify-between border-t border-zinc-800/60 px-6 py-4 text-xs text-zinc-400">
            <div>Page {page}</div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setPage((p) =>
                    Math.max(1, p - 1)
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
                  setPage((p) => p + 1)
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

      {/* =========================================
          EDIT DIALOG

          IMPORTANT:
          This entire Dialog is NOT mounted when
          activeModal is "delete".
          
          Therefore Edit + Delete cannot overlap.
      ========================================== */}

      {canManage && activeModal === "edit" && (
        <Dialog
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              closeModal();
            }
          }}
        >
          <DialogContent className="sm:max-w-lg border-zinc-800 bg-zinc-900 text-zinc-100">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-white">
                Edit Class Impact
              </DialogTitle>

              <DialogDescription className="text-zinc-400">
                Update record details.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={handleUpdate}
              className="mt-2 space-y-4"
            >
              {/* Student + Points */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    Select Student
                  </Label>

                  <select
                    value={
                      editForm.student_id || ""
                    }
                    onChange={(e) =>
                      setEditForm((current) => ({
                        ...current,
                        student_id: Number(
                          e.target.value
                        ),
                      }))
                    }
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--brand))]"
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select student...
                    </option>

                    {studentsList.map((student) => (
                      <option
                        key={student.id}
                        value={student.id}
                      >
                        {student.fullname} (
                        {student.student_code})
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
                    min="1"
                    value={editForm.points}
                    onChange={(e) =>
                      setEditForm((current) => ({
                        ...current,
                        points: Number(
                          e.target.value
                        ),
                      }))
                    }
                    className="border-zinc-800 bg-zinc-950"
                    required
                  />
                </div>
              </div>

              {/* Title */}
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

              {/* Type + Date */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    Impact Type
                  </Label>

                  <select
                    value={editForm.type}
                    onChange={(e) =>
                      setEditForm((current) => ({
                        ...current,
                        type: e.target
                          .value as ClassImpact["type"],
                      }))
                    }
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
                  >
                    <option value="positive">
                      Positive (+)
                    </option>

                    <option value="negative">
                      Negative (-)
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    Impact Date
                  </Label>

                  <Input
                    type="date"
                    value={editForm.impact_date}
                    onChange={(e) =>
                      setEditForm((current) => ({
                        ...current,
                        impact_date:
                          e.target.value,
                      }))
                    }
                    className="border-zinc-800 bg-zinc-950"
                    required
                  />
                </div>
              </div>

              {/* Description */}
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
                  disabled={
                    updateMutation.isPending
                  }
                  className="bg-[hsl(var(--brand))] text-white"
                >
                  {updateMutation.isPending
                    ? "Updating..."
                    : "Update Record"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* =========================================
          DELETE CONFIRMATION

          IMPORTANT:
          This is also conditionally mounted.
          Edit dialog is completely unmounted when
          this opens.
      ========================================== */}

      {canManage &&
        activeModal === "delete" &&
        deleteTarget && (
          <AlertDialog
            open={true}
            onOpenChange={(open) => {
              if (!open) {
                closeModal();
              }
            }}
          >
            <AlertDialogContent className="sm:max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-zinc-100 shadow-2xl">
              <AlertDialogHeader className="space-y-3">
                <AlertDialogTitle className="flex items-center gap-2 text-lg font-bold text-white">
                  <Trash2 className="h-5 w-5 text-red-500" />

                  Confirm Class Impact Deletion
                </AlertDialogTitle>

                <AlertDialogDescription className="text-sm leading-6 text-zinc-400">
                  Are you sure you want to delete{" "}
                  <span className="font-semibold text-zinc-200">
                    "{deleteTarget.title}"
                  </span>
                  ?
                  <br />

                  <span className="text-xs text-zinc-500">
                    This action cannot be undone.
                  </span>
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter className="mt-4 flex gap-3 border-t border-zinc-800/60 pt-4">
                <AlertDialogCancel
                  disabled={
                    deleteMutation.isPending
                  }
                  onClick={closeModal}
                  className="h-9 rounded-xl border-zinc-700 bg-zinc-800 px-4 text-xs font-semibold text-zinc-300 hover:bg-zinc-700 hover:text-white"
                >
                  Cancel
                </AlertDialogCancel>

                <AlertDialogAction
                  disabled={
                    deleteMutation.isPending
                  }
                  onClick={(e) => {
                    /*
                     * Prevent AlertDialog from automatically
                     * closing before our async delete finishes.
                     */
                    e.preventDefault();

                    void handleDelete();
                  }}
                  className="h-9 rounded-xl bg-red-600 px-5 text-xs font-semibold text-white shadow-md shadow-red-600/20 hover:bg-red-700"
                >
                  {deleteMutation.isPending
                    ? "Deleting..."
                    : "Delete Record"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
    </div>
  );
}
