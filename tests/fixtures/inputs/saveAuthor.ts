import { HashMap, SaveAuthorInput, DataSource } from '../../../src/common/types';

const authors: HashMap<SaveAuthorInput> = {
  ['john-doe']: {
    id: null,
    xid: '798b89cd-b739-4e9e-88ad-c932ad82f11e',
    source: DataSource.Gutenberg,
    name: 'John Doe',
    alias: ['Butcher', 'Mad John'],
    thumbnail: null,
    birthdate: '1991-10-26T23:26:18.092Z',
    deathdate: null,
    texts: [],
  },
  ['real-bill']: {
    id: null,
    xid: 'aff29c8f-1afa-4ca4-ac10-7a89f90e55fa',
    source: DataSource.Gutenberg,
    name: 'Real Bill',
    alias: ['Real Feel'],
    thumbnail: 'https://bill.com/my.png',
    birthdate: '1960-09-15T00:00:00.092Z',
    deathdate: '1999-07-11T01:01:02.092Z',
    texts: [],
  },
  ['jade-blade']: {
    id: null,
    xid: 'c7f0b195-a9fb-4f97-bdf3-447ba4c78887',
    source: DataSource.Gutenberg,
    name: 'Jade Blade',
    alias: ['Shark'],
    thumbnail: 'https://facebook.com/shark/avatar.jpg',
    birthdate: '1989-09-21T00:00:00.092Z',
    deathdate: null,
    texts: [],
  },
  ['jill-kill']: {
    id: null,
    xid: 'c2b85f6d-821b-448b-8308-e90dce7417e1',
    source: DataSource.Gutenberg,
    name: 'Jill Kill',
    alias: ['Jelly'],
    thumbnail: 'https://facebook.com/jelly/avatar.jpg',
    birthdate: '1990-10-21T00:00:00.092Z',
    deathdate: null,
    texts: [],
  },
  ['dee-doe']: {
    id: null,
    xid: '5aa04faf-1ab7-47ee-8fbf-d613c4e60fa4',
    source: DataSource.Gutenberg,
    name: 'Dee Doe',
    alias: ['Ding', 'Dee', 'Dong'],
    thumbnail: 'https://facebook.com/ding/dong.jpg',
    birthdate: '1985-01-01T00:00:00.092Z',
    deathdate: null,
    texts: [],
  },
  ['jules-verne']: {
    id: null,
    xid: 'c33984bb-6088-49d0-8088-76aaa4cf1e28',
    source: DataSource.Gutenberg,
    name: 'Jules Verne',
    alias: ['Jules Gabriel Verne'],
    thumbnail: 'https://en.wikipedia.org/wiki/Jules_Verne#/media/File:Jules_Verne_by_%C3%89tienne_Carjat.jpg',
    birthdate: '1828-02-08T00:00:00.092Z',
    deathdate: '1905-03-24T00:00:00.092Z',
    texts: [],
  },
};

export default authors;
