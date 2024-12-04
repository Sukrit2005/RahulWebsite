import React from "react";

const Services = () => {
  return (
    <section className="container" id="services">
      <div className="section-services">
        <p className="services-heading">
          Caring for Your Ears, Nose and Throat!
        </p>
        <p className="super-title">EAR</p>
        <div className="services-box">
          <div className="services-text">
            <p className="services-subheading">Ear Care:</p>
            <ul className="services-list">
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Ear infections (external/middle ear)
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Ear wax (Cerumen) removal
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Eustachian tube dysfunction
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> CSOM, Cholesteatoma, Otosclerosis
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Otomycosis (Fungal ear infection)
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Otosclerosis
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> more...
              </li>
            </ul>
            <p />
            <p className="services-subheading">Hearing Assessment:</p>
            <ul className="services-list">
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Hearing loss
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Sudden sensorineural hearing loss
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Noise-induced hearing loss
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Glue ear (Serous otitis media)
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Clinical hearing tests
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Tinnitus
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Presbycusis (age-related)
              </li>
            </ul>
            <p />
          </div>
          <div>
            <img
              src="./images/ear/external-ear-sq-1200.jpg"
              alt="ear"
              className="services-img"
              lazy=""
            />
          </div>
        </div>
        <p className="super-title">NOSE</p>
        <div className="services-box">
          <div>
            <img
              src="./images/nose/nose-sq-1200.jpg"
              alt="nose"
              className="services-img-first"
              lazy=""
            />
          </div>
          <div className="services-text-last">
            <p className="services-subheading">Nose and Sinus Care:</p>
            <ul className="services-list">
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" /> Rhinitis
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" /> Sinusitis
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" /> Deviated septum
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" /> Allergic rhinitis
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" /> Epistaxis (nose bleeds)
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" /> Chronic rhinosinusitis
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" /> Nasal vestibulitis
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" /> Foreign body in the nose
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" /> more...
              </li>
            </ul>
            <p />
            <p className="services-subheading">Sleep Apnea Treatment:</p>
            <ul className="services-list">
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Obstructive sleep apnea
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Sleep Study (PSG)
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Nasal valve insufficiency
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                CPAP
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Surgical management (as required)
              </li>
            </ul>
            <p />
          </div>
        </div>
        <p className="super-title">THROAT</p>
        <div className="services-box">
          <div className="services-text">
            <p className="services-subheading">Throat and Voice Care:</p>
            <ul className="services-list">
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Pharyngitis (sore throat)
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Laryngitis
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Globus pharyngeus
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Upper respiratory tract infection
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Salivary gland diseases
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Vocal cord nodules
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                more...
              </li>
            </ul>
            <p />
            <p className="services-subheading">Head and Neck Care:</p>
            <ul className="services-list">
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Thyroid disorders
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Cervical lymphadenopathy
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Neck masses
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Retropharyngeal abscess
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Deep neck space infection
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Head and neck cancers
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                more...
              </li>
            </ul>
            <p />
          </div>
          <div>
            <img
              src="./images/throat/open-mouth.jpg"
              alt="throat"
              className="services-img"
              lazy=""
            />
          </div>
        </div>
        <p className="super-title">PEDIATRIC</p>
        <div className="services-box">
          <div>
            <img
              src="./images/child.jpg"
              alt="baby"
              className="services-img-first"
              lazy=""
            />
          </div>
          <div className="services-text-last">
            <p className="services-subheading">Pediatric ENT Services:</p>
            <ul className="services-list">
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Pediatric ear infections
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Tonsil and Adenoid disorders
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Croup (laryngotracheobronchitis)
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Foreign body in the nose or ear
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Allergic rhinitis
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Otitis media with effusion (OME)
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Congenital hearing loss
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Laryngomalacia
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Tongue-tie
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Speech delay
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Epiglottitis
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Peritonsillar abscess
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Otomycosis
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Hearing evaluations for children
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                more...
              </li>
            </ul>
            <p />
          </div>
        </div>
        <p className="super-title">SURGICAL</p>
        <div className="services-box">
          <div className="services-text">
            <p className="services-subheading">Ear:</p>
            <ul className="services-list">
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Tympanoplasty, Mastoidectoomy
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Ossiculoplasty
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Stapedectomy
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                more...
              </li>
            </ul>
            <p />
            <p className="services-subheading">Nose:</p>
            <ul className="services-list">
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                FESS, Septoplasty
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Endoscopic DCR
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Nasal fracture reduction
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                more...
              </li>
            </ul>
            <p />
            <p className="services-subheading">Throat and Larynx:</p>
            <ul className="services-list">
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Tonsillectomy, Adenoidectomy
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Uvulopalatopharyngoplasty
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                Microlaryngoscopy
              </li>
              <li className="services-list-item">
                {" "}
                <ion-icon name="arrow-redo" />
                more...
              </li>
            </ul>
            <p />
          </div>
          <div>
            <img
              src="./images/ot.jpg"
              alt="operation theatre"
              className="services-img"
              lazy=""
            />
          </div>
        </div>
        <p className="super-title">HEAD &amp; NECK</p>
        <div className="services-box">
          <div>
            <img
              src="./images/throat/throat-sq-1200.jpg"
              alt="instruments"
              className="services-img-first"
              lazy=""
            />
          </div>
          <div className="services-text-last">
            <p className="services-subheading">Head and Neck:</p>
            <ul className="services-list">
              <li className="services-list-item"> </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" /> Parotidectomy
              </li>
              <li className="services-list-item"> </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Submandibular gland excision
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Rhinoplasty
              </li>
              <li className="services-list-item"> </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Thyroidectomy
              </li>
              <li className="services-list-item"> </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Parathyroidectomy
              </li>
              <li className="services-list-item"> </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Myringotomy with tube insertion
              </li>
              <li className="services-list-item"> </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Otoplasty
              </li>
              <li className="services-list-item"> </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                more...
              </li>
            </ul>
            <p />
            <p className="services-subheading">Misc:</p>
            <ul className="services-list">
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Earlobe repair
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Flexible Fibreoptic Endoscopy
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Oto-Endoscopy, Nasal Endoscopy
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                Lip cyst Excision
              </li>
              <li className="services-list-item">
                <ion-icon name="arrow-redo" />
                more...
              </li>
            </ul>
            <p />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
