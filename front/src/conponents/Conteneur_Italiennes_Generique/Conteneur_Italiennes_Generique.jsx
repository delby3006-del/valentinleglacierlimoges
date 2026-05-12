import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { fetchAdmin } from "../../utils/fetchAdmin";
import "./Conteneur_Italiennes_Generique.scss";

export default function Conteneur_Italiennes_Generique({
  afficherCheckbox = false,
  onAfficherBlocChange,
  version = "normal",
}) {
  const [machines, setMachines] = useState([]);
  const [chargementTermine, setChargementTermine] = useState(false);

  const regrouperParDeux = (liste) => {
    const result = [];

    for (let i = 0; i < liste.length; i += 2) {
      result.push(liste.slice(i, i + 2));
    }

    return result;
  };

  const chargerItaliennes = async () => {
    try {
      setChargementTermine(false);

      const url = afficherCheckbox
        ? `${API_URL}/api/italiennes`
        : `${API_URL}/api/italiennes?actif=1`;

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Erreur serveur");
      }

      const data = await res.json();
      setMachines(data);
    } catch (error) {
      console.error("Erreur chargement italiennes :", error);
    } finally {
      setChargementTermine(true);
    }
  };

  useEffect(() => {
    chargerItaliennes();
  }, [afficherCheckbox]);

  const changerActifMachine = async (idMachine, nouvelEtat) => {
    try {
      const res = await fetchAdmin(
        `${API_URL}/api/italiennes/machines/${idMachine}`,
        {
          method: "PUT",
          body: JSON.stringify({
            actif: nouvelEtat ? 1 : 0,
          }),
        },
      );

      if (!res.ok) {
        throw new Error("Erreur modification machine italienne");
      }

      setMachines((anciennesMachines) =>
        anciennesMachines.map((machine) =>
          machine.id_machine === idMachine
            ? { ...machine, actif: nouvelEtat ? 1 : 0 }
            : machine,
        ),
      );
    } catch (error) {
      console.error("Erreur changement machine italienne :", error);
    }
  };

  const changerActif = async (idItalienne, nouvelEtat) => {
    try {
      const res = await fetchAdmin(`${API_URL}/api/italiennes/${idItalienne}`, {
        method: "PUT",
        body: JSON.stringify({
          actif: nouvelEtat ? 1 : 0,
        }),
      });

      if (!res.ok) {
        const erreur = await res.json();
        alert(erreur.erreur || "Erreur modification italienne");
        return;
      }

      setMachines((anciennesMachines) =>
        anciennesMachines.map((machine) => ({
          ...machine,
          parfums: machine.parfums.map((parfum) =>
            parfum.id_italienne === idItalienne
              ? { ...parfum, actif: nouvelEtat ? 1 : 0 }
              : parfum,
          ),
        })),
      );
    } catch (error) {
      console.error("Erreur changement italienne :", error);
    }
  };

  const machinesActives = machines
    .filter((machine) => Number(machine.actif) === 1)
    .map((machine) => ({
      ...machine,
      parfums: machine.parfums.filter((parfum) => Number(parfum.actif) === 1),
    }))
    .filter((machine) => machine.parfums.length > 0);

  useEffect(() => {
    if (!afficherCheckbox && onAfficherBlocChange && chargementTermine) {
      onAfficherBlocChange(machinesActives.length > 0);
    }
  }, [
    afficherCheckbox,
    chargementTermine,
    machinesActives.length,
    onAfficherBlocChange,
  ]);

  if (!afficherCheckbox && !chargementTermine) {
    return null;
  }

  if (!afficherCheckbox && machinesActives.length === 0) {
    return null;
  }

  const machinesAAfficher = afficherCheckbox ? machines : machinesActives;

  return (
    <div
      className={
        afficherCheckbox
          ? "italiennes-generique admin"
          : `italiennes-generique visiteur ${version}`
      }
    >
      {machinesAAfficher.map((machine) => {
        const nbParfumsActifs = machine.parfums.filter(
          (parfum) => Number(parfum.actif) === 1,
        ).length;

        return (
          <div className="machine-italienne" key={machine.id_machine}>
            {afficherCheckbox && (
              <h4 className="machine-italienne-titre">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={Number(machine.actif) === 1}
                  onChange={(e) =>
                    changerActifMachine(machine.id_machine, e.target.checked)
                  }
                />
                {machine.nom_machine}
              </h4>
            )}

            {!afficherCheckbox ? (
              <ul className="machine-italienne-liste">
                {regrouperParDeux(machine.parfums).map((groupe, index) => (
                  <li className="machine-italienne-parfum actif " key={index}>
                    {groupe.map((parfum, i) => (
                      <span
                        className="double-parfum supplement"
                        key={parfum.id_italienne}
                      >
                        {parfum.nom_parfum_italienne}
                        {i === 0 && groupe.length > 1 && " / "}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="machine-italienne-liste">
                {machine.parfums.map((parfum) => {
                  const parfumActif = Number(parfum.actif) === 1;
                  const bloquerCheckbox = !parfumActif && nbParfumsActifs >= 2;

                  return (
                    <li
                      className={
                        parfumActif
                          ? "machine-italienne-parfum actif"
                          : "machine-italienne-parfum inactif"
                      }
                      key={parfum.id_italienne}
                    >
                      <input
                        className="checkbox"
                        type="checkbox"
                        checked={parfumActif}
                        disabled={bloquerCheckbox}
                        onChange={(e) =>
                          changerActif(parfum.id_italienne, e.target.checked)
                        }
                      />
                      <span>{parfum.nom_parfum_italienne}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
