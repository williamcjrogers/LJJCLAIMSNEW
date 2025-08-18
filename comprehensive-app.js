// Comprehensive LJJ SVP Claim Management System
class ComprehensiveClaimSystem {
  constructor() {
    this.currentUser = {
      role: 'viewer',
      name: 'Public User',
      avatar: '<i class="fas fa-user"></i>',
      permissions: ['read'],
      loginTime: new Date(),
    };

    // Import building services claims from external file
    if (typeof window !== 'undefined' && window.buildingServicesClaims) {
      this.buildingServicesClaims = window.buildingServicesClaims;
    } else if (typeof buildingServicesClaims !== 'undefined') {
      this.buildingServicesClaims = buildingServicesClaims;
    }

    // Comprehensive case data with granular detail
    this.caseData = {
      case_id: 'WEL-2024-001',
      case_name: 'United Living (South) Limited v LJJ Limited - SVP Installation Failures',
      contract_value: 2400000,
      claim_value: 2400000,
      estimated_recovery: { min: 1200000, max: 1800000, percentage: '50-75%' },

      // Use the new building services claims structure
      heads_of_claim: this.buildingServicesClaims || {
        svp_systems: {
          claim_reference: 'HOC-SVP-001',
          title: 'SVP (Soil Vent Pipe) Systems',
          parent_folder: 'SVP',
          description: 'Systematic failures in SVP installation, testing, and commissioning',
          success_probability: 75,
          evidence_strength: 92,
          quantum_breakdown: {
            total_claim_value: 1670000,
          },
        },
      },

      // Detailed timeline with supporting evidence
      timeline: [
        {
          date: '2021-03-23',
          event: 'SVP Benchmark for Inspection',
          description: 'Initial benchmarking email sent establishing inspection requirements',
          category: 'contractual',
          supporting_docs: ['benchmark_email_2021.eml'],
          significance: 'Establishes contractual obligations for inspection and testing',
          impact_on_claim: 'low',
        },
        {
          date: '2021-08-02',
          event: 'First LJJ Damage Reports',
          description: 'LJJ begins reporting damaged SVP systems - early defensive position',
          category: 'critical',
          supporting_docs: ['ljj_damage_report_aug2021.pdf', 'site_photos_aug2021.zip'],
          significance: 'LJJ creates defensive timeline by reporting damage early',
          impact_on_claim: 'high_negative',
        },
        {
          date: '2021-11-04',
          event: 'Collaboration Breakdown',
          description: 'LJJ not working collaboratively - documented communication failures',
          category: 'contractual',
          supporting_docs: ['collaboration_email_chain.eml', 'project_meeting_minutes_nov2021.pdf'],
          significance: 'Evidence of LJJ failing to meet collaborative obligations',
          impact_on_claim: 'medium_positive',
        },
        {
          date: '2022-02-22',
          event: 'Additional SVP Damage Reports',
          description: 'LJJ reports further SVP system damage across multiple blocks',
          category: 'critical',
          supporting_docs: ['ljj_damage_report_feb2022.pdf', 'block_survey_feb2022.pdf'],
          significance: 'Pattern of ongoing damage reporting by LJJ',
          impact_on_claim: 'medium_negative',
        },
        {
          date: '2022-03-10',
          event: 'Quinn Ross Witnessing Request',
          description: 'Quinn Ross requests to witness SVP testing - compliance attempt',
          category: 'procedural',
          supporting_docs: ['quinn_ross_witness_request.eml', 'testing_schedule_mar2022.pdf'],
          significance: 'Shows attempt to follow proper testing procedures',
          impact_on_claim: 'low_positive',
        },
        {
          date: '2022-10-25',
          event: 'ESD Site Observation - Test Certificate Issues',
          description: 'Client tracker notes incomplete test certificates discovered',
          category: 'compliance',
          supporting_docs: ['esd_site_report_oct2022.pdf', 'incomplete_certificates_list.xlsx'],
          significance: 'Evidence of LJJ failing to provide complete documentation',
          impact_on_claim: 'medium_positive',
        },
        {
          date: '2023-08-31',
          event: 'UL Formal Notification of Leaks',
          description:
            'United Living officially notifies LJJ of leaks with investigation confirmation',
          category: 'formal_notice',
          supporting_docs: ['ul_formal_notice_aug2023.pdf', 'leak_investigation_report.pdf'],
          significance: 'Formal notice triggering contractual remedial obligations',
          impact_on_claim: 'high_positive',
        },
        {
          date: '2023-10-11',
          event: 'SVP Testing Rescheduled - Failure to Proceed',
          description: 'Witnessing rescheduled by LJJ but ultimately failed to happen',
          category: 'critical_failure',
          supporting_docs: ['testing_reschedule_emails.eml', 'witness_availability_oct2023.pdf'],
          significance: 'LJJ failure to complete required testing despite opportunity',
          impact_on_claim: 'high_positive',
        },
        {
          date: '2023-11-07',
          event: 'LJJ Confirms Testing Will Not Proceed',
          description: 'John Angel confirms witnessing will not proceed - abandonment of works',
          category: 'critical_failure',
          supporting_docs: ['john_angel_confirmation_email.eml', 'works_abandonment_notice.pdf'],
          significance: 'Clear evidence of LJJ abandoning contractual obligations',
          impact_on_claim: 'very_high_positive',
        },
        {
          date: '2024-01-15',
          event: 'K&T Block C Investigation Completed',
          description: 'Independent expert investigation identifies 28 systematic failures',
          category: 'evidence',
          supporting_docs: ['kt_block_c_report.pdf', 'kt_photographic_evidence.zip'],
          significance: 'Comprehensive technical evidence of installation failures',
          impact_on_claim: 'very_high_positive',
        },
        {
          date: '2023-08-12',
          event: 'LST BMS Integration Failure',
          description:
            'LST missed BMS integration with CPGS systems, requiring reverse engineering attempts',
          category: 'critical_failure',
          supporting_docs: ['lst_bms_integration_emails.pdf', 'ul_me_manager_assistance.pdf'],
          significance: 'Major BMS integration failure requiring UL intervention',
          impact_on_claim: 'high_positive',
        },
        {
          date: '2023-09-25',
          event: 'Quinn Ross BMS Commissioning Issues',
          description:
            'Paul Vino (Quinn Ross) identifies "a few dodgy issues" during BMS commissioning inspection',
          category: 'critical',
          supporting_docs: ['quinn_ross_bms_inspection.pdf', 'commissioning_defects_report.pdf'],
          significance: 'Independent third party validation of BMS problems',
          impact_on_claim: 'high_positive',
        },
        {
          date: '2023-10-04',
          event: 'NCR - BMS System Non-Compliance',
          description: 'Non-Conformance Report issued detailing BMS system compliance failures',
          category: 'formal_notice',
          supporting_docs: ['ncr_bms_noncompliance_04_10_23.pdf', 'bms_specification_failures.pdf'],
          significance: 'Formal documentation of BMS non-compliance issues',
          impact_on_claim: 'very_high_positive',
        },
        {
          date: '2023-12-13',
          event: 'Service/DCWS Low Pressure Issues Documented',
          description:
            'Low pressure problems in Service/DCWS systems documented, dating back to August 2021',
          category: 'evidence',
          supporting_docs: ['dcws_pressure_reports.pdf', 'service_system_analysis.pdf'],
          significance: 'Long-term systemic performance issues spanning 2+ years',
          impact_on_claim: 'high_positive',
        },
        {
          date: '2024-04-11',
          event: 'UL M&E Manager - BMS Motors Not Linked',
          description:
            'UL M&E Manager contacts K&T regarding BMS motors not being properly linked to control systems',
          category: 'critical',
          supporting_docs: ['ul_me_kt_bms_motors.pdf', 'motor_integration_failures.pdf'],
          significance: 'Ongoing BMS integration failures requiring expert intervention',
          impact_on_claim: 'high_positive',
        },
        {
          date: '2024-04-19',
          event: 'K&T BMS Completion Report',
          description:
            'K&T issues BMS completion report acknowledging outstanding integration issues',
          category: 'evidence',
          supporting_docs: [
            'kt_bms_completion_report_19_04_24.pdf',
            'outstanding_issues_summary.pdf',
          ],
          significance: 'Expert confirmation of BMS problems and completion with defects',
          impact_on_claim: 'very_high_positive',
        },
        {
          date: '2024-02-28',
          event: 'Case Resolution and Quantum Analysis',
          description: 'Comprehensive case analysis completed with quantum assessment',
          category: 'resolution',
          supporting_docs: ['final_quantum_analysis.pdf', 'case_strategy_report.pdf'],
          significance: 'Final case preparation and strategy development',
          impact_on_claim: 'strategic',
        },
      ],

      // Comprehensive document library with detailed metadata
      documents: {
        ljj_briefing_main: {
          title: 'LJJ SVP Validation Briefing - Main Document',
          type: 'briefing',
          date: '2024-08-01',
          pages: 45,
          file_location: '/documents/briefings/ljj-svp-validation-briefing.pdf',
          significance: 'primary',
          summary:
            'Comprehensive briefing document outlining the LJJ SVP claim with detailed analysis of technical failures, contractual breaches, and strategic approach. Contains timeline analysis, quantum assessment, and evidence evaluation.',
          key_sections: [
            'Executive Summary and Strategic Overview',
            'Technical Failure Analysis',
            'Contractual Timeline and Breach Assessment',
            'Evidence Strength Analysis',
            'Quantum Breakdown and Recovery Prospects',
            'Risk Assessment and Mitigation Strategies',
          ],
          cross_references: ['kt_block_c_report', 'adjudication_decision', 'quantum_analysis'],
          evidence_strength: 90,
          admissibility: 'high',
          author: 'Quantum Commercial Solutions',
          access_level: 'public',
        },

        kt_block_c_report: {
          title: 'K&T Technical Investigation Report - Block C',
          type: 'expert_report',
          date: '2024-01-15',
          pages: 128,
          file_location: '/documents/technical/kt-block-c-investigation-report.pdf',
          significance: 'critical',
          summary:
            'Independent expert investigation by K&T identifying 28 systematic SVP installation failures with comprehensive photographic evidence and technical analysis.',
          key_sections: [
            'Investigation Methodology and Scope',
            'Systematic Failure Analysis (28 identified defects)',
            'Photographic Evidence Documentation',
            'Technical Standards Assessment',
            'Root Cause Analysis',
            'Remedial Works Requirements',
          ],
          technical_findings: [
            '12 instances of leaking boss connections',
            '8 cases of missing or inadequate gasket seals',
            '5 unglued pipe fittings creating failure points',
            'Sub-standard workmanship throughout installation',
            'Non-compliance with Building Regulations Part H',
            'Evidence of systematic rather than isolated failures',
          ],
          cross_references: [
            'cci_expert_report',
            'svp_technical_drawings',
            'building_control_approval',
          ],
          evidence_strength: 95,
          admissibility: 'very_high',
          author: 'K&T Technical Services',
          access_level: 'public',
        },

        adjudication_decision: {
          title: 'Adjudication Decision and Analysis',
          type: 'legal_decision',
          date: '2023-12-20',
          pages: 67,
          file_location: '/documents/legal/adjudication-decision-analysis.pdf',
          significance: 'high',
          summary:
            'Legal analysis of adjudication proceedings and decision with implications for ongoing claim strategy and evidence requirements.',
          key_sections: [
            'Adjudication Background and Process',
            'Key Legal Findings',
            'Technical Evidence Assessment',
            'Implications for Main Claim',
            'Strategic Recommendations',
          ],
          cross_references: ['ljj_briefing_main', 'caytons_legal_analysis', 'contract_documents'],
          evidence_strength: 85,
          admissibility: 'high',
          author: 'Legal Team',
          access_level: 'public',
        },

        ljj_progress_reports: {
          title: 'LJJ Progress Reports and Communications',
          type: 'correspondence',
          date_range: '2021-03-01 to 2023-11-30',
          pages: 234,
          file_location: '/documents/correspondence/ljj-progress-reports-compilation.pdf',
          significance: 'high',
          summary:
            'Compilation of LJJ progress reports, email communications, and formal notices showing pattern of damage reporting and failure to complete works.',
          key_content: [
            'Early damage reporting timeline (Aug 2021 onwards)',
            'Communication breakdown evidence',
            'Failed testing and witnessing attempts',
            'Formal notice responses and non-compliance',
            'Work abandonment confirmation',
          ],
          cross_references: ['contract_omission_notice', 'ul_formal_notices', 'timeline_analysis'],
          evidence_strength: 80,
          admissibility: 'high',
          author: 'Various - LJJ/UL Communications',
          access_level: 'public',
        },

        rfi_email_chains: {
          title: 'RFI and Email Chain Analysis',
          type: 'correspondence',
          date_range: '2021-01-01 to 2023-12-31',
          pages: 189,
          file_location: '/documents/correspondence/rfi-email-chains-analysis.pdf',
          significance: 'medium',
          summary:
            'Analysis of Request for Information (RFI) processes and email communications showing information gaps and communication failures.',
          cross_references: ['ljj_progress_reports', 'project_documentation'],
          evidence_strength: 70,
          admissibility: 'medium',
          author: 'Project Team Communications',
          access_level: 'public',
        },

        quantum_analysis: {
          title: 'Comprehensive Quantum Analysis',
          type: 'financial_analysis',
          date: '2024-07-15',
          pages: 95,
          file_location: '/documents/financial/comprehensive-quantum-analysis.pdf',
          significance: 'critical',
          summary:
            'Detailed financial analysis of claim value, remedial costs, consequential losses, and recovery prospects with sensitivity analysis.',
          key_sections: [
            'Direct Remedial Costs Analysis',
            'Investigation and Professional Fees',
            'Delay and Consequential Loss Assessment',
            'Recovery Probability Analysis',
            'Sensitivity and Scenario Modeling',
          ],
          cross_references: ['ljj_briefing_main', 'kt_block_c_report', 'project_cost_analysis'],
          evidence_strength: 85,
          admissibility: 'high',
          author: 'Quantum Commercial Solutions',
          access_level: 'public',
        },

        caytons_legal_analysis: {
          title: 'Caytons Legal Strategy Analysis',
          type: 'legal_analysis',
          date: '2024-06-30',
          pages: 78,
          file_location: '/documents/legal/caytons-legal-strategy-analysis.pdf',
          significance: 'high',
          summary:
            'Legal strategic analysis covering contractual claims, professional negligence, and litigation risk assessment.',
          cross_references: [
            'adjudication_decision',
            'contract_documents',
            'expert_witness_statements',
          ],
          evidence_strength: 85,
          admissibility: 'high',
          author: 'Caytons Law',
          access_level: 'public',
        },

        svp_technical_drawings: {
          title: 'SVP Technical Drawings and Specifications',
          type: 'technical_drawings',
          date: '2020-11-15',
          pages: 156,
          file_location: '/documents/technical/svp-technical-drawings-specifications.pdf',
          significance: 'high',
          summary:
            'Original technical drawings, specifications, and installation requirements for SVP systems showing required standards that were not met.',
          cross_references: [
            'kt_block_c_report',
            'building_control_approval',
            'installation_standards',
          ],
          evidence_strength: 80,
          admissibility: 'high',
          author: 'Design Team',
          access_level: 'public',
        },

        cci_expert_report: {
          title: 'CCI Expert Witness Report',
          type: 'expert_report',
          date: '2024-03-10',
          pages: 89,
          file_location: '/documents/expert/cci-expert-witness-report.pdf',
          significance: 'high',
          summary:
            'Independent expert witness report corroborating K&T findings and providing professional opinion on installation failures and industry standards.',
          cross_references: [
            'kt_block_c_report',
            'industry_standards_bs8000',
            'expert_witness_statements',
          ],
          evidence_strength: 85,
          admissibility: 'very_high',
          author: 'CCI Expert Services',
          access_level: 'public',
        },

        building_control_approval: {
          title: 'Building Control Approval Documentation',
          type: 'regulatory',
          date: '2024-02-20',
          pages: 45,
          file_location: '/documents/regulatory/building-control-approval-documentation.pdf',
          significance: 'high',
          summary:
            'Building Control approval documentation showing approval was only granted after UL remediation works, validating the existence of defects.',
          cross_references: [
            'kt_block_c_report',
            'remedial_works_documentation',
            'compliance_certificates',
          ],
          evidence_strength: 80,
          admissibility: 'high',
          author: 'Building Control Authority',
          access_level: 'public',
        },
      },

      // Overall case assessment
      case_assessment: {
        overall_prospects: 70,
        estimated_recovery: {
          optimistic: {
            amount: 2200000,
            probability: 25,
            scenario: 'Full technical claim success with missing Block A&B evidence obtained',
          },
          likely: {
            amount: 1500000,
            probability: 65,
            scenario:
              'Partial settlement focusing on technical failures with timeline challenges limiting full recovery',
          },
          conservative: {
            amount: 900000,
            probability: 20,
            scenario: "Limited recovery if LJJ's defensive timeline strategy proves effective",
          },
        },
        key_strategic_considerations: [
          'Strong technical evidence from K&T investigation provides solid foundation',
          "LJJ's early damage reporting creates defensive narrative requiring counter-strategy",
          'Missing Block A&B reports represent significant evidence gap',
          'Timeline challenges may limit full recovery potential',
          'Multiple heads of claim provide various recovery routes',
        ],
        critical_success_factors: [
          'Obtaining missing K&T reports for Blocks A&B',
          "Effectively countering LJJ's defensive timeline narrative",
          'Strong expert witness coordination and testimony',
          'Comprehensive quantum justification and documentation',
        ],
        primary_risks: [
          "LJJ's early damage reporting may prove effective defensive strategy",
          'Time gap between installation and investigation creates causation challenges',
          'Missing evidence for Blocks A&B limits comprehensive argument',
          'Professional negligence claims have higher burden of proof',
        ],
      },
    };

    this.init();
  }

