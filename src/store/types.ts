export interface Api {
  key: string;
  label: string;
  type: 'MIN' | 'MEDIUM' | 'MAX';
}

export interface Option {
  label: string;
  value: string;
}

export type FilterType =
  | 'TEXT'
  | 'TEXTAREA'
  | 'NUMBER'
  | 'SWITCH'
  | 'META_SINGLE'
  | 'META_MULTIPLE'
  | 'DATE'
  | 'DATE_RANGE'
  | 'DATETIME'
  | 'DATETIME_RANGE';

export interface Filter {
  key: string;
  label: string;
  type: FilterType;
  options?: Option[];
  extra: string; // JSON
}

export type PreviewType =
  | 'LINE'
  | 'LINE_GROUP'
  | 'PIE'
  | 'DOT'
  | 'AREA_STACK'
  | 'COLUMN'
  | 'COLUMN_TRANSPOSE'
  | 'COLUMN_GROUP'
  | 'COLUMN_GROUP_TRANSPOSE'
  | 'COLUMN_STACK'
  | 'COLUMN_STACK_TRANSPOSE';

export interface Module {
  key: string;
  label: string;
  desc: string;
  api: Api;
  filters: Filter[];
  downloadable: boolean;
  preview: PreviewType[];
}
