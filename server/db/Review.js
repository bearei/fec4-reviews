import mongoose from 'mongoose';
import db from './index.js';
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  rating: String,
  title: String,
  text: String,
  recommend: String,
  name: String,
  email: String,
  fit: Number,
  itemId: Number,
  helpful: {type: Number, default: 0},
  notHelpful: {type: Number, default: 0},
  inappropriate: Boolean,
}, 
  {
    timestamps: true
  }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