  init() {
    // Show main app directly
    const mainApp = document.getElementById('main-app');
    if (mainApp) {
      mainApp.style.display = 'flex';
    }

    // Update user info
    const userName = document.getElementById('user-name');
    const userRole = document.getElementById('user-role');
    const userAvatar = document.getElementById('user-avatar');

    if (userName) userName.textContent = this.currentUser.name;
    if (userRole) userRole.textContent = 'Document Viewer';
    if (userAvatar) userAvatar.innerHTML = this.currentUser.avatar;

    this.setupNavigation();
    this.hideLogoutButton();
    this.renderClaimNarratives();
    this.renderTimeline();
    this.renderEvidenceLibrary();
    this.renderAnalytics();
  }

  setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();

        // Update active nav
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Show section
        const targetSection = item.dataset.section;
        this.showSection(targetSection);

        // Update breadcrumb
        const currentSection = document.getElementById('current-section');
        if (currentSection) {
          currentSection.textContent = item.querySelector('span').textContent;
        }
      });
    });
  }

  showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
      targetSection.classList.add('active');

      if (sectionName === 'strategy') {
        this.renderClaimNarratives();
      } else if (sectionName === 'timeline') {
        this.renderTimeline();
      } else if (sectionName === 'evidence') {
        this.renderEvidenceLibrary();
      } else if (sectionName === 'analytics') {
        this.renderAnalytics();
      } else if (sectionName === 'ai-query') {
        this.initializeAIQuery();
      }
    }
  }

  hideLogoutButton() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.style.display = 'none';
    }
  }

  renderClaimNarratives() {
    const container = document.getElementById('claim-narratives');
    if (!container) return;

    let html = '';

    // Handle new parent/sub-claim structure
    Object.entries(this.caseData.heads_of_claim).forEach(([key, folderOrClaim]) => {
      if (folderOrClaim.folder_type === 'parent') {
        // Render parent folder
        html += this.renderParentFolder(key, folderOrClaim);
      } else {
        // Handle legacy individual claims (if any)
        html += this.renderLegacyClaim(key, folderOrClaim);
      }
    });

    // Add totals summary
    if (this.caseData.heads_of_claim.TOTALS) {
      html += this.renderTotalsSummary(this.caseData.heads_of_claim.TOTALS);
    }

    container.innerHTML = html;
  }

  renderParentFolder(key, parentFolder) {
    const successClass =
      parentFolder.success_probability >= 70
        ? 'high-success'
        : parentFolder.success_probability >= 50
          ? 'medium-success'
          : 'low-success';

    const html = `
            <div class="parent-folder-card ${successClass}">
                <div class="parent-folder-header">
                    <h3>${parentFolder.title}</h3>
                    <div class="parent-folder-metrics">
                        <span class="success-rate">Success: ${parentFolder.success_probability}%</span>
                        <span class="evidence-strength">Evidence: ${parentFolder.evidence_strength}%</span>
                        <span class="value-estimate">Total: £${(parentFolder.total_claim_value / 1000000).toFixed(1)}M</span>
                        <span class="sub-claims-count">${Object.keys(parentFolder.sub_claims).length} Sub-Claims</span>
                    </div>
                </div>
                
                <div class="parent-folder-content">
                    <div class="parent-description">
                        <p>${parentFolder.description}</p>
                    </div>
                    
                    <div class="all-documents-section">
                        <h5><i class="fas fa-folder-open"></i> All Documents (${parentFolder.all_documents.length})</h5>
                        <div class="documents-grid">
                            ${parentFolder.all_documents
                              .map(
                                docId => `
                                <div class="document-item" onclick="window.app.viewDocument('${docId}')">
                                    <i class="fas fa-file-alt"></i>
                                    <span>${docId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                                </div>
                            `
                              )
                              .join('')}
                        </div>
                    </div>
                    
                    <div class="sub-claims-section">
                        <h5><i class="fas fa-list"></i> Sub-Claims</h5>
                        <div class="sub-claims-grid">
                            ${Object.entries(parentFolder.sub_claims)
                              .map(
                                ([subKey, subClaim]) => `
                                <div class="sub-claim-card">
                                    <div class="sub-claim-header">
                                        <h6>${subClaim.title}</h6>
                                        <span class="sub-claim-ref">${subClaim.claim_reference}</span>
                                        ${subClaim.subfolder ? `<span class="subfolder-tag">${subClaim.subfolder}</span>` : ''}
                                    </div>
                                    <div class="sub-claim-content">
                                        <p>${subClaim.description}</p>
                                        <div class="sub-claim-metrics">
                                            <span class="success-rate">Success: ${subClaim.success_probability}%</span>
                                            <span class="evidence-strength">Evidence: ${subClaim.evidence_strength}%</span>
                                            <span class="value-estimate">£${(subClaim.quantum_breakdown.total_claim_value / 1000000).toFixed(1)}M</span>
                                        </div>
                                    </div>
                                    <div class="sub-claim-actions">
                                        <button class="btn-small" onclick="window.app.showSubClaimDetails('${key}', '${subKey}')">
                                            <i class="fas fa-eye"></i> Details
                                        </button>
                                    </div>
                                </div>
                            `
                              )
                              .join('')}
                        </div>
                    </div>
                </div>
                
                <div class="parent-folder-actions">
                    <button class="btn-primary" onclick="window.app.showParentFolderDetails('${key}')">
                        <i class="fas fa-folder-open"></i> View All Details & Documents
                    </button>
                    <button class="btn-secondary" onclick="window.app.exportParentFolderData('${key}')">
                        <i class="fas fa-download"></i> Export Folder Data
                    </button>
                </div>
            </div>
        `;

    return html;
  }

  renderLegacyClaim(key, claim) {
    // Legacy individual claim rendering (for backward compatibility)
    const successClass =
      claim.success_probability >= 70
        ? 'high-success'
        : claim.success_probability >= 50
          ? 'medium-success'
          : 'low-success';

    return `
            <div class="narrative-card ${successClass}">
                <div class="narrative-header">
                    <h4>${claim.title}</h4>
                    <div class="claim-metadata">
                        <span class="claim-ref">${claim.claim_reference}</span>
                        <span class="parent-folder">📁 ${claim.parent_folder}${claim.subfolder ? ' → ' + claim.subfolder : ''}</span>
                    </div>
                    <div class="success-metrics">
                        <span class="success-rate">Success: ${claim.success_probability}%</span>
                        <span class="evidence-strength">Evidence: ${claim.evidence_strength}%</span>
                        <span class="value-estimate">Value: £${(claim.quantum_breakdown.total_claim_value / 1000000).toFixed(1)}M</span>
                    </div>
                </div>
                
                <div class="narrative-content">
                    <div class="narrative-text">
                        <h5>Description</h5>
                        <p>${claim.description}</p>
                    </div>
                    
                    ${
                      claim.technical_issues
                        ? `
                    <div class="technical-issues">
                        <h5>Technical Issues</h5>
                        <ul>
                            ${claim.technical_issues
                              .slice(0, 3)
                              .map(issue => `<li>${issue}</li>`)
                              .join('')}
                            ${claim.technical_issues.length > 3 ? `<li><em>...and ${claim.technical_issues.length - 3} more issues</em></li>` : ''}
                        </ul>
                    </div>
                    `
                        : ''
                    }
                    
                    ${
                      claim.key_risks
                        ? `
                    <div class="risk-factors">
                        <h5>Key Risks</h5>
                        <ul>
                            ${claim.key_risks
                              .slice(0, 2)
                              .map(risk => `<li>${risk}</li>`)
                              .join('')}
                            ${claim.key_risks.length > 2 ? `<li><em>...and ${claim.key_risks.length - 2} more risks</em></li>` : ''}
                        </ul>
                    </div>
                    `
                        : ''
                    }
                    
                    ${
                      claim.regulatory_impact
                        ? `
                    <div class="regulatory-impact">
                        <h5>Regulatory Impact</h5>
                        <span class="impact-level">${claim.regulatory_impact}</span>
                    </div>
                    `
                        : ''
                    }
                    
                    ${
                      claim.detailed_timeline
                        ? `
                    <div class="claim-timeline-preview">
                        <h5>Key Timeline Events</h5>
                        <div class="timeline-events-preview">
                            ${claim.detailed_timeline
                              .slice(0, 2)
                              .map(
                                event => `
                                <div class="timeline-event-small">
                                    <span class="event-date">${event.date}</span>
                                    <span class="event-title">${event.event}</span>
                                </div>
                            `
                              )
                              .join('')}
                            ${claim.detailed_timeline.length > 2 ? `<div class="timeline-more">...${claim.detailed_timeline.length - 2} more events</div>` : ''}
                        </div>
                    </div>
                    `
                        : ''
                    }
                </div>
                
                <div class="narrative-actions">
                    <button class="btn-primary" onclick="window.app.showClaimDetails('${key}')">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="btn-secondary" onclick="window.app.showRelatedDocuments('${key}')">
                        <i class="fas fa-folder-open"></i> Related Documents
                    </button>
                </div>
            </div>
        `;
  }

  renderTotalsSummary(totals) {
    return `
            <div class="totals-summary-card">
                <div class="totals-header">
                    <h3><i class="fas fa-chart-line"></i> Case Totals Summary</h3>
                </div>
                <div class="totals-content">
                    <div class="totals-metrics">
                        <div class="total-metric">
                            <span class="metric-label">Total Claim Value</span>
                            <span class="metric-value">£${(totals.total_claim_value / 1000000).toFixed(1)}M</span>
                        </div>
                        <div class="total-metric">
                            <span class="metric-label">Total Sub-Claims</span>
                            <span class="metric-value">${totals.total_sub_claims}</span>
                        </div>
                        <div class="total-metric">
                            <span class="metric-label">Weighted Success Rate</span>
                            <span class="metric-value">${totals.weighted_success_probability}%</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  showParentFolderDetails(parentKey) {
    const parentFolder = this.caseData.heads_of_claim[parentKey];
    if (!parentFolder) return;

    this.currentModal = this.createModal(
      `Parent Folder Details: ${parentFolder.title}`,
      `
                <div class="parent-folder-details">
                    <div class="folder-overview">
                        <h4>Overview</h4>
                        <p>${parentFolder.description}</p>
                        <div class="folder-metrics">
                            <div class="metric">
                                <span class="label">Total Claim Value:</span>
                                <span class="value">£${(parentFolder.total_claim_value / 1000000).toFixed(2)}M</span>
                            </div>
                            <div class="metric">
                                <span class="label">Success Probability:</span>
                                <span class="value">${parentFolder.success_probability}%</span>
                            </div>
                            <div class="metric">
                                <span class="label">Evidence Strength:</span>
                                <span class="value">${parentFolder.evidence_strength}%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="all-documents-detailed">
                        <h4>All Documents (${parentFolder.all_documents.length})</h4>
                        <div class="documents-list">
                            ${parentFolder.all_documents
                              .map(
                                docId => `
                                <div class="document-item-detailed" onclick="window.app.viewDocument('${docId}')">
                                    <i class="fas fa-file-alt"></i>
                                    <div class="doc-info">
                                        <span class="doc-name">${docId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                                        <small class="doc-id">${docId}</small>
                                    </div>
                                    <button class="btn-small">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                </div>
                            `
                              )
                              .join('')}
                        </div>
                    </div>
                    
                    <div class="sub-claims-detailed">
                        <h4>Sub-Claims (${Object.keys(parentFolder.sub_claims).length})</h4>
                        <div class="sub-claims-list">
                            ${Object.entries(parentFolder.sub_claims)
                              .map(
                                ([subKey, subClaim]) => `
                                <div class="sub-claim-item-detailed">
                                    <div class="sub-claim-header-detailed">
                                        <h5>${subClaim.title}</h5>
                                        <div class="sub-claim-tags">
                                            <span class="claim-ref-tag">${subClaim.claim_reference}</span>
                                            ${subClaim.subfolder ? `<span class="subfolder-tag">${subClaim.subfolder}</span>` : ''}
                                        </div>
                                    </div>
                                    <div class="sub-claim-content-detailed">
                                        <p>${subClaim.description}</p>
                                        <div class="quantum-breakdown">
                                            <h6>Quantum Breakdown:</h6>
                                            <div class="breakdown-items">
                                                ${Object.entries(subClaim.quantum_breakdown)
                                                  .filter(([k]) => k !== 'total_claim_value')
                                                  .map(
                                                    ([key, value]) => `
                                                    <div class="breakdown-item">
                                                        <span class="breakdown-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</span>
                                                        <span class="breakdown-value">£${(value / 1000).toFixed(0)}K</span>
                                                    </div>
                                                `
                                                  )
                                                  .join('')}
                                                <div class="breakdown-total">
                                                    <span class="breakdown-label">Total:</span>
                                                    <span class="breakdown-value">£${(subClaim.quantum_breakdown.total_claim_value / 1000000).toFixed(2)}M</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sub-claim-actions-detailed">
                                        <button class="btn-small" onclick="window.app.showSubClaimDetails('${parentKey}', '${subKey}')">
                                            <i class="fas fa-eye"></i> Details
                                        </button>
                                    </div>
                                </div>
                            `
                              )
                              .join('')}
                        </div>
                    </div>
                </div>
            `,
      'large'
    );
  }

  showSubClaimDetails(parentKey, subClaimKey) {
    const parentFolder = this.caseData.heads_of_claim[parentKey];
    const subClaim = parentFolder?.sub_claims[subClaimKey];
    if (!subClaim) return;

    this.currentModal = this.createModal(
      `Sub-Claim Details: ${subClaim.title}`,
      `
                <div class="sub-claim-details">
                    <div class="sub-claim-overview">
                        <div class="claim-header-info">
                            <h4>${subClaim.title}</h4>
                            <div class="claim-tags">
                                <span class="claim-ref-tag">${subClaim.claim_reference}</span>
                                ${subClaim.subfolder ? `<span class="subfolder-tag">${subClaim.subfolder}</span>` : ''}
                                <span class="parent-tag">Parent: ${parentFolder.title}</span>
                            </div>
                        </div>
                        
                        <div class="claim-metrics-detailed">
                            <div class="metric">
                                <span class="label">Success Probability:</span>
                                <span class="value">${subClaim.success_probability}%</span>
                            </div>
                            <div class="metric">
                                <span class="label">Evidence Strength:</span>
                                <span class="value">${subClaim.evidence_strength}%</span>
                            </div>
                            <div class="metric">
                                <span class="label">Total Claim Value:</span>
                                <span class="value">£${(subClaim.quantum_breakdown.total_claim_value / 1000000).toFixed(2)}M</span>
                            </div>
                            ${
                              subClaim.regulatory_impact
                                ? `
                            <div class="metric">
                                <span class="label">Regulatory Impact:</span>
                                <span class="value impact-level">${subClaim.regulatory_impact}</span>
                            </div>
                            `
                                : ''
                            }
                        </div>
                    </div>
                    
                    <div class="claim-description-detailed">
                        <h5>Description</h5>
                        <p>${subClaim.description}</p>
                    </div>
                    
                    <div class="quantum-breakdown-detailed">
                        <h5>Quantum Breakdown</h5>
                        <div class="breakdown-table">
                            ${Object.entries(subClaim.quantum_breakdown)
                              .map(
                                ([key, value]) => `
                                <div class="breakdown-row ${key === 'total_claim_value' ? 'breakdown-total-row' : ''}">
                                    <span class="breakdown-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</span>
                                    <span class="breakdown-value">£${key === 'total_claim_value' ? (value / 1000000).toFixed(2) + 'M' : (value / 1000).toFixed(0) + 'K'}</span>
                                </div>
                            `
                              )
                              .join('')}
                        </div>
                    </div>
                    
                    ${
                      subClaim.detailed_timeline
                        ? `
                    <div class="detailed-timeline">
                        <h5>Detailed Timeline</h5>
                        <div class="timeline-events-detailed">
                            ${subClaim.detailed_timeline
                              .map(
                                event => `
                                <div class="timeline-event-detailed">
                                    <div class="event-date-detailed">${event.date}</div>
                                    <div class="event-content-detailed">
                                        <h6>${event.event}</h6>
                                        <p>${event.description}</p>
                                    </div>
                                </div>
                            `
                              )
                              .join('')}
                        </div>
                    </div>
                    `
                        : ''
                    }
                    
                    ${
                      subClaim.key_timeline_issues
                        ? `
                    <div class="key-issues">
                        <h5>Key Timeline Issues</h5>
                        <div class="timeline-issues-detailed">
                            ${subClaim.key_timeline_issues
                              .map(
                                issue => `
                                <div class="timeline-issue-detailed">
                                    <div class="issue-date-detailed">${issue.date}</div>
                                    <div class="issue-content-detailed">
                                        <h6>${issue.event}</h6>
                                        <p>${issue.description}</p>
                                    </div>
                                </div>
                            `
                              )
                              .join('')}
                        </div>
                    </div>
                    `
                        : ''
                    }
                </div>
            `,
      'large'
    );
  }

  exportParentFolderData(parentKey) {
    const parentFolder = this.caseData.heads_of_claim[parentKey];
    if (!parentFolder) return;

    const exportData = {
      parent_folder: parentFolder.title,
      description: parentFolder.description,
      total_claim_value: parentFolder.total_claim_value,
      success_probability: parentFolder.success_probability,
      evidence_strength: parentFolder.evidence_strength,
      all_documents: parentFolder.all_documents,
      sub_claims: parentFolder.sub_claims,
      export_timestamp: new Date().toISOString(),
      export_filename: `${parentKey}_export_${new Date().toISOString().split('T')[0]}.json`,
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = exportData.export_filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.showNotification(`Exported ${parentFolder.title} data successfully!`, 'success');
  }

  renderTimeline() {
    const container = document.getElementById('case-timeline');
    if (!container) return;

    // Sort timeline by date
    const sortedTimeline = [...this.caseData.timeline].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    let html = `
            <div class="timeline-wrapper">
                <div class="timeline-line"></div>
        `;

    sortedTimeline.forEach(event => {
      const impactClass = event.impact_on_claim.replace('_', '-');
      const categoryIcon = this.getCategoryIcon(event.category);
      const isLeft = index % 2 === 0;
      const impactLevel = this.getImpactLevel(event.impact_on_claim);

      html += `
                <div class="timeline-event ${event.category} ${impactClass} ${isLeft ? 'timeline-left' : 'timeline-right'}" data-index="${index}">
                    <div class="timeline-marker ${impactLevel}">
                        <i class="${categoryIcon}"></i>
                        <div class="timeline-pulse"></div>
                    </div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <h4>${event.event}</h4>
                            <span class="timeline-date">${this.formatDate(event.date)}</span>
                            <div class="timeline-impact-badge ${impactLevel}">
                                ${event.impact_on_claim.replace('_', ' ').toUpperCase()}
                            </div>
                        </div>
                        <div class="timeline-description">
                            <p>${event.description}</p>
                        </div>
                        <div class="timeline-significance">
                            <strong>Significance:</strong> ${event.significance}
                        </div>
                        <div class="timeline-metadata">
                            <span class="category-tag ${event.category}">${event.category.replace('_', ' ').toUpperCase()}</span>
                        </div>
                        <div class="timeline-docs">
                            <h6><i class="fas fa-paperclip"></i> Supporting Documents:</h6>
                            <div class="doc-list">
                                ${event.supporting_docs
                                  .map(
                                    doc => `
                                    <span class="doc-tag" onclick="window.app.viewDocument('${doc}')">
                                        <i class="fas fa-file-alt"></i>
                                        ${doc.replace(/_/g, ' ').replace(/\.[^/.]+$/, '')}
                                    </span>
                                `
                                  )
                                  .join('')}
                            </div>
                        </div>
                        ${
                          this.getTimelineConnections(event, sortedTimeline).length > 0
                            ? `
                        <div class="timeline-connections">
                            <h6><i class="fas fa-link"></i> Related Events:</h6>
                            <div class="connection-list">
                                ${this.getTimelineConnections(event, sortedTimeline)
                                  .map(
                                    connection => `
                                    <span class="connection-tag" onclick="window.app.scrollToTimelineEvent(${connection.index})">
                                        ${connection.event}
                                    </span>
                                `
                                  )
                                  .join('')}
                            </div>
                        </div>
                        `
                            : ''
                        }
                    </div>
                </div>
            `;
    });

    html += '</div>';
    container.innerHTML = html;

    // Add scroll animations
    this.addTimelineAnimations();
  }

  getImpactLevel(impact) {
    if (impact.includes('very_high')) return 'very-high';
    if (impact.includes('high')) return 'high';
    if (impact.includes('medium')) return 'medium';
    if (impact.includes('low')) return 'low';
    return 'neutral';
  }

  getTimelineConnections(currentEvent, timeline) {
    const connections = [];
    const keywords = ['BMS', 'SVP', 'K&T', 'LJJ', 'Quinn Ross', 'NCR'];

    keywords.forEach(keyword => {
      if (currentEvent.event.includes(keyword) || currentEvent.description.includes(keyword)) {
        timeline.forEach((event, index) => {
          if (
            event !== currentEvent &&
            (event.event.includes(keyword) || event.description.includes(keyword))
          ) {
            connections.push({
              event: event.event.substring(0, 40) + (event.event.length > 40 ? '...' : ''),
              index: index,
            });
          }
        });
      }
    });

    return connections.slice(0, 3); // Limit to 3 connections
  }

  addTimelineAnimations() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.timeline-event').forEach(event => {
      observer.observe(event);
    });
  }

  scrollToTimelineEvent(index) {
    const event = document.querySelector(`[data-index="${index}"]`);
    if (event) {
      event.scrollIntoView({ behavior: 'smooth', block: 'center' });
      event.classList.add('timeline-highlight');
      setTimeout(() => event.classList.remove('timeline-highlight'), 2000);
    }
  }

  renderEvidenceLibrary() {
    const container = document.getElementById('evidence-grid');
    if (!container) return;

    let html = '';

    Object.entries(this.caseData.documents).forEach(([key, doc]) => {
      const strengthClass =
        doc.evidence_strength >= 85
          ? 'strength-high'
          : doc.evidence_strength >= 70
            ? 'strength-medium'
            : 'strength-low';

      html += `
                <div class="evidence-card ${strengthClass}" data-doc-id="${key}">
                    <div class="evidence-header">
                        <div class="evidence-icon">
                            <i class="${this.getDocumentIcon(doc.type)}"></i>
                        </div>
                        <div class="evidence-info">
                            <h4>${doc.title}</h4>
                            <span class="evidence-type">${doc.type.replace('_', ' ').toUpperCase()}</span>
                        </div>
                        <div class="evidence-strength">
                            <span class="strength-score">${doc.evidence_strength}%</span>
                        </div>
                    </div>
                    
                    <div class="evidence-content">
                        <div class="evidence-summary">
                            <p>${doc.summary}</p>
                        </div>
                        
                        <div class="evidence-metadata">
                            <div class="meta-item">
                                <i class="fas fa-calendar"></i>
                                <span>${doc.date || doc.date_range || 'Date not specified'}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-file-alt"></i>
                                <span>${doc.pages} pages</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-user"></i>
                                <span>${doc.author}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-shield-alt"></i>
                                <span>Admissibility: ${doc.admissibility}</span>
                            </div>
                        </div>
                        
                        ${
                          doc.key_sections
                            ? `
                        <div class="key-sections">
                            <h6>Key Sections:</h6>
                            <ul>
                                ${doc.key_sections.map(section => `<li>${section}</li>`).join('')}
                            </ul>
                        </div>
                        `
                            : ''
                        }
                        
                        ${
                          doc.technical_findings
                            ? `
                        <div class="technical-findings">
                            <h6>Technical Findings:</h6>
                            <ul>
                                ${doc.technical_findings.map(finding => `<li>${finding}</li>`).join('')}
                            </ul>
                        </div>
                        `
                            : ''
                        }
                    </div>
                    
                    <div class="evidence-actions">
                        <button class="btn-primary" onclick="app.showComprehensiveDocumentModal('${key}')">
                            <i class="fas fa-eye"></i> View Document
                        </button>
                        <button class="btn-secondary" onclick="app.downloadDocument('${key}')">
                            <i class="fas fa-download"></i> Download
                        </button>
                        <button class="btn-secondary" onclick="app.analyzeDocument('${key}')">
                            <i class="fas fa-brain"></i> AI Analysis
                        </button>
                    </div>
                </div>
            `;
    });

    container.innerHTML = html;
  }

  renderAnalytics() {
    // This would be implemented to show analytics charts and data
    console.log('Analytics rendering would be implemented here');
  }

  getCategoryIcon(category) {
    const icons = {
      contractual: 'fas fa-file-contract',
      critical: 'fas fa-exclamation-triangle',
      procedural: 'fas fa-cogs',
      compliance: 'fas fa-check-circle',
      formal_notice: 'fas fa-bell',
      critical_failure: 'fas fa-times-circle',
      evidence: 'fas fa-search',
      resolution: 'fas fa-gavel',
      strategic: 'fas fa-chess',
    };
    return icons[category] || 'fas fa-circle';
  }

  getDocumentIcon(type) {
    const icons = {
      briefing: 'fas fa-file-alt',
      expert_report: 'fas fa-microscope',
      legal_decision: 'fas fa-gavel',
      correspondence: 'fas fa-envelope',
      financial_analysis: 'fas fa-chart-line',
      legal_analysis: 'fas fa-balance-scale',
      technical_drawings: 'fas fa-drafting-compass',
      regulatory: 'fas fa-stamp',
    };
    return icons[type] || 'fas fa-file';
  }

  formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  showClaimDetails(claimKey) {
    const claim = this.caseData.heads_of_claim[claimKey];
    if (!claim) return;

    const modalHTML = `
            <div id="claim-details-modal" class="modal-overlay">
                <div class="modal-container large">
                    <div class="modal-header">
                        <h3>${claim.title}</h3>
                        <button class="modal-close" onclick="app.closeModal('claim-details-modal')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-content">
                        <div class="claim-details-content">
                            <div class="detail-section">
                                <h4>Claim Reference</h4>
                                <p>${claim.claim_reference}</p>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Folder Structure</h4>
                                <p>📁 ${claim.parent_folder}${claim.subfolder ? ' → ' + claim.subfolder : ''}</p>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Description</h4>
                                <p>${claim.description}</p>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Success Assessment</h4>
                                <div class="success-bars">
                                    <div class="success-bar">
                                        <span>Success Probability</span>
                                        <div class="bar-container">
                                            <div class="bar-fill" style="width: ${claim.success_probability}%"></div>
                                        </div>
                                        <span>${claim.success_probability}%</span>
                                    </div>
                                    <div class="success-bar">
                                        <span>Evidence Strength</span>
                                        <div class="bar-container">
                                            <div class="bar-fill" style="width: ${claim.evidence_strength}%"></div>
                                        </div>
                                        <span>${claim.evidence_strength}%</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Quantum Breakdown</h4>
                                <div class="quantum-table">
                                    ${Object.entries(claim.quantum_breakdown)
                                      .map(
                                        ([key, value]) => `
                                        <div class="quantum-row">
                                            <span class="quantum-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                                            <span class="quantum-value">£${typeof value === 'number' ? value.toLocaleString() : value}</span>
                                        </div>
                                    `
                                      )
                                      .join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  showRelatedDocuments(claimKey) {
    const claim = this.caseData.heads_of_claim[claimKey];
    if (!claim || !claim.related_documents) return;

    const modalHTML = `
            <div id="related-docs-modal" class="modal-overlay">
                <div class="modal-container">
                    <div class="modal-header">
                        <h3>Related Documents - ${claim.title}</h3>
                        <button class="modal-close" onclick="app.closeModal('related-docs-modal')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-content">
                        <div class="related-docs-list">
                            ${claim.related_documents
                              .map(docId => {
                                const doc = this.caseData.documents[docId];
                                return doc
                                  ? `
                                    <div class="related-doc-item" onclick="app.showComprehensiveDocumentModal('${docId}')">
                                        <div class="doc-icon">
                                            <i class="${this.getDocumentIcon(doc.type)}"></i>
                                        </div>
                                        <div class="doc-info">
                                            <h5>${doc.title}</h5>
                                            <p>${doc.type.replace('_', ' ').toUpperCase()}</p>
                                            <span class="evidence-strength">Evidence: ${doc.evidence_strength}%</span>
                                        </div>
                                    </div>
                                `
                                  : `
                                    <div class="related-doc-item unavailable">
                                        <div class="doc-icon">
                                            <i class="fas fa-file-times"></i>
                                        </div>
                                        <div class="doc-info">
                                            <h5>${docId}</h5>
                                            <p>Document not found in library</p>
                                        </div>
                                    </div>
                                `;
                              })
                              .join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  showComprehensiveDocumentModal(docId) {
    const doc = this.caseData.documents[docId];
    if (!doc) {
      alert(`Document not found: ${docId}`);
      return;
    }

    const modalHTML = `
            <div id="comprehensive-document-modal" class="modal-overlay document-modal">
                <div class="comprehensive-document-viewer">
                    <div class="document-header">
                        <div class="document-title">
                            <h2>${doc.title}</h2>
                            <span class="document-type">${doc.type.replace('_', ' ').toUpperCase()}</span>
                        </div>
                        <div class="document-controls">
                            <button class="btn-icon" onclick="app.downloadDocument('${docId}')" title="Download">
                                <i class="fas fa-download"></i>
                            </button>
                            <button class="btn-icon" onclick="app.analyzeDocument('${docId}')" title="AI Analysis">
                                <i class="fas fa-brain"></i>
                            </button>
                            <button class="btn-icon" onclick="app.closeModal('comprehensive-document-modal')" title="Close">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="document-body">
                        <div class="document-preview">
                            <div class="document-info-panel">
                                <div class="info-section">
                                    <h4>Document Information</h4>
                                    <div class="info-grid">
                                        <div class="info-item">
                                            <label>Author:</label>
                                            <span>${doc.author}</span>
                                        </div>
                                        <div class="info-item">
                                            <label>Date:</label>
                                            <span>${doc.date || doc.date_range || 'Not specified'}</span>
                                        </div>
                                        <div class="info-item">
                                            <label>Pages:</label>
                                            <span>${doc.pages}</span>
                                        </div>
                                        <div class="info-item">
                                            <label>File Location:</label>
                                            <span class="file-location">${doc.file_location}</span>
                                        </div>
                                        <div class="info-item">
                                            <label>Evidence Strength:</label>
                                            <span class="strength-badge strength-${doc.evidence_strength >= 85 ? 'high' : doc.evidence_strength >= 70 ? 'medium' : 'low'}">
                                                ${doc.evidence_strength}%
                                            </span>
                                        </div>
                                        <div class="info-item">
                                            <label>Admissibility:</label>
                                            <span class="admissibility-badge admissibility-${doc.admissibility.replace(' ', '-')}">${doc.admissibility}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="info-section">
                                    <h4>Summary</h4>
                                    <p>${doc.summary}</p>
                                </div>
                                
                                ${
                                  doc.key_sections
                                    ? `
                                <div class="info-section">
                                    <h4>Key Sections</h4>
                                    <ul class="key-sections-list">
                                        ${doc.key_sections.map(section => `<li>${section}</li>`).join('')}
                                    </ul>
                                </div>
                                `
                                    : ''
                                }
                                
                                ${
                                  doc.technical_findings
                                    ? `
                                <div class="info-section">
                                    <h4>Technical Findings</h4>
                                    <ul class="technical-findings-list">
                                        ${doc.technical_findings.map(finding => `<li>${finding}</li>`).join('')}
                                    </ul>
                                </div>
                                `
                                    : ''
                                }
                                
                                ${
                                  doc.key_content
                                    ? `
                                <div class="info-section">
                                    <h4>Key Content</h4>
                                    <ul class="key-content-list">
                                        ${doc.key_content.map(content => `<li>${content}</li>`).join('')}
                                    </ul>
                                </div>
                                `
                                    : ''
                                }
                                
                                ${
                                  doc.cross_references && doc.cross_references.length > 0
                                    ? `
                                <div class="info-section">
                                    <h4>Cross References</h4>
                                    <div class="cross-references">
                                        ${doc.cross_references
                                          .map(
                                            ref => `
                                            <button class="cross-ref-btn" onclick="app.showComprehensiveDocumentModal('${ref}')">
                                                <i class="fas fa-link"></i>
                                                ${ref.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                            </button>
                                        `
                                          )
                                          .join('')}
                                    </div>
                                </div>
                                `
                                    : ''
                                }
                            </div>
                            
                            <div class="document-viewer-panel">
                                <div class="viewer-placeholder">
                                    <div class="placeholder-content">
                                        <i class="fas fa-file-pdf fa-4x"></i>
                                        <h3>Document Preview</h3>
                                        <p>File: ${doc.file_location}</p>
                                        <p>Click Download to access the full document</p>
                                        <button class="btn-primary" onclick="app.downloadDocument('${docId}')">
                                            <i class="fas fa-download"></i>
                                            Download Document
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.remove();
    }
  }

  viewDocument(docId) {
    this.showComprehensiveDocumentModal(docId);
  }

  downloadDocument(docId) {
    const doc = this.caseData.documents[docId];
    if (doc) {
      alert(`Downloading: ${doc.title}\nLocation: ${doc.file_location}`);
    } else {
      alert(`Document not found: ${docId}`);
    }
  }

  analyzeDocument(docId) {
    const doc = this.caseData.documents[docId];
    if (doc) {
      alert(
        `AI Analysis for: ${doc.title}\n\nThis feature would provide:\n• Document summarization\n• Key finding extraction\n• Cross-reference analysis\n• Evidence strength assessment`
      );
    } else {
      alert(`Document not found: ${docId}`);
    }
  }

  shareDocument(docId) {
    const doc = this.caseData.documents[docId];
    if (doc) {
      alert(
        `Share functionality for: ${doc.title}\n\nThis would allow sharing with team members and external parties.`
      );
    }
  }

  // AI Query System with RAG Retrieval
  initializeAIQuery() {
    // Setup AI query interface
    const input = document.getElementById('ai-query-input');
    if (input) {
      input.addEventListener('keypress', e => {
        if (e.key === 'Enter' && e.ctrlKey) {
          this.submitAIQuery();
        }
      });
    }

    // Initialize semantic search index
    this.buildSemanticIndex();
  }

  buildSemanticIndex() {
    // Build searchable index from all case data
    this.searchIndex = {
      claims: [],
      documents: [],
      timeline: [],
      keywords: new Map(),
    };

    // Index claims
    Object.entries(this.caseData.heads_of_claim).forEach(([key, claim]) => {
      const claimData = {
        id: key,
        type: 'claim',
        title: claim.title,
        content: claim.description,
        technical_issues: claim.technical_issues || [],
        quantum: claim.quantum_breakdown,
        success_probability: claim.success_probability,
        evidence_strength: claim.evidence_strength,
        keywords: this.extractKeywords(claim.title + ' ' + claim.description),
      };
      this.searchIndex.claims.push(claimData);
      this.addToKeywordIndex(claimData);
    });

    // Index documents
    Object.entries(this.caseData.documents).forEach(([key, doc]) => {
      const docData = {
        id: key,
        type: 'document',
        title: doc.title,
        content: doc.summary,
        author: doc.author,
        date: doc.date,
        evidence_strength: doc.evidence_strength,
        keywords: this.extractKeywords(doc.title + ' ' + doc.summary),
      };
      this.searchIndex.documents.push(docData);
      this.addToKeywordIndex(docData);
    });

    // Index timeline
    this.caseData.timeline.forEach((event, index) => {
      const eventData = {
        id: index,
        type: 'timeline',
        title: event.event,
        content: event.description + ' ' + event.significance,
        date: event.date,
        impact: event.impact_on_claim,
        category: event.category,
        keywords: this.extractKeywords(event.event + ' ' + event.description),
      };
      this.searchIndex.timeline.push(eventData);
      this.addToKeywordIndex(eventData);
    });
  }

  extractKeywords(text) {
    const commonWords = [
      'the',
      'and',
      'or',
      'but',
      'in',
      'on',
      'at',
      'to',
      'for',
      'of',
      'with',
      'by',
      'is',
      'are',
      'was',
      'were',
      'been',
      'have',
      'has',
      'had',
      'do',
      'does',
      'did',
      'will',
      'would',
      'could',
      'should',
      'may',
      'might',
      'must',
      'shall',
      'can',
      'a',
      'an',
    ];
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2 && !commonWords.includes(word))
      .filter((word, index, arr) => arr.indexOf(word) === index);
  }

  addToKeywordIndex(item) {
    item.keywords.forEach(keyword => {
      if (!this.searchIndex.keywords.has(keyword)) {
        this.searchIndex.keywords.set(keyword, []);
      }
      this.searchIndex.keywords.get(keyword).push(item);
    });
  }

  submitAIQuery() {
    const input = document.getElementById('ai-query-input');
    const query = input.value.trim();

    if (!query) {
      this.showQueryError('Please enter a question or search term');
      return;
    }

    this.showQueryLoading();

    // Simulate AI processing delay
    setTimeout(() => {
      const results = this.performSemanticSearch(query);
      this.displayQueryResults(query, results);
    }, 1500);
  }

  performSemanticSearch(query) {
    const queryKeywords = this.extractKeywords(query);
    const results = {
      directMatches: [],
      relatedItems: [],
      calculations: null,
      insights: [],
    };

    // Direct keyword matching
    queryKeywords.forEach(keyword => {
      if (this.searchIndex.keywords.has(keyword)) {
        results.directMatches.push(...this.searchIndex.keywords.get(keyword));
      }
    });

    // Handle specific query types
    if (
      query.toLowerCase().includes('total') &&
      (query.toLowerCase().includes('claim') || query.toLowerCase().includes('value'))
    ) {
      results.calculations = this.calculateTotalClaims(query);
    }

    if (query.toLowerCase().includes('timeline') || query.toLowerCase().includes('chronological')) {
      results.relatedItems = this.searchIndex.timeline
        .filter(item => queryKeywords.some(keyword => item.keywords.includes(keyword)))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    // Pattern matching for specific entities
    const entities = ['BMS', 'SVP', 'K&T', 'NCR', 'Quinn Ross', 'LJJ', 'DCWS', 'MVHR', 'HIU'];
    entities.forEach(entity => {
      if (query.toUpperCase().includes(entity)) {
        const entityMatches = [
          ...this.searchIndex.claims,
          ...this.searchIndex.documents,
          ...this.searchIndex.timeline,
        ].filter(
          item =>
            item.title.toUpperCase().includes(entity) || item.content.toUpperCase().includes(entity)
        );
        results.relatedItems.push(...entityMatches);
      }
    });

    // Remove duplicates and limit results
    results.directMatches = this.removeDuplicates(results.directMatches).slice(0, 10);
    results.relatedItems = this.removeDuplicates(results.relatedItems).slice(0, 15);

    // Generate AI insights
    results.insights = this.generateInsights(query, results);

    return results;
  }

  removeDuplicates(items) {
    const seen = new Set();
    return items.filter(item => {
      const key = `${item.type}-${item.id}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  calculateTotalClaims() {
    let totalValue = 0;
    let claimsCount = 0;
    const breakdowns = [];

    Object.entries(this.caseData.heads_of_claim).forEach(([, claim]) => {
      if (claim.quantum_breakdown && claim.quantum_breakdown.total_claim_value) {
        totalValue += claim.quantum_breakdown.total_claim_value;
        claimsCount++;
        breakdowns.push({
          title: claim.title,
          value: claim.quantum_breakdown.total_claim_value,
          success_probability: claim.success_probability,
        });
      }
    });

    const weightedValue = breakdowns.reduce(
      (sum, claim) => sum + claim.value * (claim.success_probability / 100),
      0
    );

    return {
      total_value: totalValue,
      weighted_value: weightedValue,
      claims_count: claimsCount,
      breakdowns: breakdowns.sort((a, b) => b.value - a.value),
    };
  }

  generateInsights(query, results) {
    const insights = [];

    if (results.directMatches.length === 0 && results.relatedItems.length === 0) {
      insights.push({
        type: 'no_results',
        text: 'No direct matches found. Try using different keywords like "BMS", "SVP", "technical failures", or "timeline".',
      });
    }

    if (results.calculations) {
      insights.push({
        type: 'calculation',
        text: `Found ${results.calculations.claims_count} building service claims with a total value of £${(results.calculations.total_value / 1000000).toFixed(1)}M. Risk-adjusted value is £${(results.calculations.weighted_value / 1000000).toFixed(1)}M based on success probabilities.`,
      });
    }

    const highImpactEvents = results.relatedItems.filter(
      item => item.type === 'timeline' && item.impact && item.impact.includes('high')
    ).length;

    if (highImpactEvents > 0) {
      insights.push({
        type: 'impact',
        text: `${highImpactEvents} high-impact timeline events found related to your query.`,
      });
    }

    const strongEvidence = results.relatedItems.filter(
      item => item.evidence_strength && item.evidence_strength >= 85
    ).length;

    if (strongEvidence > 0) {
      insights.push({
        type: 'evidence',
        text: `${strongEvidence} items with strong evidence (85%+ strength) are relevant to your query.`,
      });
    }

    return insights;
  }

  displayQueryResults(query, results) {
    const container = document.getElementById('ai-query-results');
    container.style.display = 'block';

    let html = `
            <div class="query-results-header">
                <h3><i class="fas fa-search"></i> Results for: "${query}"</h3>
                <div class="results-summary">
                    <span class="result-count">${results.directMatches.length + results.relatedItems.length} results found</span>
                </div>
            </div>
        `;

    // AI Insights
    if (results.insights.length > 0) {
      html += `
                <div class="ai-insights-section">
                    <h4><i class="fas fa-lightbulb"></i> AI Insights</h4>
                    ${results.insights
                      .map(
                        insight => `
                        <div class="ai-insight ${insight.type}">
                            <p>${insight.text}</p>
                        </div>
                    `
                      )
                      .join('')}
                </div>
            `;
    }

    // Calculations
    if (results.calculations) {
      html += `
                <div class="calculations-section">
                    <h4><i class="fas fa-calculator"></i> Financial Analysis</h4>
                    <div class="calculation-summary">
                        <div class="calc-item">
                            <label>Total Claim Value:</label>
                            <span class="calc-value">£${(results.calculations.total_value / 1000000).toFixed(1)}M</span>
                        </div>
                        <div class="calc-item">
                            <label>Risk-Adjusted Value:</label>
                            <span class="calc-value">£${(results.calculations.weighted_value / 1000000).toFixed(1)}M</span>
                        </div>
                        <div class="calc-item">
                            <label>Number of Claims:</label>
                            <span class="calc-value">${results.calculations.claims_count}</span>
                        </div>
                    </div>
                    <div class="calculation-breakdown">
                        <h5>Breakdown by Claim:</h5>
                        ${results.calculations.breakdowns
                          .slice(0, 5)
                          .map(
                            claim => `
                            <div class="breakdown-item">
                                <span class="breakdown-title">${claim.title}</span>
                                <span class="breakdown-value">£${(claim.value / 1000000).toFixed(1)}M</span>
                                <span class="breakdown-probability">${claim.success_probability}% success</span>
                            </div>
                        `
                          )
                          .join('')}
                    </div>
                </div>
            `;
    }

    // Direct matches
    if (results.directMatches.length > 0) {
      html += `
                <div class="direct-matches-section">
                    <h4><i class="fas fa-bullseye"></i> Direct Matches</h4>
                    <div class="results-grid">
                        ${results.directMatches.map(item => this.renderSearchResult(item)).join('')}
                    </div>
                </div>
            `;
    }

    // Related items
    if (results.relatedItems.length > 0) {
      html += `
                <div class="related-items-section">
                    <h4><i class="fas fa-link"></i> Related Information</h4>
                    <div class="results-grid">
                        ${results.relatedItems
                          .slice(0, 10)
                          .map(item => this.renderSearchResult(item))
                          .join('')}
                    </div>
                </div>
            `;
    }

    container.innerHTML = html;
  }

  renderSearchResult(item) {
    const typeIcon = {
      claim: 'fas fa-gavel',
      document: 'fas fa-file-alt',
      timeline: 'fas fa-clock',
    };

    return `
            <div class="search-result-item ${item.type}">
                <div class="result-header">
                    <i class="${typeIcon[item.type]}"></i>
                    <h5>${item.title}</h5>
                    ${item.evidence_strength ? `<span class="evidence-badge">${item.evidence_strength}%</span>` : ''}
                </div>
                <div class="result-content">
                    <p>${item.content.substring(0, 150)}${item.content.length > 150 ? '...' : ''}</p>
                    ${item.date ? `<span class="result-date">${this.formatDate(item.date)}</span>` : ''}
                    ${item.quantum && item.quantum.total_claim_value ? `<span class="result-value">£${(item.quantum.total_claim_value / 1000000).toFixed(1)}M</span>` : ''}
                </div>
                <div class="result-actions">
                    <button class="btn-small" onclick="window.app.viewSearchResultDetail('${item.type}', '${item.id}')">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        `;
  }

  viewSearchResultDetail(type, id) {
    if (type === 'claim') {
      this.showClaimDetails(id);
    } else if (type === 'document') {
      this.showComprehensiveDocumentModal(id);
    } else if (type === 'timeline') {
      this.showSection('timeline');
      setTimeout(() => this.scrollToTimelineEvent(parseInt(id)), 500);
    }
  }

  showQueryLoading() {
    const container = document.getElementById('ai-query-results');
    container.style.display = 'block';
    container.innerHTML = `
            <div class="query-loading">
                <div class="loading-spinner"></div>
                <p>Analyzing case data and retrieving relevant information...</p>
            </div>
        `;
  }

  showQueryError(message) {
    const container = document.getElementById('ai-query-results');
    container.style.display = 'block';
    container.innerHTML = `
            <div class="query-error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>${message}</p>
            </div>
        `;
  }

  useQuerySuggestion(suggestion) {
    const input = document.getElementById('ai-query-input');
    input.value = suggestion;
    this.submitAIQuery();
  }

  clearQuery() {
    const input = document.getElementById('ai-query-input');
    const results = document.getElementById('ai-query-results');
    input.value = '';
    results.style.display = 'none';
    input.focus();
  }
}

// Make class available globally for initialization from HTML
window.ComprehensiveClaimSystem = ComprehensiveClaimSystem;
