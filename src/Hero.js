import React from 'react';
import Navbar from './Navbar';
import './Hero.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Locations from './components/pages/Locations';
import Mapz from './components/pages/Mapz';
import PGPR from './components/pages/PGPR';
import YST from './components/pages/YST';
import YIH from './components/pages/YIH';
import UTN from './components/pages/UTN';
import USC from './components/pages/USC';
import BIZ from './components/pages/BIZ';
import MDN from './components/pages/MDN';
import COM from './components/pages/COM';
import SCP from './components/pages/SCP';
import SDE from './components/pages/SDE';
import FASS from './components/pages/FASS';
import LAW from './components/pages/LAW';
import Footer from './components/Footer';
import KRNorth from './components/pages/KRNorth';
import KRSouth from './components/pages/KRSouth';
import Search from './components/pages/Search';
import Favourites from './components/pages/Favourites';
import Favourites2 from './components/pages/Favourites2';
import Favourites3 from './components/pages/Favourites3';
import Restaurants from './components/pages/Restaurants.jsx';
import Review from './components/pages/Review.js';
import AllReviews from './components/pages/AllReviews';
import ariseandshine from './components/restaurantPages/ariseandshine';
import barbarblacksheep from './components/restaurantPages/barbarblacksheep';
import bistrobox from './components/restaurantPages/bistrobox';
import bobertea from './components/restaurantPages/bobertea';
import cafedelight from './components/restaurantPages/cafedelight';
import centralsquare from './components/restaurantPages/centralsquare';
import chopchop from './components/restaurantPages/chopchop';
import deck from './components/restaurantPages/deck'
import e2kitchen from './components/restaurantPages/e2kitchen';
import eurekataste from './components/restaurantPages/eurekataste';
import finefood from './components/restaurantPages/finefood';
import flashcoffee from './components/restaurantPages/flashcoffee';
import flavours from './components/restaurantPages/flavours';
import forewordcoffee from './components/restaurantPages/forewordcoffee';
import frontier from './components/restaurantPages/frontier';
import huggscoffee from './components/restaurantPages/huggscoffee';
import hwangs from './components/restaurantPages/hwangs';
import jewelcoffee from './components/restaurantPages/jewelcoffee';
import koi from './components/restaurantPages/koi';
import lejomo from './components/restaurantPages/lejomo';
import liangbankungfu from './components/restaurantPages/liangbankungfu';
import lijicoffeehouse from './components/restaurantPages/lijicoffeehouse';
import liho from './components/restaurantPages/liho';
import maxxcoffee from './components/restaurantPages/maxxcoffee';
import nami from './components/restaurantPages/nami';
import ninefresh from './components/restaurantPages/ninefresh';
import pastaexpress from './components/restaurantPages/pastaexpress';
import pgpraircon from './components/restaurantPages/pgpraircon';
import pgprnonaircon from './components/restaurantPages/pgprnonaircon';
import prive from './components/restaurantPages/prive';
import reedz from './components/restaurantPages/reedz';
import riceandstuff from './components/restaurantPages/riceandstuff';
import sapore from './components/restaurantPages/sapore';
import spinelli from './components/restaurantPages/spinelli';
import starbucks from './components/restaurantPages/starbucks';
import supersnacks from './components/restaurantPages/supersnacks';
import taiwanichiban from './components/restaurantPages/taiwanichiban';
import technoedge from './components/restaurantPages/technoedge';
import thecoffeehut from './components/restaurantPages/thecoffeehut';
import thecoffeeroaster from './components/restaurantPages/thecoffeeroaster';
import theroyalsbistro from './components/restaurantPages/theroyalsbistro';
import thespread from './components/restaurantPages/thespread';
import thesummit from './components/restaurantPages/thesummit';
import theteaparty from './components/restaurantPages/theteaparty';
import udondonbar from './components/restaurantPages/udondonbar';
import unclepenyet from './components/restaurantPages/unclepenyet';
import waacow from './components/restaurantPages/waacow';
import Restaurant from './components/pages/Restaurant';

