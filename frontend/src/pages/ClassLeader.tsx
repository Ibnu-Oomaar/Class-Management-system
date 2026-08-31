import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ChevronLeft,
  ChevronRight,
  Crown,
  GraduationCap,
  Plus,
  RotateCcw,
  Search,
  Shield,
  ShieldAlert,
  Trash2,
  UserCheck,
  UserCog,
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
import { Label } from "../components/ui/label";
import { Skeleton } from "../components/ui/skeleton";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
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
  DialogTrigger,
} from "../components/ui/dialog";

import {
  useClassLeaders,
  useCreateClassLeader,
  useDeleteClassLeader,
  useRestoreClassLeader,
} from "../hooks/UseClassLeader";
import { useStudents } from "../hooks/UseStudent";
import { useStudentStore } from "../Stores/StudentStores";

interface ClassLeaderForm {
  student_id: number;
}

const roleBadgeConfig: Record<
  string,
  { label: string; color: string; icon: LucideIcon }
> = {
  main_monitor: {
    label: "Main Monitor",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    icon: Crown,
  },
  assistant_monitor: {
    label: "Assistant Monitor",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: Shield,
  },
  secretary: {
    label: "Secretary",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: UserCog,
  },
  discipline_leader: {
    label: "Discipline Leader",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: ShieldAlert,
  },
  sports_leader: {
    label: "Sports Leader",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: UserCheck,
  },
  education_leader: {
    label: "Education Leader",
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    icon: GraduationCap,
  },
  student: {
    label: "Class Leader",
    color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
    icon: Shield,
  },
};

