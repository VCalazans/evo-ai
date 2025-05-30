# Contributing to Evo AI

We welcome contributions from the community! Please follow the guidelines below to help us maintain a high-quality, consistent, and secure project.

---

## 📋 Prerequisites

- **Backend**: Python 3.10+, PostgreSQL 13+, Redis 6+, Git, Make
- **Frontend**: Node.js 18+, pnpm (recommended), or npm/yarn

---

## 🚀 Setting Up the Development Environment

### 1. Clone the Repository

```bash
git clone https://github.com/EvolutionAPI/evo-ai.git
cd evo-ai
````

### 2. Backend Setup

```bash
make venv
source venv/bin/activate  # On Linux/Mac
# Or: venv\Scripts\activate  # On Windows

make install-dev

cp .env.example .env
# Edit .env with your local settings

make alembic-upgrade
make seed-all
```

### 3. Frontend Setup

```bash
cd frontend
pnpm install           # Or: npm install / yarn install

cp .env.example .env
# Edit .env with your API URL, e.g., NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. Running the Application

* **Backend**:

  ```bash
  make run
  # Backend: http://localhost:8000
  ```

* **Frontend**:

  ```bash
  cd frontend
  pnpm dev
  # Frontend: http://localhost:3000
  ```

---

## 📝 Issue and Pull Request Guidelines

* **Check for existing issues** before creating a new one.
* **Describe bugs or feature requests** clearly with steps to reproduce (if applicable).
* **Pull Requests** should:

  * Reference relevant issues (e.g., `Fixes #123`)
  * Focus on one change at a time
  * Include tests where applicable
  * Pass linting and formatting checks

---

## 🧑‍💻 Code Standards

* **All code comments, docstrings, and log messages must be in English**
* **Variable, function, and class names**: English only
* **API error messages and documentation**: English
* **Commit messages**: English and follow [Conventional Commits](https://www.conventionalcommits.org/)

  * Example: `feat(auth): add password reset functionality`
* **Indentation**: 4 spaces
* **Max line length**: 79 characters

---

## 📂 Project Structure and Best Practices

* Follow the directory structure and naming conventions described in `.cursorrules`.
* **Tests** should be placed under `tests/` and follow the `test_*` naming convention.
* All routes require input validation using Pydantic schemas.
* Use transactions for database operations affecting multiple records.
* Document all public functions and classes.
* Keep `.env.example` updated when adding environment variables.
* Sensitive values must be set via environment variables and never hard-coded.

---

## 🐳 Docker Development

* **Build and start stack:**

  ```bash
  make docker-build
  make docker-up
  ```
* **Seed database:**

  ```bash
  make docker-seed
  ```
* **Stop stack:**

  ```bash
  make docker-down
  ```

---

## 🔐 Contributor License

By contributing to this repository, you agree that your contributions will be licensed under the [Apache License 2.0](./LICENSE).

---

## 💬 Community and Support

* [WhatsApp Group](https://evolution-api.com/whatsapp)
* [Discord Community](https://evolution-api.com/discord)
* [Official Documentation](https://doc.evolution-api.com)

---

Thank you for contributing to Evo AI!
