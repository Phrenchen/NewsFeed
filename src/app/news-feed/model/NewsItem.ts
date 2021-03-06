/**
 * - a news item can be seen as an news topic which can be updated.
 * - users can make the item sticky -> collecting topics they want to keep informed about
 * - examples for topics:
 *      - laws (update news when they change)
 *          - environment
 *          - traffic regulations
 *      - special offers
 *      - traffic situation at current location (possible?)
 */

export interface NewsItem {
    id: number;
    isRead: boolean;
    isFavourite: boolean;

    // content meta
    dateCreated: Date;
    dateUpdated: Date;
    dateStart: Date;        // is displayed from this date until
    dateEnd: Date;          // this date

    dateRead: Date;
    seoDescription: string;
    sortOrder: string;

    // content
    title: string;                  // HTML
    shortdescription: string;       // HTML
    longdescription: string;        // HTML
    thumbnail: string;
    images: string[];


}

