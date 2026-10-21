const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    defaultCommandTimeout: 8000,
    setupNodeEvents(on) {
      on("after:run", (results) => {
        if (!results) return;

        const reportDirectory = path.join(__dirname, "cypress", "reports");
        const reportPath = path.join(reportDirectory, "index.html");
        fs.mkdirSync(reportDirectory, { recursive: true });

        const escapeHtml = (value = "") =>
          String(value).replace(/[&<>"']/g, (character) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
          })[character]);

        const tests = (results.runs || []).flatMap((run) =>
          (run.tests || []).map((test) => {
            const lastAttempt = test.attempts?.[test.attempts.length - 1];
            return {
              spec: run.spec?.relative || "Especificação",
              title: [...(test.title || [])].join(" > "),
              state: test.state || "unknown",
              error: lastAttempt?.error?.message || test.displayError || ""
            };
          })
        );

        const rows = tests.map((test) => `
          <tr>
            <td>${escapeHtml(test.spec)}</td>
            <td>${escapeHtml(test.title)}</td>
            <td class="status ${escapeHtml(test.state)}">${escapeHtml(test.state)}</td>
            <td>${escapeHtml(test.error)}</td>
          </tr>
        `).join("");

        const passed = results.totalPassed ?? tests.filter((test) => test.state === "passed").length;
        const failed = results.totalFailed ?? tests.filter((test) => test.state === "failed").length;
        const pending = (results.totalPending ?? 0) + (results.totalSkipped ?? 0);
        const total = results.totalTests ?? tests.length;
        const date = new Date().toLocaleString("pt-BR");

        const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Relatório Cypress — Swag Labs</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 32px auto; padding: 0 18px; max-width: 1200px; color: #222; }
    h1 { margin-bottom: 6px; } .date { color: #666; }
    .summary { display: flex; flex-wrap: wrap; gap: 12px; margin: 24px 0; }
    .card { border: 1px solid #ddd; border-radius: 8px; padding: 14px 18px; min-width: 110px; }
    .number { display: block; font-size: 26px; font-weight: bold; margin-top: 5px; }
    table { border-collapse: collapse; width: 100%; } th, td { border: 1px solid #ddd; padding: 10px; text-align: left; vertical-align: top; }
    th { background: #f3f3f3; } .status { font-weight: bold; } .passed { color: #16803c; } .failed { color: #c62828; } .pending, .skipped { color: #8a6500; }
    td { overflow-wrap: anywhere; }
  </style>
</head>
<body>
  <h1>Relatório de testes — Swag Labs</h1>
  <p class="date">Gerado em ${escapeHtml(date)} · Cypress E2E</p>
  <section class="summary">
    <div class="card">Total<span class="number">${total}</span></div>
    <div class="card">Aprovados<span class="number passed">${passed}</span></div>
    <div class="card">Reprovados<span class="number failed">${failed}</span></div>
    <div class="card">Pendentes/pulados<span class="number">${pending}</span></div>
  </section>
  <table>
    <thead><tr><th>Arquivo</th><th>Cenário</th><th>Status</th><th>Detalhe do erro</th></tr></thead>
    <tbody>${rows || '<tr><td colspan="4">Nenhum cenário encontrado nesta execução.</td></tr>'}</tbody>
  </table>
</body>
</html>`;

        fs.writeFileSync(reportPath, html, "utf8");
        console.log(`Relatório HTML criado em: ${reportPath}`);
      });
    }
  }
});
