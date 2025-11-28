Step 1 – Create Folder & Initialize Project
mkdir playwright-saucedemo
cd playwright-saucedemo
npm init -y

📍 Step 2 – Install Playwright
npm install @playwright/test

Install browser binaries:

npx playwright install

📍 Step 3 – Create Project Structure
📁 playwright-saucedemo/
├─ 📁 pages/ → Page Object Model files
├─ 📁 tests/ → Test Specs
├─ 📁 test-data/ → Separate login credentials
├─ 📁 reports/ → Test report output
├─ 📄 playwright.config.js → Global configuration
├─ 📄 package.json
├─ 📄 README.md
├─ 📄 .gitignore

📌 3. Running Tests

Run all tests (Headed mode off → Fast execution):

npx playwright test

Run test with UI mode:

npx playwright test --ui

Run only a specific test:

npx playwright test tests/login.spec.js

npx playwright codegen https://www.saucedemo.com


npx playwright show-report

📌 4. Test Data Usage

Stored under:

test-data/users.js
