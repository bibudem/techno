// Logique commune des liens des composants (cartes, parcours, carrousel…).
// Un lien est externe s'il commence par un schéma (https:, mailto:, tel:…) ou par //.
export const EXTERNAL_LINK_PATTERN = /^(?:[a-z][a-z\d+\-.]*:|\/\/)/i;

export function isExternalLink(link) {
  return Boolean(link) && EXTERNAL_LINK_PATTERN.test(link);
}

// Props à étaler sur <Link> de Docusaurus : `to` pour une route interne,
// `href` + nouvel onglet pour un lien externe.
export function getLinkProps(link) {
  if (!link) {
    return {to: '#'};
  }

  if (isExternalLink(link)) {
    return {href: link, target: '_blank', rel: 'noopener noreferrer'};
  }

  return {to: link};
}
