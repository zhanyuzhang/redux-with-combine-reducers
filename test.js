import { createStore } from './redux';
// import { createStore } from 'redux'
import reducer from './reducers/font';

const store = createStore(reducer);

// cache doms
const $content = document.querySelector('.content');
const $btns = document.querySelectorAll('.toolbar button');

[].forEach.call($btns, (btn, i) => {
  btn.onclick = () => {
    store.dispatch({
      type: btn.dataset.type
    })
  }
})

store.subscribe(() => {
  const { changeFontColor, changeFontSize } = store.getState();
  $content.style.color = changeFontColor;
  $content.style.fontSize = changeFontSize;
  // console.log(store.getState());
})
