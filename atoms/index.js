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
        button5Enabled: false,
        buttonSubmitEnabled: false,
        counter: 0,
        increment: function () {
            console.log("pass increment function");
        }
    }
})