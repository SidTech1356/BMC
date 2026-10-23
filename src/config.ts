/**
 * ============================================================
 *  School server configuration
 * ============================================================
 *  This is the ONLY place the backend (Apps Script Web App exec URL) is
 *  configured. There is no setting for it anywhere on the live website -
 *  update it here, commit, and the GitHub Actions workflow rebuilds and
 *  redeploys the site automatically.
 *
 *  To update: replace the URL below with the new deployment's exec URL
 *  (Apps Script editor -> Deploy -> Manage deployments -> Web app URL),
 *  then commit + push to the `main` branch.
 * ============================================================ */
export const APPS_SCRIPT_EXEC_URL =
  'https://script.google.com/macros/s/AKfycbwI_fwcjIRVfwnlW4iUyo4CD4LuPCuAdqrBTTtGglML8kLExvq-LIRW9pjexH8A2JeaGw/exec';
