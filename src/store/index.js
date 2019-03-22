import configureStore from "./configureStore";
const { store, persiststore } = configureStore();
export { persiststore, store as default };
