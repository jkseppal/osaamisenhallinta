import React from 'react'

const Home = () => {
  
  return (
    <div className="mainPage">
      <h2>Henkilöstön osaamisenhallintasovellus</h2>
      <p>
        Tämän sovelluksen tarkoitus on toimia esimerkkinä siitä,
        miten Puolustusvoimien henkilöstön osaamisenhallintajärjestelmä
        voitaisiin toteuttaa modernilla selainympäristössä toimivalla sovelluksella.
        Sovellukseen syötettävät tiedot ovat turvaluokitussyistä
        jossain määrin todellisuudessa käytettävistä poikkeavia,
        eikä sovellukseen voi vielä tässä vaiheessa muutenkaan syöttää kaikkia
        käytössä olevia tietoja henkilöstöstä. Sovelluksen toteutuksessa käytetyt tekniikat
        kuitenkin toimivat myös todellisten tietojen kanssa, ja sovellus on varsin
        yksinkertainen muuttaa käyttämään niitä.
      </p>
      <p>
        Järjestelmään voi lisätä henkilön ylävalikon linkistä "lisää henkilö".
        linkistä "henkilöt" pääsee siirtymän näkymään, jossa voi etsiä järjestelmästä
        jo löytyviä henkilöitä etunimen, sukunimen ja henkilötunnuksen perusteella.
        Hakutuloksista pääsee henkilön nimeä painamalla siirtymään kyseisen henkilön
        näkymään, jossa voi tarkastella henkilöstä löytyviä tietoja sekä lisätä niitä.
      </p>
      <p>
        Sovelluksen käyttöliittymä on suunniteltu sellaiseksi,
        että uuden käyttäjän olisi mahdollisimman helppo alkaa
        käyttämään sitä, mahdollisesti jopa lukematta minkäänlaisia
        käyttöohjeita. Toisaalta suunnittelussa on otettu myös huomioon,
        että sovelluksen käytön tulee olla sujuvaa myös kokeneille käyttäjille.
      </p>
      <p>
        Henkilötietojen näkymä on jokaiselle järjestelmästä löytyvälle
        henkilölle yhtenevä riippumatta siitä, mihin henkilöstöryhmään hän kuuluu.
        Tästä johtuen esimerkiksi henkilökunnalle on mahdollista antaa
        varusmiehille kuuluvia arviointeja. Jatkokehityksenä on kuitenkin mahdollista
        muuttaa henkilötietojen näkymä riippuvaiseksi henkilöstöryhmästä.
      </p>
    </div>
  )
}

export default Home