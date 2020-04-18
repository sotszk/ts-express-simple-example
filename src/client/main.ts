import { Health } from './../types/api'

const init = () => {
  const btn = document.querySelector('#ping') as HTMLButtonElement;
  btn.addEventListener('click', evt => {
    evt.preventDefault();
    window.fetch('http://localhost:8888/api/health').then((res): Promise<Health> => res.json()).then((data) => console.log(data.message))
  })
}

window.addEventListener('DOMContentLoaded', init);
