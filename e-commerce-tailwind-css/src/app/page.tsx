import Image from "next/image";
import NAV from "./components/nav";
import Home from "./components/home";
import Progressor from "./components/progressor";
import Product from "./components/product";
import Banner from "./components/banner";
import Featuer from "./components/featuer";
import OfferList from "./components/offer";
import { BlockList } from "net";
import Block from "./components/block";
import Reservation from "./components/reservation";
import Footer from "./components/footer";
export default function Main() {
  return ( 
    <div className="bg-slate-800" > 
      <NAV/>
      <Home/>
      <Progressor/>
      <Product/>
      <Banner/>
      <Featuer/>
      <OfferList/>
      <Block/>
      <Reservation/>
      <Footer/>
    </div>
  )}
