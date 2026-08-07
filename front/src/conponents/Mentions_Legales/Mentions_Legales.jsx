import "./Mentions_Legales.scss";

export default function MentionsLegales() {
  return (
    <main className="mentions-legales-page">
      <section className="mentions-legales-card">
        <h1>Mentions légales</h1>

        <article>
          <h2>Éditeur du site</h2>
          <p>Le site <strong>Valentin le glacier</strong> est édité par :</p>
          <p>
            <strong>Valentin le glacier</strong><br />
            40 rue Jean Jaurès<br />
            87000 Limoges<br />
            Téléphone : 05 55 57 47 33<br />
            SIRET : 83408741300011<br />
            Email : valentinleglacier@orange.fr
          </p>
        </article>

        <article>
          <h2>Directeur de la publication</h2>
          <p>Le directeur de la publication est : Corinne Debenest</p>
        </article>

        <article>
          <h2>Hébergement</h2>
          <p>
            Nom de l’hébergeur : Railway<br />
            Site internet : https://railway.app
          </p>
        </article>

        <article>
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des éléments présents sur le site, notamment les textes,
            images, logos, graphismes et contenus, sont protégés.
          </p>
          <p>
            Toute reproduction, représentation, modification ou utilisation,
            totale ou partielle, est interdite sans autorisation préalable.
          </p>
        </article>

        <article>
          <h2>Données personnelles</h2>
          <p>Ce site ne collecte aucune donnée personnelle.</p>
        </article>

        <article>
          <h2>Cookies</h2>
          <p>Ce site n’utilise pas de cookies nécessitant le consentement de l’utilisateur.</p>
        </article>

        <article>
          <h2>Crédits</h2>
          <p>Site réalisé dans le cadre d’un stage.</p>
        </article>
      </section>
    </main>
  );
}