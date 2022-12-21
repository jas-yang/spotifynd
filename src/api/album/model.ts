import type { Types } from "mongoose";
import { Schema, model } from "mongoose";

export type Album = {
    _id: Types.ObjectId;
    album_type: string;
    total_tracks: number;

    /**Array of spotify URLs for this album */
    external_urls: Array<string>;

    /** A link to the Spotify Web API endpoint for this user. */
    href: string;

    /** https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids */
    spotifyID: string;

    /** Array of the source URL of the image. */
    images: Array<string>;

    name: string;

    release_date: string;

    /** https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids */
    spotifyURI: string;

    /** Array of artists for this album */
    artists: Array<Types.ObjectId>

    /** Array of tracks of this album */
    tracks: Array<Types.ObjectId>
};

export type PopulatedAlbum = {

};

const AlbumSchema = new Schema({
    album_type: {
        type: String,
        required: true
    },
    external_urls: [{
        type: String,
        required: false
    }],
    href: {
        type: String,
        required: false
    },
    spotifyID: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: false
    }],
    name: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: false
    },
    spotifyURI: {
        type: String,
        required: false
    },
    artists: [{
        type: Schema.Types.ObjectId,
        required: false,
        ref: "Artist"
    }],
    tracks: [{
        type: Schema.Types.ObjectId,
        required: false,
        ref: "Track"
    }]
});

const AlbumModel = model<Album>("Album", AlbumSchema);
export default AlbumModel;