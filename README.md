# LJJ SVP Claim Management System

A comprehensive legal case management system for the LJJ SVP claim with AI-powered search and enhanced timeline visualization.

## Features

### 🚀 **Core Functionality**

- **14 Granular Building Service Claims** organized by folder structure
- **Interactive Timeline** with impact-based markers and animations
- **Comprehensive Document Library** with file previews and cross-referencing
- **AI Query System** with semantic understanding and RAG retrieval
- **Professional Enterprise UI/UX** with responsive design

### 🔍 **AI Query Capabilities**

- Natural language processing for case queries
- Semantic search across claims, documents, and timeline
- Entity recognition (BMS, SVP, K&T, NCR, Quinn Ross, LJJ, DCWS, etc.)
- Financial calculations and risk-adjusted values
- Intelligent insights and pattern recognition

### 📊 **Building Services Claims Structure**

- **SVP Folder**: SVP Systems (£1.67M)
- **BMS Folder**: BMS Systems (£950K)
- **Mechanical Building Services**: 6 subsystems (£4.8M total)
  - Chlorination & Service/DCWS (£615K)
  - Duplex 9 (£495K)
  - HIU (£750K)
  - Mechanical (£625K)
  - MVHR (£920K)
  - UFH (£1.28M)
- **Electrical**: 4 subsystems (£2.45M total)
  - General Electrical (£825K)
  - Lightning Protection (£480K)
  - Security Access Control (£595K)
  - Trace Heating (£550K)
- **Life Safety Systems**: 3 critical systems (£2.57M total)
  - Fire Alarm (£750K)
  - Generator (£845K)
  - Smoke Ventilation (£975K)

**Total Claim Value**: £12.4M+ across all building services

### 🎯 **Enhanced Timeline Features**

- **Real Case Data**: Incorporates BMS integration failures, NCR reports, Service/DCWS pressure issues
- **Visual Impact Indicators**: Color-coded markers based on claim impact
- **Smart Connections**: Related events automatically linked
- **Scroll Animations**: Events appear as you scroll with highlighting

### 💡 **Example AI Queries**

- "What are the main BMS integration failures?"
- "Show me all K&T investigation findings"
- "Timeline of NCR reports and compliance issues"
- "What is the total claim value across all building services?"
- "Show me Service/DCWS pressure problems"

## Quick Start

### 🚀 **Local Development**

1. **Clone the repository**

   ```bash
   git clone https://github.com/williamcjrogers/LJJCLAIMSNEW.git
   cd LJJCLAIMSNEW
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # Opens at http://localhost:3000
   ```

### 🏗️ **Development Commands**

```bash
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint code quality check
npm run lint:fix     # Auto-fix linting issues
npm run format       # Prettier code formatting
npm run build        # Build for production
npm run serve        # Serve on port 8000
```

### 🌐 **Deployment**

#### **Automatic GitHub Pages Deployment**

- Push to `main` branch triggers automatic deployment
- Check Actions tab for deployment status
- Live at: `https://williamcjrogers.github.io/LJJCLAIMSNEW/`

#### **Manual Deployment**

```bash
# Use the deployment script
./deploy-github.ps1

# Or deploy manually
npm run build
git add .
git commit -m "Deploy to production"
git push origin main
```

#### **Vercel Deployment**

```bash
npm run deploy
```

## File Structure

```
├── index.html                    # Main application HTML
├── comprehensive-app.js          # Main application logic with AI query system
├── building-services-claims.js   # 14 building service claims data
├── styles.css                   # Professional enterprise styling
├── vercel.json                  # Deployment configuration
└── README.md                    # This file
```

## Technical Implementation

### AI Query System

- **Semantic Indexing**: All case data indexed for intelligent retrieval
- **Keyword Extraction**: Advanced NLP for query understanding
- **Multi-Source Search**: Searches claims, documents, and timeline simultaneously
- **RAG Architecture**: Retrieval-Augmented Generation for contextual results

### Timeline Visualization

- **Chronological Sorting**: Events automatically sorted by date
- **Impact Classification**: Very High, High, Medium, Low impact levels
- **Pulse Animations**: Visual indicators for timeline markers
- **Cross-References**: Smart linking between related events

### Data Integration

- **Real Case Information**: Based on handwritten notes and actual case details
- **BMS Integration Timeline**: 7 specific events from 12/08/23 to 19/04/24
- **Service/DCWS Issues**: Pressure problems spanning Aug 2021 - Dec 2023
- **NCR Documentation**: Formal non-compliance reports with dates

## Public Access

- ✅ **No Login Required**: Fully public access without authentication
- ✅ **Mobile Responsive**: Works on all devices
- ✅ **Fast Loading**: Optimized for quick access
- ✅ **Professional UI**: Enterprise-grade design

## Support

For technical support or questions about the LJJ SVP claim management system, please contact:

**Quantum Commercial Solutions**

- Email: william@quantumcommercialsolutions.co.uk
- System: LJJ SVP Claim Management v2.0

---

_Generated with Claude Code - Comprehensive legal case management with AI capabilities_
