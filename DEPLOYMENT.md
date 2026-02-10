# Orca BPO - Deployment Guide

This guide covers deploying the Orca BPO website to production environments.

## Pre-Deployment Checklist

- ✅ All tests passing
- ✅ Build completes without errors
- ✅ No console errors or warnings
- ✅ Responsive design tested on mobile, tablet, desktop
- ✅ All links and forms working
- ✅ Images optimized and loading correctly
- ✅ SEO meta tags verified
- ✅ Performance optimized (Lighthouse score 90+)

## Build for Production

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# Preview the production build locally
pnpm preview
```

## Deployment Options

### Option 1: Manus Platform (Recommended)
The website is built on Manus and can be published directly through the Management UI:

1. Navigate to the Management UI
2. Click the "Publish" button in the top-right corner
3. Follow the deployment wizard
4. Your site will be live at: `orca.manus.space`

**Advantages:**
- One-click deployment
- Automatic SSL/TLS certificates
- CDN included
- Custom domain support
- Built-in analytics

### Option 2: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir dist/public
```

### Option 4: Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]
```

Build and run:
```bash
docker build -t orca-bpo .
docker run -p 3000:3000 orca-bpo
```

## Environment Variables

Create a `.env.production` file with:

```env
VITE_APP_TITLE=Orca BPO
VITE_APP_LOGO=/images/orca-logo.png
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

## Post-Deployment Verification

### 1. SEO Verification
- [ ] Sitemap.xml is accessible
- [ ] Robots.txt is accessible
- [ ] Meta tags are correct
- [ ] Open Graph tags working
- [ ] Structured data valid (test with Schema.org validator)

### 2. Performance Testing
- [ ] Lighthouse score 90+
- [ ] Page load time < 3 seconds
- [ ] Core Web Vitals passing
- [ ] Images optimized and cached

### 3. Functionality Testing
- [ ] All navigation links working
- [ ] Contact form submitting
- [ ] Social media links opening correctly
- [ ] Mobile menu functioning
- [ ] Carousel working smoothly

### 4. Security Checks
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] No console errors
- [ ] No mixed content warnings

## Monitoring & Maintenance

### Analytics
- Monitor traffic through Manus Analytics Dashboard
- Track user behavior and engagement
- Monitor conversion rates

### Uptime Monitoring
- Set up uptime monitoring (e.g., UptimeRobot)
- Configure alerts for downtime
- Monitor response times

### Regular Updates
- Check for dependency updates monthly
- Update security patches immediately
- Review and update content quarterly

## Custom Domain Setup

1. Purchase domain from your registrar
2. In Manus Management UI → Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed
5. Verify domain ownership
6. Enable SSL certificate

## Troubleshooting

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Deployment Fails
- Check environment variables
- Verify build completes locally
- Check disk space on server
- Review deployment logs

### Performance Issues
- Enable caching headers
- Optimize images further
- Use CDN for static assets
- Enable gzip compression

## Support

For deployment assistance:
- Email: info@orca.com.pk
- Documentation: https://docs.manus.im
- Support: https://help.manus.im

---

**Last Updated**: February 9, 2026
