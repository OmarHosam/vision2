// global.d.ts
declare interface Window {
    handleForm: (token: string) => void;
    loadCaptcha: () => void;
}