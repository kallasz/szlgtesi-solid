import { Signal } from "solid-js";
import { Button } from "./Button";

interface FoglalkozasIF {
  cim: string;
  leiras: string;
  idopont: string;
  valasztott_foglalkozas: Signal<unknown>;
  foglalkozas_id: string;
  dij: number;
  badge: string;
}

const Foglalkozas = (props: FoglalkozasIF) => {
  const [valasztott_foglalkozas, setValasztott_foglalkozas] = props.valasztott_foglalkozas;

  return (
    <>
      <h1>{props.cim}</h1>
      <p>{props.leiras}</p>
      <p>{props.idopont}</p>

      <Button onclick={() => {
        valasztott_foglalkozas() != props.foglalkozas_id ? 
          setValasztott_foglalkozas(props.foglalkozas_id) : 
          setValasztott_foglalkozas(null)}}>
        {
          valasztott_foglalkozas() == props.foglalkozas_id ? 
            'Lejelentkezés' : 
            valasztott_foglalkozas() != null ? 
            'Átjelentkezés' : 'Jelentkezés'
        }</Button>
    </>
  );
}

export default Foglalkozas;