export type TargetCategory = 
  | 'todas'
  | 'brasil_nacional'
  | 'governanca_global'
  | 'trabalho_renda'
  | 'nacional'
  | 'global'
  | 'renda_trabalho'
  | 'direitos_inclusao'
  | 'financas_comercio';

export interface KPIItem {
  indicator: string;
  meta2028_2029: string;
  meta2030: string;
  unit?: string;
  baseline?: string;
  description?: string;
}

export interface TimelinePhase {
  period: string;
  phaseName?: string;
  actions: string;
}

export interface OperationalStage {
  step: string;
  title: string;
  description: string;
  expectedResult?: string;
  period?: string;
}

export interface StrategicPillar {
  number: number;
  title: string;
  summary: string;
  details?: string[];
  iconName?: string;
}

export interface RiskMitigation {
  risk: string;
  mitigation: string;
}

export interface ComparisonRow {
  dimension: string;
  currentModel: string;
  proposedModel: string;
}

export interface BudgetCostItem {
  item: string;
  cost: string;
}

export interface ODSTarget {
  id: string; // e.g. "10.1", "10.2", "10.a"
  numberLabel: string; // "Meta 10.1"
  officialTitle: string;
  solutionName: string; // e.g. "Programa Cresce 40+"
  subtitle: string;
  scope: 'Nacional (Brasil)' | 'Global / Multilateral' | 'Municipal & Nacional';
  category: TargetCategory[];
  badgeColor: string; // tailwind color class
  icon: string; // Lucide icon identifier

  // Content Sections
  executiveSummary: string;
  officialTargetText: string;
  officialIndicator: string;
  normativeFramework: string[];
  
  diagnosis: {
    overview: string;
    bulletPoints: { title: string; text: string }[];
    keyStats?: { value: string; label: string; source?: string }[];
  };

  pillars: StrategicPillar[];
  
  operationalMechanisms: {
    description: string;
    stages?: OperationalStage[];
    comparisons?: ComparisonRow[];
    budgetPlan?: BudgetCostItem[];
    customServicesTable?: { need: string; service: string }[];
    coreSolutions?: string[];
  };

  governance: {
    stakeholders: string[];
    governanceSummary: string;
    timeline: TimelinePhase[];
  };

  kpis: {
    table: KPIItem[];
    complementaryIndicators?: string[];
  };

  riskManagement: RiskMitigation[];
  
  caseStudy?: {
    title: string;
    description: string;
  };

  conclusion: string;
  sources: string[];
}
