/* jshint esversion: 6 */
/* global getConfig, StatusBar, AndroidFullScreen */

(function(){
  'use strict';
  
  $.widget("custom.muikkupeli", {
    
    options: {
      results: {
        FESTIVAALI: {
          img: 'gfx/festivaalimuikku_iso.png',
          title: 'Olet Festivaali-muikku',
          text: 'Kun valikoit lomakohdetta, katsot ensimmäisenä paikallisen tapahtumakalenterin. Innostut pienistä kylätapahtumista ja nautit korkeakulttuurista. Tule jännittämään maailman nopeimman raviradan ääreen, nauti maailmankuulun kapellimestarin konserteista tai rokkaa aamuun asti festareilla. Paikallisilla design-tuotteilla yllätät tuliaisia odottavat ystäväsi.'
        },
        HULIVILI: {
          img: 'gfx/hulivilimuikku_iso.png',
          title: 'Olet Hulivili-muikku',
          text: 'Joko sinulla on aivan mahdottoman villi mielikuvitus tai annoit perheen nuorimman tehdä testin, sillä hauskanpito on lomallasi pääasia. Mikkelin seudulta löytyy tekemistä koko perheelle. Polskuttele päivä vesipuistossa tai uimarannalla, vieraile hauskoissa tapahtumissa ja tee löytöjä keskustan kauppakeskuksista.'
        },
        MIKKELI: {
          img: 'gfx/mikkelimuikku_iso.png',
          title: 'Olet Mikkeli-muikku',
          text: 'Olet ehkä Mikkeliläisempi kuin moni Mikkeliläinen itse. Kaupunkiasuminen järvisuomessa on kuin tehty sinua varten. Arvostat arjessasi perusasioiden sujuvuutta ja vapaa-ajallasi haluat harrastaa monipuolisesti. Tule kokeilemaan olisiko tämä tuleva kotikaupunkisi: testaa torikahvilat, käy eri lajien paikallisotteluissa ja fiilistele miltä tuntuisi asua Saimaan rannalla, vain kolmen kilometrin päässä keskustasta.'          
        },
        KULINARISTI: {
          img: 'gfx/kulinaristimuikku_iso.png',
          title: 'Olet Kulinaristi-muikku',
          text: 'Valitset lomakohteesi ruoan perusteella sillä herkullinen ruoka on sinulle intohimo ja arvostat hyviä raaka-aineita. Lähde siis makumatkalle Mikkelin seudulle, josta löydät Suomen parasta lähi- ja luomuruokaa. Nauti kuuluista kartanoiden pitopöydistä , osta tuliaisia torilta ja kauppahallista suoraan tuottajilta ja koe suomen suurimmat rapujuhlat.'          
        },
        PAAMAJA: {
          img: 'gfx/paamajamuikku_iso.png',
          title: 'Olet Päämaja-muikku',
          text: 'Viihdyt tarinoiden äärellä ja vierailet paikoissa, joissa voit oppia uutta. Suomen ainoassa päämajakaupungissa voi kulkea Mannerheimin jalanjäljissä, vierailla kartanoissa ja tutustua museoihin sekä risteillä 5000-vuotta vanhoille Astuvansalmen kalliomaalauksille.'          
        },
        HYGGEILIJA: {
          img: 'gfx/hyggeilijamuikku_iso.png',
          title: 'Olet Hyggeilijä-muikku',
          text: 'Arvostat omaa hyvinvointiasi ja lomalla haluat päästä rentoutumaan lähelle luontoa. Saimaassa on maailman järvistä eniten rantaviivaa, joten löydät varmasti oman piilopaikkasi. Vuokraa mökki järven rannalta, tutustu luontoon, käy persoonallisissa kahviloissa ja nauti paikallisesta luomuruuasta.'          
        }
      },
      questions: [{
        text: 'Matkustat mieluiten…',
        options: [{
          text: 'Paikkoihin, joissa on paljon tapahtumia.',
          points: 'FESTIVAALI'
        }, {
          text: 'Koko perheelle sopiviin kohteisiin.',
          points: 'HULIVILI'
        }, {
          text: 'Mihin tahansa, kunhan se on Mikkeli.',
          points: 'MIKKELI'
        }, {
          text: 'Kohteeseen, jossa on rikas ruokakulttuuri.',
          points: 'KULINARISTI'
        }, {
          text: 'Kaupunkeihin, joissa on paljon historiallisia kohteita.',
          points: 'PAAMAJA'
        }, {
          text: 'Luonnon helmaan rauhoittumaan.',
          points: 'HYGGEILIJA'
        }]
      }, {
        text: 'Kuinka kaukana kohde saa olla?',
        options: [{
          text: 'Kaikki tiet vievät Mikkeliin.',
          points: 'MIKKELI'
        }, {
          text: 'Kannatan kotimaan matkailua, eli Suomen rajojen sisäpuolella.',
          points: 'PAAMAJA'
        }, {
          text: 'Autolla alle 3h ja jo matkalla jotakin nähtävää, etteivät lapset hermostu.',
          points: 'HULIVILI'
        }, {
          text: 'Kunhan matkalla on useita herkullisia pysähdyspaikkoja.',
          points: 'KULINARISTI'
        }, {
          text: 'Täytyy päästä junalla tai muulla julkisella.',
          points: 'FESTIVAALI'
        }, {
          text: 'Kunhan on mahtavat maisemat pyöräillen tai patikoiden.',
          points: 'HYGGEILIJA'
        }]
      }, {
        text: 'Mistä sinut löytää kuumana kesäpäivänä?',
        options: [{
          text: 'Musiikkijuhlilta tai festareilta.',
          points: 'FESTIVAALI'
        }, {
          text: 'Torin vilinästä tai kauppahallista.',
          points: 'KULINARISTI'
        }, {
          text: 'Totoamassa raveista.',
          points: 'MIKKELI'
        }, {
          text: 'Vesipuistosta.',
          points: 'HULIVILI'
        }, {
          text: 'Suppailemasta Saimaan vesillä.',
          points: 'HYGGEILIJA'
        }, {
          text: 'Museon viileydestä.',
          points: 'PAAMAJA'
        }]
      }, {
        text: 'Kun nälkä yllättää, mitä syöt?',
        options: [{
          text: 'Muikkuja torilla.',
          points: 'PAAMAJA'
        }, {
          text: 'Torikahvilan herkkuja.',
          points: 'MIKKELI'
        }, {
          text: 'Luomusalaatti persoonallisessa kahvilassa.',
          points: 'HYGGEILIJA'
        }, {
          text: 'Aitoa italialaista pizzaa ja jäätelöä vanhalla maatilalla.',
          points: 'HULIVILI'
        }, {
          text: 'Ehdottomasti lähiruokaa, paistettu Kyyveden kuha kuulostaisi herkulliselta.',
          points: 'KULINARISTI'
        }, {
          text: 'Mielelläni lounastan jossain tunnelmallisessa kartanossa ja nautin heidän pitopöydästään.',
          points: 'FESTIVAALI'
        }]
      }, {
        text: 'Ostoksilla mukaasi tarttuu?',
        options: [{
          text: 'Museokaupan aarteita.',
          points: 'PAAMAJA'
        }, {
          text: 'Kotikaupungin joukkueen kannatuspaita.',
          points: 'MIKKELI'
        }, {
          text: 'Paikallista designia ja käsitöitä tietenkin.',
          points: 'FESTIVAALI'
        }, {
          text: 'Kestäviä pellavatuotteita kotiinviemisiksi.',
          points: 'HYGGEILIJA'
        }, {
          text: 'Lelukaupasta vesipyssyn ja muita leluja.',
          points: 'HULIVILI'
        }, {
          text: 'Laadukkaita keittiötuotteita.',
          points: 'KULINARISTI'
        }]
      }, {
        text: 'Matkalla majapaikaksesi valitset?',
        options: [{
          text: 'Oman loma-asunnon Saimaan rannalta.',
          points: 'MIKKELI'
        }, {
          text: 'Mökin tai huoneiston Saimaan rannalta, johon mahtuu koko perhe.',
          points: 'HULIVILI'
        }, {
          text: 'Kohteen, jolla on oma tarina kerrottavanaan.',
          points: 'PAAMAJA'
        }, {
          text: 'Persoonallisen B&amp;B majoituksen.',
          points: 'HYGGEILIJA'
        }, {
          text: 'Paikan, jossa on maukas lähiruoka-aamupala.',
          points: 'KULINARISTI'
        }, {
          text: 'Tunnelmallisen ja laadukkaan kartanon.',
          points: 'FESTIVAALI'
        }]
      }, {
        text: 'Millaisessa tapahtumassa vierailisit mieluiten?',
        options: [{
          text: 'Festareilla lähellä luontoa.',
          points: 'HYGGEILIJA'
        }, {
          text: 'Musiikkijuhlilla, jossa esiintyy kansainvälisesti tunnettu kapellimestari.',
          points: 'FESTIVAALI'
        }, {
          text: 'Asuntomessuilla.',
          points: 'MIKKELI'
        }, {
          text: 'Koko perheen karnevaaleissa.',
          points: 'HULIVILI'
        }, {
          text: 'Perinteisessä ravitapahtumassa.',
          points: 'PAAMAJA'
        }, {
          text: 'Ruokatapahtumassa, jossa lähiruoka on pääosassa.',
          points: 'KULINARISTI'
        }]
      }, {
        text: 'Miten ystäväsi kuvailisivat sinua?',
        options: [{
          text: 'Olen aina kertomassa tarinoita tai asioista, joista olen lukenut.',
          points: 'PAAMAJA'
        }, {
          text: 'Minut saa aina mukaan seuraksi hyvään ravintolaan.',
          points: 'KULINARISTI'
        }, {
          text: 'Olen leikkimielinen ja energinen.',
          points: 'HULIVILI'
        }, {
          text: 'Etsin kokoajan uusia kokemuksia ja elämyksiä.',
          points: 'FESTIVAALI'
        }, {
          text: 'Rakastan luontoa ja rauhaa.',
          points: 'HYGGEILIJA'
        }, {
          text: 'Haaveilen aina rauhallisesta elämästä järven rannalla.',
          points: 'MIKKELI'
        }]
      }, {
        text: 'Kenen kanssa matkustaisit Mikkeliin?',
        options: [{
          text: 'Rakkaan puolisoni kanssa kahdestaan.',
          points: 'PAAMAJA'
        }, {
          text: 'Auto täyteen kavereita ja kohti Mikkeliä!',
          points: 'KULINARISTI'
        }, {
          text: 'Ensi kesänä parhaan kaverin kanssa fillarilla.',
          points: 'HYGGEILIJA'
        }, {
          text: 'Itsekseni Pendolinolla Mikkelin asemalle ja suoraan torille.',
          points: 'FESTIVAALI'
        }, {
          text: 'Olen aina Mikkelissä vaikken fyysisesti siellä olisikaan.',
          points: 'MIKKELI'
        }, {
          text: 'Koko perheen reissu siitä tulee.',
          points: 'HULIVILI'
        }]
      }]
    },

    _create : function() {
      StatusBar.hide();
      AndroidFullScreen.immersiveMode(() => {}, () => {});
      $(this.element).stopRoutine(getConfig().stoproutine);
      $(this.element).muikkupeliClock();
      $(this.element).muikkupeliWeather(getConfig().weather);
      $(this.element).on('touchend', '.start-button', $.proxy(this._startButtonClick, this));
      $(this.element).on('touchend', '.again-button', $.proxy(this._againButtonClick, this));
      $(this.element).on('touchend', '.other-result-btn', $.proxy(this._otherResultButtonClick, this));
      $(this.element).on('touchend', '.question-option-btn', $.proxy(this._questionOptionButtonClick, this));
      $(this.element).on('touchstart', '.muikkupeli-btn', $.proxy(this._onButtonTouchStart, this));
      $(this.element).on('touchend', '.muikkupeli-btn', $.proxy(this._onButtonTouchEnd, this));
      this.resetGame();
    },

    resetGame: function() {
      this.currentQuestion = 0;
      this.animating = false;
      this.points = {
        PAAMAJA: 0,
        KULINARISTI: 0,
        HYGGEILIJA: 0,
        FESTIVAALI: 0,
        MIKKELI: 0,
        HULIVILI: 0
      };
    },

    getHighestResult: function() {
      const resultKeys = Object.keys(this.options.results);
      let highestKey = null;
      let highestPoints = 0;
      for (let i = 0; i < resultKeys.length; i++) {
        let resultKey = resultKeys[i];
        if (this.points[resultKey] > highestPoints) {
          highestKey = resultKey;
          highestPoints = this.points[resultKey];
        }
      }
      
      return highestKey;
    },

    renderStartScreen: function() {
      $(this.element).find('.finish-screen').fadeOut(400, () => {
        $(this.element).find('.header-container').fadeIn(400);
        $(this.element).find('.start-screen').fadeIn(400);
      });
    },

    renderFinishScreen: function() {
      const resultHtml = pugMuikkupeliResult({
        result: this.options.results[this.getHighestResult()]
      });
      $(this.element).find('.finish-container').html(resultHtml);
      $(this.element).find('.header-container').fadeOut(400);
      $(this.element).find('.questions-screen').fadeOut(400, () => {
        $(this.element).find('.finish-screen').fadeIn(400);
      });
    },
    
    renderQuestionScreen: function() {
      const questionHtml = pugMuikkupeliQuestion({
        question: this.options.questions[0]
      });
      $(this.element).find('.question-container').html(questionHtml);
      $(this.element).find('.start-screen').fadeOut(400, () => {
        $(this.element).find('.questions-screen').fadeIn(400);
      });
    },

    renderOtherFinish: function(result) {
      if (this.animating) {
        return;
      }
      this.animating = true;
      
      const resultHtml = pugMuikkupeliResult({
        result: this.options.results[result]
      });
      $('.before-show').remove();
      const oldResult = $(this.element).find('.finish-container > .result');
      const newResult = $(resultHtml).addClass('before-show');
      $(this.element).find('.finish-container').append(newResult);
      oldResult.fadeOut(400, () => {
        newResult.fadeIn(400, () => {
          newResult.removeClass('before-show');
          oldResult.remove();
          this.animating = false;
        });
      });
    },

    renderNextQuestion: function() {
      const questionHtml = pugMuikkupeliQuestion({
        question: this.options.questions[this.currentQuestion]
      });

      const oldQuestion = $(this.element).find('.question-container > .question');
      const newQuestion = $(questionHtml).addClass('before-show');
      $(this.element).find('.question-container').append(newQuestion);
      oldQuestion.fadeOut(400, () => {
        newQuestion.fadeIn(400, () => {
          newQuestion.removeClass('before-show');
          oldQuestion.remove();
        });
      });
    },

    _onButtonTouchEnd: function(e) {
      $(e.target).closest('.muikkupeli-btn').removeClass('active');
    },
    
    _onButtonTouchStart: function(e) {
      $(e.target).closest('.muikkupeli-btn').addClass('active');
    },

    _startButtonClick: function() {
      this.resetGame();
      this.renderQuestionScreen();
    },
    
    _againButtonClick: function() {
      this.renderStartScreen();
    },
    
    _otherResultButtonClick: function(e) {
      const result = $(e.target).closest('.other-result-btn').attr('data-result');
      console.log('HURRDURRR');
      this.renderOtherFinish(result);
    },
    
    _questionOptionButtonClick: function(e) {
      const optionValue = $(e.target).closest('.question-option-btn').attr('data-points');
      this.points[optionValue]++;
      this.currentQuestion++;
      if (this.currentQuestion >= this.options.questions.length) {
        this.renderFinishScreen();
      } else {
        this.renderNextQuestion();
      }
    }
  });
  
  $(document).on("deviceready", () => {
    $(document.body).muikkupeli();      
  });

})();