export interface GoodreadsBookEntry {
  bookId: number;
  title: string;
  author: string;
  authorLF?: string;
  additionalAuthors?: string;
  isbn?: string;
  isbn13?: string;
  myRating?: number;
  averageRating?: number;
  publisher?: string;
  binding?: string;
  numberOfPages?: number;
  yearPublished?: number;
  originalPublicationYear: number;
  dateRead?: Date;
  dateAdded?: Date;
  bookshelves?: string;
  bookshelvesWithPositions?: string;
  exclusiveShelf?: string;
  myReview?: string;
  spoiler?: boolean;
  privateNotes?: string;
  readCount?: number;
  ownedCopies?: number;
}
