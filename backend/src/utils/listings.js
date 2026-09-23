import { Listing, Review } from '../models/index.js';

export async function listListings(req, res, type) {
  const { district, q, category, featured, page=1, limit=20, sortBy='createdAt', sortOrder='desc' } = req.query;
  const filter = { type };
  if (district) filter.district = new RegExp(`^${district}$`, 'i');
  if (category) filter.categories = new RegExp(category, 'i');
  if (featured === 'true') filter.featured = true;
  if (q) filter.$or = [{title:new RegExp(q,'i')},{description:new RegExp(q,'i')},{location:new RegExp(q,'i')},{district:new RegExp(q,'i')},{tags:new RegExp(q,'i')}];
  const skip=(Number(page)-1)*Number(limit); const total=await Listing.countDocuments(filter);
  const items=await Listing.find(filter).sort({[sortBy]:sortOrder==='asc'?1:-1}).skip(skip).limit(Number(limit)).lean();
  res.json({data:items,meta:{total,page:Number(page),limit:Number(limit),totalPages:Math.ceil(total/Number(limit))}});
}
export async function getListing(req,res) { const item=await Listing.findById(req.params.id).lean(); if(!item)return res.status(404).json({message:'Not found'}); res.json({data:item}); }
export async function reviews(req,res) { const data=await Review.find({listingId:req.params.id}).populate('userId','name avatar').sort({createdAt:-1}).lean(); res.json({data,meta:{total:data.length,page:1,limit:data.length,totalPages:1}}); }
