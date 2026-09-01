import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Shield,
  Trash2,
  Users,
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
  useCreateStudent,
  useDeleteStudent,
  useDeletedStudents,
  useRestoreStudent,
  useStudents,
  useUpdateStudent,
  useUpdateStudentRole,
  useUpdateStudentStatus,
} from "../hooks/UseStudent";

import { useStudentStore } from "../Stores/StudentStores";
import type {
  Student,
  StudentRole,
  StudentStatus,
} from "../Stores/StudentStores";

interface StudentForm {
  student_code: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  phone: string;
}

type ActiveModal = "none" | "create" | "edit";
type ListTab = "active" | "deleted";

const roleOptions: Array<{
  value: Exclude<StudentRole, "student">;
  label: string;
}> = [
  { value: "main_monitor", label: "Main Monitor" },
  { value: "assistant_monitor", label: "Assistant Monitor" },
  { value: "discipline_leader", label: "Discipline Leader" },
  { value: "sports_leader", label: "Sports Leader" },
  { value: "education_leader", label: "Education Leader" },
];

const statusOptions: Array<{
  value: StudentStatus;
  label: string;
}> = [
  { value: "active", label: "Active" },
  { value: "suspended", label: "Suspended" },
  { value: "rejected", label: "Rejected" },
  { value: "transferred", label: "Transferred" },
];

const roleLabels: Record<string, string> = {
  main_monitor: "Main Monitor",
  assistant_monitor: "Assistant Monitor",
  discipline_leader: "Discipline Leader",
  sports_leader: "Sports Leader",
  education_leader: "Education Leader",
  student: "Student",
};

const statusStyles: Record<StudentStatus, string> = {
  active:
    "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  suspended:
    "border-amber-500/20 bg-amber-500/10 text-amber-400",
  rejected:
    "border-red-500/20 bg-red-500/10 text-red-400",
  transferred:
    "border-blue-500/20 bg-blue-500/10 text-blue-400",
};

const initialForm = (): StudentForm => ({
  student_code: "",
  first_name: "",
  middle_name: "",
  last_name: "",
  phone: "",
});

