import "./Conteneur_Histoire.scss";

export default function Conteneur_Histoire() {
  return (
    <section className="conteneur-histoire" id="conteneur-histoire">
      <div className="font-image-histoire">
      <h2 className="titre-conteneur-histoire">
        Bienvenue chez Valentin le Glacier à Limoges
      </h2>
      <div className="conteneur-histoire-logo">
        <img
          className="logo-conteneur-histoire"
          src="/images/logo_valentin.png"
          alt="Logo valentin le glacier"
        />
        <div className="text-conteneur-histoire">
          <h3 className="sous-titre-conteneur-histoire">Notre histoire</h3>
          <p className="Notre-histoire">
            Dans le domaine du commerce depuis 1992, une nouvelle opportunité
            s'est ouverte à moi : j'ai donc fait une reconversion professionnelle,
            et en juillet 2018, la boutique “Valentin le glacier" à Limoges a vu
            le jour. A la recherche de fournisseurs de crèmes glacées et de
            sorbets BIO, nous avons découvert “Terre adélice”.
          </p>
          <hr className="separateur-histoire" />
        </div>
      </div>
      <div className="conteneur-histoire-logo">
        <img
          className="logo-conteneur-histoire"
          src="/images/logo_terreadelice.png"
          alt="Logo terre adélice"
        />
        <div className="text-conteneur-histoire">
          <h3 className="sous-titre-conteneur-histoire">Terre adélice</h3>
          <p className="Notre-histoire">
            Terre adélice est une entreprise engagée pour la préservation de
            l’environnement et la valorisation de l’humain au cœur de son
            activité. Cet engagement se traduit au quotidien par des actes
            concrets : choix de l’agriculture biologique, coopération avec des
            producteurs locaux, écoconception des emballages, utilisation
            d’électricité 100 % renouvelable, et réduction des déchets.
          </p>
          <hr className="separateur-histoire" />
        </div>
      </div>
      </div>
    </section>
  );
}
