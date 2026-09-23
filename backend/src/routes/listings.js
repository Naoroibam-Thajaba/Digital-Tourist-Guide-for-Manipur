import { Router } from 'express';
import { Listing, Review } from '../models/index.js';
import { auth } from '../middleware/auth.js';
import { listListings, getListing, reviews } from '../utils/listings.js';
const router=Router();
const types=['homestay','hotel','restaurant','guide','destination','heritage','adventure','shopping','transport'];
const plural={homestay:'homestays',hotel:'hotels',restaurant:'restaurants',guide:'guides',destination:'destinations',heritage:'heritage',adventure:'adventures',shopping:'shopping',transport:'transports'};
for(const type of types){ const p=plural[type]; router.get('/'+p, (req,res)=>listListings(req,res,type)); router.get('/'+p+'/:id',getListing); router.get('/'+p+'/:id/reviews',reviews); }
router.post('/listings/:id/reviews',auth,async(req,res)=>{const {rating,comment}=req.body;const listing=await Listing.findById(req.params.id);if(!listing)return res.status(404).json({message:'Listing not found'});const review=await Review.create({userId:req.user._id,listingId:listing._id,rating,comment,type:listing.type});const agg=await Review.aggregate([{$match:{listingId:listing._id}},{$group:{_id:null,avg:{$avg:'$rating'},count:{$sum:1}}}]);listing.rating=Number((agg[0]?.avg||0).toFixed(1));listing.reviewCount=agg[0]?.count||0;await listing.save();res.status(201).json({data:review})});
export default router;
