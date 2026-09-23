import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

export async function auth(req, res, next) {
  try {
    const token = (req.headers.authorization || '').replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Authentication required' });
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.id).select('-password');
    if (!user) return res.status(401).json({ message: 'Invalid session' });
    req.user = user; next();
  } catch { res.status(401).json({ message: 'Invalid or expired token' }); }
}

export function roles(...allowed) { return (req,res,next) => allowed.includes(req.user.role) ? next() : res.status(403).json({message:'Forbidden'}); }
