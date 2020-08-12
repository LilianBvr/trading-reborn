import React, { useRef, useEffect} from 'react';
import { Link } from 'react-router-dom'
import CountTo from 'react-count-to';

import './Home.css'

const Home = () => {

  const bgImage = useRef(null)

  useEffect(() => {

    function parallax (e){
        var scrolled = window.pageYOffset
        bgImage.current.style.top = - (scrolled * 0.2) + 'px'
    }

    //componentDidMount :
    document.addEventListener('scroll', parallax);

    //componentWillUnmount :
    return () => {
        document.removeEventListener('scroll', parallax)
    }
  }, [])

  return (
    <div class='home'>

      <div class='home-header'>
        <div class='bg-image' ref={bgImage}></div>
        <div class='content'>
          <div class='home-header-branding'>DEVIENS LIBRE FINANCIÈREMENT</div>
          <div class='elementor-widget-divider'></div>
          <div class='logo'>
            <img 
              src={require('./img/logo.png')}
              alt="logo"
              width='187'
            />
          </div>
        </div>
      </div>

      <section class='first-fact'>
        <div class='first-fact-content'>
          "90% des traders particuliers perdent de l'argent en bourse"
        </div>
        <div class='first-fact-profile'>
          <div class='first-fact-profile-picture'>
            <img
              src={require('./img/18272.jpg')}
              alt='christopher'
              width='60'
            ></img>
          </div>
          <div class='first-fact-profile-presentation'>
            <div class='name'>CHRISTOPHER</div>
            <div class='job'>Analyste Financier</div>
          </div>
        </div>
      </section>


      <section class='second-fact'>
        <div class='second-fact_first-container'>
          <div class='second-fact_widget-divider'></div>
          <div class='second-fact_text-content'>
            <div class='second-fact_text-content_question'>
              TU AS PEUR DE PERDRE TON CAPITAL ?
            </div>
            <div class='second-fact_text-content_list'>
              <ul>
                <li>Tu ne comprends rien à la bourse ?</li>
                <li>Tu n’as pas beaucoup à investir ?</li>
                <li>Tu as déjà eu de grosses pertes ?</li>
              </ul>
            </div>
            <div class='second-fact_text-content_answer'>
              On est aussi passé par là.
            </div>
          </div>
        </div>
        
        <div class='second-fact_second-container'>
          <div class='second-fact_image-content'>
            <img
              src={require('./img/3.png')}
              alt=''
            ></img>
          </div>
        </div>
      </section>

      <section class='bloc-3'>
        <div class='bloc-3_content'>
          <div class='bloc-3_img'>
            <img
                src={require('./img/4023367.jpg')}
                alt=''
            ></img>
          </div>
          <div class='bloc-3_container-2'>
            <div class='bloc-3_widget-divider'></div>
            <div class='bloc-3_text-content'>
              <div class='bloc-3_text-content_title'>
                NOUS SOMMES LÀ POUR TOI !
              </div>
              <div class='bloc-3_text-content_list'>
                <ul>
                  <li>Nous avons crée une formation de trois modules pour toi !</li>
                  <li>On va t’accompagner dans tes premiers trades, jusqu’à ta réussite.</li>
                </ul>
              </div>
              <Link to='/rejoindre' class='bloc-3_text-content_answer'>
                OBTIENS TA FORMATION GRATUITE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class='bloc-4'>
        <div class='bloc-4_content'>
          <div class='bloc-4_img'>
            <img
                src={require('./img/1.png')}
                alt=''
            ></img>
          </div>
          <div class='bloc-4_container-2'>
            <div class='bloc-4_widget-divider'></div>
            <div class='bloc-4_text-content'>
              <div class='bloc-4_text-content_title'>
                REJOINS NOUS
              </div>
              <div class='bloc-4_text-content_list'>
                <ul>
                  <li> Nous t’indiquerons chaque trades à prendre</li>
                  <li>Grâce à TradingReborn bénéficie de 50% de ton capital en plus chez notre broker partenaire</li>
                </ul>
              </div>
              <Link to='/rejoindre' class='bloc-4_text-content_answer'>
                JE VOUS REJOINS MAINTENANT
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class='bloc-5'>
        <div class='bloc-5_content'>
          <div class='bloc-5_content_title'>LES TÉMOIGNAGES DE NOS MEMBRES</div>
          <div class='bloc-5_widget-divider'></div>

          <div class='bloc-5_tems'>
            <div class=' bloc-5_tem tem-1'>
              <div class='bloc-5_tem_picture'>
                <img
                  src={require('./img/edouard.jpg')}
                  alt=''
                ></img>
              </div>
              <div class='bloc-5_tem_text-container'>
                <div class='bloc-5_tem_name'>
                  Édouard
                </div>
                <div class='bloc-5_tem_text'>
                  "Avant j'avais du mal avec le trading, je ne comprenais pas grand chose, j'ai perdu tout mon capital de départ. Après mon adhésion chez TradingReborn je suis passé à un revenu passif de <strong>1000€</strong> par mois environ."
                </div>
              </div>
            </div>

            <div class='bloc-5_tem tem-2'>
              <div class='bloc-5_tem_picture'>
                <img
                  src={require('./img/pierre.jpg')}
                  alt=''
                ></img>
              </div>
              <div class='bloc-5_tem_text-container'>
                <div class='bloc-5_tem_name'>
                  Pierre
                </div>
                <div class='bloc-5_tem_text'>
                  "La bourse est un milieu très compliqué. Je me suis fais arnaqué par mon premier broker et ça m'a vite découragé. J'ai eu la chance de rencontrer Arnaud lors d'un meeting à Paris qui m'a conseillé d'intégrer le groupe. Depuis je gagne le <strong>double de mon ancien salaire</strong> ! Merci."             </div>
                </div>
              </div>
          </div>
        </div>
          
      </section>

      <section class='bloc-6'>
        <h2 class='bloc-6_title'>
          JE VEUX ÊTRE LIBRE FINANCIÈREMENT
        </h2>
        <div class='bloc-6_muted-text'>
          En 1 clique
        </div>
        <Link to='/rejoindre' class='bloc-6_button'>
          REJOINS LA COMMUNAUTÉ
        </Link>
      </section>

      <section class='bloc-7'>
        <CountTo to={62} speed={1300}>
          {
            value => <div class='bloc-7_counter'>{value}</div>
          }
        </CountTo>
        <div class='bloc-7_counter-text'>
          Personnes nous ont déjà rejoint
        </div>
      </section>

      <footer class='mentions'>
        © 2020 - TRADING REBORN | All rights reserved 
      </footer>
      
    </div>
  );
}
 
export default Home;