export default function StudentPage() {
  const user = useStudentStore((state) => state.user);

  const [page, setPage] = useState(1);
  const limit = 10;

  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<ListTab>("active");

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeModal, setActiveModal] =
    useState<ActiveModal>("none");

  const [createForm, setCreateForm] =
    useState<StudentForm>(initialForm());

  const [editForm, setEditForm] =
    useState<StudentForm>(initialForm());

  const canManage = user?.role === "main_monitor";

  const studentsQuery = useStudents(page, limit);
  const deletedQuery = useDeletedStudents(canManage);

  const createMutation = useCreateStudent();
  const updateMutation = useUpdateStudent();
  const deleteMutation = useDeleteStudent();
  const restoreMutation = useRestoreStudent();
  const statusMutation = useUpdateStudentStatus();
  const roleMutation = useUpdateStudentRole();

  const items = useMemo(() => {
    const source =
      tab === "deleted"
        ? deletedQuery.data?.data ?? []
        : studentsQuery.data?.data ?? [];

    const query = search.trim().toLowerCase();

    if (!query) return source;

    return source.filter((item) => {
      const name = (
        item.fullname ||
        `${item.first_name} ${item.last_name}`
      ).toLowerCase();

      return (
        name.includes(query) ||
        item.student_code.toLowerCase().includes(query) ||
        item.phone.toLowerCase().includes(query) ||
        item.role.toLowerCase().includes(query)
      );
    });
  }, [
    deletedQuery.data?.data,
    search,
    studentsQuery.data?.data,
    tab,
  ]);

  const pagination = studentsQuery.data?.pagination;

  const isLoading =
    tab === "deleted"
      ? deletedQuery.isLoading
      : studentsQuery.isLoading;

  const closeModal = () => {
    setActiveModal("none");
    setSelectedId(null);
  };

  const openCreate = () => {
    setCreateForm(initialForm());
    setActiveModal("create");
  };

  const openEdit = (item: Student) => {
    setSelectedId(item.id);

    setEditForm({
      student_code: item.student_code,
      first_name: item.first_name,
      middle_name: item.middle_name,
      last_name: item.last_name,
      phone: item.phone,
    });

    setActiveModal("edit");
  };

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.promise(
      createMutation.mutateAsync(createForm),
      {
        loading: "Creating student...",
        success: () => {
          closeModal();
          setCreateForm(initialForm());
          return "Student created successfully";
        },
        error: (error: Error) => error.message,
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
        loading: "Updating student...",
        success: () => {
          closeModal();
          return "Student updated successfully";
        },
        error: (error: Error) => error.message,
      }
    );
  };

  // Delete student directly - no confirmation card
  const handleDelete = (id: number) => {
    toast.promise(
      deleteMutation.mutateAsync(id),
      {
        loading: "Deleting student...",
        success: "Student deleted successfully",
        error: (error: Error) => error.message,
      }
    );
  };

  const handleRestore = (id: number) => {
    toast.promise(
      restoreMutation.mutateAsync(id),
      {
        loading: "Restoring student...",
        success: "Student restored successfully",
        error: (error: Error) => error.message,
      }
    );
  };

  const handleStatusChange = (
    id: number,
    status: StudentStatus
  ) => {
    toast.promise(
      statusMutation.mutateAsync({
        id,
        payload: { status },
      }),
      {
        loading: "Updating status...",
        success: "Status updated",
        error: (error: Error) => error.message,
      }
    );
  };

  const handleRoleChange = (
    id: number,
    role: StudentRole
  ) => {
    if (role === "student") {
      toast.error(
        "Use a leadership role to promote a student"
      );
      return;
    }

    toast.promise(
      roleMutation.mutateAsync({
        id,
        payload: { role },
      }),
      {
        loading: "Updating role...",
        success: "Role updated",
        error: (error: Error) => error.message,
      }
    );
  };

  const formFields = (
    form: StudentForm,
    setForm: (
      updater: (
        current: StudentForm
      ) => StudentForm
    ) => void,
    prefix: string
  ) => (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${prefix}_student_code`}>
            Student code
          </Label>

          <Input
            id={`${prefix}_student_code`}
            value={form.student_code}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                student_code: e.target.value,
              }))
            }
            className="border-zinc-800 bg-zinc-950"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${prefix}_phone`}>
            Phone
          </Label>

          <Input
            id={`${prefix}_phone`}
            value={form.phone}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                phone: e.target.value,
              }))
            }
            className="border-zinc-800 bg-zinc-950"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor={`${prefix}_first_name`}>
            First name
          </Label>

          <Input
            id={`${prefix}_first_name`}
            value={form.first_name}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                first_name: e.target.value,
              }))
            }
            className="border-zinc-800 bg-zinc-950"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${prefix}_middle_name`}>
            Middle name
          </Label>

          <Input
            id={`${prefix}_middle_name`}
            value={form.middle_name}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                middle_name: e.target.value,
              }))
            }
            className="border-zinc-800 bg-zinc-950"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${prefix}_last_name`}>
            Last name
          </Label>

          <Input
            id={`${prefix}_last_name`}
            value={form.last_name}
            onChange={(e) =>
              setForm((current) => ({
                ...current,
                last_name: e.target.value,
              }))
            }
            className="border-zinc-800 bg-zinc-950"
            required
          />
        </div>
      </div>
    </>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white">
            <Users className="h-7 w-7 text-[hsl(var(--brand))]" />
            Students
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Register students, update profiles, and manage roles.
          </p>
        </div>

        {canManage && (
          <Button
            onClick={openCreate}
            className="rounded-xl bg-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))]/90"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        )}
      </div>

      {/* Search + Tabs */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

          <Input
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            className="rounded-xl border-zinc-800 bg-zinc-900/60 pl-10 text-zinc-200"
            placeholder="Search by name, code, phone, or role..."
          />
        </div>

        <div className="flex rounded-xl border border-zinc-800 bg-zinc-900/60 p-1">
          <Button
            type="button"
            variant={
              tab === "active" ? "default" : "ghost"
            }
            size="sm"
            onClick={() => setTab("active")}
            className={
              tab === "active"
                ? "bg-[hsl(var(--brand))] text-white"
                : "text-zinc-400"
            }
          >
            Active
          </Button>

          {canManage && (
            <Button
              type="button"
              variant={
                tab === "deleted" ? "default" : "ghost"
              }
              size="sm"
              onClick={() => setTab("deleted")}
              className={
                tab === "deleted"
                  ? "bg-[hsl(var(--brand))] text-white"
                  : "text-zinc-400"
              }
            >
              Recycle bin
            </Button>
          )}
        </div>
      </div>

      {/* Students Card */}
      <Card className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
        <CardHeader className="border-b border-zinc-800/60 pb-4">
          <CardTitle className="flex items-center gap-2 text-base text-white">
            <Shield className="h-4 w-4 text-[hsl(var(--brand))]" />

            {tab === "deleted"
              ? "Deleted students"
              : "Student roster"}{" "}
            ({items.length})
          </CardTitle>

          <CardDescription className="text-xs text-zinc-400">
            {tab === "deleted"
              ? "Restore accounts from the recycle bin."
              : "Active student records."}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-zinc-950/60">
                <TableRow className="border-zinc-800 hover:bg-transparent">
                  <TableHead className="text-xs text-zinc-400">
                    Name
                  </TableHead>

                  <TableHead className="text-xs text-zinc-400">
                    Code
                  </TableHead>

                  <TableHead className="text-xs text-zinc-400">
                    Phone
                  </TableHead>

                  <TableHead className="text-xs text-zinc-400">
                    Role
                  </TableHead>

                  <TableHead className="text-xs text-zinc-400">
                    Status
                  </TableHead>

                  <TableHead className="text-right text-xs text-zinc-400">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {isLoading ? (
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
                ) : items.length === 0 ? (
                  <TableRow className="border-zinc-800/40">
                    <TableCell
                      colSpan={6}
                      className="py-12 text-center text-sm text-zinc-500"
                    >
                      No students found.
                    </TableCell>
                  </TableRow>
                ) : (
                  items.map((item) => (
                    <TableRow
                      key={item.id}
                      className="border-zinc-800/40"
                    >
                      <TableCell className="text-sm font-medium text-zinc-200">
                        {item.fullname ||
                          `${item.first_name} ${item.last_name}`}
                      </TableCell>

                      <TableCell className="text-xs text-zinc-400">
                        {item.student_code}
                      </TableCell>

                      <TableCell className="text-xs text-zinc-400">
                        {item.phone}
                      </TableCell>

                      <TableCell>
                        {canManage &&
                        tab === "active" ? (
                          <select
                            value={item.role}
                            onChange={(e) =>
                              handleRoleChange(
                                item.id,
                                e.target
                                  .value as StudentRole
                              )
                            }
                            className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-1 text-xs text-zinc-200"
                          >
                            <option value="student">
                              Student
                            </option>

                            {roleOptions.map(
                              (option) => (
                                <option
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </option>
                              )
                            )}
                          </select>
                        ) : (
                          <Badge variant="outline">
                            {roleLabels[item.role] ??
                              item.role}
                          </Badge>
                        )}
                      </TableCell>

                      <TableCell>
                        {canManage &&
                        tab === "active" ? (
                          <select
                            value={item.status}
                            onChange={(e) =>
                              handleStatusChange(
                                item.id,
                                e.target
                                  .value as StudentStatus
                              )
                            }
                            className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-1 text-xs text-zinc-200"
                          >
                            {statusOptions.map(
                              (option) => (
                                <option
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </option>
                              )
                            )}
                          </select>
                        ) : (
                          <Badge
                            className={
                              statusStyles[item.status]
                            }
                          >
                            {item.status}
                          </Badge>
                        )}
                      </TableCell>

                      <TableCell className="text-right">
                        {canManage &&
                          tab === "active" && (
                            <div className="flex items-center justify-end gap-1.5">
                              {/* Edit */}
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-zinc-400"
                                onClick={() =>
                                  openEdit(item)
                                }
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>

                              {/* Delete - direct, no modal */}
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-zinc-400 hover:text-red-400"
                                onClick={() =>
                                  handleDelete(item.id)
                                }
                                disabled={
                                  deleteMutation.isPending
                                }
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          )}

                        {canManage &&
                          tab === "deleted" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 text-emerald-400"
                              onClick={() =>
                                handleRestore(item.id)
                              }
                            >
                              <RotateCcw className="mr-1 h-4 w-4" />
                              Restore
                            </Button>
                          )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {tab === "active" && (
            <div className="flex items-center justify-between border-t border-zinc-800/60 px-6 py-4 text-xs text-zinc-400">
              <div>
                {pagination
                  ? `Page ${pagination.page} of ${
                      pagination.totalPages || 1
                    } · ${pagination.total} students`
                  : `Page ${page}`}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setPage((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  disabled={
                    page === 1 ||
                    Boolean(
                      pagination &&
                        !pagination.hasPreviousPage
                    )
                  }
                  className="h-8 border-zinc-800"
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
                  disabled={Boolean(
                    pagination
                      ? !pagination.hasNextPage
                      : (studentsQuery.data?.data?.length ??
                          0) < limit
                  )}
                  className="h-8 border-zinc-800"
                >
                  Next
                  <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create Student */}
      <Dialog
        open={activeModal === "create"}
        onOpenChange={(open) =>
          !open && closeModal()
        }
      >
        <DialogContent className="border-zinc-800 bg-zinc-900 text-zinc-100 sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              Create student
            </DialogTitle>

            <DialogDescription>
              New accounts start as active students.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleCreate}
            className="space-y-4"
          >
            {formFields(
              createForm,
              setCreateForm,
              "create"
            )}

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={closeModal}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={
                  createMutation.isPending
                }
                className="bg-[hsl(var(--brand))]"
              >
                {createMutation.isPending
                  ? "Creating..."
                  : "Create student"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Student */}
      <Dialog
        open={activeModal === "edit"}
        onOpenChange={(open) =>
          !open && closeModal()
        }
      >
        <DialogContent className="border-zinc-800 bg-zinc-900 text-zinc-100 sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              Edit student
            </DialogTitle>

            <DialogDescription>
              Update the selected student profile.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleUpdate}
            className="space-y-4"
          >
            {formFields(
              editForm,
              setEditForm,
              "edit"
            )}

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={closeModal}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={
                  updateMutation.isPending
                }
                className="bg-[hsl(var(--brand))]"
              >
                {updateMutation.isPending
                  ? "Updating..."
                  : "Update student"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
