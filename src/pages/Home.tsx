import { A } from '@solidjs/router';
import { createSignal, type Component, createEffect, createMemo, Show } from 'solid-js';

const Home = () => {
  const session = localStorage.getItem('session');
  const [loggedIn, setLoggedIn] = createSignal(Boolean(session));

  function login() {
    // fetch later, for now, it simply sets the loggedIn
    setLoggedIn(true);
    localStorage.setItem('session', 'test_token');
  }

  return (
    <>
      <p>Üdvözlünk a Kőbányai Szent László Gimnázium heti +2 óra testnevelés választó felületén. {!loggedIn() && 'Jelentkezz be a felülethez való hozzáféréshez.'}</p>

      <Show when={!loggedIn()}>
        <form action="" method="get">
          <input type="text" placeholder='email'/>
          <input type="password" placeholder='jelszó'/>

          <button onclick={login} type='submit'>Log in</button>
        </form>
      </Show>

      <Show when={loggedIn()}>
        <p>Be vagy jelentkezve. <A href='/foglalkozasok/'>Tovább a foglalkozasokhoz →</A></p>
      </Show>
    </>
  );
};

export default Home;