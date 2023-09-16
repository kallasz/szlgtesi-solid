import { Component, For, createSignal } from "solid-js";
import Foglalkozas from "../components/Foglalkozas";
import { useNavigate } from "@solidjs/router";

const Foglalkozasok: Component = (props) => {
  const authorized = localStorage.getItem('session');
  const navigate = useNavigate();
  if (!authorized) {
    navigate("/", { replace: true });
  }

  const data = {
    foglalkozasok: [
      {cim: 'foglalkozas1', leiras: 'leiras1', foglalkozas_id: 'foglalkozas1', idopont: 'szerda -1', dij: 1000, badge: 'dse'},
      {cim: 'foglalkozas2', leiras: 'leiras2 aka asd', foglalkozas_id: 'asd', idopont: 'szerda -100', dij: 0, badge: 'mindennapos tesi'}
    ],
    valasztott_foglalkozas: 'asd' as any 
  }

  data.valasztott_foglalkozas = createSignal(data.valasztott_foglalkozas);

  return (
    <For each={data.foglalkozasok} fallback={<div>foglalkozások töltése</div>}>
      {(item) => <Foglalkozas {...item} valasztott_foglalkozas={data.valasztott_foglalkozas}/>}
    </For>
  );
}

export default Foglalkozasok;