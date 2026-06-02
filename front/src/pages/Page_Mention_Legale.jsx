import Header from "../conponents/Haeder/Header";
import Footer from "../conponents/Footer/Footer";
import MentionsLegales from "../conponents/Mentions_Legales/Mentions_Legales";

export default function Page_Mention_Legale() {
  return (
    <div>
      <Header mode="site" logoTo="/login" />
      <MentionsLegales />
      <Footer />
    </div>
  );
}
