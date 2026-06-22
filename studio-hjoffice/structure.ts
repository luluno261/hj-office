import type { StructureResolver } from 'sanity/structure';

const singleton = (
  S: Parameters<StructureResolver>[0],
  typeName: string,
  title: string,
  documentId: string
) =>
  S.listItem()
    .title(title)
    .id(documentId)
    .child(
      S.document().schemaType(typeName).documentId(documentId).title(title)
    );

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenu')
    .items([
      singleton(S, 'siteSettings', 'Paramètres du site', 'siteSettings'),
      S.divider(),
      S.listItem()
        .title('Hero')
        .child(S.documentTypeList('heroSlide').title('Slides Hero')),
      S.listItem()
        .title("Pôles d'expertise")
        .child(S.documentTypeList('service').title("Pôles d'expertise")),
      singleton(S, 'aboutPage', 'À propos', 'aboutPage'),
      singleton(S, 'facilitiesPage', 'Notre espace', 'facilitiesPage'),
      singleton(S, 'contactPage', 'Contact', 'contactPage'),
      S.listItem()
        .title('Équipe')
        .child(S.documentTypeList('teamMember').title("Membres de l'équipe")),
      S.divider(),
      S.listItem()
        .title('Blog')
        .child(S.documentTypeList('post').title('Articles')),
    ]);
