import { devices, PlaywrightTestConfig} from '@playwright/test';
import path from "path";

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "chrome",
      use: {
    ...devices["Desktop Chrome"]
  }
    },
    {
      name: "firefox",
      use: {
    ...devices["Desktop Firefox"]
  }
    }

  ],
  testMatch: ["tests/**/*.test.ts"],
  timeout: 100000,
  reporter: "html",
  use: {
    headless: true,
    screenshot: "on",
    video: "on",
    viewport: {width:1536, height:816},
    launchOptions: {
     args: ["--start-maximized"],
    },
  },
  retries: 0,
  globalSetup: path.resolve(__dirname, "src/utils/globalSetup.ts"),
};

export default config;