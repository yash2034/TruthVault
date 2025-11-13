import * as wasm from "./nautilus_wasm_bg.wasm";
export * from "./nautilus_wasm_bg.js";
import { __wbg_set_wasm } from "./nautilus_wasm_bg.js";
__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
