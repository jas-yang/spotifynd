import type { Types } from "mongoose";
import { Schema, model } from "mongoose";

export type User = {
    _id: Types.ObjectId; //mongoDB

    /** https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 */
    country: string;

    display_name: string;

    email: string;

    spotify_url: string;

    /** A link to the Spotify Web API endpoint for this user. */
    href: string;

    /** https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids */
    spotifyID: string;

    /** Array of the source URL of the image. */
    images: Array<string>;

    /** https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids */
    spotifyURI: string;

    /** https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-album */
    savedAlbums: Array<Types.ObjectId>;
};

export type PopulatedUser = {

};

const UserSchema = new Schema({
    country: {
        type: String,
        required: false
    },
    display_name: {
        type: String,
        required: false 
    },
    email: {
        type: String,
        required: false
    },
    spotify_url: {
        type: String,
        required: false
    },
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
    spotifyURI: {
        type: String,
        required: false
    },
    savedAlbums: [{
        type: Schema.Types.ObjectId,
        required: false,
        ref: "Album"
    }],
});

const UserModel = model<User>("User", UserSchema);
export default UserModel;