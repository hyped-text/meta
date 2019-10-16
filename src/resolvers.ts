import { Text } from './types';

export default {
  Query: {
    async author(_: any, { id }: any, { dataSources }: any) {
      return dataSources.DBpedia.getAuthorByWikiUrl(id);
    },
    async texts(_: any, { options }: any, { dataSources }: any) {
      return dataSources.gutenberg.getAllTexts(options);
    },
  },
  Mutation: {
    async saveText(_: any, { textInput }: { textInput: Text }, { dataSources }: any) {
      return dataSources.graphStore.upsertText(textInput);
    },
  },
  Author: {
    async texts(author: any, { name }: any, { dataSources }: any) {
      return dataSources.gutenberg.getAuthorBooks(author.id);
    },
  },
  Text: {
    async authors(text: Text, _: any, { dataSources }: any) {
      const authors = await Promise.all(
        (text.authors || []).map((authorWikiUrl: any) => dataSources.DBpedia.getAuthorByWikiUrl(authorWikiUrl))
      );

      return authors.filter(Boolean);
    },
  },
};
