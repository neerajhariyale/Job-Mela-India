# 🚀 Deployment Guide - Job Portal Backend

## ✅ Server Configuration Updated
- ✅ Dynamic PORT configuration (uses `process.env.PORT` for cloud deployment)
- ✅ Added start script in package.json
- ✅ Created Procfile for Heroku deployment

## 🌐 Deployment Options

### **Option 1: Heroku (Recommended)**
```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create Heroku app
heroku create your-job-portal-backend

# Set environment variables
heroku config:set MONGO_URI="your_mongodb_connection_string"
heroku config:set SMTP_EMAIL="your_email@gmail.com"
heroku config:set SMTP_PASS="your_app_password"

# Deploy
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

### **Option 2: Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy
railway deploy
```

### **Option 3: Render**
1. Connect your GitHub repository
2. Set environment variables in dashboard
3. Deploy automatically

### **Option 4: Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### **Option 5: DigitalOcean App Platform**
1. Connect GitHub repository
2. Configure environment variables
3. Deploy

## 🔧 Environment Variables Required
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
SMTP_EMAIL=your_email@gmail.com
SMTP_PASS=your_app_password
PORT=5000
```

## 📝 Notes
- Server now uses `process.env.PORT` for dynamic port assignment
- No localhost dependency - ready for cloud deployment
- All routes will be available at: `https://your-domain.com/api/auth` and `https://your-domain.com/api/jobs`

