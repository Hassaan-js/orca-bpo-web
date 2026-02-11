# Vercel Deployment Fix Guide

This guide helps resolve the Vercel deployment rollback issue for Orca BPO website.

## Problem Analysis

The deployment was rolled back with no specific error message. This typically indicates:
1. Build process failed silently
2. Environment variables missing
3. Incompatible configuration
4. Memory or timeout issues

## Solution Steps

### 1. Verify Local Build Works

```bash
cd /home/ubuntu/orca-bpo-web
pnpm install
pnpm build
```

✅ **Status**: Build completes successfully locally

### 2. Configuration Files Added

The following files have been added to fix Vercel deployment:

#### `vercel.json`
- Specifies build command: `pnpm build`
- Sets output directory: `dist/public`
- Configures rewrites for SPA routing
- Adds security headers
- Enables caching for static assets

#### `.vercelignore`
- Excludes unnecessary files from deployment
- Reduces deployment size and time
- Prevents build cache pollution

### 3. Deployment Steps

#### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### Option B: GitHub Integration

1. Push changes to GitHub:
```bash
git add vercel.json .vercelignore
git commit -m "Add Vercel deployment configuration"
git push origin main
```

2. In Vercel Dashboard:
   - Connect GitHub repository
   - Select `orca-bpo-web` project
   - Vercel will auto-detect the configuration
   - Click "Deploy"

### 4. Verify Deployment

After deployment, check:

- ✅ Website loads at `https://orca-bpo-xxxxxx.vercel.app`
- ✅ All pages accessible
- ✅ Images loading correctly
- ✅ Navigation working
- ✅ Contact form functional
- ✅ Mobile responsive

### 5. Environment Variables (if needed)

In Vercel Dashboard → Settings → Environment Variables:

```
VITE_APP_TITLE=Orca BPO
VITE_APP_LOGO=/images/orca-logo.png
NODE_ENV=production
```

### 6. Custom Domain Setup

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain: `www.orcabposervices.com`
3. Update DNS records at your domain registrar
4. Vercel will auto-provision SSL certificate

## Common Issues & Solutions

### Issue: "Build failed" with no details

**Solution:**
```bash
# Check build locally
pnpm build

# Check for TypeScript errors
pnpm check

# Clear cache and rebuild
rm -rf node_modules .pnpm-store dist
pnpm install
pnpm build
```

### Issue: "Cannot find module" errors

**Solution:**
- Ensure all dependencies are in `package.json`
- Run `pnpm install` locally
- Verify `pnpm-lock.yaml` is committed to git

### Issue: "Memory exceeded" or "Build timeout"

**Solution:**
- Reduce bundle size by code-splitting
- Optimize images
- Remove unused dependencies

### Issue: "Static files not found"

**Solution:**
- Verify `vercel.json` has correct `outputDirectory`
- Check that files exist in `dist/public`
- Ensure `public/` directory files are included

## Rollback Previous Deployment

If needed, rollback to a previous working version:

1. In Vercel Dashboard → Deployments
2. Find the previous successful deployment
3. Click "..." → "Promote to Production"

## Performance Optimization

### Enable Caching

The `vercel.json` already includes caching for:
- Static assets (1 year cache)
- Images (long-term cache)

### Monitor Performance

1. Vercel Dashboard → Analytics
2. Check:
   - Page load times
   - Core Web Vitals
   - Error rates

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **GitHub Issues**: Check project repository
- **Support**: info@orca.com.pk

## Deployment Checklist

- [ ] `vercel.json` committed to git
- [ ] `.vercelignore` committed to git
- [ ] Local build passes: `pnpm build`
- [ ] No TypeScript errors: `pnpm check`
- [ ] All dependencies installed: `pnpm install`
- [ ] Changes pushed to GitHub
- [ ] Vercel deployment triggered
- [ ] Website loads and functions correctly
- [ ] Mobile responsive verified
- [ ] Custom domain configured (optional)

---

**Last Updated**: February 10, 2026
**Status**: Ready for Vercel Deployment
