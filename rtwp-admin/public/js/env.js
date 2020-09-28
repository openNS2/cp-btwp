// replaced as env.js at runtime by envsubst
(function (window) {
  window._env = window._env || { keycloak: {} };
  window._env.keycloak.url = 'https://rtwp-keycloak.cfapps.us10.hana.ondemand.com/auth' || 'http://localhost:8080/auth';
  window._env.keycloak.enabled = 'true' || 'false';
})(this);