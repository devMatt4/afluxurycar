"use client";

import { Loader2, Trash2, TriangleAlert } from "lucide-react";
import { useTransition } from "react";
import { deleteVehicleAction } from "actions/vehicle.action";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "components/ui/alert-dialog";

type DeleteVehicleButtonProps = {
  vehicleId: string;
  vehicleTitle: string;
};

export default function DeleteVehicleButton({
  vehicleId,
  vehicleTitle,
}: DeleteVehicleButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      await deleteVehicleAction(vehicleId);
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          aria-label="Elimina veicolo"
        >
          <Trash2 size={17} />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-lg rounded-[2rem] border border-zinc-200 bg-white p-0 shadow-2xl">
        <div className="p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-600">
            <TriangleAlert size={30} />
          </div>

          <AlertDialogHeader className="mt-6 space-y-3 text-center">
            <AlertDialogTitle className="text-2xl font-black tracking-tight text-zinc-950">
              Eliminare questo veicolo?
            </AlertDialogTitle>

            <AlertDialogDescription className="mx-auto max-w-sm text-sm leading-6 text-zinc-500">
              Stai per eliminare definitivamente{" "}
              <span className="font-bold text-zinc-950">{vehicleTitle}</span>.
              Questa operazione non può essere annullata.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>

        <AlertDialogFooter className="flex gap-3 border-t border-zinc-200 bg-zinc-50 p-5 sm:justify-center">
          <AlertDialogCancel className="h-11 rounded-2xl border-zinc-300 px-6 font-bold">
            Annulla
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={isPending}
            className="h-11 rounded-2xl bg-red-600 px-6 font-bold text-white hover:bg-red-700"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin" size={17} />
                Eliminazione...
              </>
            ) : (
              <>
                <Trash2 size={17} />
                Elimina veicolo
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
