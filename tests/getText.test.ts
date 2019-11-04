import { createTestClient } from 'apollo-server-testing';
import server from '../src/apollo';
import { GET_TEXT, SAVE_TEXT, SAVE_AUTHOR } from './fixtures/queries';
import fixtures from './fixtures/inputs/saveText';
import authors from './fixtures/inputs/saveAuthor';
import { prepareDb } from './helpers/prepareDb';

const { query, mutate } = createTestClient(server) as any;

describe('queries/getText', () => {
  beforeAll(async () => {
    await prepareDb();
  });

  test(`gets a text if it exists`, async () => {
    const text = fixtures['mein-kampf'];

    const mutationResponse = await mutate({
      mutation: SAVE_TEXT,
      variables: {
        text,
      },
    });

    const id = mutationResponse.data.saveText;

    expect(id.length).toBeGreaterThan(0);

    const {
      data: { text: fromServer },
    } = await query({
      query: GET_TEXT,
      variables: {
        id,
      },
    });
    expect(fromServer.title).toBe(text.title);
  });

  test(`expands text's authors if it have them`, async () => {
    const juleVerne = authors['jules-verne'];

    const {
      data: { saveAuthor: authorId },
    } = await mutate({
      mutation: SAVE_AUTHOR,
      variables: {
        author: juleVerne,
      },
    });

    const julesVerneBook = fixtures['around-the-world-in-80-days'];

    const mutationResponse = await mutate({
      mutation: SAVE_TEXT,
      variables: {
        text: {
          ...julesVerneBook,
          authors: [authorId],
        },
      },
    });

    const id = mutationResponse.data.saveText;

    expect(id.length).toBeGreaterThan(0);

    const {
      data: { text },
    } = await query({
      query: GET_TEXT,
      variables: {
        id,
      },
    });
    expect(text.authors).toEqual([
      {
        name: 'Jules Verne',
        id: authorId,
        thumbnail: juleVerne.thumbnail,
        birthdate: juleVerne.birthdate,
        deathdate: juleVerne.deathdate,
        alias: juleVerne.alias,
      },
    ]);
  });

  test(`returns null if author doesn't exist`, async () => {
    const {
      data: { text },
    } = await query({
      query: GET_TEXT,
      variables: {
        id: 'invalid',
      },
    });
    expect(text).toBe(null);
  });
});
