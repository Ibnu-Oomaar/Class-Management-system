import {
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  ShieldAlert,
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
  useDisciplineCases,
  useCreateDisciplineCase,
  useDeleteDisciplineCase,
  useRestoreDisciplineCase,
  useUpdateDisciplineCase,
} from "../hooks/UseDisciplineCase";

import { useStudents } from "../hooks/UseStudent";
import { useStudentStore } from "../Stores/StudentStores";

import type {
  DisciplineAction,
  DisciplineCase,
  DisciplineSeverity,
} from "../api/DisciplineCase.api";

/* =========================================================
   TYPES
========================================================= */

interface DisciplineCaseForm {
  student_id: number;
  title: string;
  description: string;
  severity: DisciplineSeverity;
  action: DisciplineAction;
  incident_date: string;
}

type ActiveModal = "none" | "create" | "edit" | "delete";

/* =========================================================
   CONFIG
========================================================= */

const severityConfig: Record<
  DisciplineSeverity,
  {
    label: string;
    color: string;
  }
> = {
  low: {
    label: "Low",
    color:
      "border-blue-500/20 bg-blue-500/10 text-blue-400",
  },

  medium: {
    label: "Medium",
    color:
      "border-amber-500/20 bg-amber-500/10 text-amber-400",
  },

  high: {
    label: "High",
    color:
      "border-orange-500/20 bg-orange-500/10 text-orange-400",
  },

  critical: {
    label: "Critical",
    color:
      "border-red-500/20 bg-red-500/10 text-red-400",
  },
};

const actionLabels: Record<DisciplineAction, string> = {
  warning: "Warning Issued",
  recorded: "Record Only",
  referred_to_admin: "Referred to Admin",
  class_rejection: "Class Rejection",
};

/* =========================================================
   HELPERS
========================================================= */

const getToday = (): string => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const createInitialForm = (): DisciplineCaseForm => ({
  student_id: 0,
  title: "",
  description: "",
  severity: "low",
  action: "warning",
  incident_date: getToday(),
});

const formatDate = (
  date?: string | null
): string => {
  if (!date) {
    return "—";
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "—";
  }

  return parsed.toLocaleDateString();
};

/* =========================================================
   STYLES
========================================================= */

const inputClassName =
  "border-zinc-700 bg-zinc-950 text-zinc-100 " +
  "placeholder:text-zinc-500 " +
  "focus:border-[hsl(var(--brand))] " +
  "focus:ring-1 focus:ring-[hsl(var(--brand))]";

const selectClassName =
  "w-full rounded-xl border border-zinc-700 " +
  "bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 " +
  "outline-none transition-colors " +
  "focus:border-[hsl(var(--brand))] " +
  "focus:ring-1 focus:ring-[hsl(var(--brand))]";

/* =========================================================
   PAGE
========================================================= */

