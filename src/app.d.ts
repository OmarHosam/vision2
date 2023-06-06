// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	// global.d.ts
	declare interface Window {
		handleForm: (token: string) => void;
		loadCaptcha: () => void;
	}
}