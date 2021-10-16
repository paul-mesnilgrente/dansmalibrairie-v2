export default function Contact() {
  return (
    <section className="pb-5" id="contact">
      <div className="container">
        <h1 className="pt-3">Contact</h1>

        <div className="row">
          <div className="col-xs-12 col-md-4">
            <address className="mb-3">
              <strong>Dans ma librairie</strong>
              <br />
              32 rue Garonne
              <br />
              47000 Agen

              <br />
              <abbr title="Téléphone">Tél :</abbr> (+33) 5 53 48 25 68
            </address>

            <address>
              <strong>Email</strong>
              <br />
              <a href="mailto:contact@dansmalibrairie.com">contact@dansmalibrairie.com</a>
            </address>

            <p className="pt-5">
              <strong>Horaires d'ouverture</strong>
              <br />
              <dl class="row">
                <dt class="col-sm-3">Lundi</dt>
                <dd class="col-sm-9">15h00 - 18h45</dd>

                <dt class="col-sm-3">Mardi au samedi</dt>
                <dd class="col-sm-9">10h30 - 12h30 / 14h - 18h45</dd>

                <dt class="col-sm-3">Dimanche</dt>
                <dd class="col-sm-9">FERMÉ</dd>
              </dl>
            </p>
          </div>
          <div className="col-xs-12 col-md-8">
            <iframe
              title="Carte pointé avec Dans ma librairie"
              className="w-100"
              width="450"
              height="250"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvQZT8HUhTmBJCiYha7I2n8qT81f6SQeg&q=Dans ma librairie, 32 rue garonne, 47000 Agen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
