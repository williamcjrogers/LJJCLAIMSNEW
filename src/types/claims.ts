// Type definitions for Building Services Claims System

export interface QuantumBreakdown {
  [key: string]: number;
  total_claim_value: number;
}

export interface TimelineEvent {
  date: string;
  event: string;
  description: string;
}

export interface SubClaim {
  claim_reference: string;
  title: string;
  subfolder?: string;
  description: string;
  detailed_timeline?: TimelineEvent[];
  key_timeline_issues?: TimelineEvent[];
  quantum_breakdown: QuantumBreakdown;
  success_probability: number;
  evidence_strength: number;
  regulatory_impact?: string;
}

export interface ParentClaim {
  folder_type: 'parent';
  title: string;
  description: string;
  total_claim_value: number;
  success_probability: number;
  evidence_strength: number;
  all_documents: string[];
  sub_claims: Record<string, SubClaim>;
}

export interface ClaimTotals {
  total_claim_value: number;
  total_sub_claims: number;
  weighted_success_probability: number;
}

export interface BuildingServicesClaims {
  SVP: ParentClaim;
  BMS: ParentClaim;
  'Mechanical Building Services': ParentClaim;
  Electrical: ParentClaim;
  'Life Safety Systems': ParentClaim;
  TOTALS?: ClaimTotals;
}

// Utility types for better type safety
export type ClaimCategory =
  | 'SVP'
  | 'BMS'
  | 'Mechanical Building Services'
  | 'Electrical'
  | 'Life Safety Systems';

export type ClaimReference = `HOC-${string}-${string}`;

export interface ClaimSummary {
  category: ClaimCategory;
  subclaim_id: string;
  claim_reference: ClaimReference;
  title: string;
  total_value: number;
  success_probability: number;
  evidence_strength: number;
}

// Document types for evidence management
export type DocumentType =
  | 'technical_report'
  | 'legal_analysis'
  | 'expert_report'
  | 'progress_report'
  | 'email_chain'
  | 'quantum_analysis'
  | 'survey_report'
  | 'compliance_certificate'
  | 'specification'
  | 'drawing'
  | 'photo_evidence'
  | 'witness_statement'
  | 'adjudication_decision'
  | 'building_control_approval'
  | 'test_certificate'
  | 'ncr_report'
  | 'commissioning_report';

export interface DocumentReference {
  id: string;
  type: DocumentType;
  title: string;
  date?: string;
  author?: string;
  relevance_score?: number;
  claim_references: ClaimReference[];
}
