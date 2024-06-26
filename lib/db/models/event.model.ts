import { model, Schema, models, Document } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    venue?: string;
    host?: string;
    createdAt: Date;
    dpImage: string;
    image: string;
    startDate: Date;
    endDate: Date;
    price: string;
    isFree: boolean;
    status: string;
    url?: string;
    category: { _id: string, title: string };
    organizer: { _id: string, firstName: string, lastName: string, username: string, photo: string };
}

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required:true },
    venue: { type: String, required: true },
    host: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    dpImage: { type: String, required: true },
    image: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    price: { type: String },
    isFree: { type: Boolean, default: false },
    status: { type: String, default: "pending"},
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
    ratings: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        rating: { type: Number, min: 1, max: 5, required: true },
        review: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }]
})

const Event = models.Event || model('Event', EventSchema);

export default Event;