export default function ClassLeaderPage() {
  const user = useStudentStore((state) => state.user);

  const [page, setPage] = useState(1);
  const limit = 10;

  const [search, setSearch] = useState("");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const [form, setForm] = useState<ClassLeaderForm>({
    student_id: 0,
  });

  const query = useClassLeaders(page, limit);
  const studentsQuery = useStudents(1, 100);

  const studentsList = useMemo(
    () => studentsQuery.data?.data ?? [],
    [studentsQuery.data]
  );

  const createMutation = useCreateClassLeader();
  const deleteMutation = useDeleteClassLeader();
  const restoreMutation = useRestoreClassLeader();

  const items = useMemo(
    () => query.data?.data ?? [],
    [query.data]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return items;

    return items.filter((item) =>
      item.student?.fullname?.toLowerCase().includes(q)
    );
  }, [items, search]);

  const canManage =
    user?.role === "main_monitor" ||
    user?.role === "assistant_monitor";

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.student_id <= 0) {
      toast.error("Please select a student");
      return;
    }

    toast.promise(createMutation.mutateAsync(form), {
      loading: "Creating class leader assignment...",
      success: () => {
        setIsCreateOpen(false);
        setForm({ student_id: 0 });

        return "Class leader record created successfully";
      },
      error: (error: Error) =>
        `Failed to create class leader: ${error.message}`,
    });
  };

  const handleDelete = (id: number) => {
    toast.promise(deleteMutation.mutateAsync(id), {
      loading: "Revoking class leader assignment...",
      success: () => "Class leader assignment revoked successfully",
      error: (error: Error) =>
        `Failed to revoke class leader: ${error.message}`,
    });
  };

  const handleRestore = (id: number) => {
    toast.promise(restoreMutation.mutateAsync(id), {
      loading: "Restoring class leader assignment...",
      success: () => "Class leader record restored successfully",
      error: (error: Error) =>
        `Failed to restore class leader: ${error.message}`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <Crown className="h-7 w-7 text-amber-400" />
            Class Leadership Board
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Manage student council, monitors, discipline officers, and activity
            leaders.
          </p>
        </div>

        {canManage && (
          <Dialog
            open={isCreateOpen}
            onOpenChange={setIsCreateOpen}
          >
            <DialogTrigger asChild>
              <Button className="bg-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))]/90 shadow-lg shadow-[hsl(var(--brand))]/20 rounded-xl px-5">
                <Plus className="mr-2 h-4 w-4" />
                Assign Class Leader
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800 text-zinc-100">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white">
                  Assign Class Leader
                </DialogTitle>

                <DialogDescription className="text-zinc-400">
                  Select a student to assign a leadership role.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleCreate}
                className="space-y-4 mt-2"
              >
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-zinc-300">
                    Select Student
                  </Label>

                  <select
                    value={form.student_id || ""}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setForm({
                        student_id: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--brand))]"
                    required
                  >
                    <option value="" disabled>
                      Select student...
                    </option>

                    {studentsList.map((stu) => (
                      <option
                        key={stu.id}
                        value={stu.id}
                        className="bg-zinc-900"
                      >
                        {stu.fullname} ({stu.student_code})
                      </option>
                    ))}
                  </select>
                </div>

                <DialogFooter className="gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsCreateOpen(false)}
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
                      ? "Assigning..."
                      : "Assign Leader"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Search Bar */}
      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

        <Input
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="pl-10 bg-zinc-900/60 border-zinc-800 text-zinc-200 placeholder:text-zinc-500 focus:border-[hsl(var(--brand))] rounded-xl"
          placeholder="Search leaders by student name..."
        />
      </div>

      {/* Leader Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.slice(0, 3).map((item) => {
          const roleKey = item.student?.role ?? "student";
          const roleMeta =
            roleBadgeConfig[roleKey] ||
            roleBadgeConfig.student;

          const RoleIcon = roleMeta.icon;

          return (
            <Card
              key={item.id}
              className="border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-5 rounded-2xl relative overflow-hidden group hover:border-[hsl(var(--brand))]/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-zinc-700">
                  <AvatarFallback className="bg-[hsl(var(--brand))]/15 text-[hsl(var(--brand))] font-bold text-base">
                    {item.student?.first_name?.[0]?.toUpperCase() ?? "L"}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white truncate text-base">
                    {item.student?.fullname ??
                      `Student #${item.student_id}`}
                  </h3>

                  <Badge
                    className={`${roleMeta.color} border text-xs mt-1 inline-flex items-center gap-1`}
                  >
                    <RoleIcon className="h-3 w-3" />
                    {roleMeta.label}
                  </Badge>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span>
                  Assigned:{" "}
                  {item.created_at
                    ? new Date(
                        item.created_at
                      ).toLocaleDateString()
                    : "Active"}
                </span>

                <span className="text-[11px] text-zinc-500 font-mono">
                  STU#
                  {item.student?.student_code ??
                    item.student_id}
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Main Table Card */}
      <Card className="border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
        <CardHeader className="border-b border-zinc-800/60 pb-4">
          <CardTitle className="text-base font-semibold text-white flex items-center gap-2">
            <Shield className="h-4 w-4 text-[hsl(var(--brand))]" />
            Leadership Assignments ({filtered.length})
          </CardTitle>

          <CardDescription className="text-xs text-zinc-400">
            Active class leadership roles and assignment history.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-zinc-950/60">
                <TableRow className="border-zinc-800 hover:bg-transparent">
                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Leader Name
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Student Code
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Role
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Assigned Date
                  </TableHead>

                  <TableHead className="text-right text-xs font-semibold text-zinc-400">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {query.isLoading ? (
                  Array.from({ length: 3 }).map((_, index) => (
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
                      className="py-12 text-center text-zinc-500 text-sm"
                    >
                      No leadership assignments found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((item) => {
                    const roleKey =
                      item.student?.role ?? "student";

                    const roleMeta =
                      roleBadgeConfig[roleKey] ||
                      roleBadgeConfig.student;

                    const RoleIcon = roleMeta.icon;

                    return (
                      <TableRow
                        key={item.id}
                        className="border-zinc-800/40 hover:bg-zinc-800/30 transition-colors"
                      >
                        <TableCell className="font-medium text-zinc-200 text-sm">
                          <div className="flex items-center gap-2.5">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-zinc-800 text-zinc-200 text-xs font-semibold">
                                {item.student?.first_name?.[0]?.toUpperCase() ??
                                  "L"}
                              </AvatarFallback>
                            </Avatar>

                            <span>
                              {item.student?.fullname ??
                                `Student #${item.student_id}`}
                            </span>
                          </div>
                        </TableCell>

                        <TableCell className="text-xs text-zinc-400">
                          {item.student?.student_code ?? "N/A"}
                        </TableCell>

                        <TableCell>
                          <Badge
                            className={`${roleMeta.color} border text-[11px] px-2.5 py-0.5 rounded-full font-medium inline-flex items-center gap-1`}
                          >
                            <RoleIcon className="h-3 w-3" />
                            {roleMeta.label}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-xs text-zinc-400">
                          {item.created_at
                            ? new Date(
                                item.created_at
                              ).toLocaleDateString()
                            : "N/A"}
                        </TableCell>

                        <TableCell className="text-right">
                          {canManage && (
                            <div className="flex items-center justify-end gap-1.5">
                              {/* Revoke */}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  handleDelete(item.id)
                                }
                                disabled={deleteMutation.isPending}
                                className="h-8 w-8 p-0 text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                title="Revoke Leadership Role"
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
                                className="h-8 w-8 p-0 text-zinc-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors"
                                title="Restore Assignment"
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
          <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800/60 text-xs text-zinc-400">
            <div>Page {page}</div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setPage((p) => Math.max(1, p - 1))
                }
                disabled={page === 1}
                className="h-8 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
              >
                <ChevronLeft className="h-3.5 w-3.5 mr-1" />
                Prev
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => p + 1)}
                disabled={items.length < limit}
                className="h-8 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
              >
                Next
                <ChevronRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
