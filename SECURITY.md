# Security Policy

## Supported Versions

We aim to support the latest stable release of Evo AI and apply security updates as soon as possible. Please use the most recent version for the best security.

---

## Reporting a Vulnerability

If you discover a security vulnerability in Evo AI, **please report it privately** and responsibly. Do **not** open a public issue.

**To report a vulnerability:**

- Email: [contato@evolution-api.com](mailto:contato@evolution-api.com)
- Include as much detail as possible, including:
  - Steps to reproduce the issue
  - Potential impact
  - Your suggestions (if any) for remediation

You will receive a response as soon as possible. We may request additional information to fully understand and address the issue.

---

## Security Best Practices

- **Keep your installation up to date.**  
  Always use the latest stable version and regularly check for updates.

- **Environment Variables:**  
  Store all secrets, credentials, and keys in environment variables or secrets managers.  
  Never commit sensitive information to the repository.

- **Authentication:**  
  Evo AI uses JWT authentication with expiration, email verification, and account lockout for brute-force protection.

- **Passwords:**  
  All passwords are securely hashed with bcrypt and random salt.

- **Access Control:**  
  Access to sensitive endpoints is protected via role-based checks and resource ownership verification.

- **Audit Logs:**  
  Important administrative actions are logged for traceability.

- **Input Validation:**  
  All inputs are validated using Pydantic schemas to prevent injection attacks.

---

## Responsible Disclosure

Please give us a reasonable time to investigate and address any reported security issues before any public disclosure.

---

## Project Security Features

- JWT tokens with limited lifetime
- Secure password hashing (bcrypt)
- Email verification with one-time tokens
- Account lockout after multiple failed login attempts
- Resource-based access control
- Strict input validation for all APIs
- Separation between regular and administrative users

---

## License

All security contributions are made under the [Apache License 2.0](./LICENSE).

---

Thank you for helping keep Evo AI and its users safe!
