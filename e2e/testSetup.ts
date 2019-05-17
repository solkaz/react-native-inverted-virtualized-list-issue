// This _must_ be renamed because the typings for Detox declare `detox` as a global const
import { init, cleanup } from "detox";
const adapter = require("detox/runners/jest/adapter");

const config = require("./package.json").detox;

jest.setTimeout(120000);
(jasmine as any).getEnv().addReporter(adapter);

beforeAll(async () => {
  await init(config, { initGlobals: false });
});

beforeEach(async () => {
  await adapter.beforeEach();
  await device.reloadReactNative();
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});
