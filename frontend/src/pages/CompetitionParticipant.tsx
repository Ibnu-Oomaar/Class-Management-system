import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pencil,
  Plus,
  RotateCcw,
  Search,
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
  useCompetitionParticipants,
  useCreateCompetitionParticipant,
  useDeleteCompetitionParticipant,
  useRestoreCompetitionParticipant,
  useUpdateCompetitionParticipant,
} from "../hooks/UseCompetitionParticipant";

import { useCompetitions } from "../hooks/UseCompetition";
import { useStudents } from "../hooks/UseStudent";
import { useStudentStore } from "../Stores/StudentStores";

import type { CompetitionParticipant } from "../api/CompetitionParticipant.api";

interface ParticipantForm {
  competition_id: number;
  student_id: number;
  position: string;
  points: number;
}

type ActiveModal = "none" | "create" | "edit";

const initialForm = (): ParticipantForm => ({
  competition_id: 0,
  student_id: 0,
  position: "",
  points: 10,
});

export default function CompetitionParticipantPage() {
  const user = useStudentStore((state) => state.user);

  const [page, setPage] = useState(1);
  const limit = 10;

  const [search, setSearch] = useState("");

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [activeModal, setActiveModal] =
    useState<ActiveModal>("none");

  const [createForm, setCreateForm] =
    useState<ParticipantForm>(initialForm());

  const [editForm, setEditForm] =
    useState<ParticipantForm>(initialForm());

  const canManage =
    user?.role === "main_monitor" ||
    user?.role === "sports_leader";

  // Queries
  const query = useCompetitionParticipants(page, limit);

  const competitionsQuery = useCompetitions(1, 100);

  const studentsQuery = useStudents(1, 100);

  // Lists
  const competitionsList = useMemo(
    () => competitionsQuery.data?.data ?? [],
    [competitionsQuery.data]
  );

  const studentsList = useMemo(
    () => studentsQuery.data?.data ?? [],
    [studentsQuery.data]
  );

  // Mutations
  const createMutation =
    useCreateCompetitionParticipant();

  const updateMutation =
    useUpdateCompetitionParticipant();

  const deleteMutation =
    useDeleteCompetitionParticipant();

  const restoreMutation =
    useRestoreCompetitionParticipant();

  // Data
  const items = useMemo(
    () => query.data?.data ?? [],
    [query.data]
  );

  // Search
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return items;

    return items.filter((item) => {
      const studentName =
        item.student?.fullname?.toLowerCase() ?? "";

      const competitionName =
        item.competition?.name?.toLowerCase() ?? "";

      const position =
        item.position?.toLowerCase() ?? "";

      return (
        studentName.includes(q) ||
        competitionName.includes(q) ||
        position.includes(q)
      );
    });
  }, [items, search]);

  // Close modal
  const closeModal = () => {
    setActiveModal("none");
    setSelectedId(null);
  };

  // Open create modal
  const openCreate = () => {
    setSelectedId(null);
    setCreateForm(initialForm());
    setActiveModal("create");
  };

  // Open edit modal
  const openEdit = (
    item: CompetitionParticipant
  ) => {
    setSelectedId(item.id);

    setEditForm({
      competition_id: item.competition_id,
      student_id: item.student_id,
      position: item.position ?? "",
      points: item.points,
    });

    setActiveModal("edit");
  };

  // Create participant
  const handleCreate = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      createForm.competition_id <= 0 ||
      createForm.student_id <= 0
    ) {
      toast.error(
        "Please select a valid Competition and Student"
      );
      return;
    }

    toast.promise(
      createMutation.mutateAsync(createForm),
      {
        loading: "Registering participant...",

        success: () => {
          closeModal();
          setCreateForm(initialForm());

          return "Participant registered successfully";
        },

        error: (error: Error) =>
          `Failed to register participant: ${error.message}`,
      }
    );
  };

  // Update participant
  const handleUpdate = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!selectedId) return;

    toast.promise(
      updateMutation.mutateAsync({
        id: selectedId,
        payload: editForm,
      }),
      {
        loading: "Updating participant record...",

        success: () => {
          closeModal();

          return "Participant record updated successfully";
        },

        error: (error: Error) =>
          `Failed to update participant record: ${error.message}`,
      }
    );
  };

  // Delete participant directly
  const handleDelete = (id: number) => {
    toast.promise(
      deleteMutation.mutateAsync(id),
      {
        loading: "Deleting participant record...",

        success:
          "Participant record deleted successfully",

        error: (error: Error) =>
          `Failed to delete participant record: ${error.message}`,
      }
    );
  };

  // Restore participant
  const handleRestore = (id: number) => {
    toast.promise(
      restoreMutation.mutateAsync(id),
      {
        loading: "Restoring participant record...",

        success:
          "Participant record restored successfully",

        error: (error: Error) =>
          `Failed to restore participant record: ${error.message}`,
      }
    );
  };

  return (
    <div className="space-y-6">

      {/* =========================
          HEADER
      ========================== */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white">
            <Users className="h-7 w-7 text-emerald-400" />

            Competition Participants
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Track student registrations, standings,
            placements, and performance points.
          </p>
        </div>

        {canManage && (
          <Dialog
            open={activeModal === "create"}
            onOpenChange={(open) => {
              if (!open) {
                closeModal();
              }
            }}
          >
            <Button
              onClick={openCreate}
              className="rounded-xl bg-[hsl(var(--brand))] px-5 text-white shadow-lg shadow-[hsl(var(--brand))]/20 hover:bg-[hsl(var(--brand))]/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              Register Participant
            </Button>

            <DialogContent className="border-zinc-800 bg-zinc-900 text-zinc-100 sm:max-w-lg">

              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white">
                  Register Participant
                </DialogTitle>

                <DialogDescription className="text-zinc-400">
                  Add a student to a competition event.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleCreate}
                className="mt-2 space-y-4"
              >

                {/* Competition + Student */}
                <div className="grid grid-cols-2 gap-4">

                  {/* Competition */}
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-zinc-300">
                      Select Competition
                    </Label>

                    <select
                      value={
                        createForm.competition_id || ""
                      }
                      onChange={(e) =>
                        setCreateForm((current) => ({
                          ...current,
                          competition_id:
                            Number(e.target.value),
                        }))
                      }
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--brand))]"
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select competition...
                      </option>

                      {competitionsList.map(
                        (competition) => (
                          <option
                            key={competition.id}
                            value={competition.id}
                            className="bg-zinc-900"
                          >
                            {competition.name} (
                            {competition.type})
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  {/* Student */}
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
                          student_id:
                            Number(e.target.value),
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
                          className="bg-zinc-900"
                        >
                          {student.fullname} (
                          {student.student_code})
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Position + Points */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-zinc-300">
                      Standing / Position
                    </Label>

                    <Input
                      value={createForm.position}
                      onChange={(e) =>
                        setCreateForm((current) => ({
                          ...current,
                          position: e.target.value,
                        }))
                      }
                      placeholder="e.g. 1st Place / Finalist"
                      className="border-zinc-800 bg-zinc-950"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-zinc-300">
                      Points Earned
                    </Label>

                    <Input
                      type="number"
                      value={createForm.points}
                      onChange={(e) =>
                        setCreateForm((current) => ({
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

                {/* Footer */}
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
                      ? "Registering..."
                      : "Save Participant"}
                  </Button>

                </DialogFooter>

              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* =========================
          SEARCH
      ========================== */}
      <div className="relative flex-1">

        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

        <Input
          value={search}
          onChange={(
            e: ChangeEvent<HTMLInputElement>
          ) => setSearch(e.target.value)}
          className="rounded-xl border-zinc-800 bg-zinc-900/60 pl-10 text-zinc-200 placeholder:text-zinc-500 focus:border-[hsl(var(--brand))]"
          placeholder="Search participants by student name, event, or position..."
        />

      </div>

      {/* =========================
          TABLE CARD
      ========================== */}
      <Card className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-xl backdrop-blur-xl">

        <CardHeader className="border-b border-zinc-800/60 pb-4">

          <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">

            <Users className="h-4 w-4 text-[hsl(var(--brand))]" />

            Registered Participants (
            {filtered.length}
            )

          </CardTitle>

          <CardDescription className="text-xs text-zinc-400">
            Student placements and event participation history.
          </CardDescription>

        </CardHeader>

        <CardContent className="p-0">

          <div className="overflow-x-auto">

            <Table>

              <TableHeader className="bg-zinc-950/60">

                <TableRow className="border-zinc-800 hover:bg-transparent">

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Student
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Competition
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Position / Standing
                  </TableHead>

                  <TableHead className="text-xs font-semibold text-zinc-400">
                    Points
                  </TableHead>

                  <TableHead className="text-right text-xs font-semibold text-zinc-400">
                    Actions
                  </TableHead>

                </TableRow>

              </TableHeader>

              <TableBody>

                {/* Loading */}
                {query.isLoading ? (
                  Array.from({ length: 4 }).map(
                    (_, index) => (
                      <TableRow
                        key={index}
                        className="border-zinc-800/40"
                      >
                        <TableCell colSpan={5}>
                          <Skeleton className="h-10 w-full bg-zinc-800/40" />
                        </TableCell>
                      </TableRow>
                    )
                  )
                ) : filtered.length === 0 ? (

                  /* Empty */
                  <TableRow className="border-zinc-800/40">

                    <TableCell
                      colSpan={5}
                      className="py-12 text-center text-sm text-zinc-500"
                    >
                      No competition participants found.
                    </TableCell>

                  </TableRow>

                ) : (

                  /* Data */
                  filtered.map((item) => (

                    <TableRow
                      key={item.id}
                      className="border-zinc-800/40 transition-colors hover:bg-zinc-800/30"
                    >

                      {/* Student */}
                      <TableCell className="text-sm font-medium text-zinc-200">
                        {item.student?.fullname ??
                          `Student #${item.student_id}`}
                      </TableCell>

                      {/* Competition */}
                      <TableCell className="text-sm font-medium text-zinc-300">
                        {item.competition?.name ??
                          `Competition #${item.competition_id}`}
                      </TableCell>

                      {/* Position */}
                      <TableCell>

                        <Badge className="rounded-full border-zinc-700 bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
                          {item.position ||
                            "Participant"}
                        </Badge>

                      </TableCell>

                      {/* Points */}
                      <TableCell className="text-sm font-semibold text-[hsl(var(--brand))]">
                        +{item.points} pts
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="text-right">

                        {canManage && (

                          <div className="flex items-center justify-end gap-1.5">

                            {/* Edit */}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                openEdit(item)
                              }
                              className="h-8 w-8 rounded-lg p-0 text-zinc-400 transition-colors hover:bg-amber-400/10 hover:text-amber-400"
                              title="Edit Participant Record"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>

                            {/* Delete - DIRECT */}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleDelete(item.id)
                              }
                              disabled={
                                deleteMutation.isPending
                              }
                              className="h-8 w-8 rounded-lg p-0 text-zinc-400 transition-colors hover:bg-red-400/10 hover:text-red-400"
                              title="Delete Participant Record"
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
                              disabled={
                                restoreMutation.isPending
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

                  ))
                )}

              </TableBody>

            </Table>

          </div>

          {/* =========================
              PAGINATION
          ========================== */}
          <div className="flex items-center justify-between border-t border-zinc-800/60 px-6 py-4 text-xs text-zinc-400">

            <div>
              Page {page}
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

      {/* =========================
          EDIT PARTICIPANT
      ========================== */}
      <Dialog
        open={activeModal === "edit"}
        onOpenChange={(open) => {
          if (!open) {
            closeModal();
          }
        }}
      >

        <DialogContent className="border-zinc-800 bg-zinc-900 text-zinc-100 sm:max-w-lg">

          <DialogHeader>

            <DialogTitle className="text-xl font-semibold text-white">
              Edit Participant
            </DialogTitle>

            <DialogDescription className="text-zinc-400">
              Update placement and points.
            </DialogDescription>

          </DialogHeader>

          <form
            onSubmit={handleUpdate}
            className="mt-2 space-y-4"
          >

            {/* Competition + Student */}
            <div className="grid grid-cols-2 gap-4">

              {/* Competition */}
              <div className="space-y-2">

                <Label className="text-xs font-semibold text-zinc-300">
                  Select Competition
                </Label>

                <select
                  value={
                    editForm.competition_id || ""
                  }
                  onChange={(e) =>
                    setEditForm((current) => ({
                      ...current,
                      competition_id:
                        Number(e.target.value),
                    }))
                  }
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--brand))]"
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    Select competition...
                  </option>

                  {competitionsList.map(
                    (competition) => (
                      <option
                        key={competition.id}
                        value={competition.id}
                        className="bg-zinc-900"
                      >
                        {competition.name} (
                        {competition.type})
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* Student */}
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
                      student_id:
                        Number(e.target.value),
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
                      className="bg-zinc-900"
                    >
                      {student.fullname} (
                      {student.student_code})
                    </option>
                  ))}

                </select>

              </div>

            </div>

            {/* Position + Points */}
            <div className="grid grid-cols-2 gap-4">

              <div className="space-y-2">

                <Label className="text-xs font-semibold text-zinc-300">
                  Standing / Position
                </Label>

                <Input
                  value={editForm.position}
                  onChange={(e) =>
                    setEditForm((current) => ({
                      ...current,
                      position: e.target.value,
                    }))
                  }
                  className="border-zinc-800 bg-zinc-950"
                />

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

            {/* Footer */}
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

    </div>
  );
}
