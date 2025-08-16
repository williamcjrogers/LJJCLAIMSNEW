# Migration Guide

## Files to Remove (After Testing)

The following files are now redundant and can be safely removed once the new modular system is verified:

### JavaScript Files (Duplicates/Legacy)
- `app.js` - Legacy version, functionality moved to modules
- `comprehensive-app-new.js` - Duplicate version
- `enhanced-app-backup.js` - Backup version
- `enhanced-app.js` - Old version
- `simple-app.js` - Simplified version
- `building-services-claims-restructured.js` - Restructured version (data extracted)

### Keep These Files
- `building-services-claims.js` - Will be removed after data extraction validation
- `comprehensive-app.js` - Will be removed after module migration validation
- `styles.css` - Will be removed after CSS modularization validation

### HTML Files
- `index.html` - Old monolithic version (replaced by `public/index.html`)
- `test.html` - Test file (evaluate if still needed)

## Migration Steps

1. **Test New Structure** - Ensure all functionality works
2. **Validate Data** - Confirm all data properly extracted
3. **Check Styling** - Verify CSS modules load correctly
4. **Remove Old Files** - Clean up redundant files
5. **Update Documentation** - Final documentation updates

## Rollback Plan

If issues arise, the old files can be temporarily restored:
1. Copy `index.html` to `public/index.html.bak`
2. Restore original `index.html`
3. Re-enable old script tags

## Testing Checklist

- [ ] Application loads without errors
- [ ] All navigation works
- [ ] Dashboard displays correctly
- [ ] Data loads properly
- [ ] Styles render correctly
- [ ] Mobile responsiveness works
- [ ] Search functionality works
- [ ] Charts and widgets function
