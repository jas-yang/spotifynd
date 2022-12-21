import type { Types } from "mongoose";
import { Schema, model } from "mongoose";

export type Album = {
    _id: Types.ObjectId;


};

export type PopulatedAlbum = {

};

const AlbumSchema = new Schema({

});

const AlbumModel = model<Album>("Album", AlbumSchema);
export default AlbumModel;