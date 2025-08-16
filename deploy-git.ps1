# Git deployment script
Write-Host "Starting Git deployment..." -ForegroundColor Green

# Add all changes
Write-Host "`nAdding all changes..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "`nCommitting changes..." -ForegroundColor Yellow
git commit -m "Fix vercel.json configuration and add evidence viewer integration"

# Push to GitHub
Write-Host "`nPushing to GitHub (master branch)..." -ForegroundColor Yellow
git push origin master

Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://vercel.com" -ForegroundColor White
Write-Host "2. Your project should auto-deploy from GitHub" -ForegroundColor White
Write-Host "3. Check deployment status in Vercel dashboard" -ForegroundColor White