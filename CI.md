# Continuous Integration (CI) Instructions

This project includes an automated GitHub Actions CI pipeline configured in `.github/workflows/ci.yml`.

## Trigger Conditions
The CI workflow automatically executes on **every `git push` to the `main` branch** as well as on any Pull Request targeting `main`.

---

## CI Pipeline Jobs

### 1. Backend (Laravel API)
- **Environment:** Ubuntu Linux, PHP 8.3 with SQLite & required extensions.
- **Actions:**
  - Installs PHP dependencies via Composer.
  - Generates application key.
  - Executes all backend feature and unit tests using **PHPUnit** (`php artisan test`).

### 2. Frontend (React TypeScript)
- **Environment:** Ubuntu Linux, Node.js 20.
- **Actions:**
  - Installs Node dependencies (`npm install`).
  - Lints codebase (`npm run lint`).
  - Performs TypeScript type checking (`npx tsc --noEmit`).
  - Builds the production bundle (`npm run build`).
  - Runs automated component and unit tests (`npm test` via Vitest).

---

## Local Verification Commands

Before pushing changes to `main`, you can run the verification checks locally:

### Backend Tests
```bash
cd backend/laravel-api
php artisan test
```

### Frontend Checks & Tests
```bash
cd frontend
npm run lint
npx tsc --noEmit
npm run build
npm test
```
