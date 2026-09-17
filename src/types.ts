export type EquipmentCategory = 'clothing' | 'backpack' | 'camping' | 'cooking' | 'navigation' | 'safety';

export interface CategoryInfo {
  id: EquipmentCategory;
  name: string;
  enName: string;
  tagline: string;
  iconName: string;
}

export interface EquipmentDatabaseItem {
  id: string;
  system: EquipmentCategory;
  systemName: string;
  order: string;
  name: string;
  purpose: string;
  selection: string;
  tips: string;
  commonMistakes: string;
}

export interface TeachingCourseUnit {
  id: string;
  number: string;
  title: string;
  functionIntro: string;
  selectionPrinciple: string;
  usageTips: string;
  commonMistakes: string;
  leaderTip: string;
}

export interface ChecklistItem {
  id: string;
  category: EquipmentCategory;
  categoryName: string;
  title: string;
  detail: string;
}

export interface FailurePhase {
  step: string;
  title: string;
  description: string;
}
