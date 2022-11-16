import { atom } from 'recoil';

export const appState = atom({
    key: 'appState',
    default: {
        json: null,
        img: {
            src: null,
            hasError: false,
        },
        button4Enabled: false,
        phrase: '',
        phraseMatched: false,
        counter: 0,
        increment: function () {
            console.log("pass increment function");
        }
    }
})