export default function DisciplineCasePage() {
  const user = useStudentStore(
    (state) => state.user
  );

  /* -------------------------------------------------------
     PAGINATION
  ------------------------------------------------------- */

  const [page, setPage] = useState(1);

  const limit = 10;

  /* -------------------------------------------------------
     SEARCH / FILTER
  ------------------------------------------------------- */

  const [search, setSearch] = useState("");

  const [severityFilter, setSeverityFilter] =
    useState<string>("all");

  /* -------------------------------------------------------
     MODAL
  ------------------------------------------------------- */

  const [activeModal, setActiveModal] =
    useState<ActiveModal>("none");

  const [selectedId, setSelectedId] =
    useState<number | null>(null);

  const [deleteTarget, setDeleteTarget] =
    useState<DisciplineCase | null>(null);

  /* -------------------------------------------------------
     FORMS
  ------------------------------------------------------- */

  const [createForm, setCreateForm] =
    useState<DisciplineCaseForm>(
      createInitialForm()
    );

  const [editForm, setEditForm] =
    useState<DisciplineCaseForm>(
      createInitialForm()
    );

  /* -------------------------------------------------------
     API
  ------------------------------------------------------- */

  const query = useDisciplineCases(
    page,
    limit
  );

  const studentsQuery = useStudents(
    1,
    100
  );

  const createMutation =
    useCreateDisciplineCase();

  const updateMutation =
    useUpdateDisciplineCase();

  const deleteMutation =
    useDeleteDisciplineCase();

  const restoreMutation =
    useRestoreDisciplineCase();

  /* -------------------------------------------------------
     DATA
  ------------------------------------------------------- */

  const studentsList = useMemo(
    () => studentsQuery.data?.data ?? [],
    [studentsQuery.data]
  );

  const items = useMemo(
    () => query.data?.data ?? [],
    [query.data]
  );

  /* -------------------------------------------------------
     PERMISSIONS
  ------------------------------------------------------- */

  const canManage =
    user?.role === "main_monitor" ||
    user?.role === "assistant_monitor" ||
    user?.role === "discipline_leader";

  /* -------------------------------------------------------
     FILTERING
  ------------------------------------------------------- */

  const filtered = useMemo(() => {
    let result = items;

    const searchTerm = search
      .trim()
      .toLowerCase();

    if (searchTerm) {
      result = result.filter((item) => {
        const title =
          item.title?.toLowerCase() ?? "";

        const student =
          item.student?.fullname?.toLowerCase() ??
          "";

        const description =
          item.description?.toLowerCase() ??
          "";

        return (
          title.includes(searchTerm) ||
          student.includes(searchTerm) ||
          description.includes(searchTerm)
        );
      });
    }

    if (severityFilter !== "all") {
      result = result.filter(
        (item) =>
          item.severity === severityFilter
      );
    }

    return result;
  }, [
    items,
    search,
    severityFilter,
  ]);

  /* =========================================================
     MODAL CONTROL
  ========================================================= */

  const closeModal = () => {
    setActiveModal("none");
    setSelectedId(null);
    setDeleteTarget(null);
  };

  const openCreate = () => {
    setCreateForm(
      createInitialForm()
    );

    setEditForm(
      createInitialForm()
    );

    setSelectedId(null);
    setDeleteTarget(null);

    setActiveModal("create");
  };

  const openEdit = (
    item: DisciplineCase
  ) => {
    setSelectedId(item.id);

    setDeleteTarget(null);

    setEditForm({
      student_id: item.student_id,
      title: item.title ?? "",
      description: item.description ?? "",
      severity: item.severity,
      action: item.action,
      incident_date: item.incident_date
        ? item.incident_date.slice(0, 10)
        : getToday(),
    });

    setActiveModal("edit");
  };

  const openDelete = (
    item: DisciplineCase
  ) => {
    setSelectedId(null);

    setDeleteTarget(item);

    setActiveModal("delete");
  };

  /* =========================================================
     CREATE
  ========================================================= */

  const handleCreate = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const title =
      createForm.title.trim();

    const description =
      createForm.description.trim();

    if (createForm.student_id <= 0) {
      toast.error(
        "Please select a student."
      );
      return;
    }

    if (!title) {
      toast.error(
        "Please enter a case title."
      );
      return;
    }

    const payload: DisciplineCaseForm = {
      ...createForm,
      title,
      description,
    };

    toast.promise(
      createMutation.mutateAsync(
        payload
      ),
      {
        loading:
          "Recording discipline case...",

        success: () => {
          closeModal();

          setCreateForm(
            createInitialForm()
          );

          return "Discipline case recorded successfully.";
        },

        error: (error: Error) =>
          `Failed to create discipline case: ${error.message}`,
      }
    );
  };

  /* =========================================================
     UPDATE
  ========================================================= */

  const handleUpdate = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (selectedId === null) {
      toast.error(
        "No discipline case selected."
      );
      return;
    }

    const title =
      editForm.title.trim();

    const description =
      editForm.description.trim();

    if (editForm.student_id <= 0) {
      toast.error(
        "Please select a student."
      );
      return;
    }

    if (!title) {
      toast.error(
        "Please enter a case title."
      );
      return;
    }

    const payload: DisciplineCaseForm = {
      ...editForm,
      title,
      description,
    };

    toast.promise(
      updateMutation.mutateAsync({
        id: selectedId,
        payload,
      }),
      {
        loading:
          "Updating discipline case...",

        success: () => {
          closeModal();

          return "Discipline case updated successfully.";
        },

        error: (error: Error) =>
          `Failed to update discipline case: ${error.message}`,
      }
    );
  };

  /* =========================================================
     DELETE
  ========================================================= */

  const handleDelete = () => {
    if (!deleteTarget) {
      return;
    }

    const id = deleteTarget.id;

    toast.promise(
      deleteMutation.mutateAsync(id),
      {
        loading:
          "Deleting discipline case...",

        success: () => {
          closeModal();

          return "Discipline case deleted successfully.";
        },

        error: (error: Error) =>
          `Failed to delete discipline case: ${error.message}`,
      }
    );
  };

  /* =========================================================
     RESTORE
  ========================================================= */

  const handleRestore = (
    id: number
  ) => {
    toast.promise(
      restoreMutation.mutateAsync(id),
      {
        loading:
          "Restoring discipline case...",

        success:
          "Discipline case restored successfully.",

        error: (error: Error) =>
          `Failed to restore discipline case: ${error.message}`,
      }
    );
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="space-y-6">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
            <ShieldAlert className="h-7 w-7 text-amber-500" />

            Discipline Cases
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Monitor, record, and resolve
            student behavior and
            disciplinary incidents.
          </p>
        </div>

        {canManage && (
          <Button
            onClick={openCreate}
            className="
              rounded-xl
              bg-[hsl(var(--brand))]
              px-5
              text-white
              shadow-lg
              shadow-[hsl(var(--brand))]/20
              hover:bg-[hsl(var(--brand))]/90
            "
          >
            <Plus className="mr-2 h-4 w-4" />

            Record New Case
          </Button>
        )}
      </div>

      {/* =====================================================
          SEARCH + FILTER
      ===================================================== */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            className="
              absolute
              left-3.5
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-zinc-500
            "
          />

          <Input
            value={search}
            onChange={(
              event: ChangeEvent<HTMLInputElement>
            ) => {
              setSearch(
                event.target.value
              );

              setPage(1);
            }}
            placeholder="Search discipline records by title, student, or detail..."
            className={`
              rounded-xl
              bg-zinc-900/60
              pl-10
              ${inputClassName}
            `}
          />
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900/60
            px-3
            py-2
            text-xs
            text-zinc-400
          "
        >
          <Filter className="h-4 w-4" />

          <span>Severity:</span>

          <select
            value={severityFilter}
            onChange={(event) => {
              setSeverityFilter(
                event.target.value
              );

              setPage(1);
            }}
            className="
              cursor-pointer
              bg-transparent
              text-zinc-200
              outline-none
            "
          >
            <option
              value="all"
              className="bg-zinc-900"
            >
              All
            </option>

            <option
              value="low"
              className="bg-zinc-900"
            >
              Low
            </option>

            <option
              value="medium"
              className="bg-zinc-900"
            >
              Medium
            </option>

            <option
              value="high"
              className="bg-zinc-900"
            >
              High
            </option>

            <option
              value="critical"
              className="bg-zinc-900"
            >
              Critical
            </option>
          </select>
        </div>
      </div>

      {/* =====================================================
          TABLE
      ===================================================== */}

      <Card
        className="
          overflow-hidden
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/40
          shadow-xl
          backdrop-blur-xl
        "
      >
        <CardHeader className="border-b border-zinc-800/60">
          <CardTitle className="flex items-center gap-2 text-base text-white">
            <ShieldAlert className="h-4 w-4 text-[hsl(var(--brand))]" />

            Discipline Case Records (
            {filtered.length}
            )
          </CardTitle>

          <CardDescription className="text-xs text-zinc-400">
            Track student conduct, warnings,
            and disciplinary measures.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-zinc-950/50">
                <TableRow className="border-zinc-800">
                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Case Title
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Severity
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Action Taken
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Student
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Incident Date
                  </TableHead>

                  <TableHead className="text-right text-xs font-semibold text-zinc-400">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {/* LOADING */}
                {query.isLoading ? (
                  Array.from({
                    length: 5,
                  }).map((_, index) => (
                    <TableRow
                      key={index}
                      className="border-zinc-800/40"
                    >
                      <TableCell colSpan={6}>
                        <Skeleton className="h-10 w-full bg-zinc-800/40" />
                      </TableCell>
                    </TableRow>
                  ))
                ) : filtered.length ===
                  0 ? (
                  /* EMPTY */
                  <TableRow className="border-zinc-800/40">
                    <TableCell
                      colSpan={6}
                      className="py-14 text-center"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <ShieldAlert className="h-8 w-8 text-zinc-700" />

                        <p className="text-sm text-zinc-500">
                          No disciplinary
                          cases found.
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  /* DATA */
                  filtered.map(
                    (item) => {
                      const severity =
                        severityConfig[
                          item.severity
                        ] ??
                        severityConfig.low;

                      return (
                        <TableRow
                          key={item.id}
                          className="
                            border-zinc-800/40
                            transition-colors
                            hover:bg-zinc-800/30
                          "
                        >
                          {/* TITLE */}
                          <TableCell className="max-w-[280px]">
                            <div className="font-medium text-zinc-200">
                              {item.title}
                            </div>

                            {item.description && (
                              <div className="mt-1 truncate text-xs text-zinc-500">
                                {
                                  item.description
                                }
                              </div>
                            )}
                          </TableCell>

                          {/* SEVERITY */}
                          <TableCell>
                            <Badge
                              className={`
                                rounded-full
                                border
                                px-2.5
                                py-0.5
                                text-[11px]
                                font-medium
                                ${severity.color}
                              `}
                            >
                              {
                                severity.label
                              }
                            </Badge>
                          </TableCell>

                          {/* ACTION */}
                          <TableCell className="text-xs text-zinc-300">
                            {
                              actionLabels[
                                item.action
                              ] ??
                                item.action
                            }
                          </TableCell>

                          {/* STUDENT */}
                          <TableCell className="text-sm text-zinc-300">
                            {item.student
                              ?.fullname ??
                              `Student #${item.student_id}`}
                          </TableCell>

                          {/* DATE */}
                          <TableCell className="text-xs text-zinc-400">
                            {formatDate(
                              item.incident_date
                            )}
                          </TableCell>

                          {/* ACTION BUTTONS */}
                          <TableCell className="text-right">
                            {canManage && (
                              <div className="flex items-center justify-end gap-1">
                                {/* EDIT */}
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    openEdit(
                                      item
                                    )
                                  }
                                  className="
                                    h-8
                                    w-8
                                    rounded-lg
                                    p-0
                                    text-zinc-500
                                    hover:bg-amber-500/10
                                    hover:text-amber-400
                                  "
                                  title="Edit"
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>

                                {/* DELETE */}
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    openDelete(
                                      item
                                    )
                                  }
                                  className="
                                    h-8
                                    w-8
                                    rounded-lg
                                    p-0
                                    text-zinc-500
                                    hover:bg-red-500/10
                                    hover:text-red-400
                                  "
                                  title="Delete"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>

                                {/* RESTORE */}
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    handleRestore(
                                      item.id
                                    )
                                  }
                                  disabled={
                                    restoreMutation.isPending
                                  }
                                  className="
                                    h-8
                                    w-8
                                    rounded-lg
                                    p-0
                                    text-zinc-500
                                    hover:bg-emerald-500/10
                                    hover:text-emerald-400
                                  "
                                  title="Restore"
                                >
                                  <RotateCcw className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )
                )}
              </TableBody>
            </Table>
          </div>

          {/* =================================================
              PAGINATION
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-zinc-800/60
              px-6
              py-4
              text-xs
              text-zinc-400
            "
          >
            <div>
              Page{" "}
              <span className="font-semibold text-zinc-200">
                {page}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  setPage(
                    (current) =>
                      Math.max(
                        1,
                        current - 1
                      )
                  )
                }
                disabled={
                  page === 1 ||
                  query.isFetching
                }
                className="
                  h-8
                  border-zinc-700
                  bg-zinc-900
                  text-zinc-300
                  hover:bg-zinc-800
                "
              >
                <ChevronLeft className="mr-1 h-3.5 w-3.5" />

                Prev
              </Button>

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  setPage(
                    (current) =>
                      current + 1
                  )
                }
                disabled={
                  items.length < limit ||
                  query.isFetching
                }
                className="
                  h-8
                  border-zinc-700
                  bg-zinc-900
                  text-zinc-300
                  hover:bg-zinc-800
                "
              >
                Next

                <ChevronRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* =====================================================
          SINGLE MODAL
          
          IMPORTANT:
          Waxaa jira HAL Dialog oo kaliya.
          Create / Edit / Delete dhammaantood
          halkan ayay ka dhacayaan.
      ===================================================== */}

      <Dialog
        open={activeModal !== "none"}
        onOpenChange={(open) => {
          if (!open) {
            closeModal();
          }
        }}
      >
        <DialogContent
          className="
            w-[calc(100%-2rem)]
            max-w-lg
            max-h-[90vh]
            overflow-y-auto
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950
            p-6
            text-zinc-100
            shadow-2xl
          "
        >
          {/* =================================================
              CREATE
          ================================================= */}

          {activeModal === "create" && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white">
                  Record Discipline Case
                </DialogTitle>

                <DialogDescription className="text-zinc-400">
                  Fill in the incident details
                  for administrative review.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleCreate}
                className="mt-4 space-y-4"
              >
                {/* STUDENT + DATE */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="create_student"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Select Student
                    </Label>

                    <select
                      id="create_student"
                      value={
                        createForm.student_id ||
                        ""
                      }
                      onChange={(event) =>
                        setCreateForm(
                          (current) => ({
                            ...current,
                            student_id:
                              Number(
                                event.target
                                  .value
                              ),
                          })
                        )
                      }
                      className={
                        selectClassName
                      }
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select student...
                      </option>

                      {studentsList.map(
                        (student) => (
                          <option
                            key={student.id}
                            value={
                              student.id
                            }
                          >
                            {
                              student.fullname
                            }{" "}
                            (
                            {
                              student.student_code
                            }
                            )
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="create_date"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Incident Date
                    </Label>

                    <Input
                      id="create_date"
                      type="date"
                      value={
                        createForm.incident_date
                      }
                      onChange={(
                        event
                      ) =>
                        setCreateForm(
                          (current) => ({
                            ...current,
                            incident_date:
                              event.target
                                .value,
                          })
                        )
                      }
                      className={
                        inputClassName
                      }
                      required
                    />
                  </div>
                </div>

                {/* TITLE */}
                <div className="space-y-2">
                  <Label
                    htmlFor="create_title"
                    className="text-xs font-semibold text-zinc-300"
                  >
                    Case Title
                  </Label>

                  <Input
                    id="create_title"
                    value={
                      createForm.title
                    }
                    onChange={(event) =>
                      setCreateForm(
                        (current) => ({
                          ...current,
                          title:
                            event.target
                              .value,
                        })
                      )
                    }
                    placeholder="Brief description of offense"
                    className={
                      inputClassName
                    }
                    required
                  />
                </div>

                {/* SEVERITY + ACTION */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="create_severity"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Severity Level
                    </Label>

                    <select
                      id="create_severity"
                      value={
                        createForm.severity
                      }
                      onChange={(event) =>
                        setCreateForm(
                          (current) => ({
                            ...current,
                            severity:
                              event.target
                                .value as DisciplineSeverity,
                          })
                        )
                      }
                      className={
                        selectClassName
                      }
                    >
                      <option value="low">
                        Low
                      </option>

                      <option value="medium">
                        Medium
                      </option>

                      <option value="high">
                        High
                      </option>

                      <option value="critical">
                        Critical
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="create_action"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Action Taken
                    </Label>

                    <select
                      id="create_action"
                      value={
                        createForm.action
                      }
                      onChange={(event) =>
                        setCreateForm(
                          (current) => ({
                            ...current,
                            action:
                              event.target
                                .value as DisciplineAction,
                          })
                        )
                      }
                      className={
                        selectClassName
                      }
                    >
                      <option value="warning">
                        Warning
                      </option>

                      <option value="recorded">
                        Record Only
                      </option>

                      <option value="referred_to_admin">
                        Referred to Admin
                      </option>

                      <option value="class_rejection">
                        Class Rejection
                      </option>
                    </select>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-2">
                  <Label
                    htmlFor="create_description"
                    className="text-xs font-semibold text-zinc-300"
                  >
                    Detailed Description
                  </Label>

                  <textarea
                    id="create_description"
                    value={
                      createForm.description
                    }
                    onChange={(event) =>
                      setCreateForm(
                        (current) => ({
                          ...current,
                          description:
                            event.target
                              .value,
                        })
                      )
                    }
                    rows={4}
                    placeholder="Provide incident specifics..."
                    className={`
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-zinc-700
                      bg-zinc-950
                      px-3
                      py-2.5
                      text-sm
                      text-zinc-100
                      outline-none
                      placeholder:text-zinc-500
                      focus:border-[hsl(var(--brand))]
                      focus:ring-1
                      focus:ring-[hsl(var(--brand))]
                    `}
                  />
                </div>

                <DialogFooter className="gap-2 border-t border-zinc-800 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={
                      closeModal
                    }
                    className="
                      border-zinc-700
                      bg-zinc-900
                      text-zinc-300
                      hover:bg-zinc-800
                      hover:text-white
                    "
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    disabled={
                      createMutation.isPending
                    }
                    className="
                      bg-[hsl(var(--brand))]
                      text-white
                      hover:bg-[hsl(var(--brand))]/90
                    "
                  >
                    {createMutation.isPending
                      ? "Recording..."
                      : "Record Case"}
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}

          {/* =================================================
              EDIT
          ================================================= */}

          {activeModal === "edit" && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white">
                  Edit Discipline Case
                </DialogTitle>

                <DialogDescription className="text-zinc-400">
                  Update the selected
                  disciplinary record.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleUpdate}
                className="mt-4 space-y-4"
              >
                {/* STUDENT + DATE */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="edit_student"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Select Student
                    </Label>

                    <select
                      id="edit_student"
                      value={
                        editForm.student_id ||
                        ""
                      }
                      onChange={(event) =>
                        setEditForm(
                          (current) => ({
                            ...current,
                            student_id:
                              Number(
                                event.target
                                  .value
                              ),
                          })
                        )
                      }
                      className={
                        selectClassName
                      }
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select student...
                      </option>

                      {studentsList.map(
                        (student) => (
                          <option
                            key={student.id}
                            value={
                              student.id
                            }
                          >
                            {
                              student.fullname
                            }{" "}
                            (
                            {
                              student.student_code
                            }
                            )
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="edit_date"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Incident Date
                    </Label>

                    <Input
                      id="edit_date"
                      type="date"
                      value={
                        editForm.incident_date
                      }
                      onChange={(
                        event
                      ) =>
                        setEditForm(
                          (current) => ({
                            ...current,
                            incident_date:
                              event.target
                                .value,
                          })
                        )
                      }
                      className={
                        inputClassName
                      }
                      required
                    />
                  </div>
                </div>

                {/* TITLE */}
                <div className="space-y-2">
                  <Label
                    htmlFor="edit_title"
                    className="text-xs font-semibold text-zinc-300"
                  >
                    Case Title
                  </Label>

                  <Input
                    id="edit_title"
                    value={
                      editForm.title
                    }
                    onChange={(event) =>
                      setEditForm(
                        (current) => ({
                          ...current,
                          title:
                            event.target
                              .value,
                        })
                      )
                    }
                    className={
                      inputClassName
                    }
                    required
                  />
                </div>

                {/* SEVERITY + ACTION */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="edit_severity"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Severity Level
                    </Label>

                    <select
                      id="edit_severity"
                      value={
                        editForm.severity
                      }
                      onChange={(event) =>
                        setEditForm(
                          (current) => ({
                            ...current,
                            severity:
                              event.target
                                .value as DisciplineSeverity,
                          })
                        )
                      }
                      className={
                        selectClassName
                      }
                    >
                      <option value="low">
                        Low
                      </option>

                      <option value="medium">
                        Medium
                      </option>

                      <option value="high">
                        High
                      </option>

                      <option value="critical">
                        Critical
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="edit_action"
                      className="text-xs font-semibold text-zinc-300"
                    >
                      Action Taken
                    </Label>

                    <select
                      id="edit_action"
                      value={
                        editForm.action
                      }
                      onChange={(event) =>
                        setEditForm(
                          (current) => ({
                            ...current,
                            action:
                              event.target
                                .value as DisciplineAction,
                          })
                        )
                      }
                      className={
                        selectClassName
                      }
                    >
                      <option value="warning">
                        Warning
                      </option>

                      <option value="recorded">
                        Record Only
                      </option>

                      <option value="referred_to_admin">
                        Referred to Admin
                      </option>

                      <option value="class_rejection">
                        Class Rejection
                      </option>
                    </select>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-2">
                  <Label
                    htmlFor="edit_description"
                    className="text-xs font-semibold text-zinc-300"
                  >
                    Description
                  </Label>

                  <textarea
                    id="edit_description"
                    value={
                      editForm.description
                    }
                    onChange={(event) =>
                      setEditForm(
                        (current) => ({
                          ...current,
                          description:
                            event.target
                              .value,
                        })
                      )
                    }
                    rows={4}
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-zinc-700
                      bg-zinc-950
                      px-3
                      py-2.5
                      text-sm
                      text-zinc-100
                      outline-none
                      focus:border-[hsl(var(--brand))]
                      focus:ring-1
                      focus:ring-[hsl(var(--brand))]
                    "
                  />
                </div>

                <DialogFooter className="gap-2 border-t border-zinc-800 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={
                      closeModal
                    }
                    className="
                      border-zinc-700
                      bg-zinc-900
                      text-zinc-300
                      hover:bg-zinc-800
                      hover:text-white
                    "
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    disabled={
                      updateMutation.isPending
                    }
                    className="
                      bg-[hsl(var(--brand))]
                      text-white
                      hover:bg-[hsl(var(--brand))]/90
                    "
                  >
                    {updateMutation.isPending
                      ? "Updating..."
                      : "Update Case"}
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}

          {/* =================================================
              DELETE
          ================================================= */}

          {activeModal === "delete" &&
            deleteTarget && (
              <>
                <DialogHeader>
                  <div
                    className="
                      mb-2
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-red-500/10
                    "
                  >
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </div>

                  <DialogTitle className="text-xl font-semibold text-white">
                    Delete Discipline Case
                  </DialogTitle>

                  <DialogDescription className="pt-1 leading-6 text-zinc-400">
                    Are you sure you want to
                    delete this discipline
                    record?
                  </DialogDescription>
                </DialogHeader>

                <div
                  className="
                    mt-4
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/5
                    p-4
                  "
                >
                  <p className="text-sm font-semibold text-zinc-200">
                    {deleteTarget.title}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Student:{" "}
                    {deleteTarget.student
                      ?.fullname ??
                      `Student #${deleteTarget.student_id}`}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Incident:{" "}
                    {formatDate(
                      deleteTarget.incident_date
                    )}
                  </p>
                </div>

                <p className="mt-3 text-xs leading-5 text-zinc-500">
                  The record will be deleted
                  according to your backend's
                  delete policy and may be
                  restorable using the Restore
                  action.
                </p>

                <DialogFooter className="mt-5 gap-2 border-t border-zinc-800 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={
                      closeModal
                    }
                    disabled={
                      deleteMutation.isPending
                    }
                    className="
                      border-zinc-700
                      bg-zinc-900
                      text-zinc-300
                      hover:bg-zinc-800
                      hover:text-white
                    "
                  >
                    Cancel
                  </Button>

                  <Button
                    type="button"
                    onClick={
                      handleDelete
                    }
                    disabled={
                      deleteMutation.isPending
                    }
                    className="
                      bg-red-600
                      text-white
                      hover:bg-red-700
                    "
                  >
                    <Trash2 className="mr-2 h-4 w-4" />

                    {deleteMutation.isPending
                      ? "Deleting..."
                      : "Delete Record"}
                  </Button>
                </DialogFooter>
              </>
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
