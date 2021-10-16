import LogoCNL from './images/logo_cnl.png';
import LogoRegion from './images/logo_region.png';
import LogoPrefete from './images/logo_prefete.jpg';
import LogoInitiative from './images/logo_initiative.png';
import LogoADELC from './images/logo_adelc.png';

export default function Partners() {
  return (
    <section className="pb-5" id="partners">
      <div className="container">
        <h1 className="pt-3">Nos partenaires</h1>

        <div className="row gy-5 align-items-center justify-content-center text-center">
          <div className="col-6 col-sm-4">
            <a href="https://centrenationaldulivre.fr">
              <img src={LogoCNL} alt="Logo du Centre National du Livre" />
            </a>
          </div>
          <div className="col-6 col-sm-4">
            <a href="https://www.nouvelle-aquitaine.fr/">
              <img src={LogoRegion} alt="Logo de la région Nouvelle-Aquitaine" />
            </a>
          </div>
          <div className="col-6 col-sm-4">
            <a href="https://www.prefectures-regions.gouv.fr/nouvelle-aquitaine/Region-et-institutions/Organisation-administrative-de-la-region/La-Prefete-ses-missions/La-prefete-de-region-Nouvelle-Aquitaine">
              <img src={LogoPrefete} alt="Logo préfète de la région Nouvelle-Aquitaine" />
            </a>
          </div>
          <div className="col-6 col-sm-4">
            <a href="https://www.facebook.com/initiativelotetgaronne">
              <img src={LogoInitiative} alt="Logo Initiative Lot-et-Garonne" />
            </a>
          </div>
          <div className="col-6 col-sm-4">
            <a href="http://www.adelc.fr/">
              <img src={LogoADELC} alt="Logo de l'association pour le dévelopment de la librairie de création" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
