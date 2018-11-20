export interface Cloudcast {
    tags: Array<string>;
    play_count: number;
    user: Object;
    key: string;
    created_time: string;       // date
    slug: string;
    favorite_count: number;
    listener_count: number;
    name: string;
    url: string;
    pictures: Array<any>;
    repost_count: number;
    updated_time: string;       // date
    comment_count: number;
}

export interface CloudcastBlob {
    name: string;
    data: Array<Cloudcast>;
    paging: string;

}
