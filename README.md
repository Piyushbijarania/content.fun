Content.fun MVP – Creator–User Platform Development Guide
1. Overview

Content.fun is a decentralized-style platform where creators can upload digital content, 
list it for sale, and users can buy or collect it using a marketplace model. The MVP focuses 
on the basic creator–user–market flow without real payments, but fully simulates the structure.


Tech Stack:
- Next.js (Full-stack framework)
- TypeScript + TailwindCSS
- PostgreSQL + Prisma ORM
- Cloudinary (for media upload)
- NextAuth (role-based authentication)
- Optional: Stripe sandbox for payment simulation

2. Backend Development Workflow

Setup includes Node.js, PostgreSQL, Prisma, and environment configuration. 
Routes handle creator uploads, listings, and user interactions.


Build Order:
1. Setup environment (Node, DB, Cloudinary keys)
2. Configure Prisma models (Creator, User, Content, Market, Trade, Holding)
3. Implement NextAuth for JWT-based authentication
4. Add role-based middleware (check if Creator/User)
5. Implement upload & list routes for Creators
6. Implement deposit & buy routes for Users
7. Test all routes with Postman


Key Backend Snippets:
- Prisma connection setup
- JWT/NextAuth config
- Cloudinary integration
- Secure route middleware
- DB transaction for trade execution

3. API Documentation
Method	Route	Role	Description	Auth
POST	/api/auth/register	User/Creator	Register account	No
POST	/api/auth/login	All	Login & get session	No
GET	/api/auth/me	All	Get current account info	Yes
POST	/api/creators/upload	Creator	Upload content	Yes
POST	/api/creators/createMarket	Creator	List content for sale	Yes
GET	/api/creators/stats	Creator	View stats	Yes
POST	/api/users/deposit	User	Deposit (test)	Yes
POST	/api/users/buy	User	Buy content	Yes
GET	/api/market/list	Public	List active items	No
GET	/api/public/trending	Public	Show trending	No
4. Frontend Integration Workflow

Frontend uses Next.js pages with TailwindCSS styling. Role-based access via `useSession()`.
Connect frontend to backend APIs via Axios or Fetch. 


Main Pages:
- /creator/dashboard → Upload & list content
- /market → Public marketplace
- /user/wallet → Deposit & purchases
- /trending → Public trending feed

5. Deployment & Testing

Deploy PostgreSQL via Render or Supabase. Use Vercel for frontend/backend hosting.
Environment variables: DATABASE_URL, CLOUDINARY, NEXTAUTH_SECRET.
Test with Postman or Thunder Client.


End-to-End Test Example:
- Creator registers → uploads → lists content
- User registers → deposits → buys content
- Market updates and displays ownership change

6. Future Upgrades

- NFT/Blockchain integration for ownership
- Real payment integration with Stripe or crypto
- Creator royalty system
- AI recommendation system
- Social engagement layer (likes/comments)

7. Progress Checklist

✅ Environment Setup
✅ Database Migration
✅ Authentication & Roles
✅ Creator Upload Routes
✅ User Deposit/Buy Routes
✅ Marketplace Routes
✅ Frontend Integration
✅ Testing & Deployment

8. Appendix

Example .env:
DATABASE_URL=postgresql://user:pass@localhost:5432/contentfun
CLOUDINARY_API_KEY=xxxx
NEXTAUTH_SECRET=xxxx


Useful Commands:
- npx prisma migrate dev
- npm run dev
- npm run build


Troubleshooting:
- CORS issues: Configure Next.js API headers
- Upload errors: Check Cloudinary credentials
- Auth errors: Verify JWT secret and callback URLs

