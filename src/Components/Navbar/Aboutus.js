import React, { Component } from 'react';
import Oscar from '../Design/oscr.JPG';
// import Oscar2 from '../Design/oscr2.JPG';
import Gif from '../Film/gifslubart2.gif';

export class Aboutus extends Component {





  // kamcia() {
  //   const a = document.getElementById('Huhu');
  //       a.style.display = 'none';
  // }

  basi(){
   
  const delayInMilliseconds = 2000;
  setTimeout(function() {
    const b = document.getElementById('Haha');
    b.style.display= 'none';
  }, delayInMilliseconds);
}   
    render() {
        return (
            <div className="AboutUss"   >
                <div className="Oscr">
                  <div className="row">
                    <div className="TekstSlub col">
                    <p>
                    Ślub Na Ekranie tworzą ludzie z pasją, umiejętnościami i wyobraźnią.
                    To wyjątkowe połączenie doświadczenia, nowoczesności oraz nieszablonowego podejścia.
                    Myślimy i działamy nietuzinkowo. Lubimy wyjść poza schemat, co pozwala nam tworzyć piękne
                    filmy, które będą dla Państwa niezapomnianą pamiątką.
                    Dlaczego my?<br/>
                    - Zdjęcia od czołowych polskich operatorów.<br/>
                    - Najwyższa jakość i bogate portfolio.<br/>
                    - Profesjonalne podejście do Pary Młodej.<br/>
                    - Najnowocześniejszy sprzęt wideo.<br/>
                    </p>
               
                    </div>
                    <div className="SlubPrawa col">
                    <h3 className="nameh3">
                    Oskar Klukowski <br/>
                    operator filmowy, założyciel „Ślub Na Ekranie”<br/>
                    </h3>


                    <img className="OscrImg" src={Oscar} alt="" />
                    <div className="LoadMov2" id="Haha">
                      <img src={Gif} alt="load" className="ZaladujGifa" onLoad={this.basi.bind(this)}  />
                    </div>
                    
                    <p>
                    
                    Filmem zachwycam się odkąd pamiętam. Obecnie jestem właścicielem wytwórni filmowej, realizującej średnio jeden film dziennie. Uważam, że nie ma lepszego sposobu na uwiecznienie chwili, niż nagranie filmu. Dlaczego nagrywam śluby? Bo są w nich wielkie emocje, a wzruszenie na twarzach Młodej Pary jest nie do opisania.

                    </p>
                    </div>
                  </div>
                </div>
                
            </div>
        )
    }
}

export default Aboutus