function App2({handleLogOut}) {
  return (
    <>
      <Router>
        <Navbar handleLogOut={handleLogOut}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/locations' component={Locations} />
          <Route path='/map' component={Mapz} />
          <Route path='/pgpr' component={PGPR} />
          <Route path='/yst' component={YST} />
          <Route path='/yih' component={YIH} />
          <Route path='/utn' component={UTN} />
          <Route path='/usc' component={USC} />
          <Route path='/biz' component={BIZ} />
          <Route path='/mdn' component={MDN} />
          <Route path='/com' component={COM} />
          <Route path='/scp' component={SCP} />
          <Route path='/sde' component={SDE} />
          <Route path='/fass' component={FASS} />
          <Route path='/law' component={LAW} />
          <Route path='/KRNorth' component={KRNorth} />
          <Route path='/KRSouth' component={KRSouth} />
          <Route path='/search' component={Search} />
          <Route path='/favourites2' component={Favourites} />
          <Route path='/favourites' component={Favourites3} />
          <Route path='/rest' component={Restaurants} />
          <Route path='/ariseandshine' component={ariseandshine} />
          <Route path='/barbarblacksheep' component={barbarblacksheep} />
          <Route path='/bistrobox' component={bistrobox} />
          <Route path='/bobertea' component={bobertea} />
          <Route path='/cafedelight' component={cafedelight} />
          <Route path='/centralsquare' component={centralsquare} />
          <Route path='/chopchop' component={chopchop} />
          <Route path='/deck' component={deck} />
          <Route path='/e2kitchen' component={e2kitchen} />
          <Route path='/eurekataste' component={eurekataste} />
          <Route path='/finefood' component={finefood} />
          <Route path='/flashcoffee' component={flashcoffee} />
          <Route path='/flavours' component={flavours} />
          <Route path='/forewordcoffee' component={forewordcoffee} />
          <Route path='/frontier' component={frontier} />
          <Route path='/huggscoffee' component={huggscoffee} />
          <Route path='/hwangs' component={hwangs} />
          <Route path='/jewelcoffee' component={jewelcoffee} />
          <Route path='/koi' component={koi} />
          <Route path='/lejomo' component={lejomo} />
          <Route path='/liangbankungfu' component={liangbankungfu} />
          <Route path='/lijicoffeehouse' component={lijicoffeehouse} />
          <Route path='/liho' component={liho} />
          <Route path='/maxxcoffee' component={maxxcoffee} />
          <Route path='/nami' component={nami} />
          <Route path='/ninefresh' component={ninefresh} />
          <Route path='/pastaexpress' component={pastaexpress} />
          <Route path='/pgpraircon' component={pgpraircon} />
          <Route path='/pgprnonaircon' component={pgprnonaircon} />
          <Route path='/privegrill' component={prive} />
          <Route path='/reedz' component={reedz} />
          <Route path='/riceandstuff' component={riceandstuff} />
          <Route path='/sapore' component={sapore} />
          <Route path='/spinelli' component={spinelli} />
          <Route path='/starbucks' component={starbucks} />
          <Route path='/supersnacks' component={supersnacks} />
          <Route path='/taiwanichiban' component={taiwanichiban} />
          <Route path='/technoedge' component={technoedge} />
          <Route path='/thecoffeehut' component={thecoffeehut} />
          <Route path='/thecoffeeroaster' component={thecoffeeroaster} />
          <Route path='/theroyalsbistro' component={theroyalsbistro} />
          <Route path='/thespread' component={thespread} />
          <Route path='/thesummit' component={thesummit} />
          <Route path='/theteaparty' component={theteaparty} />
          <Route path='/udondonbar' component={udondonbar} />
          <Route path='/unclepenyet' component={unclepenyet} />
          <Route path='/waacow' component={waacow} />
          <Route path='/restaurants' component={Restaurant} />
          <Route path='/fav3' component={Favourites3} />
          <Route path='/review' component={Review} />
          <Route path='/allreviews' component={AllReviews} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App2;
