import { Injectable } from '@angular/core';
import { GoodreadsBookEntry } from 'src/app/common/types/goodreads-types';
import { YearStat } from 'src/app/common/types/stat-types';
import { mode } from '../../common/helpers/arrayUtility';

@Injectable({
  providedIn: 'root',
})
export class StatGenerationService {
  constructor() {}

  generateStats(
    goodreadsCSVData: GoodreadsBookEntry[],
    scrapedData?: string[]
  ): YearStat[] {
    const statsForYear = this.filterStatsByYear(goodreadsCSVData, scrapedData);
    const stats = this.buildStats(statsForYear);
    console.log(stats);
    return stats;
  }

  filterStatsByYear(
    goodreadsCSVData: GoodreadsBookEntry[],
    scrapedData?: string[],
    year: string = '2022'
  ) {
    let statsForYear: GoodreadsBookEntry[] = [];
    if (scrapedData) {
      statsForYear = goodreadsCSVData.filter(
        (entry) =>
          entry.dateRead?.includes(year) ||
          scrapedData.find((title) => entry.title === title)
      );
    } else {
      statsForYear = goodreadsCSVData.filter((entry) =>
        entry.dateRead?.includes(year)
      );
    }
    return statsForYear;
  }

  buildStats(statsForYear: GoodreadsBookEntry[]): YearStat[] {
    const a = this.buildBooksReadStat(statsForYear);
    const b = this.buildFavoriteAuthorStat(statsForYear);
    const c = this.buildTotalPagesStat(statsForYear);
    const d = this.buildAverageBookLengthStat(statsForYear);
    const e = this.buildAverageRatingStat(statsForYear);
    const f = this.buildFavoriteBookStats(statsForYear);
    const g = this.buildBookAgeStat(statsForYear);
    const h = this.buildCelebrationStat(statsForYear);
    return [a, b, c, d, e, f, g, h];
  }

  buildBooksReadStat(statsForYear: GoodreadsBookEntry[]): YearStat {
    const booksRead = statsForYear.length;
    const descriptionText =
      booksRead > 20 ? `That's a lot of books!` : 'Keep it up!';
    return {
      titleText: `You read ${booksRead} books in 2022`,
      imageName: 'booksRead',
      imageAlt: 'A woman looking at her bookshelves',
      descriptionText,
    };
  }

  buildFavoriteAuthorStat(statsForYear: GoodreadsBookEntry[]): YearStat {
    const authors = statsForYear.map((x) => x.author);
    const mostCommonAuthor = mode(authors)[0];
    return {
      titleText: `You read the most books by ${mostCommonAuthor}`,
      imageName: 'favoriteAuthor',
      imageAlt: 'A woman writing at a desk',
      descriptionText: '...Maybe I should check them out!',
    };
  }

  buildTotalPagesStat(statsForYear: GoodreadsBookEntry[]): YearStat {
    const pages = statsForYear
      .filter((x) => x.numberOfPages !== null)
      .map((x) => x.numberOfPages);
    const totalPages = pages.reduce(
      (partialSum, currentPages) => partialSum! + currentPages!,
      0
    );
    return {
      titleText: `You read ${totalPages} pages this year`,
      imageName: 'totalPages',
      imageAlt: 'A woman turning a page in a book',
      descriptionText: 'Keep on turning!',
    };
  }

  buildAverageBookLengthStat(statsForYear: GoodreadsBookEntry[]): YearStat {
    const pages = statsForYear
      .filter((x) => x.numberOfPages !== null)
      .map((x) => x.numberOfPages);
    const totalPages = pages.reduce(
      (partialSum, currentPages) => partialSum! + currentPages!,
      0
    );
    const averagePagesPerBook = Math.round(totalPages! / pages.length);
    const descriptionText =
      averagePagesPerBook > 400
        ? `You've conquered the big book fear!`
        : averagePagesPerBook < 200
        ? 'Short and sweet!'
        : 'Medium length books are your thing!';
    return {
      titleText: `Your average book length was ${averagePagesPerBook} pages`,
      imageName: 'averagePages',
      imageAlt: 'A woman stood to the side of a book, turning the cover over',
      descriptionText,
    };
  }

  buildAverageRatingStat(statsForYear: GoodreadsBookEntry[]): YearStat {
    const ratings = statsForYear
      .filter((x) => x.myRating !== 0)
      .map((y) => y.myRating);
    const totalRatings = ratings.reduce(
      (partialSum, currentRatings) => partialSum + currentRatings,
      0
    );
    const averageRating = Math.round(totalRatings / ratings.length);
    const descriptionText =
      averageRating >= 4
        ? 'You love the books you read!'
        : averageRating <= 2
        ? 'Ouch. Harsh.'
        : `A fair critic!`;
    return {
      titleText: `Your average rating was ${averageRating} stars!`,
      imageName: 'averageRating',
      imageAlt: 'A woman looking at reviews, with a star in her hand',
      descriptionText,
    };
  }

  buildFavoriteBookStats(statsForYear: GoodreadsBookEntry[]): YearStat {
    const titlesWithRatings = statsForYear.map(({ title, myRating }) => ({
      title,
      myRating,
    }));
    const highestRated = titlesWithRatings.reduce((prev, curr) => {
      return prev.myRating > curr.myRating ? prev : curr;
    });
    return {
      titleText: `One of your favorite books this year was ${highestRated.title}`,
      imageName: 'favoriteBook',
      imageAlt: 'A woman proudly showing a book!',
      descriptionText: `You rated it ${highestRated.myRating} stars!`,
    };
  }

  buildBookAgeStat(statsForYear: GoodreadsBookEntry[]): YearStat {
    const bookAges = statsForYear
      .filter((x) => x.originalPublicationYear !== null)
      .map((x) => x.originalPublicationYear!);
    console.log(bookAges);
    const ageSum = bookAges.reduce(
      (partialSum, currentAgeSum) => partialSum + currentAgeSum,
      0
    );
    const averageAge = Math.round(ageSum / bookAges.length);
    const descriptionText =
      averageAge >= 2015
        ? 'You love newer books!'
        : averageAge < 2000
        ? 'You love older books!'
        : 'You love books old and new!';
    return {
      titleText: `The average publiciation year of your books was ${averageAge}`,
      imageName: 'bookAge',
      imageAlt: 'A woman sat down with a cup of tea, reading a book',
      descriptionText,
    };
  }

  buildCelebrationStat(statsForYear: GoodreadsBookEntry[]): YearStat {
    return {
      titleText: 'Celebrating a year of awesome reading!',
      imageName: 'celebration',
      imageAlt: 'Two women celebrating',
      descriptionText: `Here's to 2023! Thank you`,
    };
  }
}
